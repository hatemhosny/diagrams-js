// Core classes
export { Diagram, type Diagram as DiagramInterface } from "./Diagram.js";
export { Cluster, type Cluster as ClusterInterface } from "./Cluster.js";
export { Node, setIconBaseDir, getIconBaseDir, type Node as NodeInterface } from "./Node.js";
export { Edge, type Edge as EdgeInterface } from "./Edge.js";
export { Custom, type CustomNode } from "./Custom.js";

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
