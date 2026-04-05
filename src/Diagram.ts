import { instance } from "@viz-js/viz";
import type { Viz } from "@viz-js/viz";
import { setDiagram } from "./context.js";
import { Cluster } from "./Cluster.js";
import type { Node } from "./Node.js";
import { Edge } from "./Edge.js";
import {
  THEMES,
  type DiagramOptions,
  type RenderOptions,
  type ThemeName,
  type ThemeConfig,
} from "./types.js";
import type { NodeIconMap, IconData } from "./icons.js";

export class Diagram {
  private static directions = ["TB", "BT", "LR", "RL"] as const;
  private static curveStyles = ["ortho", "curved", "spline", "polyline"] as const;

  private static defaultGraphAttrs: Record<string, string> = {
    pad: "0.05",
    splines: "ortho",
    nodesep: "0.15",
    ranksep: "0.20",
    fontname: "Sans-Serif",
    fontsize: "12",
  };

  private static defaultNodeAttrs: Record<string, string> = {
    shape: "box",
    style: "rounded",
    fixedsize: "true",
    width: "1.4",
    height: "1.4",
    labelloc: "b",
    imagescale: "true",
    fontname: "Sans-Serif",
    fontsize: "10",
  };

  private static defaultEdgeAttrs: Record<string, string> = {
    arrowsize: "0.5",
  };

  name: string;
  filename: string;
  direction: "TB" | "BT" | "LR" | "RL";
  curveStyle: "ortho" | "curved" | "spline" | "polyline";
  autolabel: boolean;
  strict: boolean;
  theme: ThemeName;
  themeConfig: ThemeConfig;
  graphAttr: Record<string, string>;
  nodeAttr: Record<string, string>;
  edgeAttr: Record<string, string>;

  private _nodes: Map<string, { label: string; attrs: Record<string, unknown> }> = new Map();
  private _edges: Array<{
    from: string;
    to: string;
    attrs: Record<string, string>;
  }> = [];
  private _clusters: Cluster[] = [];
  private _viz: Viz | null = null;
  private _nodeIconMap: NodeIconMap[] = [];
  private _iconData: IconData = {};
  private _pendingIconLoads: Array<Promise<void>> = [];

  constructor(name = "", options: DiagramOptions = {}) {
    this.name = options.name ?? name;
    this.filename =
      options.filename ?? (this.name ? this.name.toLowerCase().replace(/\s+/g, "_") : "diagram");

    const direction = options.direction ?? "LR";
    if (!Diagram.directions.includes(direction as (typeof Diagram.directions)[number])) {
      throw new Error(`"${direction}" is not a valid direction`);
    }
    this.direction = direction;

    const curveStyle = options.curvestyle ?? "ortho";
    if (!Diagram.curveStyles.includes(curveStyle as (typeof Diagram.curveStyles)[number])) {
      throw new Error(`"${curveStyle}" is not a valid curve style`);
    }
    this.curveStyle = curveStyle;

    const theme = options.theme ?? "pastel";
    if (!(theme in THEMES)) {
      throw new Error(
        `"${theme}" is not a valid theme. Choose from: ${Object.keys(THEMES).join(", ")}`,
      );
    }
    this.theme = theme;
    this.themeConfig = THEMES[theme];

    this.autolabel = options.autolabel ?? false;
    this.strict = options.strict ?? false;

    // Initialize attributes with defaults
    this.graphAttr = { ...Diagram.defaultGraphAttrs };
    this.nodeAttr = { ...Diagram.defaultNodeAttrs };
    this.edgeAttr = { ...Diagram.defaultEdgeAttrs };

    // Apply theme edge color
    this.edgeAttr.color = this.themeConfig.edgecolor;

    // Set graph attributes
    this.graphAttr.label = this.name;
    this.graphAttr.rankdir = this.direction;
    this.graphAttr.splines = this.curveStyle;

    // Merge user-provided attributes
    if (options.graphAttr) {
      Object.assign(this.graphAttr, options.graphAttr);
    }
    if (options.nodeAttr) {
      Object.assign(this.nodeAttr, options.nodeAttr);
    }
    if (options.edgeAttr) {
      Object.assign(this.edgeAttr, options.edgeAttr);
    }

    // Set the global context
    setDiagram(this);
  }

  /**
   * Register a node with an icon for automatic icon injection
   * @param node - The node to register
   * @param iconKey - Key to identify the icon in iconData
   * @param iconPath - Optional path to the icon file
   */
  registerIcon(node: Node, iconKey: string, iconPath?: string): void {
    this._nodeIconMap.push({ node, icon: iconKey, iconPath });
  }

  /**
   * Load icon data for injection
   * @param iconData - Map of icon keys to data URIs
   */
  setIconData(iconData: IconData): void {
    this._iconData = iconData;
  }

  /**
   * Get the node icon map
   */
  getNodeIconMap(): NodeIconMap[] {
    return [...this._nodeIconMap];
  }

  /**
   * Get the icon data
   */
  getIconData(): IconData {
    return { ...this._iconData };
  }

  /**
   * Track a node that has an icon (for automatic icon injection)
   * @internal
   */
  trackNodeWithIcon(node: Node, iconDataUrl: string): void {
    // Extract icon key from the class name
    const iconKey = node.nodeId.replace(/[^a-zA-Z0-9]/g, "_");

    // Store the data URL directly - no fetching needed!
    this._iconData[iconKey] = iconDataUrl;

    // Register in the nodeIconMap for injection
    this._nodeIconMap.push({
      node,
      icon: iconKey,
      iconPath: iconDataUrl,
    });
  }

  /**
   * Track a pending icon load promise
   * @internal
   */
  trackPendingIconLoad(promise: Promise<void>): void {
    this._pendingIconLoads.push(promise);
  }

  /**
   * Automatically load and inject icons for all tracked nodes
   * (Icons are already loaded via esbuild dataurl loader)
   */
  private async _autoLoadAndInjectIcons(): Promise<void> {
    if (this._nodeIconMap.length === 0) return;

    // Icons are already loaded via esbuild dataurl loader
    // Just use them directly
  }

  /**
   * Add a node to this diagram
   */
  add<T extends Node>(node: T): T {
    node._register(this);
    return node;
  }

  /**
   * Internal method to register a node
   */
  node(nodeId: string, label: string, attrs: Record<string, unknown>): void {
    this._nodes.set(nodeId, { label, attrs });
  }

  /**
   * Connect two nodes
   */
  connect(from: Node, to: Node, edge: Edge): void {
    this._edges.push({
      from: from.nodeId,
      to: to.nodeId,
      attrs: edge.attrs,
    });
  }

  /**
   * Add a subgraph (cluster)
   */
  subgraph(cluster: Cluster): void {
    this._clusters.push(cluster);
  }

  /**
   * Create a cluster
   * @param label - The label for the cluster
   * @returns The created cluster
   */
  cluster(label: string): Cluster {
    const cluster = new Cluster(label, "LR", undefined, this);
    this._clusters.push(cluster);
    return cluster;
  }

  /**
   * Build the DOT representation
   */
  private _buildDot(): string {
    const strictAttr = this.strict ? "strict " : "";
    let dot = `${strictAttr}digraph "${this.name}" {\n`;

    // Graph attributes
    for (const [key, value] of Object.entries(this.graphAttr)) {
      dot += `  ${key}="${value}";\n`;
    }

    // Node defaults
    dot += "  node [\n";
    for (const [key, value] of Object.entries(this.nodeAttr)) {
      dot += `    ${key}="${value}",\n`;
    }
    dot += "  ];\n";

    // Edge defaults
    dot += "  edge [\n";
    for (const [key, value] of Object.entries(this.edgeAttr)) {
      dot += `    ${key}="${value}",\n`;
    }
    dot += "  ];\n";

    // Nodes
    for (const [id, { label, attrs }] of this._nodes) {
      dot += `  "${id}" [label="${label}"`;
      for (const [key, value] of Object.entries(attrs)) {
        dot += `, ${key}="${String(value)}"`;
      }
      dot += "];\n";
    }

    // Edges
    for (const { from, to, attrs } of this._edges) {
      dot += `  "${from}" -> "${to}"`;
      const attrEntries = Object.entries(attrs);
      if (attrEntries.length > 0) {
        dot += " [";
        dot += attrEntries.map(([k, v]) => `${k}="${v}"`).join(", ");
        dot += "]";
      }
      dot += ";\n";
    }

    // Clusters
    for (const cluster of this._clusters) {
      dot += this._buildClusterDot(cluster);
    }

    dot += "}\n";
    return dot;
  }

  private _buildClusterDot(cluster: Cluster, indent = 1): string {
    const spaces = "  ".repeat(indent);
    let dot = `${spaces}subgraph "${cluster.name}" {\n`;

    // Cluster attributes
    for (const [key, value] of Object.entries(cluster.graphAttr)) {
      dot += `${spaces}  ${key}="${value}";\n`;
    }

    // Cluster nodes
    for (const [id, { label, attrs }] of cluster.getNodes()) {
      dot += `${spaces}  "${id}" [label="${label}"`;
      for (const [key, value] of Object.entries(attrs)) {
        dot += `, ${key}="${String(value)}"`;
      }
      dot += "];\n";
    }

    // Nested clusters
    for (const subgraph of cluster.getSubgraphs()) {
      dot += this._buildClusterDot(subgraph, indent + 1);
    }

    dot += `${spaces}}\n`;
    return dot;
  }

  /**
   * Wait for all pending icon loads to complete
   */
  private async _waitForIconLoads(): Promise<void> {
    if (this._pendingIconLoads.length === 0) return;

    await Promise.all(this._pendingIconLoads);
    this._pendingIconLoads = []; // Clear after waiting
  }

  /**
   * Render the diagram
   * @param options - Optional render options including format, filename, dimensions, and scale
   */
  async render(options: RenderOptions = {}): Promise<Uint8Array | string> {
    // Wait for any pending icon loads (e.g., Custom nodes with remote icons)
    await this._waitForIconLoads();

    if (!this._viz) {
      this._viz = await instance();
    }

    const dot = this._buildDot();
    const format = options.format ?? "svg";

    // Always render to SVG first - Graphviz WASM doesn't support PNG output
    // We'll convert to PNG after rendering if needed
    const needsIconInjection = this._nodeIconMap.length > 0;
    const shouldInjectIcons = options.injectIcons ?? needsIconInjection;
    const renderFormat = "svg";

    const result = this._viz.render(dot, { format: renderFormat });

    if (result.status === "failure") {
      throw new Error(
        `Graphviz rendering failed: ${result.errors.map((e) => e.message).join(", ")}`,
      );
    }

    let output: string | Uint8Array = result.output as string;

    // Auto-inject icons if nodes with icons were created
    if (shouldInjectIcons) {
      // Auto-load icons and inject them
      await this._autoLoadAndInjectIcons();

      if (Object.keys(this._iconData).length > 0 && this._nodeIconMap.length > 0) {
        const { injectIcons } = await import("./icons.js");
        output = injectIcons(output as string, this._nodeIconMap, this._iconData);
      }
    }

    // If PNG format was requested, convert SVG to PNG
    if (format === "png") {
      output = await this._svgToPng(output as string, options);
    }

    // If JPG format was requested, convert SVG to JPG
    if (format === "jpg") {
      output = await this._svgToJpg(output as string, options);
    }

    return output;
  }

  /**
   * Detect if running in browser environment
   */
  private _isBrowser(): boolean {
    return typeof window !== "undefined" && typeof document !== "undefined";
  }

  /**
   * Convert SVG string to PNG binary data
   * Uses Canvas API in browser, sharp in Node.js
   * @param svgString - The SVG string to convert
   * @param options - Optional render options for dimensions and scale
   * @returns Promise resolving to PNG data as Uint8Array
   */
  private async _svgToPng(svgString: string, options: RenderOptions = {}): Promise<Uint8Array> {
    if (this._isBrowser()) {
      return this._svgToPngBrowser(svgString, options);
    } else {
      return this._svgToPngNode(svgString, options);
    }
  }

  /**
   * Convert SVG to PNG using Canvas API (browser only)
   */
  private async _svgToPngBrowser(
    svgString: string,
    options: RenderOptions = {},
  ): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        // Parse SVG dimensions
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgString, "image/svg+xml");
        const svgElement = doc.querySelector("svg");

        let width = 800;
        let height = 600;

        if (svgElement) {
          const widthAttr = svgElement.getAttribute("width");
          const heightAttr = svgElement.getAttribute("height");
          const viewBox = svgElement.getAttribute("viewBox");

          if (widthAttr && heightAttr) {
            width = parseFloat(widthAttr.replace("pt", ""));
            height = parseFloat(heightAttr.replace("pt", ""));
          } else if (viewBox) {
            const parts = viewBox.split(/\s+|,/);
            if (parts.length === 4) {
              width = parseFloat(parts[2]);
              height = parseFloat(parts[3]);
            }
          }
        }

        // Apply user-specified dimensions or scale
        const scale = options.scale ?? 2;
        if (options.width) width = options.width;
        if (options.height) height = options.height;

        // Create canvas at scaled resolution
        const canvas = document.createElement("canvas");
        canvas.width = width * scale;
        canvas.height = height * scale;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          URL.revokeObjectURL(url);
          reject(new Error("Failed to get canvas context"));
          return;
        }

        // Fill white background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw SVG at specified scale
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to blob
        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(url);
            if (blob) {
              // Convert blob to Uint8Array
              const reader = new FileReader();
              reader.onloadend = () => {
                resolve(new Uint8Array(reader.result as ArrayBuffer));
              };
              reader.onerror = reject;
              reader.readAsArrayBuffer(blob);
            } else {
              reject(new Error("Failed to create PNG blob"));
            }
          },
          "image/png",
          1.0,
        );
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Failed to load SVG for conversion"));
      };

      img.src = url;
    });
  }

  /**
   * Convert SVG to PNG using sharp (Node.js only)
   */
  private async _svgToPngNode(svgString: string, options: RenderOptions = {}): Promise<Uint8Array> {
    try {
      // Dynamic import to avoid bundling sharp in browser builds
      const sharp = await import("sharp");

      // Parse SVG to get dimensions for scaling
      const widthMatch = svgString.match(/width="([\d.]+)pt"/);
      const heightMatch = svgString.match(/height="([\d.]+)pt"/);
      const viewBoxMatch = svgString.match(/viewBox="[^"]+"/);

      let width = 800;
      let height = 600;

      if (widthMatch && heightMatch) {
        width = parseFloat(widthMatch[1]);
        height = parseFloat(heightMatch[1]);
      } else if (viewBoxMatch) {
        const parts = viewBoxMatch[0].split(/\s+|,/);
        if (parts.length >= 4) {
          width = parseFloat(parts[2]);
          height = parseFloat(parts[3]);
        }
      }

      // Apply user-specified dimensions or scale
      const scale = options.scale ?? 2;
      if (options.width) width = options.width;
      if (options.height) height = options.height;

      // Convert SVG to PNG at specified resolution
      const pngBuffer = await sharp
        .default(Buffer.from(svgString))
        .resize(width * scale, height * scale)
        .png()
        .toBuffer();

      return new Uint8Array(pngBuffer);
    } catch (error) {
      throw new Error(
        `Failed to convert SVG to PNG. Make sure 'sharp' is installed: npm install sharp. Error: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  /**
   * Convert SVG string to JPG binary data
   * Uses Canvas API in browser, sharp in Node.js
   * @param svgString - The SVG string to convert
   * @param options - Optional render options for dimensions and scale
   * @returns Promise resolving to JPG data as Uint8Array
   */
  private async _svgToJpg(svgString: string, options: RenderOptions = {}): Promise<Uint8Array> {
    if (this._isBrowser()) {
      return this._svgToJpgBrowser(svgString, options);
    } else {
      return this._svgToJpgNode(svgString, options);
    }
  }

  /**
   * Convert SVG to JPG using Canvas API (browser only)
   */
  private async _svgToJpgBrowser(
    svgString: string,
    options: RenderOptions = {},
  ): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        // Parse SVG dimensions
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgString, "image/svg+xml");
        const svgElement = doc.querySelector("svg");

        let width = 800;
        let height = 600;

        if (svgElement) {
          const widthAttr = svgElement.getAttribute("width");
          const heightAttr = svgElement.getAttribute("height");
          const viewBox = svgElement.getAttribute("viewBox");

          if (widthAttr && heightAttr) {
            width = parseFloat(widthAttr.replace("pt", ""));
            height = parseFloat(heightAttr.replace("pt", ""));
          } else if (viewBox) {
            const parts = viewBox.split(/\s+|,/);
            if (parts.length === 4) {
              width = parseFloat(parts[2]);
              height = parseFloat(parts[3]);
            }
          }
        }

        // Apply user-specified dimensions or scale
        const scale = options.scale ?? 2;
        if (options.width) width = options.width;
        if (options.height) height = options.height;

        // Create canvas at scaled resolution
        const canvas = document.createElement("canvas");
        canvas.width = width * scale;
        canvas.height = height * scale;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          URL.revokeObjectURL(url);
          reject(new Error("Failed to get canvas context"));
          return;
        }

        // Fill white background (important for JPG which doesn't support transparency)
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw SVG at specified scale
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to blob with JPEG format
        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(url);
            if (blob) {
              // Convert blob to Uint8Array
              const reader = new FileReader();
              reader.onloadend = () => {
                resolve(new Uint8Array(reader.result as ArrayBuffer));
              };
              reader.onerror = reject;
              reader.readAsArrayBuffer(blob);
            } else {
              reject(new Error("Failed to create JPG blob"));
            }
          },
          "image/jpeg",
          0.95,
        );
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Failed to load SVG for conversion"));
      };

      img.src = url;
    });
  }

  /**
   * Convert SVG to JPG using sharp (Node.js only)
   */
  private async _svgToJpgNode(svgString: string, options: RenderOptions = {}): Promise<Uint8Array> {
    try {
      // Dynamic import to avoid bundling sharp in browser builds
      const sharp = await import("sharp");

      // Parse SVG to get dimensions for scaling
      const widthMatch = svgString.match(/width="([\d.]+)pt"/);
      const heightMatch = svgString.match(/height="([\d.]+)pt"/);
      const viewBoxMatch = svgString.match(/viewBox="[^"]+"/);

      let width = 800;
      let height = 600;

      if (widthMatch && heightMatch) {
        width = parseFloat(widthMatch[1]);
        height = parseFloat(heightMatch[1]);
      } else if (viewBoxMatch) {
        const parts = viewBoxMatch[0].split(/\s+|,/);
        if (parts.length >= 4) {
          width = parseFloat(parts[2]);
          height = parseFloat(parts[3]);
        }
      }

      // Apply user-specified dimensions or scale
      const scale = options.scale ?? 2;
      if (options.width) width = options.width;
      if (options.height) height = options.height;

      // Convert SVG to JPG at specified resolution
      const jpgBuffer = await sharp
        .default(Buffer.from(svgString))
        .resize(width * scale, height * scale)
        .jpeg({ quality: 95 })
        .toBuffer();

      return new Uint8Array(jpgBuffer);
    } catch (error) {
      throw new Error(
        `Failed to convert SVG to JPG. Make sure 'sharp' is installed: npm install sharp. Error: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  /**
   * Render the diagram with icon injection
   * @param iconData - Map of icon keys to data URIs
   * @param nodeMap - Optional node-to-icon mapping (defaults to diagram's registered icons)
   * @returns Promise resolving to the rendered diagram with icons injected
   */
  async renderWithIcons(iconData?: IconData, nodeMap?: NodeIconMap[]): Promise<string> {
    // Use provided icon data or stored icon data
    const data = iconData ?? this._iconData;
    const map = nodeMap ?? this._nodeIconMap;

    if (Object.keys(data).length === 0) {
      throw new Error(
        "No icon data provided. Either pass iconData to renderWithIcons() or call setIconData() first.",
      );
    }

    if (map.length === 0) {
      throw new Error(
        "No node map provided. Either pass nodeMap to renderWithIcons() or register icons with the diagram first.",
      );
    }

    // Render to SVG for icon injection (icons can only be injected into SVG)
    const output = await this.render({ format: "svg", injectIcons: false });
    const svgString = typeof output === "string" ? output : new TextDecoder().decode(output);

    const { injectIcons } = await import("./icons.js");
    return injectIcons(svgString, map, data);
  }

  /**
   * Save the diagram to a file (Node.js only)
   * @param filepath - Optional file path (defaults to diagram.filename with appropriate extension)
   * @param options - Optional render options for format and dimensions
   */
  async save(filepath?: string, options: RenderOptions = {}): Promise<void> {
    const format = options.format ?? "svg";
    const output = await this.render({ ...options, format });
    const path = filepath ?? `${this.filename}.${format}`;

    if (typeof globalThis !== "undefined" && "document" in globalThis) {
      // Browser environment - download file
      const mimeType = format === "svg" ? "image/svg+xml" : `image/${format}`;
      const blob = new Blob([output] as BlobPart[], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = globalThis.document.createElement("a");
      a.href = url;
      a.download = path;
      a.click();
      URL.revokeObjectURL(url);
      return;
    }

    // Node.js environment
    const fs = await import("node:fs/promises");
    await fs.writeFile(path, output);
  }

  /**
   * Get the DOT source
   */
  toString(): string {
    return this._buildDot();
  }

  /**
   * Cleanup resources
   */
  destroy(): void {
    // Clear the context - for now just a no-op since we're using a stack-based approach
    this._viz = null;
  }
}
