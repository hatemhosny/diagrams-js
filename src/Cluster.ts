import type { Diagram } from "./Diagram.js";
import type { Node } from "./Node.js";
import { getDiagram, getCluster, setCluster, clearCluster } from "./context.js";
import type { ThemeConfig } from "./types.js";

export class Cluster {
  private static defaultGraphAttrs: Record<string, string> = {
    shape: "box",
    style: "rounded",
    labeljust: "l",
    fontname: "Sans-Serif",
    fontsize: "12",
  };

  label: string;
  name: string;
  private _diagram: Diagram;
  private _parent: Cluster | undefined;
  private _nodes: Map<string, { label: string; attrs: Record<string, unknown> }> = new Map();
  private _subgraphs: Cluster[] = [];
  depth: number;
  graphAttr: Record<string, string> = {};

  constructor(
    label = "cluster",
    direction: "TB" | "BT" | "LR" | "RL" = "LR",
    graphAttr?: Record<string, string>,
  ) {
    this.label = label;
    this.name = `cluster_${label.replace(/\s+/g, "_")}`;

    // Node must belong to a diagram
    const diagram = getDiagram();
    if (!diagram) {
      throw new Error("Global diagrams context not set up. Create a Diagram first.");
    }
    this._diagram = diagram;
    this._parent = getCluster();

    // Get theme configuration from the diagram
    const themeConfig = this._diagram.themeConfig;

    // Set default attributes
    Object.assign(this.graphAttr, Cluster.defaultGraphAttrs);
    this.graphAttr.label = this.label;

    // Apply theme colors
    this.graphAttr.pencolor = themeConfig.pencolor;

    // Set cluster depth for distinguishing the background color
    this.depth = this._parent ? this._parent.depth + 1 : 0;
    const bgcolors = themeConfig.bgcolor;
    const colorIdx = this.depth % bgcolors.length;
    this.graphAttr.bgcolor = bgcolors[colorIdx];

    // Merge passed in attributes
    if (graphAttr) {
      Object.assign(this.graphAttr, graphAttr);
    }

    // Ignore direction parameter but use it to avoid unused warning
    void direction;
  }

  /**
   * Add a node to this cluster (internal method)
   */
  node(nodeId: string, label: string, attrs: Record<string, unknown>): void {
    this._nodes.set(nodeId, { label, attrs });
  }

  /**
   * Add a node to this cluster
   * This provides API consistency with Diagram.add()
   */
  add<T extends Node>(node: T): T {
    return node;
  }

  /**
   * Add a subgraph (nested cluster)
   */
  subgraph(cluster: Cluster): void {
    this._subgraphs.push(cluster);
  }

  /**
   * Execute a callback with this cluster as the active context
   */
  run<T>(callback: (cluster: Cluster) => T): T {
    setCluster(this);
    try {
      return callback(this);
    } finally {
      clearCluster();
    }
  }

  /**
   * Create a nested cluster within this one
   */
  cluster(label: string, callback: (cluster: Cluster) => void): Cluster {
    const child = new Cluster(label);
    child.run((c) => {
      callback(c);
      this.subgraph(c);
    });
    return child;
  }

  /**
   * Get all nodes in this cluster
   */
  getNodes(): Map<string, { label: string; attrs: Record<string, unknown> }> {
    return this._nodes;
  }

  /**
   * Get all subgraphs
   */
  getSubgraphs(): Cluster[] {
    return this._subgraphs;
  }

  /**
   * Get parent cluster (if any)
   */
  getParent(): Cluster | undefined {
    return this._parent;
  }

  /**
   * Get parent diagram
   */
  getDiagram(): Diagram {
    return this._diagram;
  }
}
