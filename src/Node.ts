import type { Diagram } from "./Diagram.js";
import { Cluster } from "./Cluster.js";
import { Edge } from "./Edge.js";
import type { NodeOptions } from "./types.js";

let _iconBaseDir = "";

export function setIconBaseDir(dir: string): void {
  _iconBaseDir = dir;
}

export function getIconBaseDir(): string {
  return _iconBaseDir;
}

export class Node {
  protected static _provider: string | null = null;
  protected static _type: string | null = null;
  protected static _iconDir: string | null = null;
  protected static _icon: string | null = null;
  protected static _iconDataUrl: string | null = null;
  protected static _height = 1.9;

  private _id: string;
  label: string;
  private _diagram: Diagram;
  private _cluster: Cluster | undefined;
  private _attrs: Record<string, string | number> = {};

  constructor(label = "", options: NodeOptions = {}) {
    this._id = options.nodeId ?? this._randId();
    this.label = label;
    this._diagram = null as unknown as Diagram;
    this._cluster = undefined;

    // Check if this node has an icon data URL (embedded via esbuild dataurl loader)
    const iconDataUrl = (this.constructor as typeof Node)._iconDataUrl;
    if (iconDataUrl) {
      this._attrs = {
        shape: "none",
        height: "1.0",
        width: "1.0",
        fixedsize: "true",
        margin: "0,0",
      };
    }

    // Merge additional attributes
    for (const [key, value] of Object.entries(options)) {
      if (key !== "nodeId") {
        this._attrs[key] = String(value);
      }
    }
  }

  /**
   * Register this node with a diagram or cluster
   * Called by Diagram.add() or Cluster.add()
   * @internal
   */
  _register(parent: Diagram | Cluster): void {
    if (parent instanceof Cluster) {
      this._cluster = parent;
      this._diagram = parent._diagram;
      parent.node(this._id, this.label, this._attrs);
    } else {
      this._diagram = parent;
      parent.node(this._id, this.label, this._attrs);
    }

    // Handle autolabel
    if (this._diagram.autolabel) {
      const prefix = this.constructor.name;
      if (this.label) {
        this.label = prefix + "\n" + this.label;
      } else {
        this.label = prefix;
      }
    }

    // Track this node if it has an icon data URL (for auto-icon injection)
    const iconDataUrl = (this.constructor as typeof Node)._iconDataUrl;
    if (iconDataUrl && this._diagram) {
      this._diagram.trackNodeWithIcon(this, iconDataUrl);
    }
  }

  get nodeId(): string {
    return this._id;
  }

  /**
   * Connect to another node
   * Python: Self >> Node (forward)
   * TypeScript: node.to(otherNode)
   */
  to(target: Node): Node;
  to(target: Node[]): Node[];
  to(edge: Edge, target: Node): Node;
  to(edge: Edge, target: Node[]): Node[];
  to(targetOrEdge: Node | Node[] | Edge, targetOrUndefined?: Node | Node[]): Node | Node[] {
    if (targetOrEdge instanceof Edge) {
      // Edge provided: node.to(edge, target)
      targetOrEdge.node = this;
      targetOrEdge.forward = true;
      const target = targetOrUndefined!;
      if (Array.isArray(target)) {
        for (const t of target) {
          this.connect(t, targetOrEdge);
        }
        return target;
      }
      return this.connect(target, targetOrEdge);
    }

    const target = targetOrEdge;
    const edge = new Edge({ node: this, forward: true });

    if (Array.isArray(target)) {
      for (const t of target) {
        this.connect(t, edge);
      }
      return target;
    }
    return this.connect(target, edge);
  }

  /**
   * Connect from another node (reverse direction)
   * Python: Self << Node
   * TypeScript: node.from(otherNode)
   * 
   * Example: pod.from(rs) means rs -> pod (arrow from rs to pod)
   */
  from(source: Node): Node;
  from(sources: Node[]): Node;
  from(sources: Node | Node[]): Node {
    // When we call p.from(rs), we want rs -> p (arrow from rs to p)
    // So we create a forward edge from source to this node
    const edge = new Edge({ node: this, forward: true });

    if (Array.isArray(sources)) {
      for (const source of sources) {
        source.connect(this, edge);
      }
      return this;
    }
    return sources.connect(this, edge);
  }

  /**
   * Bidirectional connection (undirected)
   * Python: Self - Node
   * TypeScript: node.with(otherNode)
   */
  with(target: Node): Node;
  with(targets: Node[]): Node[];
  with(target: Node | Node[]): Node | Node[] {
    const edge = new Edge({ node: this });

    if (Array.isArray(target)) {
      for (const t of target) {
        this.connect(t, edge);
      }
      return target;
    }
    return this.connect(target, edge);
  }

  /**
   * Internal connect method
   */
  connect(target: Node, edge: Edge): Node {
    if (!(target instanceof Node)) {
      throw new Error(`${String(target)} is not a valid Node`);
    }
    if (!(edge instanceof Edge)) {
      throw new Error(`${String(edge)} is not a valid Edge`);
    }
    this._diagram.connect(this, target, edge);
    return target;
  }

  private _randId(): string {
    return `${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
