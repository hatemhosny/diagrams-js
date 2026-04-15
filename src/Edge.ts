import type { Node } from "./Node.js";
import type { EdgeOptions } from "./types.js";

/**
 * Represents an edge (connection) between nodes in a diagram.
 * Edges can be styled with labels, colors, and styles.
 *
 * @example
 * ```typescript
 * // Create a labeled edge
 * db.to(EdgeLabel("queries"), app);
 *
 * // Create a colored edge
 * db.to(EdgeColor("red"), app);
 *
 * // Create a styled edge
 * db.to(EdgeStyle("dashed"), app);
 * ```
 */
export interface Edge {
  /** The node this edge is connected to */
  node: Node | undefined;
  /** Whether this is a forward edge (arrow points forward) */
  forward: boolean;
  /** Whether this is a reverse edge (arrow points back) */
  reverse: boolean;
  /** Graphviz attributes for this edge (includes computed properties like dir) */
  attrs: Record<string, string>;
  /**
   * Edge attributes that can be modified by hooks.
   * This is the internal attribute store that hooks should modify.
   * Changes here will be reflected in the attrs getter.
   */
  edgeAttrs: Record<string, string>;

  /**
   * Connect this edge to a node or merge with another edge
   * @param target - The target node or edge to merge
   * @returns The target node or this edge
   */
  to(target: Node | Edge): Node | Edge;

  /**
   * Connect from a node or merge with another edge
   * @param target - The source node or edge to merge
   * @returns The source node or this edge
   */
  from(target: Node | Edge): Node | Edge;
}

/**
 * Create a new edge
 * @param options - Edge configuration options
 * @returns A new Edge instance
 * @example
 * ```typescript
 * const edge = Edge({ label: "HTTP", color: "blue", style: "dashed" });
 * nodeA.to(edge, nodeB);
 * ```
 */
export function Edge(options: EdgeOptions = {}): Edge {
  let node: Node | undefined = options.node;
  let forward = options.forward ?? false;
  let reverse = options.reverse ?? false;
  const _attrs: Record<string, string> = {};

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
        node["~connect"](target, edge);
        return target;
      }
      node = target;
      return target;
    },
    /**
     * Edge attributes that can be modified by hooks.
     * This provides direct access to the internal attribute store.
     * Changes here will be reflected in the attrs getter.
     */
    get edgeAttrs(): Record<string, string> {
      return _attrs;
    },
    set edgeAttrs(value: Record<string, string>) {
      // Clear existing attrs and set new ones
      for (const key of Object.keys(_attrs)) {
        delete _attrs[key];
      }
      Object.assign(_attrs, value);
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
        target["~connect"](node, edge);
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
 * Create an edge with a label
 * @param label - The text label for the edge
 * @returns An Edge with the specified label
 * @example
 * ```typescript
 * db.to(EdgeLabel("queries"), app);
 * ```
 */
export function EdgeLabel(label: string): Edge {
  return Edge({ label });
}

/**
 * Create an edge with a color
 * @param color - The color for the edge (CSS color or Graphviz color)
 * @returns An Edge with the specified color
 * @example
 * ```typescript
 * db.to(EdgeColor("red"), app);
 * ```
 */
export function EdgeColor(color: string): Edge {
  return Edge({ color });
}

/**
 * Create an edge with a style
 * @param style - The line style (solid, dashed, dotted, etc.)
 * @returns An Edge with the specified style
 * @example
 * ```typescript
 * db.to(EdgeStyle("dashed"), app);
 * ```
 */
export function EdgeStyle(style: string): Edge {
  return Edge({ style });
}

// Backwards compatibility - attach static methods to Edge function
Edge.label = EdgeLabel;
Edge.color = EdgeColor;
Edge.style = EdgeStyle;
