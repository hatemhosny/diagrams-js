/**
 * JSON serialization and deserialization for diagrams.
 *
 * Provides a consistent JSON format for exporting and importing diagrams,
 * enabling use cases such as cloud architecture provisioning.
 *
 * @example
 * ```typescript
 * import { Diagram, Node } from "diagrams-js";
 *
 * // Export a diagram to JSON
 * const diagram = Diagram("My Arch");
 * const ec2 = diagram.add(Node("Web Server"));
 * const json = diagram.toJSON();
 *
 * // Import a diagram from JSON
 * const restored = await Diagram.fromJSON(json);
 * const svg = await restored.render();
 * ```
 *
 * @packageDocumentation
 */

import { Diagram as createDiagram } from "./Diagram.js";
import type { Diagram } from "./Diagram.js";
import { Node } from "./Node.js";
import { Edge } from "./Edge.js";
import type { DiagramOptions } from "./types.js";
import { loadProviderModules } from "./provider-loader.js";

/**
 * JSON representation of a node in the diagram.
 */
export interface DiagramNodeJSON {
  /** Unique identifier for the node */
  id: string;
  /** Display label for the node */
  label?: string;
  /** Cloud provider identifier (e.g., 'aws', 'gcp', 'azure') */
  provider?: string;
  /** Service type within the provider (e.g., 'compute', 'storage') */
  service?: string;
  /** Specific resource type (e.g., 'EC2', 'S3', 'RDS') */
  type?: string;
  /** Custom icon URL or data URI */
  iconUrl?: string;
  /** Additional Graphviz attributes */
  attrs?: Record<string, string | number>;
  /** Metadata attached to this node (e.g., cloud provider specs, pricing) */
  metadata?: Record<string, any>;
}

/**
 * JSON representation of an edge (connection) between nodes.
 */
export interface DiagramEdgeJSON {
  /** Source node ID */
  from: string;
  /** Target node ID */
  to: string;
  /** Edge direction */
  direction?: "forward" | "back" | "both" | "none";
  /** Edge label text */
  label?: string;
  /** Edge color */
  color?: string;
  /** Edge line style */
  style?: string;
  /** Additional Graphviz attributes */
  attrs?: Record<string, string>;
}

/**
 * JSON representation of a cluster (group) of nodes.
 */
export interface DiagramClusterJSON {
  /** Display label for the cluster */
  label: string;
  /** Array of node IDs that belong to this cluster */
  nodes?: string[];
  /** Graphviz attributes for this cluster */
  graphAttr?: Record<string, string>;
  /** Nested clusters */
  clusters?: DiagramClusterJSON[];
}

/**
 * A provider module mapping type names to factory functions.
 * Can be passed to `fromJSON()` to override or supplement the auto-registered providers.
 *
 * @example
 * ```typescript
 * import * as awsCompute from "diagrams-js/aws/compute";
 * const diagram = fromJSON(json, { providers: [awsCompute] });
 * ```
 */
export type ProviderModule = Record<
  string,
  (label?: string, options?: Record<string, unknown>) => import("./Node.js").Node
>;

/**
 * Options for `fromJSON()`.
 */
export interface FromJSONOptions {
  /**
   * Additional provider modules for resolving node icons from their type.
   *
   * Provider factories are auto-registered when their modules are imported,
   * so in most cases you don't need this option. It's available for cases
   * where you want to override or supplement the auto-registered factories.
   *
   * @example
   * ```typescript
   * // Usually not needed -- factories auto-register when you import them:
   * import { EC2 } from "diagrams-js/aws/compute";
   *
   * // But you can explicitly pass modules if needed:
   * import * as awsCompute from "diagrams-js/aws/compute";
   * fromJSON(json, { providers: [awsCompute] });
   * ```
   */
  providers?: ProviderModule[];
}

/**
 * Complete JSON representation of a diagram.
 * This is the top-level type for serialization/deserialization.
 */
export interface DiagramJSON {
  /** JSON Schema reference for validation and IDE support */
  $schema?: string;
  /** The name/title of the diagram */
  name?: string;
  /** The filename used when saving */
  filename?: string;
  /** Layout direction */
  direction?: "TB" | "BT" | "LR" | "RL";
  /** Edge curve style */
  curvestyle?: "ortho" | "curved" | "spline" | "polyline";
  /** Whether to auto-prefix labels with type */
  autolabel?: boolean;
  /** Whether to create a strict graph */
  strict?: boolean;
  /** Color theme */
  theme?: "pastel" | "neutral" | "blues" | "greens" | "orange";
  /** Graph-level Graphviz attributes */
  graphAttr?: Record<string, string>;
  /** Default node Graphviz attributes */
  nodeAttr?: Record<string, string>;
  /** Default edge Graphviz attributes */
  edgeAttr?: Record<string, string>;
  /** All nodes in the diagram */
  nodes: DiagramNodeJSON[];
  /** All edges between nodes */
  edges?: DiagramEdgeJSON[];
  /** Clusters (groups) of nodes */
  clusters?: DiagramClusterJSON[];
}

/**
 * Known icon-related attribute keys set by the provider/Node system.
 * These are excluded from `attrs` in JSON output since they are
 * automatically restored from provider/type info during import.
 */
const iconAttrKeys = new Set([
  "shape",
  "height",
  "width",
  "fixedsize",
  "margin",
  "labelloc",
  "imagescale",
]);

/**
 * Default icon attribute values set by the Node system for provider nodes.
 */
const defaultIconAttrs: Record<string, string> = {
  shape: "none",
  height: "0.9",
  width: "0.8",
  fixedsize: "true",
  margin: "0,0",
  labelloc: "b",
  imagescale: "true",
};

/**
 * Serialize a node's internal data into the JSON format.
 *
 * @param nodeId - The node's unique ID
 * @param label - The node's display label
 * @param attrs - The node's Graphviz attributes
 * @param nodeObj - The actual Node object (for provider metadata)
 * @returns The JSON representation of the node
 */
function serializeNode(
  nodeId: string,
  label: string,
  attrs: Record<string, unknown>,
  nodeObj?: import("./Node.js").Node,
): DiagramNodeJSON {
  const json: DiagramNodeJSON = { id: nodeId };

  if (label) {
    json.label = label;
  }

  // Extract provider metadata from the node object
  if (nodeObj) {
    const raw = nodeObj as unknown as Record<string, unknown>;
    const provider = raw["~provider"] as string | undefined;
    const service = raw["~type"] as string | undefined;
    const resource = raw["~resource"] as string | undefined;

    if (provider) json.provider = provider;
    if (service) json.service = service;
    if (resource) json.type = resource;

    // Extract icon URL for Custom nodes only.
    // Provider nodes get icons resolved from their provider/service/type triple
    // at import time, so we don't embed them in JSON.
    if ("~getIconUrl" in raw && typeof raw["~getIconUrl"] === "function") {
      json.iconUrl = (raw["~getIconUrl"] as () => string)();
    }

    // Extract metadata if present
    if (nodeObj.metadata && Object.keys(nodeObj.metadata).length > 0) {
      json.metadata = nodeObj.metadata;
    }
  }

  // Extract user-meaningful attributes (filter out icon defaults for provider nodes)
  const hasProvider = json.provider != null;
  const hasIconUrl = json.iconUrl != null;
  const isIconNode = hasProvider || hasIconUrl;
  const filteredAttrs: Record<string, string | number> = {};

  for (const [key, value] of Object.entries(attrs)) {
    // Skip internal keys
    if (key.startsWith("~")) continue;

    // For icon nodes, skip default icon attributes
    if (isIconNode && iconAttrKeys.has(key)) {
      const defaultVal = defaultIconAttrs[key];
      if (defaultVal !== undefined && String(value) === defaultVal) {
        continue;
      }
    }

    filteredAttrs[key] = typeof value === "number" ? value : String(value);
  }

  if (Object.keys(filteredAttrs).length > 0) {
    json.attrs = filteredAttrs;
  }

  return json;
}

/**
 * Serialize a cluster and its contents into JSON format.
 *
 * @param cluster - The cluster to serialize
 * @param allNodes - Accumulator for all nodes found in clusters
 * @param nodeObjLookup - Map to look up Node objects by ID
 * @returns The JSON representation of the cluster
 */
function serializeCluster(
  cluster: import("./Cluster.js").Cluster,
  allNodes: DiagramNodeJSON[],
  nodeObjLookup: Map<string, import("./Node.js").Node>,
): DiagramClusterJSON {
  const json: DiagramClusterJSON = { label: cluster.label };

  // Collect node IDs in this cluster
  const nodeIds: string[] = [];
  for (const [nodeId, { label, attrs }] of cluster.getNodes()) {
    nodeIds.push(nodeId);
    allNodes.push(serializeNode(nodeId, label, attrs, nodeObjLookup.get(nodeId)));
  }
  if (nodeIds.length > 0) {
    json.nodes = nodeIds;
  }

  // Serialize user-set graphAttr (filter out theme defaults)
  const userAttrs: Record<string, string> = {};
  for (const [key, value] of Object.entries(cluster.graphAttr)) {
    // Skip default/theme-derived cluster attributes
    if (
      key === "shape" ||
      key === "style" ||
      key === "labeljust" ||
      key === "fontname" ||
      key === "fontsize" ||
      key === "label" ||
      key === "pencolor" ||
      key === "bgcolor"
    ) {
      continue;
    }
    userAttrs[key] = value;
  }
  if (Object.keys(userAttrs).length > 0) {
    json.graphAttr = userAttrs;
  }

  // Nested clusters
  const subgraphs = cluster.getSubgraphs();
  if (subgraphs.length > 0) {
    json.clusters = subgraphs.map((sub) => serializeCluster(sub, allNodes, nodeObjLookup));
  }

  return json;
}

/**
 * Serialize a diagram's edges into JSON format.
 *
 * @param edges - The internal edge array
 * @returns Array of edge JSON representations
 */
function serializeEdges(
  edges: Array<{ from: string; to: string; attrs: Record<string, string> }>,
): DiagramEdgeJSON[] {
  return edges.map((edge) => {
    const json: DiagramEdgeJSON = {
      from: edge.from,
      to: edge.to,
    };

    const { dir, label, color, style, ...rest } = edge.attrs;

    // Map Graphviz dir attribute to our direction enum
    if (dir && dir !== "forward") {
      json.direction = dir as DiagramEdgeJSON["direction"];
    }
    if (label) json.label = label;
    if (color) json.color = color;
    if (style) json.style = style;

    // Remaining attributes
    if (Object.keys(rest).length > 0) {
      json.attrs = rest;
    }

    return json;
  });
}

/**
 * Convert a Diagram to its JSON representation.
 * This captures all diagram options, nodes, edges, and clusters.
 *
 * @param diagram - The diagram to serialize
 * @returns The JSON object representing the diagram
 */
export function diagramToJSON(diagram: Diagram): DiagramJSON {
  // Access internal state via the diagram's closure
  // We need to use the diagram's public and internal APIs

  const json: DiagramJSON = {
    nodes: [],
  };

  // Diagram options (only include non-default values)
  if (diagram.name) json.name = diagram.name;
  if (
    diagram.filename &&
    diagram.filename !== (diagram.name || "").toLowerCase().replace(/\s+/g, "_")
  ) {
    json.filename = diagram.filename;
  }
  if (diagram.direction !== "LR") json.direction = diagram.direction;
  if (diagram.curveStyle !== "ortho") json.curvestyle = diagram.curveStyle;
  if (diagram.autolabel) json.autolabel = diagram.autolabel;
  if (diagram.strict) json.strict = diagram.strict;
  if (diagram.theme !== "pastel") json.theme = diagram.theme;

  // Custom graph/node/edge attributes - but this requires knowing what's default
  // We store user-provided overrides by comparing with known defaults
  // For now, we access the public properties which already have user overrides merged

  return json;
}

/**
 * Populate the JSON representation using the diagram's internal state.
 * This is called from within the Diagram factory where we have access to closures.
 *
 * @param diagram - The diagram object
 * @param nodes - The internal nodes map
 * @param edges - The internal edges array
 * @param clusters - The internal clusters array
 * @param nodeIconMap - The node icon map (for finding Node objects)
 * @param options - The original diagram options
 * @returns Complete DiagramJSON
 */
export function buildDiagramJSON(
  diagram: Diagram,
  nodes: Map<string, { label: string; attrs: Record<string, unknown> }>,
  edges: Array<{ from: string; to: string; attrs: Record<string, string> }>,
  clusters: import("./Cluster.js").Cluster[],
  nodeIconMap: Array<{ node: import("./Node.js").Node; icon: string; iconPath?: string }>,
  nodeObjects: Map<string, import("./Node.js").Node>,
  options: DiagramOptions,
): DiagramJSON {
  const json: DiagramJSON = {
    nodes: [],
  };

  // Diagram-level options (only non-defaults)
  if (diagram.name) json.name = diagram.name;
  // Only include filename if it differs from auto-generated
  const autoFilename = diagram.name ? diagram.name.toLowerCase().replace(/\s+/g, "_") : "diagram";
  if (diagram.filename !== autoFilename) {
    json.filename = diagram.filename;
  }
  if (diagram.direction !== "LR") json.direction = diagram.direction;
  if (diagram.curveStyle !== "ortho") json.curvestyle = diagram.curveStyle;
  if (diagram.autolabel) json.autolabel = diagram.autolabel;
  if (diagram.strict) json.strict = diagram.strict;
  if (diagram.theme !== "pastel") json.theme = diagram.theme;

  // User-provided attribute overrides
  if (options.graphAttr && Object.keys(options.graphAttr).length > 0) {
    json.graphAttr = { ...options.graphAttr };
  }
  if (options.nodeAttr && Object.keys(options.nodeAttr).length > 0) {
    json.nodeAttr = { ...options.nodeAttr };
  }
  if (options.edgeAttr && Object.keys(options.edgeAttr).length > 0) {
    json.edgeAttr = { ...options.edgeAttr };
  }

  // Build a lookup map from nodeId -> Node object
  // Use nodeObjects map (all nodes), falling back to nodeIconMap (only icon nodes)
  const nodeObjLookup = new Map<string, import("./Node.js").Node>(nodeObjects);
  for (const entry of nodeIconMap) {
    if (!nodeObjLookup.has(entry.node.nodeId)) {
      nodeObjLookup.set(entry.node.nodeId, entry.node);
    }
  }

  // Collect cluster node IDs so we know which are top-level
  const clusterNodeIds = new Set<string>();
  function collectClusterNodeIds(cluster: import("./Cluster.js").Cluster): void {
    for (const [id] of cluster.getNodes()) {
      clusterNodeIds.add(id);
    }
    for (const sub of cluster.getSubgraphs()) {
      collectClusterNodeIds(sub);
    }
  }
  for (const cluster of clusters) {
    collectClusterNodeIds(cluster);
  }

  // Serialize top-level nodes (those not in any cluster)
  const clusterNodes: DiagramNodeJSON[] = [];
  for (const [nodeId, { label, attrs }] of nodes) {
    if (!clusterNodeIds.has(nodeId)) {
      json.nodes.push(serializeNode(nodeId, label, attrs, nodeObjLookup.get(nodeId)));
    }
  }

  // Serialize clusters
  if (clusters.length > 0) {
    json.clusters = clusters.map((c) => serializeCluster(c, clusterNodes, nodeObjLookup));
    // Add cluster nodes to the top-level nodes array
    json.nodes.push(...clusterNodes);
  }

  // Serialize edges
  if (edges.length > 0) {
    json.edges = serializeEdges(edges);
  }

  return json;
}

/**
 * Create a Diagram from a JSON representation.
 * This is the inverse of `diagram.toJSON()`.
 *
 * @param input - The JSON object or string representing a diagram
 * @returns A fully constructed Diagram with all nodes, edges, and clusters
 *
 * @example
 * ```typescript
 * import { Diagram } from "diagrams-js";
 *
 * const json = {
 *   name: "My Architecture",
 *   direction: "LR",
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
export async function fromJSON(
  input: DiagramJSON | string,
  opts?: FromJSONOptions,
): Promise<Diagram> {
  const json: DiagramJSON = typeof input === "string" ? (JSON.parse(input) as DiagramJSON) : input;

  // Validate required fields
  if (!json.nodes || !Array.isArray(json.nodes)) {
    throw new Error("Invalid diagram JSON: 'nodes' array is required");
  }

  // Collect unique provider/service pairs from nodes that have them
  const providerServicePairs = new Map<string, [string, string]>();
  for (const node of json.nodes) {
    if (node.provider && node.service) {
      const key = `${node.provider}/${node.service}`;
      providerServicePairs.set(key, [node.provider, node.service]);
    }
  }

  // Dynamically load provider modules based on provider/service
  const factoryLookup = await loadProviderModules(Array.from(providerServicePairs.values()));

  // Layer on any explicitly passed provider modules as overrides
  if (opts?.providers) {
    for (const mod of opts.providers) {
      for (const [name, fn] of Object.entries(mod)) {
        if (typeof fn === "function" && !name.startsWith("_")) {
          factoryLookup.set(name, fn);
        }
      }
    }
  }

  // Create diagram options from JSON
  const options: DiagramOptions = {};
  if (json.name !== undefined) options.name = json.name;
  if (json.filename !== undefined) options.filename = json.filename;
  if (json.direction !== undefined) options.direction = json.direction;
  if (json.curvestyle !== undefined) options.curvestyle = json.curvestyle;
  if (json.autolabel !== undefined) options.autolabel = json.autolabel;
  if (json.strict !== undefined) options.strict = json.strict;
  if (json.theme !== undefined) options.theme = json.theme;
  if (json.graphAttr !== undefined) options.graphAttr = json.graphAttr;
  if (json.nodeAttr !== undefined) options.nodeAttr = json.nodeAttr;
  if (json.edgeAttr !== undefined) options.edgeAttr = json.edgeAttr;

  // Create the diagram
  const diagram = createDiagram(json.name ?? "", options);

  // Build a map of node IDs to their Node objects
  const nodeMap = new Map<string, import("./Node.js").Node>();

  // Collect cluster membership: nodeId -> cluster label path
  const nodeClusterMap = new Map<string, string[]>();
  if (json.clusters) {
    function mapClusterNodes(cluster: DiagramClusterJSON, path: string[]): void {
      const currentPath = [...path, cluster.label];
      if (cluster.nodes) {
        for (const nodeId of cluster.nodes) {
          nodeClusterMap.set(nodeId, currentPath);
        }
      }
      if (cluster.clusters) {
        for (const sub of cluster.clusters) {
          mapClusterNodes(sub, currentPath);
        }
      }
    }
    for (const cluster of json.clusters) {
      mapClusterNodes(cluster, []);
    }
  }

  // Create clusters first (so we can add nodes to them)
  const clusterObjMap = new Map<string, import("./Cluster.js").Cluster>();
  if (json.clusters) {
    function createClusters(
      clusterDef: DiagramClusterJSON,
      parent: Diagram | import("./Cluster.js").Cluster,
    ): void {
      const cluster = parent.cluster(clusterDef.label);

      // Apply custom graph attributes
      if (clusterDef.graphAttr) {
        Object.assign(cluster.graphAttr, clusterDef.graphAttr);
      }

      // Build a unique key for this cluster (the label path)
      clusterObjMap.set(clusterDef.label, cluster);

      // Process nested clusters
      if (clusterDef.clusters) {
        for (const sub of clusterDef.clusters) {
          createClusters(sub, cluster);
        }
      }
    }
    for (const clusterDef of json.clusters) {
      createClusters(clusterDef, diagram);
    }
  }

  // Create all nodes
  for (const nodeDef of json.nodes) {
    // Validate node ID uniqueness
    if (nodeMap.has(nodeDef.id)) {
      throw new Error(`Duplicate node ID: "${nodeDef.id}"`);
    }

    // Try to use a provider factory function if type is specified and a matching factory exists.
    // This gives us the correct icon, provider metadata, etc. automatically.
    let node: import("./Node.js").Node;
    const factory = nodeDef.type ? factoryLookup.get(nodeDef.type) : undefined;

    if (factory) {
      // Use the provider factory - it sets ~provider, ~type, ~resource, ~iconDataUrl
      node = factory(nodeDef.label ?? "", { nodeId: nodeDef.id, ...nodeDef.attrs });
    } else {
      // Fallback: create a plain Node and set metadata manually
      const nodeOptions: Record<string, unknown> = {
        nodeId: nodeDef.id,
      };

      if (nodeDef.attrs) {
        Object.assign(nodeOptions, nodeDef.attrs);
      }

      node = Node(nodeDef.label ?? "", nodeOptions);

      const raw = node as unknown as Record<string, unknown>;
      if (nodeDef.provider) {
        raw["~provider"] = nodeDef.provider;
      }
      if (nodeDef.service) {
        raw["~type"] = nodeDef.service;
      }
      if (nodeDef.type) {
        raw["~resource"] = nodeDef.type;
      }
      // Set explicit iconUrl (for Custom nodes or manual override)
      if (nodeDef.iconUrl) {
        raw["~iconDataUrl"] = nodeDef.iconUrl;
      }
    }

    // Copy metadata if present
    if (nodeDef.metadata) {
      node.metadata = nodeDef.metadata;
    }

    // Add to correct parent (cluster or diagram)
    const clusterPath = nodeClusterMap.get(nodeDef.id);
    if (clusterPath && clusterPath.length > 0) {
      // Find the deepest cluster for this node
      const deepestLabel = clusterPath[clusterPath.length - 1];
      const cluster = clusterObjMap.get(deepestLabel);
      if (cluster) {
        cluster.add(node);
      } else {
        diagram.add(node);
      }
    } else {
      diagram.add(node);
    }

    nodeMap.set(nodeDef.id, node);
  }

  // Create all edges
  if (json.edges) {
    for (const edgeDef of json.edges) {
      const fromNode = nodeMap.get(edgeDef.from);
      const toNode = nodeMap.get(edgeDef.to);

      if (!fromNode) {
        throw new Error(`Edge references unknown source node: "${edgeDef.from}"`);
      }
      if (!toNode) {
        throw new Error(`Edge references unknown target node: "${edgeDef.to}"`);
      }

      const direction = edgeDef.direction ?? "forward";

      // Build edge options
      const edgeOptions: Record<string, unknown> = {};
      if (edgeDef.label) edgeOptions.label = edgeDef.label;
      if (edgeDef.color) edgeOptions.color = edgeDef.color;
      if (edgeDef.style) edgeOptions.style = edgeDef.style;
      if (edgeDef.attrs) Object.assign(edgeOptions, edgeDef.attrs);

      // Create the connection based on direction.
      // We directly connect using the diagram's internal ~connect method
      // to ensure the exact edge direction is preserved.
      const edge = Edge(edgeOptions);
      switch (direction) {
        case "forward":
          edge.forward = true;
          break;
        case "back":
          edge.reverse = true;
          break;
        case "both":
          edge.forward = true;
          edge.reverse = true;
          break;
        case "none":
          // neither forward nor reverse
          break;
        default:
          edge.forward = true;
      }
      fromNode["~connect"](toNode, edge);
    }
  }

  return diagram;
}
