/**
 * Theme definitions for diagram styling.
 * Each theme defines cluster background colors (by depth), border color, and edge color.
 */
export const THEMES = {
  /** Pastel colors - soft blues, greens, and purples */
  pastel: {
    bgcolor: ["#E5F5FD", "#EBF3E7", "#ECE8F6", "#FDF7E3"],
    pencolor: "#AEB6BE",
    edgecolor: "#7B8894",
  },
  /** Neutral grayscale theme */
  neutral: {
    bgcolor: ["#F8F9FA", "#F1F3F5", "#E9ECEF", "#DEE2E6"],
    pencolor: "#ADB5BD",
    edgecolor: "#495057",
  },
  /** Blue color palette */
  blues: {
    bgcolor: ["#E7F5FF", "#D0EBFF", "#A5D8FF", "#74C0FC"],
    pencolor: "#339AF0",
    edgecolor: "#1971C2",
  },
  /** Green color palette */
  greens: {
    bgcolor: ["#EBFBEE", "#D3F9D8", "#B2F2BB", "#8CE99A"],
    pencolor: "#40C057",
    edgecolor: "#2F9E44",
  },
  /** Orange/warm color palette */
  orange: {
    bgcolor: ["#FFF4E6", "#FFE8CC", "#FFD8A8", "#FFC078"],
    pencolor: "#FD7E14",
    edgecolor: "#E8590C",
  },
} as const;

/** Available theme names */
export type ThemeName = keyof typeof THEMES;

/** Theme configuration type */
export type ThemeConfig = (typeof THEMES)[ThemeName];

/**
 * Plugin definition for diagram options
 */
export type PluginDefinition = import("./plugins/types.js").DiagramsPlugin;

/**
 * Options for creating a diagram
 * @example
 * ```typescript
 * const options: DiagramOptions = {
 *   name: "My Architecture",
 *   direction: "TB",
 *   theme: "pastel",
 *   curvestyle: "ortho"
 * };
 * const diagram = Diagram("", options);
 * ```
 */
export interface DiagramOptions {
  /** The name/title of the diagram (overrides the name parameter) */
  name?: string;
  /** The filename used when saving (defaults to name converted to snake_case) */
  filename?: string;
  /** Layout direction: TB (top-bottom), BT (bottom-top), LR (left-right), RL (right-left) */
  direction?: "TB" | "BT" | "LR" | "RL";
  /** Edge curve style: ortho (orthogonal), curved, spline, or polyline */
  curvestyle?: "ortho" | "curved" | "spline" | "polyline";
  /** Whether to automatically prefix node labels with their type */
  autolabel?: boolean;
  /** Whether to create a strict graph (no duplicate edges) */
  strict?: boolean;
  /** Color theme for the diagram */
  theme?: ThemeName;
  /** Graph-level Graphviz attributes */
  graphAttr?: Record<string, string>;
  /** Default node Graphviz attributes */
  nodeAttr?: Record<string, string>;
  /** Default edge Graphviz attributes */
  edgeAttr?: Record<string, string>;
  /** Custom plugin registry (creates new one if not provided) */
  pluginRegistry?: import("./plugins/types.js").PluginRegistry;
}

/**
 * Options for rendering a diagram
 * @example
 * ```typescript
 * const svg = await diagram.render({ format: "svg" });
 * const png = await diagram.render({ format: "png", scale: 2 });
 * ```
 */
export interface RenderOptions {
  /** Output format: svg, png, jpg, dot, or json */
  format?: "svg" | "png" | "jpg" | "dot" | "json";
  /** Output filename */
  filename?: string;
  /** Output width in pixels (for PNG/JPG) */
  width?: number;
  /** Output height in pixels (for PNG/JPG) */
  height?: number;
  /** Scale factor for output (for PNG/JPG, default: 2) */
  scale?: number;
  /** Whether to inject icons into SVG output */
  injectIcons?: boolean;
  /** Whether to embed diagram metadata into SVG output (default: true) */
  embedData?: boolean;
  /** Whether to return output as data URL */
  dataUrl?: boolean;
}

/**
 * Options for creating an edge
 * @example
 * ```typescript
 * const edge = Edge({ label: "HTTP", color: "blue", style: "dashed" });
 * ```
 */
export interface EdgeOptions {
  /** The source node (internal use) */
  node?: import("./Node.js").Node;
  /** Whether this is a forward edge */
  forward?: boolean;
  /** Whether this is a reverse edge */
  reverse?: boolean;
  /** Edge label text */
  label?: string;
  /** Edge color */
  color?: string;
  /** Edge style (solid, dashed, dotted, etc.) */
  style?: string;
  /** Additional Graphviz edge attributes */
  [key: string]: unknown;
}

/**
 * Options for creating a node
 * @example
 * ```typescript
 * const node = Node("My Service", { shape: "box", color: "blue" });
 * ```
 */
export interface NodeOptions {
  /** Custom unique identifier for the node */
  nodeId?: string;
  /** @internal Node type for autolabel */
  ["~type"]?: string;
  /** @internal Icon data URL */
  ["~iconDataUrl"]?: string;
  /** Additional Graphviz node attributes */
  [key: string]: unknown;
}

// Note: Node and Edge types are defined in their respective modules
// Import them from "./Node.js" and "./Edge.js"

export type Yaml = typeof import("./yaml.ts");
