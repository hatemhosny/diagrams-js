import type { Node } from "./Node.js";
import type { EdgeOptions } from "./types.js";

const defaultEdgeAttrs: Record<string, string> = {
  fontcolor: "#2D3436",
  fontname: "Sans-Serif",
  fontsize: "13",
};

export interface Edge {
  node: Node | undefined;
  forward: boolean;
  reverse: boolean;
  attrs: Record<string, string>;
  to(target: Node): Node;
  to(target: Edge): Edge;
  to(target: Node | Edge): Node | Edge;
  from(target: Node): Node;
  from(target: Edge): Edge;
  from(target: Node | Edge): Node | Edge;
}

export function Edge(options: EdgeOptions = {}): Edge {
  let node: Node | undefined = options.node;
  let forward = options.forward ?? false;
  let reverse = options.reverse ?? false;
  const _attrs: Record<string, string> = {};

  // Set default attributes
  Object.assign(_attrs, defaultEdgeAttrs);

  // Set optional attributes
  if (options.label) {
    _attrs.label = options.label;
  }
  if (options.color) {
    _attrs.color = options.color;
  }
  if (options.style) {
    _attrs.style = options.style;
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
      _attrs[key] = String(value);
    }
  }

  const edge: Edge = {
    get node() {
      return node;
    },
    set node(value) {
      node = value;
    },
    get forward() {
      return forward;
    },
    set forward(value) {
      forward = value;
    },
    get reverse() {
      return reverse;
    },
    set reverse(value) {
      reverse = value;
    },
    get attrs(): Record<string, string> {
      let direction: string;
      if (forward && reverse) {
        direction = "both";
      } else if (forward) {
        direction = "forward";
      } else if (reverse) {
        direction = "back";
      } else {
        direction = "none";
      }
      return { ..._attrs, dir: direction };
    },
    /**
     * Connect to a node or another edge (for chaining)
     * Implements: Edge >> Node, Edge >> Edge, Edge >> [Nodes]
     */
    to(target: Node | Edge): Node | Edge {
      forward = true;
      if (isEdge(target)) {
        // Edge >> Edge: merge attributes
        Object.assign(_attrs, target.attrs);
        return edge;
      }
      // Edge >> Node: connect
      if (node) {
        node.connect(target, edge);
        return target;
      }
      node = target;
      return target;
    },
    /**
     * Connect from a node or another edge
     * Implements: Edge << Node, Edge << Edge
     */
    from(target: Node | Edge): Node | Edge {
      reverse = true;
      if (isEdge(target)) {
        Object.assign(_attrs, target.attrs);
        return edge;
      }
      if (node) {
        target.connect(node, edge);
        return target;
      }
      node = target;
      return target;
    },
  };

  return edge;
}

// Type guard to check if something is an Edge
function isEdge(target: unknown): target is Edge {
  return (
    typeof target === "object" &&
    target !== null &&
    "attrs" in target &&
    "forward" in target &&
    "reverse" in target
  );
}

/**
 * Static factory methods for common edge styles
 */
export function EdgeLabel(label: string): Edge {
  return Edge({ label });
}

export function EdgeColor(color: string): Edge {
  return Edge({ color });
}

export function EdgeStyle(style: string): Edge {
  return Edge({ style });
}

// Backwards compatibility - attach static methods to Edge function
Edge.label = EdgeLabel;
Edge.color = EdgeColor;
Edge.style = EdgeStyle;
