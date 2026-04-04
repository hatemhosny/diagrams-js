import type { Node } from "./Node.js";
import type { EdgeOptions } from "./types.js";

export class Edge {
  private static defaultEdgeAttrs: Record<string, string> = {
    fontcolor: "#2D3436",
    fontname: "Sans-Serif",
    fontsize: "13",
  };

  node: Node | undefined;
  forward: boolean;
  reverse: boolean;
  private _attrs: Record<string, string> = {};

  constructor(options: EdgeOptions = {}) {
    this.node = options.node;
    this.forward = options.forward ?? false;
    this.reverse = options.reverse ?? false;

    // Set default attributes
    Object.assign(this._attrs, Edge.defaultEdgeAttrs);

    // Set optional attributes
    if (options.label) {
      this._attrs.label = options.label;
    }
    if (options.color) {
      this._attrs.color = options.color;
    }
    if (options.style) {
      this._attrs.style = options.style;
    }

    // Set any additional attributes
    for (const [key, value] of Object.entries(options)) {
      if (
        key !== "node" &&
        key !== "forward" &&
        key !== "reverse" &&
        key !== "label" &&
        key !== "color" &&
        key !== "style"
      ) {
        this._attrs[key] = String(value);
      }
    }
  }

  get attrs(): Record<string, string> {
    let direction: string;
    if (this.forward && this.reverse) {
      direction = "both";
    } else if (this.forward) {
      direction = "forward";
    } else if (this.reverse) {
      direction = "back";
    } else {
      direction = "none";
    }
    return { ...this._attrs, dir: direction };
  }

  /**
   * Connect to a node or another edge (for chaining)
   * Implements: Edge >> Node, Edge >> Edge, Edge >> [Nodes]
   */
  to(target: Node): Node;
  to(target: Edge): Edge;
  to(target: Node | Edge): Node | Edge {
    this.forward = true;
    if (target instanceof Edge) {
      // Edge >> Edge: merge attributes
      this._attrs = { ...this._attrs, ...target._attrs };
      return this;
    }
    // Edge >> Node: connect
    if (this.node) {
      this.node.connect(target, this);
      return target;
    }
    this.node = target;
    return target;
  }

  /**
   * Connect from a node or another edge
   * Implements: Edge << Node, Edge << Edge
   */
  from(target: Node): Node;
  from(target: Edge): Edge;
  from(target: Node | Edge): Node | Edge {
    this.reverse = true;
    if (target instanceof Edge) {
      this._attrs = { ...this._attrs, ...target._attrs };
      return this;
    }
    if (this.node) {
      target.connect(this.node, this);
      return target;
    }
    this.node = target;
    return target;
  }

  /**
   * Static factory methods for common edge styles
   */
  static label(label: string): Edge {
    return new Edge({ label });
  }

  static color(color: string): Edge {
    return new Edge({ color });
  }

  static style(style: string): Edge {
    return new Edge({ style });
  }
}
