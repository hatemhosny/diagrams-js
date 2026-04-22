import { instance } from "@viz-js/viz";
import type { Viz } from "@viz-js/viz";
import { setDiagram } from "./context.js";
import { Cluster } from "./Cluster.js";
import type { Node } from "./Node.js";
import type { Edge } from "./Edge.js";
import * as lib from "./index.js";
import {
  THEMES,
  type DiagramOptions,
  type RenderOptions,
  type ThemeName,
  type ThemeConfig,
} from "./types.js";
import { injectIcons, type NodeIconMap, type IconData } from "./icons.js";
import { buildDiagramJSON, type DiagramJSON, fromJSON as fromJSONImpl } from "./json.js";
import { createPluginRegistry, createJSONPlugin, createSVGPlugin } from "./plugins/index.js";
import { embedDiagramData } from "./plugins/built-in/svg.js";
import type { PluginRegistry } from "./plugins/types.js";
import { HookEvent as HookEventEnum } from "./plugins/types.js";
import { computeDiff, renderDiff } from "./diff.js";

// Render function overload types for proper type inference
type RenderFunction = {
  (options?: { format?: "svg" | "dot" | "json" } & Omit<RenderOptions, "format">): Promise<string>;
  (options: { format: "png" | "jpg" } & Omit<RenderOptions, "format">): Promise<Uint8Array>;
  (options: { dataUrl: true } & RenderOptions): Promise<string>;
  (options?: RenderOptions): Promise<Uint8Array | string>;
};

const directions = ["TB", "BT", "LR", "RL"] as const;
const curveStyles = ["ortho", "curved", "spline", "polyline"] as const;

const defaultGraphAttrs: Record<string, string> = {
  pad: "0.05",
  splines: "ortho",
  nodesep: "0.15",
  ranksep: "0.20",
  fontname: "Sans-Serif",
  fontsize: "10",
};

const defaultNodeAttrs: Record<string, string> = {
  shape: "box",
  style: "rounded",
  fontname: "Sans-Serif",
  fontsize: "8",
};

const defaultEdgeAttrs: Record<string, string> = {
  arrowsize: "0.5",
  fontcolor: "#2D3436",
  fontname: "Sans-Serif",
  fontsize: "8",
};

/**
 * Represents a diagram that contains nodes, edges, and clusters.
 * Diagrams are rendered using Graphviz to produce SVG, PNG, JPG, or DOT output.
 *
 * @example
 * ```typescript
 * const diagram = Diagram("My Architecture", {
 *   direction: "TB",
 *   theme: "pastel"
 * });
 *
 * const db = diagram.add(Database("PostgreSQL"));
 * const app = diagram.add(AppServer("API"));
 * db.to(app);
 *
 * const svg = await diagram.render();
 * ```
 */
export interface Diagram {
  /** The name/title of the diagram */
  name: string;
  /** The filename used when saving the diagram */
  filename: string;
  /** Layout direction: TB (top-bottom), BT (bottom-top), LR (left-right), RL (right-left) */
  direction: "TB" | "BT" | "LR" | "RL";
  /** Edge curve style: ortho (orthogonal), curved, spline, or polyline */
  curveStyle: "ortho" | "curved" | "spline" | "polyline";
  /** Whether to automatically prefix node labels with their type */
  autolabel: boolean;
  /** Whether to create a strict graph (no duplicate edges) */
  strict: boolean;
  /** The color theme name */
  theme: ThemeName;
  /** The theme configuration */
  themeConfig: ThemeConfig;
  /** Graph-level attributes for Graphviz */
  graphAttr: Record<string, string>;
  /** Default node attributes for Graphviz */
  nodeAttr: Record<string, string>;
  /** Default edge attributes for Graphviz */
  edgeAttr: Record<string, string>;
  /** @internal Track if user explicitly set icon-related properties in nodeAttr */
  ["~userNodeAttr"]?: {
    shape?: string;
    height?: string;
    width?: string;
    fixedsize?: string;
    margin?: string;
    labelloc?: string;
    imagescale?: string;
  };

  /**
   * Add a node to this diagram
   * @param node - The node to add
   * @returns The added node
   */
  add<T extends Node>(node: T): T;

  /**
   * Create a cluster (group) of nodes
   * @param label - The label for the cluster
   * @returns The cluster object
   */
  cluster(label: string): Cluster;

  /**
   * Render the diagram to SVG or other formats
   * @param options - Rendering options
   * @returns The rendered output
   */
  render(options?: RenderOptions): Promise<string | Uint8Array>;

  /**
   * Render with icon data (for external icon injection)
   * @param iconData - Map of icon keys to data URIs
   * @param nodeMap - Node-to-icon mappings
   * @returns The rendered SVG string
   * @internal
   */
  renderWithIcons(iconData?: IconData, nodeMap?: NodeIconMap[]): Promise<string>;

  /**
   * Serialize the diagram to JSON
   * @returns JSON representation of the diagram
   */
  toJSON(): DiagramJSON;

  /**
   * Save the diagram to a file
   * @param filepath - The file path to save to (optional)
   * @param options - Rendering options
   * @returns Promise that resolves when saved
   */
  save(filepath?: string, options?: RenderOptions): Promise<void>;

  /**
   * Convert the diagram to DOT format string
   * @returns DOT format string
   */
  toString(): string;

  /**
   * Import diagram from external format
   * @param source - Source content to import (string or array of strings for grouped/clustered import)
   * @param format - Format to import from (e.g., "docker-compose", "terraform")
   * @returns Promise that resolves when import is complete
   */
  import(source: string | string[], format: string): Promise<void>;

  /**
   * Register plugins with the diagram
   * @param plugins - Array of plugin factory functions
   * @returns Promise that resolves when all plugins are registered and initialized
   * @example
   * ```typescript
   * const diagram = Diagram("My Architecture");
   * await diagram.registerPlugins([dockerComposePlugin, loggingPlugin]);
   * diagram.add(EC2("Web Server"));
   * ```
   */
  registerPlugins(plugins?: import("./plugins/types.js").DiagramsPlugin[]): Promise<void>;

  /**
   * Export diagram to external format
   * @param format - Format to export to (e.g., "docker-compose", "terraform")
   * @returns Promise resolving to exported content
   */
  export(format: string): Promise<string | Uint8Array>;

  /**
   * Attach metadata from a provider to nodes
   * @param provider - Provider name (e.g., "aws", "azure", "gcp")
   * @param nodeType - Optional node type filter (e.g., "EC2")
   * @returns Promise that resolves when metadata is attached
   */
  attachMetadata(provider: string, nodeType?: string): Promise<void>;

  /**
   * Get the plugin registry for this diagram
   * @returns The plugin registry
   */
  registry: PluginRegistry;

  /**
   * Register a node with an icon for automatic icon injection
   * @param node - The node to register
   * @param iconKey - Key to identify the icon in iconData
   * @param iconPath - Optional path to the icon file
   * @internal
   */
  ["~registerIcon"](node: Node, iconKey: string, iconPath?: string): void;

  /**
   * Track a node object for serialization
   * @param node - The node object to track
   * @internal
   */
  ["~trackNode"](node: Node): void;

  /**
   * Load icon data for injection
   * @param iconData - Map of icon keys to data URIs
   * @internal
   */
  ["~setIconData"](iconData: IconData): void;

  /**
   * Get the node icon map
   * @returns Array of node-to-icon mappings
   * @internal
   */
  ["~getNodeIconMap"](): NodeIconMap[];

  /**
   * Get the icon data
   * @returns Map of icon keys to data URIs
   * @internal
   */
  ["~getIconData"](): IconData;

  /**
   * Track a node that has an icon (for automatic icon injection)
   * @param node - The node with an icon
   * @param iconDataUrl - The data URL of the icon
   * @internal
   */
  ["~trackNodeWithIcon"](node: Node, iconDataUrl: string): void;

  /**
   * Track a pending icon load promise
   * @param promise - Promise that resolves when icon is loaded
   * @internal
   */
  ["~trackPendingIconLoad"](promise: Promise<void>): void;

  /**
   * Internal method to register a node with the diagram
   * @param nodeId - Unique identifier for the node
   * @param label - Display label for the node
   * @param attrs - Graphviz attributes for the node
   * @internal
   */
  ["~node"](nodeId: string, label: string, attrs: Record<string, unknown>): void;

  /**
   * Internal method to connect two nodes with an edge
   * @param from - Source node
   * @param to - Target node
   * @param edge - Edge object
   * @internal
   */
  ["~connect"](from: Node, to: Node, edge: Edge): void;

  /**
   * Internal method to add a subgraph/cluster
   * @param cluster - The cluster to add
   * @internal
   */
  ["~subgraph"](cluster: Cluster): void;
}

/**
 * Diagram constructor interface with static methods
 */
export interface DiagramConstructor {
  /**
   * Create a new diagram
   * @param name - The name/title of the diagram (optional, can also be set in options)
   * @param options - Configuration options for the diagram
   * @returns A new Diagram instance
   */
  (name?: string, options?: DiagramOptions): Diagram;

  /**
   * Create a Diagram from a JSON representation.
   * This is the inverse of `diagram.toJSON()`.
   *
   * @param input - The JSON object or string representing a diagram
   * @param opts - Optional configuration for deserialization
   * @returns A fully constructed Diagram with all nodes, edges, and clusters
   *
   * @example
   * ```typescript
   * import { Diagram } from "diagrams-js";
   *
   * const json = {
   *   name: "My Architecture",
   *   nodes: [
   *     { id: "web", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
   *     { id: "db", label: "Database", provider: "aws", service: "database", type: "RDS" }
   *   ],
   *   edges: [
   *     { from: "web", to: "db", label: "SQL" }
   *   ]
   * };
   *
   * const diagram = await Diagram.fromJSON(json);
   * const svg = await diagram.render(); // icons resolved automatically
   * ```
   */
  fromJSON(
    input: import("./json.js").DiagramJSON | string,
    opts?: import("./json.js").FromJSONOptions,
  ): Promise<Diagram>;

  /**
   * Create a Diagram from an SVG string with embedded diagram metadata.
   * This is the SVG counterpart to `Diagram.fromJSON()`.
   *
   * @param svg - The SVG string containing embedded diagram data
   * @returns A fully constructed Diagram with all nodes, edges, and clusters
   *
   * @example
   * ```typescript
   * import { Diagram } from "diagrams-js";
   *
   * const svg = await diagram.export("svg");
   * const restored = await Diagram.fromSVG(svg);
   * ```
   */
  fromSVG(svg: string): Promise<Diagram>;

  /**
   * Compute the diff between two diagram versions.
   * Compares nodes, edges, and clusters to identify added, removed, modified, and renamed elements.
   *
   * @param before - The original diagram (JSON or Diagram object)
   * @param after - The updated diagram (JSON or Diagram object)
   * @param opts - Options for diff computation
   * @returns Complete diff result with summary and detailed changes
   *
   * @example
   * ```typescript
   * import { Diagram } from "diagrams-js";
   *
   * const before = diagramV1.toJSON();
   * const after = diagramV2.toJSON();
   *
   * const diff = Diagram.diff(before, after);
   * console.log(diff.summary); // { added: 2, removed: 1, modified: 3, unchanged: 5, renamed: 0 }
   * ```
   */
  diff(
    before: import("./json.js").DiagramJSON | Diagram,
    after: import("./json.js").DiagramJSON | Diagram,
    opts?: import("./diff.js").DiffOptions,
  ): import("./diff.js").DiagramDiffResult;

  /**
   * Render a visual diff between two diagram versions.
   * Generates a side-by-side SVG or self-contained HTML showing changes.
   *
   * @param before - The original diagram (JSON or Diagram object)
   * @param after - The updated diagram (JSON or Diagram object)
   * @param opts - Options for rendering the diff
   * @returns Promise resolving to SVG or HTML string
   *
   * @example
   * ```typescript
   * import { Diagram } from "diagrams-js";
   * import { writeFileSync } from "fs";
   *
   * const before = diagramV1.toJSON();
   * const after = diagramV2.toJSON();
   *
   * const html = await Diagram.renderDiff(before, after, { format: "html" });
   * writeFileSync("diff.html", html);
   * ```
   */
  renderDiff(
    before: import("./json.js").DiagramJSON | Diagram,
    after: import("./json.js").DiagramJSON | Diagram,
    opts?: import("./diff.js").RenderDiffOptions,
  ): Promise<string>;
}

/**
 * Create a new diagram
 * @param name - The name/title of the diagram (optional, can also be set in options)
 * @param options - Configuration options for the diagram
 * @returns A new Diagram instance
 * @example
 * ```typescript
 * const diagram = Diagram("My System", {
 *   direction: "LR",
 *   theme: "pastel",
 *   curvestyle: "ortho"
 * });
 * ```
 */
export function Diagram(name = "", options: DiagramOptions = {}): Diagram {
  const _nodes = new Map<string, { label: string; attrs: Record<string, unknown> }>();
  const _edges: Array<{
    from: string;
    to: string;
    attrs: Record<string, string>;
  }> = [];
  const _clusters: Cluster[] = [];
  let _viz: Viz | null = null;
  const _nodeIconMap: NodeIconMap[] = [];
  const _nodeObjects = new Map<string, Node>();
  let _iconData: IconData = {};
  const _pendingIconLoads: Array<Promise<void>> = [];

  const diagramName = options.name ?? name;
  const filename =
    options.filename ?? (diagramName ? diagramName.toLowerCase().replace(/\s+/g, "_") : "diagram");

  const direction = options.direction ?? "LR";
  if (!directions.includes(direction as (typeof directions)[number])) {
    throw new Error(`"${direction}" is not a valid direction`);
  }

  const curveStyle = options.curvestyle ?? "ortho";
  if (!curveStyles.includes(curveStyle as (typeof curveStyles)[number])) {
    throw new Error(`"${curveStyle}" is not a valid curve style`);
  }

  const theme = options.theme ?? "pastel";
  if (!(theme in THEMES)) {
    throw new Error(
      `"${theme}" is not a valid theme. Choose from: ${Object.keys(THEMES).join(", ")}`,
    );
  }
  const themeConfig = THEMES[theme];

  const autolabel = options.autolabel ?? false;
  const strict = options.strict ?? false;

  // Initialize plugin registry
  const registry = options.pluginRegistry || createPluginRegistry();

  // Track if plugins have been initialized
  let pluginsInitialized = false;

  // Auto-register built-in plugins on first use
  async function ensureBuiltInPlugins(): Promise<void> {
    if (!pluginsInitialized) {
      if (!registry.getPlugin("json")) {
        await registry.register(createJSONPlugin());
      }
      if (!registry.getPlugin("svg")) {
        await registry.register(createSVGPlugin());
      }
      pluginsInitialized = true;
    }
  }

  // Initialize attributes with defaults
  const graphAttr: Record<string, string> = { ...defaultGraphAttrs };
  const nodeAttr: Record<string, string> = { ...defaultNodeAttrs };
  const edgeAttr: Record<string, string> = { ...defaultEdgeAttrs };

  // Apply theme edge color
  edgeAttr.color = themeConfig.edgecolor;

  // Set graph attributes
  graphAttr.label = diagramName;
  graphAttr.rankdir = direction;
  graphAttr.splines = curveStyle;

  // Merge user-provided attributes
  if (options.graphAttr) {
    Object.assign(graphAttr, options.graphAttr);
  }
  // Track user-set icon-related properties in nodeAttr (for icon node handling)
  const userNodeAttr = options.nodeAttr
    ? {
        shape: options.nodeAttr.shape,
        height: options.nodeAttr.height,
        width: options.nodeAttr.width,
        fixedsize: options.nodeAttr.fixedsize,
        margin: options.nodeAttr.margin,
        labelloc: options.nodeAttr.labelloc,
        imagescale: options.nodeAttr.imagescale,
      }
    : undefined;
  if (options.nodeAttr) {
    Object.assign(nodeAttr, options.nodeAttr);
  }
  if (options.edgeAttr) {
    Object.assign(edgeAttr, options.edgeAttr);
  }

  // Create the diagram object first
  const diagram: Diagram = {
    name: diagramName,
    filename,
    direction: direction as "TB" | "BT" | "LR" | "RL",
    curveStyle: curveStyle as "ortho" | "curved" | "spline" | "polyline",
    autolabel,
    strict,
    theme,
    themeConfig,
    graphAttr,
    nodeAttr,
    edgeAttr,
    ["~userNodeAttr"]: userNodeAttr,

    /**
     * Register a node with an icon for automatic icon injection
     * @param node - The node to register
     * @param iconKey - Key to identify the icon in iconData
     * @param iconPath - Optional path to the icon file
     */
    ["~registerIcon"](node: Node, iconKey: string, iconPath?: string): void {
      _nodeIconMap.push({ node, icon: iconKey, iconPath });
    },

    /**
     * Load icon data for injection
     * @param iconData - Map of icon keys to data URIs
     */
    ["~setIconData"](iconData: IconData): void {
      _iconData = iconData;
    },

    /**
     * Get the node icon map
     */
    ["~getNodeIconMap"](): NodeIconMap[] {
      return [..._nodeIconMap];
    },

    /**
     * Get the icon data
     */
    ["~getIconData"](): IconData {
      return { ..._iconData };
    },

    /**
     * Track a node that has an icon (for automatic icon injection)
     * @internal
     */
    ["~trackNodeWithIcon"](node: Node, iconDataUrl: string): void {
      // Extract icon key from the node id
      const iconKey = node.nodeId.replace(/[^a-zA-Z0-9]/g, "_");

      // Store the data URL directly - no fetching needed!
      _iconData[iconKey] = iconDataUrl;

      // Register in the nodeIconMap for injection
      _nodeIconMap.push({
        node,
        icon: iconKey,
        iconPath: iconDataUrl,
      });
    },

    /**
     * Track a pending icon load promise
     * @internal
     */
    ["~trackPendingIconLoad"](promise: Promise<void>): void {
      _pendingIconLoads.push(promise);
    },

    /**
     * Track a Node object reference for serialization
     * @internal
     */
    ["~trackNode"](node: Node): void {
      _nodeObjects.set(node.nodeId, node);

      // Fire node:create hook synchronously if plugins are initialized
      if (pluginsInitialized) {
        void registry
          .executeHooks(HookEventEnum.NODE_CREATE, { node, diagram })
          .then((result: { node?: { label?: string; nodeAttrs?: Record<string, unknown> } }) => {
            // Apply any changes from the hook back to the node
            if (result?.node) {
              // Update label if changed
              if (result.node.label && result.node.label !== node.label) {
                node.label = result.node.label;
                // Update in diagram's node storage
                const nodeData = _nodes.get(node.nodeId);
                if (nodeData) {
                  nodeData.label = result.node.label;
                }
                // Also update in cluster's node storage if the node is in a cluster
                const cluster = node.cluster;
                if (cluster) {
                  const clusterNodes = cluster.getNodes();
                  const clusterNodeData = clusterNodes.get(node.nodeId);
                  if (clusterNodeData) {
                    clusterNodeData.label = result.node.label;
                  }
                }
              }
              // Update attrs if changed via nodeAttrs
              if (result.node.nodeAttrs) {
                // Update in diagram's node storage
                const nodeData = _nodes.get(node.nodeId);
                if (nodeData) {
                  Object.assign(nodeData.attrs, result.node.nodeAttrs);
                }
                // Also update in cluster's node storage if the node is in a cluster
                const cluster = node.cluster;
                if (cluster) {
                  const clusterNodes = cluster.getNodes();
                  const clusterNodeData = clusterNodes.get(node.nodeId);
                  if (clusterNodeData) {
                    Object.assign(clusterNodeData.attrs, result.node.nodeAttrs);
                  }
                }
                // Also update the node's internal attrs via nodeAttrs setter
                Object.assign(node.nodeAttrs, result.node.nodeAttrs);
              }
            }
          })
          .catch(() => {
            // Silently ignore errors - hooks shouldn't break node creation
          });
      }
    },

    /**
     * Add a node to this diagram
     */
    add<T extends Node>(node: T): T {
      node["~register"](diagram as Diagram);
      return node;
    },

    /**
     * Internal method to register a node
     */
    ["~node"](nodeId: string, label: string, attrs: Record<string, unknown>): void {
      // Check if the node object exists and has a different label (e.g., modified by hooks)
      const nodeObj = _nodeObjects.get(nodeId);
      const currentLabel = nodeObj?.label ?? label;
      _nodes.set(nodeId, { label: currentLabel, attrs });
    },

    /**
     * Connect two nodes
     */
    ["~connect"](from: Node, to: Node, edge: Edge): void {
      // Create the edge entry that will be stored
      const edgeEntry = {
        from: from.nodeId,
        to: to.nodeId,
        attrs: edge.attrs,
      };
      _edges.push(edgeEntry);

      // Fire edge:create hook synchronously if plugins are initialized
      if (pluginsInitialized) {
        void registry
          .executeHooks(HookEventEnum.EDGE_CREATE, { edge, source: from, target: to, diagram })
          .then((result: { edge?: { edgeAttrs?: Record<string, string> } }) => {
            // Apply any changes from the hook back to the edge's internal attrs
            if (result?.edge?.edgeAttrs) {
              // Update the edge's internal _attrs object directly via edgeAttrs
              // This ensures changes are reflected when attrs getter is called
              const edgeResult = result.edge as Edge;
              if (edgeResult.edgeAttrs) {
                Object.assign(edgeResult.edgeAttrs, result.edge.edgeAttrs);
              }
              // Update the stored edge attrs by re-reading from the edge
              edgeEntry.attrs = edgeResult.attrs;
            }
          })
          .catch(() => {
            // Silently ignore errors - hooks shouldn't break edge creation
          });
      }
    },

    /**
     * Add a subgraph (cluster)
     */
    ["~subgraph"](cluster: Cluster): void {
      _clusters.push(cluster);

      // Fire cluster:create hook synchronously if plugins are initialized
      if (pluginsInitialized) {
        void registry
          .executeHooks(HookEventEnum.CLUSTER_CREATE, { cluster, diagram })
          .then((result: unknown) => {
            // Apply any changes from the hook back to the cluster
            const clusterResult = result as { cluster?: { clusterAttrs?: Record<string, string> } };
            if (clusterResult?.cluster?.clusterAttrs) {
              Object.assign(cluster.clusterAttrs, clusterResult.cluster.clusterAttrs);
            }
          })
          .catch(() => {
            // Silently ignore errors - hooks shouldn't break cluster creation
          });
      }
    },

    /**
     * Create a cluster
     * @param label - The label for the cluster
     * @returns The created cluster
     */
    cluster(label: string): Cluster {
      const cluster = Cluster(label, "LR", undefined, diagram as Diagram);
      _clusters.push(cluster);

      // Fire cluster:create hook synchronously if plugins are initialized
      if (pluginsInitialized) {
        void registry
          .executeHooks(HookEventEnum.CLUSTER_CREATE, { cluster, diagram })
          .then((result: unknown) => {
            // Apply any changes from the hook back to the cluster
            const clusterResult = result as { cluster?: { clusterAttrs?: Record<string, string> } };
            if (clusterResult?.cluster?.clusterAttrs) {
              Object.assign(cluster.clusterAttrs, clusterResult.cluster.clusterAttrs);
            }
          })
          .catch(() => {
            // Silently ignore errors - hooks shouldn't break cluster creation
          });
      }

      return cluster;
    },

    /**
     * Render the diagram
     * @param options - Optional render options including format, filename, dimensions, and scale
     */
    render: (async (options: RenderOptions = {}): Promise<Uint8Array | string> => {
      // Wait for any pending icon loads (e.g., Custom nodes with remote icons)
      await _waitForIconLoads();

      // Ensure built-in plugins are registered
      await ensureBuiltInPlugins();

      if (!_viz) {
        _viz = await instance();
      }

      const dot = _buildDot();
      const format = options.format ?? "svg";

      // Execute before:render hook
      const renderHookData = await registry.executeHooks(HookEventEnum.BEFORE_RENDER, {
        dot,
        diagram,
        format,
      });
      const finalDot = (renderHookData as { dot: string }).dot;

      // If DOT format was requested, return the raw DOT source
      if (format === "dot") {
        // If dataUrl was requested, convert DOT to data URL
        if (options.dataUrl) {
          return _toDataUrl(finalDot, "dot");
        }
        return finalDot;
      }

      // If JSON format was requested, return the serialized JSON
      if (format === "json") {
        const jsonStr = JSON.stringify(diagram.toJSON(), null, 2);
        if (options.dataUrl) {
          return _toDataUrl(jsonStr, "json");
        }
        return jsonStr;
      }

      // Always render to SVG first - Graphviz WASM doesn't support PNG output
      // We'll convert to PNG after rendering if needed
      const needsIconInjection = _nodeIconMap.length > 0;
      const shouldInjectIcons = options.injectIcons ?? needsIconInjection;
      const renderFormat = "svg";

      const result = _viz.render(finalDot, { format: renderFormat });

      if (result.status === "failure") {
        throw new Error(
          `Graphviz rendering failed: ${result.errors.map((e) => e.message).join(", ")}`,
        );
      }

      let output: string | Uint8Array = result.output as string;

      // Auto-inject icons if nodes with icons were created
      if (shouldInjectIcons) {
        // Auto-load icons and inject them
        await _autoLoadAndInjectIcons();

        if (Object.keys(_iconData).length > 0 && _nodeIconMap.length > 0) {
          output = injectIcons(output as string, _nodeIconMap, _iconData);
        }
      }

      // Embed diagram metadata into SVG by default (allows later re-import)
      if (format === "svg" && options.embedData !== false) {
        output = embedDiagramData(output as string, diagram.toJSON());
      }

      // If PNG format was requested, convert SVG to PNG
      if (format === "png") {
        output = await _svgToPng(output as string, options);
      }

      // If JPG format was requested, convert SVG to JPG
      if (format === "jpg") {
        output = await _svgToJpg(output as string, options);
      }

      // If dataUrl was requested, convert output to data URL
      if (options.dataUrl) {
        output = _toDataUrl(output, format);
      }

      // Execute after:render hook
      await registry.executeHooks(HookEventEnum.AFTER_RENDER, {
        output,
        diagram,
        format,
      });

      return output;

      /**
       * Wait for all pending icon loads to complete
       */
      async function _waitForIconLoads(): Promise<void> {
        if (_pendingIconLoads.length === 0) return;

        await Promise.all(_pendingIconLoads);
        _pendingIconLoads.length = 0; // Clear after waiting
      }

      /**
       * Automatically load and inject icons for all tracked nodes
       * (Icons are already loaded via esbuild dataurl loader)
       */
      async function _autoLoadAndInjectIcons(): Promise<void> {
        if (_nodeIconMap.length === 0) return;

        // Icons are already loaded via esbuild dataurl loader
        // Just use them directly
      }

      /**
       * Build the DOT representation
       */
      function _buildDot(): string {
        const strictAttr = strict ? "strict " : "";
        let dot = `${strictAttr}digraph "${diagramName}" {\n`;

        // Graph attributes
        for (const [key, value] of Object.entries(graphAttr)) {
          dot += `  ${key}="${value}";\n`;
        }

        // Node defaults
        dot += "  node [\n";
        for (const [key, value] of Object.entries(nodeAttr)) {
          dot += `    ${key}="${value}",\n`;
        }
        dot += "  ];\n";

        // Edge defaults
        dot += "  edge [\n";
        for (const [key, value] of Object.entries(edgeAttr)) {
          dot += `    ${key}="${value}",\n`;
        }
        dot += "  ];\n";

        // Nodes
        for (const [id, { label, attrs }] of _nodes) {
          // Check if this is an HTML-like label (starts with < and ends with >)
          const isHtmlLabel = label.startsWith("<") && label.endsWith(">");
          if (isHtmlLabel) {
            dot += `  "${id}" [label=${label}`;
          } else {
            dot += `  "${id}" [label="${label}"`;
          }
          for (const [key, value] of Object.entries(attrs)) {
            dot += `, ${key}="${String(value)}"`;
          }
          // Add image attribute if node has an icon
          const nodeIcon = _nodeIconMap.find((m) => m.node.nodeId === id);
          if (nodeIcon) {
            const iconDataUrl = _iconData[nodeIcon.icon];
            if (iconDataUrl) {
              dot += `, image="${iconDataUrl}"`;
              // Add image dimensions for proper rendering in external Graphviz
              // Only add if not already present in attrs
              if (!("width" in attrs)) dot += `, width="1.0"`;
              if (!("height" in attrs)) dot += `, height="1.0"`;
              dot += `, imagescale=true`;
            }
          }
          dot += "];\n";
        }

        // Edges
        for (const { from, to, attrs } of _edges) {
          dot += `  "${from}" -> "${to}"`;
          const attrEntries = Object.entries(attrs);
          if (attrEntries.length > 0) {
            dot += " [";
            dot += attrEntries
              .map(([k, v]) => {
                // Check if this is an HTML-like label (starts with < and ends with >)
                if (
                  k === "label" &&
                  typeof v === "string" &&
                  v.startsWith("<") &&
                  v.endsWith(">")
                ) {
                  return `${k}=${v}`;
                }
                return `${k}="${v}"`;
              })
              .join(", ");
            dot += "]";
          }
          dot += ";\n";
        }

        // Clusters
        for (const cluster of _clusters) {
          dot += _buildClusterDot(cluster);
        }

        dot += "}\n";
        return dot;
      }

      function _buildClusterDot(cluster: Cluster, indent = 1): string {
        const spaces = "  ".repeat(indent);
        let dot = `${spaces}subgraph "${cluster.name}" {\n`;

        // Cluster attributes
        for (const [key, value] of Object.entries(cluster.graphAttr)) {
          dot += `${spaces}  ${key}="${value}";\n`;
        }

        // Cluster nodes
        for (const [id, { label, attrs }] of cluster.getNodes()) {
          // Check if this is an HTML-like label (starts with < and ends with >)
          const isHtmlLabel = label.startsWith("<") && label.endsWith(">");
          if (isHtmlLabel) {
            dot += `${spaces}  "${id}" [label=${label}`;
          } else {
            dot += `${spaces}  "${id}" [label="${label}"`;
          }
          for (const [key, value] of Object.entries(attrs)) {
            dot += `, ${key}="${String(value)}"`;
          }
          // Add image attribute if node has an icon
          const nodeIcon = _nodeIconMap.find((m) => m.node.nodeId === id);
          if (nodeIcon) {
            const iconDataUrl = _iconData[nodeIcon.icon];
            if (iconDataUrl) {
              dot += `, image="${iconDataUrl}"`;
              // Add image dimensions for proper rendering in external Graphviz
              // Only add if not already present in attrs
              if (!("width" in attrs)) dot += `, width="1.0"`;
              if (!("height" in attrs)) dot += `, height="1.0"`;
              dot += `, imagescale=true`;
            }
          }
          dot += "];\n";
        }

        // Nested clusters
        for (const subgraph of cluster.getSubgraphs()) {
          dot += _buildClusterDot(subgraph, indent + 1);
        }

        dot += `${spaces}}\n`;
        return dot;
      }

      /**
       * Convert SVG string to PNG binary data
       * Uses Canvas API in browser, sharp in Node.js
       * @param svgString - The SVG string to convert
       * @param options - Optional render options for dimensions and scale
       * @returns Promise resolving to PNG data as Uint8Array
       */
      async function _svgToPng(
        svgString: string,
        options: RenderOptions = {},
      ): Promise<Uint8Array> {
        if (_isBrowser()) {
          return _svgToPngBrowser(svgString, options);
        } else {
          return _svgToPngNode(svgString, options);
        }
      }

      /**
       * Convert SVG to PNG using Canvas API (browser only)
       */
      async function _svgToPngBrowser(
        svgString: string,
        options: RenderOptions = {},
      ): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
          const img = new Image();
          const svgBlob = new Blob([svgString], {
            type: "image/svg+xml;charset=utf-8",
          });
          const url = URL.createObjectURL(svgBlob);

          img.onload = () => {
            // Parse SVG dimensions
            const parser = new DOMParser();
            const doc = parser.parseFromString(svgString, "image/svg+xml");
            const svgElement = doc.querySelector("svg");

            let width = 800;
            let height = 600;

            if (svgElement) {
              const widthAttr = svgElement.getAttribute("width");
              const heightAttr = svgElement.getAttribute("height");
              const viewBox = svgElement.getAttribute("viewBox");

              if (widthAttr && heightAttr) {
                width = parseFloat(widthAttr.replace("pt", ""));
                height = parseFloat(heightAttr.replace("pt", ""));
              } else if (viewBox) {
                const parts = viewBox.split(/\s+|,/);
                if (parts.length === 4) {
                  width = parseFloat(parts[2]);
                  height = parseFloat(parts[3]);
                }
              }
            }

            // Apply user-specified dimensions or scale
            const scale = options.scale ?? 2;
            if (options.width) width = options.width;
            if (options.height) height = options.height;

            // Create canvas at scaled resolution
            const canvas = document.createElement("canvas");
            canvas.width = width * scale;
            canvas.height = height * scale;

            const ctx = canvas.getContext("2d");
            if (!ctx) {
              URL.revokeObjectURL(url);
              reject(new Error("Failed to get canvas context"));
              return;
            }

            // Fill white background
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw SVG at specified scale
            ctx.scale(scale, scale);
            ctx.drawImage(img, 0, 0, width, height);

            // Convert to blob
            canvas.toBlob(
              (blob) => {
                URL.revokeObjectURL(url);
                if (blob) {
                  // Convert blob to Uint8Array
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    resolve(new Uint8Array(reader.result as ArrayBuffer));
                  };
                  reader.onerror = reject;
                  reader.readAsArrayBuffer(blob);
                } else {
                  reject(new Error("Failed to create PNG blob"));
                }
              },
              "image/png",
              1.0,
            );
          };

          img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error("Failed to load SVG for conversion"));
          };

          img.src = url;
        });
      }

      /**
       * Convert SVG to PNG using sharp (Node.js only)
       */
      async function _svgToPngNode(
        svgString: string,
        options: RenderOptions = {},
      ): Promise<Uint8Array> {
        try {
          // Dynamic import to avoid bundling sharp in browser builds
          const sharp = await import("sharp");

          // Parse SVG to get dimensions for scaling
          const widthMatch = svgString.match(/width="([\d.]+)pt"/);
          const heightMatch = svgString.match(/height="([\d.]+)pt"/);
          const viewBoxMatch = svgString.match(/viewBox="[^"]+"/);

          let width = 800;
          let height = 600;

          if (widthMatch && heightMatch) {
            width = parseFloat(widthMatch[1]);
            height = parseFloat(heightMatch[1]);
          } else if (viewBoxMatch) {
            const parts = viewBoxMatch[0].split(/\s+|,/);
            if (parts.length >= 4) {
              width = parseFloat(parts[2]);
              height = parseFloat(parts[3]);
            }
          }

          // Apply user-specified dimensions or scale
          const scale = options.scale ?? 2;
          if (options.width) width = options.width;
          if (options.height) height = options.height;

          // Convert SVG to PNG at specified resolution
          const pngBuffer = await sharp
            .default(Buffer.from(svgString))
            .resize(width * scale, height * scale)
            .png()
            .toBuffer();

          return new Uint8Array(pngBuffer);
        } catch (error) {
          throw new Error(
            `Failed to convert SVG to PNG. Make sure 'sharp' is installed: npm install sharp. Error: ${error instanceof Error ? error.message : String(error)}`,
          );
        }
      }

      /**
       * Convert SVG string to JPG binary data
       * Uses Canvas API in browser, sharp in Node.js
       * @param svgString - The SVG string to convert
       * @param options - Optional render options for dimensions and scale
       * @returns Promise resolving to JPG data as Uint8Array
       */
      async function _svgToJpg(
        svgString: string,
        options: RenderOptions = {},
      ): Promise<Uint8Array> {
        if (_isBrowser()) {
          return _svgToJpgBrowser(svgString, options);
        } else {
          return _svgToJpgNode(svgString, options);
        }
      }

      /**
       * Convert SVG to JPG using Canvas API (browser only)
       */
      async function _svgToJpgBrowser(
        svgString: string,
        options: RenderOptions = {},
      ): Promise<Uint8Array> {
        return new Promise((resolve, reject) => {
          const img = new Image();
          const svgBlob = new Blob([svgString], {
            type: "image/svg+xml;charset=utf-8",
          });
          const url = URL.createObjectURL(svgBlob);

          img.onload = () => {
            // Parse SVG dimensions
            const parser = new DOMParser();
            const doc = parser.parseFromString(svgString, "image/svg+xml");
            const svgElement = doc.querySelector("svg");

            let width = 800;
            let height = 600;

            if (svgElement) {
              const widthAttr = svgElement.getAttribute("width");
              const heightAttr = svgElement.getAttribute("height");
              const viewBox = svgElement.getAttribute("viewBox");

              if (widthAttr && heightAttr) {
                width = parseFloat(widthAttr.replace("pt", ""));
                height = parseFloat(heightAttr.replace("pt", ""));
              } else if (viewBox) {
                const parts = viewBox.split(/\s+|,/);
                if (parts.length === 4) {
                  width = parseFloat(parts[2]);
                  height = parseFloat(parts[3]);
                }
              }
            }

            // Apply user-specified dimensions or scale
            const scale = options.scale ?? 2;
            if (options.width) width = options.width;
            if (options.height) height = options.height;

            // Create canvas at scaled resolution
            const canvas = document.createElement("canvas");
            canvas.width = width * scale;
            canvas.height = height * scale;

            const ctx = canvas.getContext("2d");
            if (!ctx) {
              URL.revokeObjectURL(url);
              reject(new Error("Failed to get canvas context"));
              return;
            }

            // Fill white background (important for JPG which doesn't support transparency)
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw SVG at specified scale
            ctx.scale(scale, scale);
            ctx.drawImage(img, 0, 0, width, height);

            // Convert to blob with JPEG format
            canvas.toBlob(
              (blob) => {
                URL.revokeObjectURL(url);
                if (blob) {
                  // Convert blob to Uint8Array
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    resolve(new Uint8Array(reader.result as ArrayBuffer));
                  };
                  reader.onerror = reject;
                  reader.readAsArrayBuffer(blob);
                } else {
                  reject(new Error("Failed to create JPG blob"));
                }
              },
              "image/jpeg",
              0.95,
            );
          };

          img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error("Failed to load SVG for conversion"));
          };

          img.src = url;
        });
      }

      /**
       * Convert SVG to JPG using sharp (Node.js only)
       */
      async function _svgToJpgNode(
        svgString: string,
        options: RenderOptions = {},
      ): Promise<Uint8Array> {
        try {
          // Dynamic import to avoid bundling sharp in browser builds
          const sharp = await import("sharp");

          // Parse SVG to get dimensions for scaling
          const widthMatch = svgString.match(/width="([\d.]+)pt"/);
          const heightMatch = svgString.match(/height="([\d.]+)pt"/);
          const viewBoxMatch = svgString.match(/viewBox="[^"]+"/);

          let width = 800;
          let height = 600;

          if (widthMatch && heightMatch) {
            width = parseFloat(widthMatch[1]);
            height = parseFloat(heightMatch[1]);
          } else if (viewBoxMatch) {
            const parts = viewBoxMatch[0].split(/\s+|,/);
            if (parts.length >= 4) {
              width = parseFloat(parts[2]);
              height = parseFloat(parts[3]);
            }
          }

          // Apply user-specified dimensions or scale
          const scale = options.scale ?? 2;
          if (options.width) width = options.width;
          if (options.height) height = options.height;

          // Convert SVG to JPG at specified resolution
          const jpgBuffer = await sharp
            .default(Buffer.from(svgString))
            .resize(width * scale, height * scale)
            .jpeg({ quality: 95 })
            .toBuffer();

          return new Uint8Array(jpgBuffer);
        } catch (error) {
          throw new Error(
            `Failed to convert SVG to JPG. Make sure 'sharp' is installed: npm install sharp. Error: ${error instanceof Error ? error.message : String(error)}`,
          );
        }
      }

      /**
       * Convert output to data URL
       * @param output - The output data (string or Uint8Array)
       * @param format - The format of the output
       * @returns Data URL string
       */
      function _toDataUrl(output: string | Uint8Array, format: string): string {
        let mimeType: string;
        let base64: string;

        switch (format) {
          case "svg":
            mimeType = "image/svg+xml";
            base64 =
              typeof output === "string"
                ? btoa(output)
                : btoa(String.fromCharCode(...(output as Uint8Array)));
            break;
          case "png":
            mimeType = "image/png";
            base64 = btoa(String.fromCharCode(...(output as Uint8Array)));
            break;
          case "jpg":
          case "jpeg":
            mimeType = "image/jpeg";
            base64 = btoa(String.fromCharCode(...(output as Uint8Array)));
            break;
          case "dot":
            mimeType = "text/plain";
            base64 =
              typeof output === "string" ? btoa(output) : btoa(String.fromCharCode(...output));
            break;
          case "json":
            mimeType = "application/json";
            base64 =
              typeof output === "string" ? btoa(output) : btoa(String.fromCharCode(...output));
            break;
          default:
            mimeType = "application/octet-stream";
            base64 =
              typeof output === "string" ? btoa(output) : btoa(String.fromCharCode(...output));
        }

        return `data:${mimeType};base64,${base64}`;
      }
    }) as RenderFunction,

    /**
     * Render the diagram with icon injection
     * @param iconData - Map of icon keys to data URIs
     * @param nodeMap - Optional node-to-icon mapping (defaults to diagram's registered icons)
     * @returns Promise resolving to the rendered diagram with icons injected
     */
    async renderWithIcons(iconData?: IconData, nodeMap?: NodeIconMap[]): Promise<string> {
      // Use provided icon data or stored icon data
      const data = iconData ?? _iconData;
      const map = nodeMap ?? _nodeIconMap;

      if (Object.keys(data).length === 0) {
        throw new Error(
          "No icon data provided. Either pass iconData to renderWithIcons() or call setIconData() first.",
        );
      }

      if (map.length === 0) {
        throw new Error(
          "No node map provided. Either pass nodeMap to renderWithIcons() or register icons with the diagram first.",
        );
      }

      // Render to SVG for icon injection (icons can only be injected into SVG)
      const output = await diagram.render({
        format: "svg",
        injectIcons: false,
      });
      const svgString = typeof output === "string" ? output : new TextDecoder().decode(output);

      return injectIcons(svgString, map, data);
    },

    /**
     * Save the diagram to a file (Node.js only)
     * @param filepath - Optional file path (defaults to diagram.filename with appropriate extension)
     * @param options - Optional render options for format and dimensions
     */
    async save(filepath?: string, options: RenderOptions = {}): Promise<void> {
      // Determine format from options or file extension
      const format =
        options.format ?? (filepath ? _getFormatFromExtension(filepath) : undefined) ?? "svg";
      const output = await diagram.render({ ...options, format });
      const path = filepath ?? `${filename}.${format}`;

      if (typeof globalThis !== "undefined" && "document" in globalThis) {
        // Browser environment - download file
        const mimeType =
          format === "svg"
            ? "image/svg+xml"
            : format === "json"
              ? "application/json"
              : `image/${format}`;
        const blob = new Blob([output] as BlobPart[], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = globalThis.document.createElement("a");
        a.href = url;
        a.download = path;
        a.click();
        URL.revokeObjectURL(url);
        return;
      }

      // Node.js environment
      const fs = await import("node:fs/promises");
      await fs.writeFile(path, output);
    },

    /**
     * Serialize the diagram to a JSON representation
     */
    toJSON(): DiagramJSON {
      // Ensure built-in plugins are registered
      void ensureBuiltInPlugins();

      const jsonData = buildDiagramJSON(
        diagram,
        _nodes,
        _edges,
        _clusters,
        _nodeIconMap,
        _nodeObjects,
        options,
      );

      // Execute before:serialize hook synchronously if plugins are initialized
      if (pluginsInitialized) {
        void registry
          .executeHooks(HookEventEnum.BEFORE_SERIALIZE, { data: jsonData, diagram })
          .catch(() => {
            // Silently ignore errors - hooks shouldn't break serialization
          });
      }

      return jsonData;
    },

    /**
     * Import diagram from external format
     */
    async import(source: string | string[], format: string): Promise<void> {
      // Ensure built-in plugins are registered
      await ensureBuiltInPlugins();

      const importer = registry.getImporter(format);
      if (!importer) {
        throw new Error(
          `No importer found for format: "${format}". ` +
            `Available importers: ${registry.listCapabilities().importers.join(", ") || "none"}`,
        );
      }

      // Execute before import hook
      await registry.executeHooks(HookEventEnum.BEFORE_IMPORT, { source, format });

      // Import
      await importer.import(source, diagram, {
        source,
        format,
        registry,
        fetch: globalThis.fetch.bind(globalThis),
        getPlugin: registry.getPlugin,
        getImporter: registry.getImporter,
        getExporter: registry.getExporter,
        getRenderer: registry.getRenderer,
        getMetadataProvider: registry.getMetadataProvider,
        executeHooks: registry.executeHooks,
        loadResourcesList: registry.loadResourcesList,
        loadYaml: registry.loadYaml,
        lib,
      });

      // Execute after import hook
      await registry.executeHooks(HookEventEnum.AFTER_IMPORT, { diagram });
    },

    /**
     * Export diagram to external format
     */
    async export(format: string): Promise<string | Uint8Array> {
      // Ensure built-in plugins are registered
      await ensureBuiltInPlugins();

      const exporter = registry.getExporter(format);
      if (!exporter) {
        throw new Error(
          `No exporter found for format: "${format}". ` +
            `Available exporters: ${registry.listCapabilities().exporters.join(", ") || "none"}`,
        );
      }

      // Execute before export hook
      await registry.executeHooks(HookEventEnum.BEFORE_EXPORT, { diagram, format });

      // Export
      const result = await exporter.export(diagram, {
        format,
        registry,
        fetch: globalThis.fetch.bind(globalThis),
        getPlugin: registry.getPlugin,
        getImporter: registry.getImporter,
        getExporter: registry.getExporter,
        getRenderer: registry.getRenderer,
        getMetadataProvider: registry.getMetadataProvider,
        executeHooks: registry.executeHooks,
        loadResourcesList: registry.loadResourcesList,
        loadYaml: registry.loadYaml,
        lib,
      });

      // Execute after export hook
      await registry.executeHooks(HookEventEnum.AFTER_EXPORT, { result, format });

      return result;
    },

    /**
     * Attach metadata from a provider to nodes
     */
    async attachMetadata(provider: string, nodeType?: string): Promise<void> {
      // Ensure built-in plugins are registered
      await ensureBuiltInPlugins();

      const metadataProvider = registry.getMetadataProvider(provider);
      if (!metadataProvider) {
        throw new Error(
          `No metadata provider found for: "${provider}". ` +
            `Available providers: ${registry.listCapabilities().metadataProviders.join(", ") || "none"}`,
        );
      }

      // Get all node objects
      const allNodes = Array.from(_nodeObjects.values());

      // Filter by nodeType if specified
      const targetNodes = nodeType ? allNodes.filter((n) => n["~type"] === nodeType) : allNodes;

      for (const node of targetNodes) {
        const currentMetadata = node.metadata || {};

        // Get metadata from provider
        const metadata = await metadataProvider.getMetadata(
          node["~type"] || "unknown",
          currentMetadata,
          {
            node,
            currentMetadata,
            registry,
            fetch: globalThis.fetch.bind(globalThis),
            getPlugin: registry.getPlugin,
            getImporter: registry.getImporter,
            getExporter: registry.getExporter,
            getRenderer: registry.getRenderer,
            getMetadataProvider: registry.getMetadataProvider,
            executeHooks: registry.executeHooks,
            loadResourcesList: registry.loadResourcesList,
            loadYaml: registry.loadYaml,
            lib,
          },
        );

        // Execute metadata attach hook
        const enrichedData = await registry.executeHooks(HookEventEnum.METADATA_ATTACH, {
          node,
          metadata,
          provider,
        });

        // Attach metadata to node
        node.metadata = { ...currentMetadata, ...enrichedData.metadata };
      }
    },

    /**
     * Plugin registry for this diagram
     */
    registry,

    /**
     * Register plugins with the diagram
     * @param plugins - Array of plugin instances
     * @returns Promise that resolves when all plugins are registered and initialized
     */
    async registerPlugins(
      plugins: import("./plugins/types.js").DiagramsPlugin[] = [],
    ): Promise<void> {
      // Register built-in plugins first (always available)
      if (!registry.getPlugin("json")) {
        await registry.register(createJSONPlugin());
      }
      if (!registry.getPlugin("svg")) {
        await registry.register(createSVGPlugin());
      }

      // Register all provided plugins
      for (const plugin of plugins) {
        await registry.register(plugin);
      }

      pluginsInitialized = true;
    },

    /**
     * Convert the diagram to DOT format string
     */
    toString(): string {
      // Build DOT representation inline
      const strictAttr = strict ? "strict " : "";
      let dot = `${strictAttr}digraph "${diagramName}" {\n`;

      // Graph attributes
      for (const [key, value] of Object.entries(graphAttr)) {
        dot += `  ${key}="${value}";\n`;
      }

      // Node defaults
      dot += "  node [\n";
      for (const [key, value] of Object.entries(nodeAttr)) {
        dot += `    ${key}="${value}",\n`;
      }
      dot += "  ];\n";

      // Edge defaults
      dot += "  edge [\n";
      for (const [key, value] of Object.entries(edgeAttr)) {
        dot += `    ${key}="${value}",\n`;
      }
      dot += "  ];\n";

      // Nodes
      for (const [id, { label, attrs }] of _nodes) {
        dot += `  "${id}" [label="${label}"`;
        for (const [key, value] of Object.entries(attrs)) {
          dot += `, ${key}="${String(value)}"`;
        }
        // Add image attribute if node has an icon
        const nodeIcon = _nodeIconMap.find((m) => m.node.nodeId === id);
        if (nodeIcon) {
          const iconDataUrl = _iconData[nodeIcon.icon];
          if (iconDataUrl) {
            dot += `, image="${iconDataUrl}"`;
            // Add image dimensions for proper rendering in external Graphviz
            // Only add if not already present in attrs
            if (!("width" in attrs)) dot += `, width="1.0"`;
            if (!("height" in attrs)) dot += `, height="1.0"`;
            dot += `, imagescale=true`;
          }
        }
        dot += ";\n";
      }

      // Edges
      for (const { from, to, attrs } of _edges) {
        dot += `  "${from}" -> "${to}"`;
        const attrEntries = Object.entries(attrs);
        if (attrEntries.length > 0) {
          dot += " [";
          dot += attrEntries.map(([k, v]) => `${k}="${v}"`).join(", ");
          dot += "]";
        }
        dot += ";\n";
      }

      // Clusters
      for (const cluster of _clusters) {
        dot += _buildClusterDot(cluster);
      }

      dot += "}\n";
      return dot;

      function _buildClusterDot(cluster: Cluster, indent = 1): string {
        const spaces = "  ".repeat(indent);
        let clusterDot = `${spaces}subgraph "${cluster.name}" {\n`;

        // Cluster attributes
        for (const [key, value] of Object.entries(cluster.graphAttr)) {
          clusterDot += `${spaces}  ${key}="${value}";\n`;
        }

        // Cluster nodes
        for (const [id, { label, attrs }] of cluster.getNodes()) {
          clusterDot += `${spaces}  "${id}" [label="${label}"`;
          for (const [key, value] of Object.entries(attrs)) {
            clusterDot += `, ${key}="${String(value)}"`;
          }
          // Add image attribute if node has an icon
          const nodeIcon = _nodeIconMap.find((m) => m.node.nodeId === id);
          if (nodeIcon) {
            const iconDataUrl = _iconData[nodeIcon.icon];
            if (iconDataUrl) {
              clusterDot += `, image="${iconDataUrl}"`;
              // Add image dimensions for proper rendering in external Graphviz
              // Only add if not already present in attrs
              if (!("width" in attrs)) clusterDot += `, width="1.0"`;
              if (!("height" in attrs)) clusterDot += `, height="1.0"`;
              clusterDot += `, imagescale=true`;
            }
          }
          clusterDot += ";\n";
        }

        // Nested clusters
        for (const subgraph of cluster.getSubgraphs()) {
          clusterDot += _buildClusterDot(subgraph, indent + 1);
        }

        clusterDot += `${spaces}}\n`;
        return clusterDot;
      }
    },
  };

  // Set the global context after diagram object is created
  setDiagram(diagram);

  return diagram;
}

/**
 * Create a Diagram from a JSON representation.
 * This is the inverse of `diagram.toJSON()`.
 *
 * @param input - The JSON object or string representing a diagram
 * @param opts - Optional configuration for deserialization
 * @returns A fully constructed Diagram with all nodes, edges, and clusters
 *
 * @example
 * ```typescript
 * import { Diagram } from "diagrams-js";
 *
 * const json = {
 *   name: "My Architecture",
 *   nodes: [
 *     { id: "web", label: "Web Server", provider: "aws", service: "compute", type: "EC2" },
 *     { id: "db", label: "Database", provider: "aws", service: "database", type: "RDS" }
 *   ],
 *   edges: [
 *     { from: "web", to: "db", label: "SQL" }
 *   ]
 * };
 *
 * const diagram = await Diagram.fromJSON(json);
 * const svg = await diagram.render(); // icons resolved automatically
 * ```
 */
Diagram.fromJSON = fromJSONImpl;

/**
 * Create a Diagram from an SVG string with embedded diagram metadata.
 */
Diagram.fromSVG = async function (svg: string): Promise<Diagram> {
  const match = svg.match(/data-diagram-json="([^"]+)"/);
  if (!match) {
    throw new Error(
      "Invalid diagram SVG: missing or corrupted embedded diagram data. " +
        "Make sure the SVG was exported using diagrams-js SVG export.",
    );
  }
  let jsonStr: string;
  if (typeof Buffer !== "undefined") {
    jsonStr = Buffer.from(match[1], "base64").toString("utf-8");
  } else {
    const binary = atob(match[1]);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    jsonStr = new TextDecoder().decode(bytes);
  }
  const json = JSON.parse(jsonStr) as import("./json.js").DiagramJSON;
  return fromJSONImpl(json);
};

/**
 * Compute the diff between two diagram versions.
 * This is a convenience static method that wraps `computeDiff` from `./diff.js`.
 *
 * @param before - The original diagram (JSON or Diagram object)
 * @param after - The updated diagram (JSON or Diagram object)
 * @param opts - Options for diff computation
 * @returns Complete diff result with summary and detailed changes
 */
Diagram.diff = async function (
  before: import("./json.js").DiagramJSON | Diagram,
  after: import("./json.js").DiagramJSON | Diagram,
  opts?: import("./diff.js").DiffOptions,
): Promise<import("./diff.js").DiagramDiffResult> {
  return computeDiff(before, after, opts);
};

/**
 * Render a visual diff between two diagram versions.
 * This is a convenience static method that wraps `renderDiff` from `./diff.js`.
 *
 * @param before - The original diagram (JSON or Diagram object)
 * @param after - The updated diagram (JSON or Diagram object)
 * @param opts - Options for rendering the diff
 * @returns Promise resolving to SVG or HTML string
 */
Diagram.renderDiff = async function (
  before: import("./json.js").DiagramJSON | Diagram,
  after: import("./json.js").DiagramJSON | Diagram,
  opts?: import("./diff.js").RenderDiffOptions,
): Promise<string> {
  const diff = computeDiff(before, after, opts as import("./diff.js").DiffOptions);
  return renderDiff(diff, before, after, opts);
};

/**
 * Extract format from file extension
 * @param filepath - The file path to extract format from
 * @returns The format (svg, png, jpg, or dot) or undefined if not recognized
 */
function _getFormatFromExtension(
  filepath: string,
): "svg" | "png" | "jpg" | "dot" | "json" | undefined {
  const ext = filepath.toLowerCase().split(".").pop();
  switch (ext) {
    case "svg":
    case "png":
    case "jpg":
    case "jpeg":
    case "dot":
    case "json":
      return ext === "jpeg" ? "jpg" : ext;
    default:
      return undefined;
  }
}

/**
 * Detect if running in browser environment
 */
function _isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
