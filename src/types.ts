// Theme definitions for diagram styling
// Each theme defines: cluster background colors (by depth), border color, edge color
export const THEMES = {
  neutral: {
    bgcolor: ["#F8F9FA", "#F1F3F5", "#E9ECEF", "#DEE2E6"],
    pencolor: "#ADB5BD",
    edgecolor: "#495057",
  },
  pastel: {
    bgcolor: ["#E5F5FD", "#EBF3E7", "#ECE8F6", "#FDF7E3"],
    pencolor: "#AEB6BE",
    edgecolor: "#7B8894",
  },
  blues: {
    bgcolor: ["#E7F5FF", "#D0EBFF", "#A5D8FF", "#74C0FC"],
    pencolor: "#339AF0",
    edgecolor: "#1971C2",
  },
  greens: {
    bgcolor: ["#EBFBEE", "#D3F9D8", "#B2F2BB", "#8CE99A"],
    pencolor: "#40C057",
    edgecolor: "#2F9E44",
  },
  orange: {
    bgcolor: ["#FFF4E6", "#FFE8CC", "#FFD8A8", "#FFC078"],
    pencolor: "#FD7E14",
    edgecolor: "#E8590C",
  },
} as const;

export type ThemeName = keyof typeof THEMES;
export type ThemeConfig = (typeof THEMES)[ThemeName];

export interface DiagramOptions {
  name?: string;
  filename?: string;
  direction?: "TB" | "BT" | "LR" | "RL";
  curvestyle?: "ortho" | "curved" | "spline" | "polyline";
  autolabel?: boolean;
  strict?: boolean;
  theme?: ThemeName;
  graphAttr?: Record<string, string>;
  nodeAttr?: Record<string, string>;
  edgeAttr?: Record<string, string>;
}

export interface RenderOptions {
  format?: "svg" | "png" | "jpg" | "dot";
  filename?: string;
  width?: number;
  height?: number;
  scale?: number;
  injectIcons?: boolean;
  dataUrl?: boolean;
}

export interface EdgeOptions {
  node?: import("./Node.js").Node;
  forward?: boolean;
  reverse?: boolean;
  label?: string;
  color?: string;
  style?: string;
  [key: string]: unknown;
}

export interface NodeOptions {
  nodeId?: string;
  [key: string]: unknown;
}

// Forward declarations - these match the factory function return types
export interface Node {
  nodeId: string;
  label: string;
  to(target: Node): Node;
  to(targets: Node[]): Node[];
  to(edge: Edge, target: Node): Node;
  to(edge: Edge, target: Node[]): Node[];
  to(edge: Edge): Edge;
  from(source: Node): Node;
  from(sources: Node[]): Node;
  from(edge: Edge, source: Node): Node;
  from(edge: Edge, sources: Node[]): Node;
  with(target: Node): Node;
  with(targets: Node[]): Node[];
  with(edge: Edge, target: Node): Node;
  with(edge: Edge, target: Node[]): Node[];
}

export interface Edge {
  node?: Node;
  forward: boolean;
  reverse: boolean;
  attrs: Record<string, string>;
  to(target: Node): Node;
  to(target: Edge): Edge;
  from(target: Node): Node;
  from(target: Edge): Edge;
}
