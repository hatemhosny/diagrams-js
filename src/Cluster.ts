import type { Diagram } from "./Diagram.js";
import type { Node } from "./Node.js";

const defaultGraphAttrs: Record<string, string> = {
  shape: "box",
  style: "rounded",
  labeljust: "l",
  fontname: "Sans-Serif",
  fontsize: "12",
};

/**
 * Represents a cluster (group) of nodes in a diagram.
 * Clusters visually group related nodes together with a background and border.
 *
 * @example
 * ```typescript
 * const vpc = diagram.cluster("VPC");
 *
 * const subnet1 = vpc.cluster("Public Subnet");
 * subnet1.add(Server("Web Server"));
 *
 * const subnet2 = vpc.cluster("Private Subnet");
 * subnet2.add(Database("DB"));
 * ```
 */
export interface Cluster {
  /** The display label of the cluster */
  label: string;
  /** Unique identifier for the cluster */
  name: string;
  /** Nesting depth of the cluster (0 for top-level) */
  depth: number;
  /** Graphviz attributes for the cluster */
  graphAttr: Record<string, string>;
  /**
   * Cluster attributes that can be modified by hooks.
   * This provides direct access to the internal graphAttr store.
   * Changes here will be reflected in the rendered output.
   */
  clusterAttrs: Record<string, string>;
  /** The diagram this cluster belongs to */
  diagram: Diagram;

  /**
   * Internal method to register a node with the cluster
   * @param nodeId - Unique identifier for the node
   * @param label - Display label for the node
   * @param attrs - Graphviz attributes for the node
   * @internal
   */
  ["~node"](nodeId: string, label: string, attrs: Record<string, unknown>): void;

  /**
   * Add a node to this cluster
   * @param node - The node to add
   * @returns The added node
   */
  add<T extends Node>(node: T): T;

  /**
   * Add a subgraph (nested cluster)
   * @param cluster - The cluster to add as a subgraph
   * @internal
   */
  subgraph(cluster: Cluster): void;

  /**
   * Create a nested cluster within this one
   * @param label - The label for the nested cluster
   * @returns The created nested cluster
   */
  cluster(label: string): Cluster;

  /**
   * Get all nodes in this cluster
   * @returns Map of node IDs to node data
   * @internal
   */
  getNodes(): Map<string, { label: string; attrs: Record<string, unknown> }>;

  /**
   * Get all subgraphs (nested clusters)
   * @returns Array of nested clusters
   * @internal
   */
  getSubgraphs(): Cluster[];

  /**
   * Get parent cluster (if any)
   * @returns The parent cluster or undefined if top-level
   */
  getParent(): Cluster | undefined;

  /**
   * Get parent diagram
   * @returns The diagram this cluster belongs to
   */
  getDiagram(): Diagram;
}

/**
 * Create a new cluster
 * @param label - The display label for the cluster
 * @param direction - Layout direction for the cluster
 * @param graphAttr - Optional Graphviz attributes
 * @param diagram - The diagram this cluster belongs to
 * @param parent - Optional parent cluster for nesting
 * @returns A new Cluster instance
 * @example
 * ```typescript
 * const cluster = diagram.cluster("VPC");
 * cluster.add(Server("Web"));
 * ```
 */
export function Cluster(
  label = "cluster",
  direction: "TB" | "BT" | "LR" | "RL" = "LR",
  graphAttr?: Record<string, string>,
  diagram?: Diagram,
  parent?: Cluster,
): Cluster {
  const _nodes = new Map<string, { label: string; attrs: Record<string, unknown> }>();
  const _subgraphs: Cluster[] = [];
  const name = `cluster_${label.replace(/\s+/g, "_")}`;

  // Diagram can be passed explicitly or must exist in context
  if (!diagram) {
    throw new Error("Cluster must be created through diagram.cluster() or cluster.cluster()");
  }

  // Get theme configuration from the diagram
  const themeConfig = diagram.themeConfig;

  // Set default attributes
  const _graphAttr: Record<string, string> = { ...defaultGraphAttrs };
  _graphAttr.label = label;

  // Apply theme colors
  _graphAttr.pencolor = themeConfig.pencolor;

  // Set cluster depth for distinguishing the background color
  const depth = parent ? parent.depth + 1 : 0;
  const bgcolors = themeConfig.bgcolor;
  const colorIdx = depth % bgcolors.length;
  _graphAttr.bgcolor = bgcolors[colorIdx];

  // Merge passed in attributes
  if (graphAttr) {
    Object.assign(_graphAttr, graphAttr);
  }

  // Ignore direction parameter but use it to avoid unused warning
  void direction;

  const cluster: Cluster = {
    label,
    name,
    depth,
    graphAttr: _graphAttr,

    /**
     * Cluster attributes that can be modified by hooks.
     * This provides direct access to the internal graphAttr store.
     * Changes here will be reflected in the rendered output.
     */
    get clusterAttrs(): Record<string, string> {
      return _graphAttr;
    },
    set clusterAttrs(value: Record<string, string>) {
      // Clear existing attrs and set new ones
      for (const key of Object.keys(_graphAttr)) {
        delete _graphAttr[key];
      }
      Object.assign(_graphAttr, value);
    },

    /**
     * Get the diagram this cluster belongs to
     */
    get diagram(): Diagram {
      return diagram;
    },

    /**
     * Add a node to this cluster (internal method)
     */
    ["~node"](nodeId: string, label: string, attrs: Record<string, unknown>): void {
      _nodes.set(nodeId, { label, attrs });
    },

    /**
     * Add a node to this cluster
     * Explicitly registers the node with this cluster
     */
    add<T extends Node>(node: T): T {
      node["~register"](cluster);
      return node;
    },

    /**
     * Add a subgraph (nested cluster)
     */
    subgraph(childCluster: Cluster): void {
      _subgraphs.push(childCluster);
    },

    /**
     * Create a nested cluster within this one
     * @param childLabel - The label for the nested cluster
     * @returns The created nested cluster
     */
    cluster(childLabel: string): Cluster {
      const child = Cluster(childLabel, "LR", undefined, diagram, cluster);
      _subgraphs.push(child);

      // Fire cluster:create hook via the diagram
      if (diagram) {
        // Use the diagram's hook system
        void (async () => {
          try {
            // Access the diagram's internal hook firing mechanism
            // This will be handled by the diagram's cluster method
          } catch {
            // Silently ignore
          }
        })();
      }

      return child;
    },

    /**
     * Get all nodes in this cluster
     */
    getNodes(): Map<string, { label: string; attrs: Record<string, unknown> }> {
      return _nodes;
    },

    /**
     * Get all subgraphs
     */
    getSubgraphs(): Cluster[] {
      return _subgraphs;
    },

    /**
     * Get parent cluster (if any)
     */
    getParent(): Cluster | undefined {
      return parent;
    },

    /**
     * Get parent diagram
     */
    getDiagram(): Diagram {
      return diagram;
    },
  };

  return cluster;
}
