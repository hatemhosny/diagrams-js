import type { Diagram } from "./Diagram.js";
import type { Cluster } from "./Cluster.js";
import { Edge } from "./Edge.js";
import type { NodeOptions } from "./types.js";

let _iconBaseDir = "";

/**
 * Set the base directory for icon paths
 * @param dir - The base directory path
 * @internal
 */
export function setIconBaseDir(dir: string): void {
  _iconBaseDir = dir;
}

/**
 * Get the current icon base directory
 * @returns The base directory path
 * @internal
 */
export function getIconBaseDir(): string {
  return _iconBaseDir;
}

/**
 * Represents a node in a diagram.
 * Nodes are connected using the `to()`, `from()`, and `with()` methods.
 *
 * @example
 * ```typescript
 * const db = Database("PostgreSQL");
 * const app = AppServer("API");
 *
 * // Connect db to app (db → app)
 * db.to(app);
 *
 * // Connect with edge styling
 * db.to(EdgeColor("red"), app);
 *
 * // Undirected connection
 * db.with(app);
 * ```
 */
export interface Node {
  /** The display label of the node */
  label: string;
  /** Unique identifier for the node */
  nodeId: string;
  /** The cluster this node belongs to, if any */
  cluster: Cluster | undefined;
  /**
   * Node attributes that can be modified by hooks.
   * This provides direct access to the internal attribute store.
   * Changes here will be reflected in the rendered output.
   */
  nodeAttrs: Record<string, string | number>;
  /** The cloud provider (e.g., "aws", "gcp", "azure") */
  provider?: string;
  /** The service type (e.g., "compute", "database", "storage") */
  type?: string;
  /** The specific resource type (e.g., "EC2", "S3", "RDS") */
  resource?: string;
  /** @internal */
  ["~id"]: string;
  /** @internal */
  ["~diagram"]: Diagram | null;
  /** @internal */
  ["~cluster"]: Cluster | undefined;
  /** @internal */
  ["~attrs"]: Record<string, string | number>;
  /** @internal */
  ["~iconDataUrl"]: string | null;
  /** @internal */
  ["~type"]?: string;
  /** @internal */
  ["~register"](parent: Diagram | Cluster): void;
  /** Metadata attached to this node (e.g., cloud provider specs, pricing) */
  metadata: Record<string, any>;

  /**
   * Connect this node to another node (forward direction)
   * Creates an edge from this node to the target
   * @param target - The target node or array of nodes
   * @returns The target node(s) for chaining
   */
  to(target: Node): Node;
  to(targets: Node[]): Node[];

  /**
   * Connect this node to another node with an edge
   * @param edge - The edge configuration
   * @returns The edge for further configuration
   */
  to(edge: Edge): Edge;

  /**
   * Connect this node to another node with a styled edge
   * @param edge - The edge configuration
   * @param target - The target node
   * @returns The target node for chaining
   */
  to(edge: Edge, target: Node): Node;
  to(edge: Edge, targets: Node[]): Node[];

  /**
   * Connect this node from another node (reverse direction)
   * Creates an edge pointing back from the target to this node
   * @param source - The source node or array of nodes
   * @returns This node for chaining
   */
  from(source: Node): Node;
  from(sources: Node[]): Node;

  /**
   * Connect from a node with an edge (reverse direction)
   * @param edge - The edge configuration
   * @param source - The source node
   * @returns This node for chaining
   */
  from(edge: Edge, source: Node): Node;
  from(edge: Edge, sources: Node[]): Node[];

  /**
   * Create an undirected connection between nodes
   * Creates an edge without arrowheads
   * @param target - The target node or array of nodes
   * @returns The target node(s) for chaining
   */
  with(target: Node): Node;
  with(targets: Node[]): Node[];

  /**
   * Create an undirected connection with edge styling
   * @param edge - The edge configuration
   * @param target - The target node
   * @returns The target node for chaining
   */
  with(edge: Edge, target: Node): Node;
  with(edge: Edge, targets: Node[]): Node[];

  /**
   * Internal method to connect this node to another with an edge
   * @param target - The target node
   * @param edge - The edge configuration
   * @returns The target node
   * @internal
   */
  ["~connect"](target: Node, edge: Edge): Node;
}

// Type guard for Edge
function isEdge(target: unknown): target is Edge {
  return (
    typeof target === "object" &&
    target !== null &&
    "attrs" in target &&
    "forward" in target &&
    "reverse" in target
  );
}

function _randId(): string {
  return `${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Create a new node
 * @param label - The display label for the node
 * @param options - Optional configuration for the node
 * @returns A new Node instance
 * @example
 * ```typescript
 * const node = Node("My Service", { shape: "box", color: "blue" });
 * diagram.add(node);
 * ```
 */
export function Node(label = "", options: NodeOptions = {}): Node {
  const _id = options.nodeId ?? _randId();
  let _diagram: Diagram | null = null;
  let _cluster: Cluster | undefined = undefined;
  const _attrs: Record<string, string | number> = {};
  let _iconDataUrl: string | null = null;
  let _metadata: Record<string, any> = {};

  // Check if this node has an icon data URL (embedded via esbuild dataurl loader)
  // This will be set by provider factory functions
  const iconDataUrl = (options as { ["~iconDataUrl"]?: string })["~iconDataUrl"];
  if (iconDataUrl) {
    _iconDataUrl = iconDataUrl;
  }

  // Track which icon-related properties user explicitly set in node options
  const userExplicitAttrs: Record<string, boolean> = {
    shape: options.shape !== undefined,
    height: options.height !== undefined,
    width: options.width !== undefined,
    fixedsize: options.fixedsize !== undefined,
    margin: options.margin !== undefined,
    labelloc: options.labelloc !== undefined,
    imagescale: options.imagescale !== undefined,
  };

  // Only set shape at node level when necessary:
  // 1. User explicitly set a shape (always respect it)
  // 2. Node has icon via options and user didn't set shape (set to "none")
  // Otherwise, inherit from global default (which is "box")
  if (userExplicitAttrs.shape) {
    _attrs.shape = String(options.shape);
  } else if (_iconDataUrl) {
    _attrs.shape = "none";
  }

  // Merge additional attributes (excluding internal keys and shape which we handled above)
  for (const [key, value] of Object.entries(options)) {
    if (key.startsWith("~") || key === "nodeId" || key === "shape") {
      continue;
    }
    _attrs[key] = String(value);
  }

  // If node has an icon via options, set the icon-related attributes
  // Provider nodes (where ~iconDataUrl is set after construction) will be handled in ~register
  if (_iconDataUrl) {
    Object.assign(_attrs, {
      height: "0.9",
      width: "0.8",
      fixedsize: "true",
      margin: "0,0",
      labelloc: "b",
      imagescale: "true",
    });
  }

  // Provider metadata internal storage (accessed via ~provider, ~type, ~resource)
  // These are set by provider factory functions using the ~prefixed properties
  // The public provider/type/resource getters/setters access these same properties

  const node: Node = {
    label,
    ["~id"]: _id,
    ["~diagram"]: null,
    ["~cluster"]: undefined,
    ["~attrs"]: _attrs,
    get ["~iconDataUrl"](): string | null {
      return _iconDataUrl;
    },
    set ["~iconDataUrl"](value: string | null) {
      _iconDataUrl = value;
    },

    get nodeId(): string {
      return _id;
    },

    /**
     * Node attributes that can be modified by hooks.
     * This provides direct access to the internal attribute store.
     * Changes here will be reflected in the rendered output.
     */
    get nodeAttrs(): Record<string, string | number> {
      return _attrs;
    },
    set nodeAttrs(value: Record<string, string | number>) {
      // Clear existing attrs and set new ones
      for (const key of Object.keys(_attrs)) {
        delete _attrs[key];
      }
      Object.assign(_attrs, value);
    },

    /**
     * Get/set the cloud provider
     * Accesses the internal ~provider property set by provider factory functions
     */
    get provider(): string | undefined {
      return (node as unknown as Record<string, string | undefined>)["~provider"];
    },
    set provider(value: string | undefined) {
      (node as unknown as Record<string, string | undefined>)["~provider"] = value;
    },

    /**
     * Get/set the service type
     * Accesses the internal ~type property set by provider factory functions
     */
    get type(): string | undefined {
      return (node as unknown as Record<string, string | undefined>)["~type"];
    },
    set type(value: string | undefined) {
      (node as unknown as Record<string, string | undefined>)["~type"] = value;
    },

    /**
     * Get/set the resource type
     * Accesses the internal ~resource property set by provider factory functions
     */
    get resource(): string | undefined {
      return (node as unknown as Record<string, string | undefined>)["~resource"];
    },
    set resource(value: string | undefined) {
      (node as unknown as Record<string, string | undefined>)["~resource"] = value;
    },

    /**
     * Get/set metadata for this node
     */
    get metadata(): Record<string, any> {
      return _metadata;
    },
    set metadata(value: Record<string, any>) {
      _metadata = value;
    },

    /**
     * Get the cluster this node belongs to, if any
     */
    get cluster(): Cluster | undefined {
      return _cluster;
    },

    /**
     * Register this node with a diagram or cluster
     * Called by Diagram.add() or Cluster.add()
     * @internal
     */
    ["~register"](parent: Diagram | Cluster): void {
      if (isCluster(parent)) {
        _cluster = parent;
        _diagram = parent.diagram;
      } else {
        _diagram = parent;
      }

      // Track node object reference for JSON serialization
      // Use `this` to capture Custom node wrappers (which spread from baseNode)
      _diagram["~trackNode"](this as unknown as Node);

      // Handle autolabel
      if (_diagram && _diagram.autolabel) {
        // Get the node type from options for autolabel prefix
        // Provider factory functions set ~type to the service name (e.g., "EC2", "S3")
        const prefix = options["~type"] ?? "Node";
        if (label) {
          node.label = prefix + "\n" + label;
        } else {
          node.label = prefix;
        }
      }

      // Check if icon was set (during construction or after by provider functions)
      // and update shape/icon attributes accordingly
      const currentIconDataUrl = node["~iconDataUrl"];
      if (currentIconDataUrl) {
        // Determine each icon-related attribute with priority:
        // 1. User explicitly set in node options (highest priority)
        // 2. User explicitly set at diagram level via nodeAttr
        // 3. Otherwise, use default value

        // Shape: default "none" (no border around icon)
        if (userExplicitAttrs.shape) {
          // Keep user-specified shape from node options
        } else if (_diagram["~userNodeAttr"]?.shape) {
          _attrs.shape = _diagram["~userNodeAttr"].shape;
        } else {
          _attrs.shape = "none";
        }

        // Height: default "0.9"
        if (userExplicitAttrs.height) {
          // Keep user-specified height
        } else if (_diagram["~userNodeAttr"]?.height) {
          _attrs.height = _diagram["~userNodeAttr"].height;
        } else {
          _attrs.height = "0.9";
        }

        // Width: default "0.8"
        if (userExplicitAttrs.width) {
          // Keep user-specified width
        } else if (_diagram["~userNodeAttr"]?.width) {
          _attrs.width = _diagram["~userNodeAttr"].width;
        } else {
          _attrs.width = "0.8";
        }

        // Fixedsize: default "true"
        if (userExplicitAttrs.fixedsize) {
          // Keep user-specified fixedsize
        } else if (_diagram["~userNodeAttr"]?.fixedsize) {
          _attrs.fixedsize = _diagram["~userNodeAttr"].fixedsize;
        } else {
          _attrs.fixedsize = "true";
        }

        // Margin: default "0,0"
        if (userExplicitAttrs.margin) {
          // Keep user-specified margin
        } else if (_diagram["~userNodeAttr"]?.margin) {
          _attrs.margin = _diagram["~userNodeAttr"].margin;
        } else {
          _attrs.margin = "0,0";
        }

        // Labelloc: default "b"
        if (userExplicitAttrs.labelloc) {
          // Keep user-specified labelloc
        } else if (_diagram["~userNodeAttr"]?.labelloc) {
          _attrs.labelloc = _diagram["~userNodeAttr"].labelloc;
        } else {
          _attrs.labelloc = "b";
        }

        // Imagescale: default "true"
        if (userExplicitAttrs.imagescale) {
          // Keep user-specified imagescale
        } else if (_diagram["~userNodeAttr"]?.imagescale) {
          _attrs.imagescale = _diagram["~userNodeAttr"].imagescale;
        } else {
          _attrs.imagescale = "true";
        }

        // Track this node for icon injection
        _diagram["~trackNodeWithIcon"](node, currentIconDataUrl);
      }

      // Register the node with the parent (diagram or cluster)
      // Use the node's current label and attrs (which may have been modified by hooks)
      if (isCluster(parent)) {
        parent["~node"](_id, node.label, _attrs);
      } else {
        parent["~node"](_id, node.label, _attrs);
      }

      // Handle Custom nodes with external icons
      // Use `this` instead of `node` because Custom nodes add properties after Node creation
      if (_isCustomNode(this) && _diagram) {
        // Track the pending icon load so render can wait for it
        const iconLoadPromise = _handleCustomNodeIcon(this, _diagram);
        _diagram["~trackPendingIconLoad"](iconLoadPromise);
      }
    },

    /**
     * Connect to another node
     * Python: Self >> Node (forward)
     * TypeScript: node.to(otherNode)
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to(targetOrEdge: any, targetOrUndefined?: any): any {
      if (isEdge(targetOrEdge)) {
        // Edge provided: node.to(edge, target?) or node.to(edge)
        targetOrEdge.node = node;
        targetOrEdge.forward = true;

        // If no target provided, return the edge for chaining
        if (targetOrUndefined === undefined) {
          return targetOrEdge;
        }

        const target = targetOrUndefined;
        if (Array.isArray(target)) {
          for (const t of target) {
            // Create a copy of the edge for each target to avoid shared state
            const edgeCopy = Edge({
              ...targetOrEdge.attrs,
              node: node,
              forward: true,
            });
            node["~connect"](t, edgeCopy);
          }
          return target;
        }
        return node["~connect"](target, targetOrEdge);
      }

      const target = targetOrEdge;

      if (Array.isArray(target)) {
        for (const t of target) {
          // Create a new edge for each target to avoid shared state
          const edge = Edge({ node: node, forward: true });
          node["~connect"](t, edge);
        }
        return target;
      }
      const edge = Edge({ node: node, forward: true });
      return node["~connect"](target, edge);
    },

    /**
     * Connect from another node (reverse direction)
     * Python: Self << Node
     * TypeScript: node.from(otherNode)
     *
     * Example: pod.from(rs) creates pod << rs (arrow from pod back to rs)
     * This creates edges with dir=back
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    from(sourceOrEdge: any, sourceOrUndefined?: any): any {
      if (isEdge(sourceOrEdge)) {
        // Edge provided: node.from(edge, source)
        sourceOrEdge.node = node;
        sourceOrEdge.reverse = true;
        const source = sourceOrUndefined!;
        if (Array.isArray(source)) {
          for (const s of source) {
            // Create a copy of the edge for each source to avoid shared state
            const edgeCopy = Edge({
              ...sourceOrEdge.attrs,
              node: node,
              reverse: true,
            });
            node["~connect"](s, edgeCopy);
          }
          return node;
        }
        return node["~connect"](source, sourceOrEdge);
      }

      const source = sourceOrEdge;

      // When we call p.from(rs), we want pod << rs
      // This creates an edge from pod to rs with dir=back
      // Graphviz will place pod to the left of rs, and the arrow points back
      if (Array.isArray(source)) {
        for (const s of source) {
          // Create a new edge for each source to avoid shared state
          // Edge goes from this (target) to source with reverse=true (dir=back)
          const edge = Edge({ node: s, reverse: true });
          node["~connect"](s, edge);
        }
        return node;
      }
      // Edge goes from this (target) to source with reverse=true (dir=back)
      const edge = Edge({ node: source, reverse: true });
      return node["~connect"](source, edge);
    },

    /**
     * Undirected connection (no arrows)
     * Python: Self - Node
     * TypeScript: node.with(otherNode)
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    with(targetOrEdge: any, targetOrUndefined?: any): any {
      if (isEdge(targetOrEdge)) {
        // Edge provided: node.with(edge, target)
        // For undirected edges, don't set forward or reverse (results in dir="none")
        targetOrEdge.node = node;
        const target = targetOrUndefined!;
        if (Array.isArray(target)) {
          for (const t of target) {
            // Create a copy of the edge for each target to avoid shared state
            const edgeCopy = Edge({
              ...targetOrEdge.attrs,
              node: node,
            });
            node["~connect"](t, edgeCopy);
          }
          return target;
        }
        return node["~connect"](target, targetOrEdge);
      }

      const target = targetOrEdge;
      // For undirected connections, don't set forward or reverse flags
      // This results in dir="none" (no arrow heads)
      const edge = Edge({ node: node });

      if (Array.isArray(target)) {
        for (const t of target) {
          node["~connect"](t, edge);
        }
        return target;
      }
      return node["~connect"](target, edge);
    },

    /**
     * Internal connect method
     */
    ["~connect"](target: Node, edge: Edge): Node {
      if (!target || typeof target !== "object" || !("nodeId" in target)) {
        throw new Error(`${String(target)} is not a valid Node`);
      }
      if (!edge || typeof edge !== "object" || !("attrs" in edge)) {
        throw new Error(`${String(edge)} is not a valid Edge`);
      }
      if (!_diagram) {
        throw new Error("Node is not registered with a diagram");
      }
      _diagram["~connect"](node, target, edge);
      return target;
    },
  };

  return node;
}

// Type guard for Cluster
function isCluster(parent: unknown): parent is Cluster {
  return (
    typeof parent === "object" &&
    parent !== null &&
    "getNodes" in parent &&
    typeof (parent as Cluster).getNodes === "function"
  );
}

/**
 * Check if this is a Custom node (has external icon)
 * @internal
 */
function _isCustomNode(node: Node): boolean {
  return (
    "~getIconUrl" in node &&
    typeof (node as { ["~getIconUrl"]: () => string })["~getIconUrl"] === "function"
  );
}

/**
 * Handle loading and tracking of Custom node icon
 * @internal
 */
async function _handleCustomNodeIcon(node: Node, diagram: Diagram): Promise<void> {
  const customNode = node as unknown as {
    ["~getIconUrl"]: () => string;
    loadIcon: () => Promise<string | null>;
  };
  const iconUrl = customNode["~getIconUrl"]();

  // If it's already a data URL, track it directly
  if (iconUrl.startsWith("data:")) {
    diagram["~trackNodeWithIcon"](node, iconUrl);
    return;
  }

  // Otherwise, load the icon asynchronously
  try {
    const dataUrl = await customNode.loadIcon();
    if (dataUrl) {
      diagram["~trackNodeWithIcon"](node, dataUrl);
    }
  } catch (error) {
    console.warn(`Failed to load custom icon for node ${node.nodeId}:`, error);
  }
}
