// Core classes
export { Diagram } from "./Diagram.js";
export { Cluster } from "./Cluster.js";
export { Node, setIconBaseDir, getIconBaseDir } from "./Node.js";
export { Edge } from "./Edge.js";
export { Custom } from "./Custom.js";

// Context management
export {
  getDiagram,
  setDiagram,
  runWithDiagram,
  getCluster,
  setCluster,
  runWithCluster,
  clearDiagram,
  clearCluster,
} from "./context.js";

// Icon utilities
export {
  loadIcon,
  loadIcons,
  injectIcons,
  IconManager,
  type NodeIconMap,
  type IconData,
} from "./icons.js";

// Types
export type { DiagramOptions, EdgeOptions, NodeOptions, ThemeName, ThemeConfig } from "./types.js";

// Group is an alias for Cluster (same as Python)
export { Cluster as Group } from "./Cluster.js";
