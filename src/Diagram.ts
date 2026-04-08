import { instance } from "@viz-js/viz";
import type { Viz } from "@viz-js/viz";
import { setDiagram } from "./context.js";
import { Cluster } from "./Cluster.js";
import type { Node } from "./Node.js";
import { Edge } from "./Edge.js";
import {
  THEMES,
  type DiagramOptions,
  type RenderOptions,
  type ThemeName,
  type ThemeConfig,
} from "./types.js";
import { injectIcons, type NodeIconMap, type IconData } from "./icons.js";

// Render function overload types for proper type inference
type RenderFunction = {
  (options?: { format?: "svg" | "dot" } & Omit<RenderOptions, "format">): Promise<string>;
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

export interface Diagram {
  name: string;
  filename: string;
  direction: "TB" | "BT" | "LR" | "RL";
  curveStyle: "ortho" | "curved" | "spline" | "polyline";
  autolabel: boolean;
  strict: boolean;
  theme: ThemeName;
  themeConfig: ThemeConfig;
  graphAttr: Record<string, string>;
  nodeAttr: Record<string, string>;
  edgeAttr: Record<string, string>;
  // Track if user explicitly set icon-related properties in nodeAttr
  ["~userNodeAttr"]?: {
    shape?: string;
    height?: string;
    width?: string;
    fixedsize?: string;
    margin?: string;
    labelloc?: string;
    imagescale?: string;
  };
  registerIcon(node: Node, iconKey: string, iconPath?: string): void;
  setIconData(iconData: IconData): void;
  getNodeIconMap(): NodeIconMap[];
  getIconData(): IconData;
  trackNodeWithIcon(node: Node, iconDataUrl: string): void;
  trackPendingIconLoad(promise: Promise<void>): void;
  add<T extends Node>(node: T): T;
  node(nodeId: string, label: string, attrs: Record<string, unknown>): void;
  connect(from: Node, to: Node, edge: Edge): void;
  subgraph(cluster: Cluster): void;
  cluster(label: string): Cluster;
  render: RenderFunction;
  renderWithIcons(iconData?: IconData, nodeMap?: NodeIconMap[]): Promise<string>;
  save(filepath?: string, options?: RenderOptions): Promise<void>;
  toString(): string;
  destroy(): void;
}

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
    registerIcon(node: Node, iconKey: string, iconPath?: string): void {
      _nodeIconMap.push({ node, icon: iconKey, iconPath });
    },

    /**
     * Load icon data for injection
     * @param iconData - Map of icon keys to data URIs
     */
    setIconData(iconData: IconData): void {
      _iconData = iconData;
    },

    /**
     * Get the node icon map
     */
    getNodeIconMap(): NodeIconMap[] {
      return [..._nodeIconMap];
    },

    /**
     * Get the icon data
     */
    getIconData(): IconData {
      return { ..._iconData };
    },

    /**
     * Track a node that has an icon (for automatic icon injection)
     * @internal
     */
    trackNodeWithIcon(node: Node, iconDataUrl: string): void {
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
    trackPendingIconLoad(promise: Promise<void>): void {
      _pendingIconLoads.push(promise);
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
    node(nodeId: string, label: string, attrs: Record<string, unknown>): void {
      _nodes.set(nodeId, { label, attrs });
    },

    /**
     * Connect two nodes
     */
    connect(from: Node, to: Node, edge: Edge): void {
      _edges.push({
        from: from.nodeId,
        to: to.nodeId,
        attrs: edge.attrs,
      });
    },

    /**
     * Add a subgraph (cluster)
     */
    subgraph(cluster: Cluster): void {
      _clusters.push(cluster);
    },

    /**
     * Create a cluster
     * @param label - The label for the cluster
     * @returns The created cluster
     */
    cluster(label: string): Cluster {
      const cluster = Cluster(label, "LR", undefined, diagram as Diagram);
      _clusters.push(cluster);
      return cluster;
    },

    /**
     * Render the diagram
     * @param options - Optional render options including format, filename, dimensions, and scale
     */
    render: (async (options: RenderOptions = {}): Promise<Uint8Array | string> => {
      // Wait for any pending icon loads (e.g., Custom nodes with remote icons)
      await _waitForIconLoads();

      if (!_viz) {
        _viz = await instance();
      }

      const dot = _buildDot();
      const format = options.format ?? "svg";

      // If DOT format was requested, return the raw DOT source
      if (format === "dot") {
        // If dataUrl was requested, convert DOT to data URL
        if (options.dataUrl) {
          return _toDataUrl(dot, "dot");
        }
        return dot;
      }

      // Always render to SVG first - Graphviz WASM doesn't support PNG output
      // We'll convert to PNG after rendering if needed
      const needsIconInjection = _nodeIconMap.length > 0;
      const shouldInjectIcons = options.injectIcons ?? needsIconInjection;
      const renderFormat = "svg";

      const result = _viz.render(dot, { format: renderFormat });

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
      const format = options.format ?? "svg";
      const output = await diagram.render({ ...options, format });
      const path = filepath ?? `${filename}.${format}`;

      if (typeof globalThis !== "undefined" && "document" in globalThis) {
        // Browser environment - download file
        const mimeType = format === "svg" ? "image/svg+xml" : `image/${format}`;
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
     * Get the DOT source
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
        dot += "];\n";
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
          clusterDot += "];\n";
        }

        // Nested clusters
        for (const subgraph of cluster.getSubgraphs()) {
          clusterDot += _buildClusterDot(subgraph, indent + 1);
        }

        clusterDot += `${spaces}}\n`;
        return clusterDot;
      }
    },

    /**
     * Cleanup resources
     */
    destroy(): void {
      // Clear the context - for now just a no-op since we're using a stack-based approach
      _viz = null;
    },
  };

  // Set the global context after diagram object is created
  setDiagram(diagram);

  return diagram;
}

/**
 * Detect if running in browser environment
 */
function _isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
