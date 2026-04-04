import type { Diagram } from "./Diagram.js";
import type { Node } from "./Node.js";

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
    diagram?: Diagram,
    parent?: Cluster,
  ) {
    this.label = label;
    this.name = `cluster_${label.replace(/\s+/g, "_")}`;

    // Diagram can be passed explicitly or must exist in context
    if (!diagram) {
      throw new Error("Cluster must be created through diagram.cluster() or cluster.cluster()");
    }
    this._diagram = diagram;
    this._parent = parent;

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
   * Get the diagram this cluster belongs to
   * @internal
   */
  get diagram(): Diagram {
    return this._diagram;
  }

  /**
   * Add a node to this cluster (internal method)
   */
  node(nodeId: string, label: string, attrs: Record<string, unknown>): void {
    this._nodes.set(nodeId, { label, attrs });
  }

  /**
   * Add a node to this cluster
   * Explicitly registers the node with this cluster
   */
  add<T extends Node>(node: T): T {
    node._register(this);
    return node;
  }

  /**
   * Add a subgraph (nested cluster)
   */
  subgraph(cluster: Cluster): void {
    this._subgraphs.push(cluster);
  }

  /**
   * Create a nested cluster within this one
   * @param label - The label for the nested cluster
   * @returns The created nested cluster
   */
  cluster(label: string): Cluster {
    const child = new Cluster(label, "LR", undefined, this._diagram, this);
    this._subgraphs.push(child);
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
