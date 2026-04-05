import type { Diagram } from "./Diagram.js";
import type { Node } from "./Node.js";

const defaultGraphAttrs: Record<string, string> = {
  shape: "box",
  style: "rounded",
  labeljust: "l",
  fontname: "Sans-Serif",
  fontsize: "12",
};

export interface Cluster {
  label: string;
  name: string;
  depth: number;
  graphAttr: Record<string, string>;
  diagram: Diagram;
  node(nodeId: string, label: string, attrs: Record<string, unknown>): void;
  add<T extends Node>(node: T): T;
  subgraph(cluster: Cluster): void;
  cluster(label: string): Cluster;
  getNodes(): Map<string, { label: string; attrs: Record<string, unknown> }>;
  getSubgraphs(): Cluster[];
  getParent(): Cluster | undefined;
  getDiagram(): Diagram;
}

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
     * Get the diagram this cluster belongs to
     */
    get diagram(): Diagram {
      return diagram;
    },

    /**
     * Add a node to this cluster (internal method)
     */
    node(nodeId: string, label: string, attrs: Record<string, unknown>): void {
      _nodes.set(nodeId, { label, attrs });
    },

    /**
     * Add a node to this cluster
     * Explicitly registers the node with this cluster
     */
    add<T extends Node>(node: T): T {
      node._register(cluster);
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
