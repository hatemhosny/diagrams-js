/**
 * diagrams-js - Draw cloud system architecture diagrams as code
 *
 * @example
 * ```typescript
 * import { Diagram } from "diagrams-js";
 * import { EC2 } from "diagrams-js/aws/compute";
 * import { S3 } from "diagrams-js/aws/storage";
 *
 * const diagram = Diagram("My Architecture", { direction: "LR" });
 *
 * const db = diagram.add(Database("PostgreSQL"));
 * const api = diagram.add(EC2("API Server"));
 * const storage = diagram.add(S3("Storage"));
 *
 * db.to(api).to(storage);
 *
 * const svg = await diagram.render();
 * ```
 *
 * @packageDocumentation
 */

// Core functions
export { Diagram } from "./Diagram.js";
export { Node } from "./Node.js";
export { Edge } from "./Edge.js";
export { Cluster } from "./Cluster.js";
export { Custom, Iconify } from "./Custom.js";

// Types
export type {
  DiagramOptions,
  EdgeOptions,
  NodeOptions,
  ThemeName,
  ThemeConfig,
  Yaml,
} from "./types.js";
export type {
  DiagramJSON,
  DiagramNodeJSON,
  DiagramEdgeJSON,
  DiagramClusterJSON,
  FromJSONOptions,
  ProviderModule,
} from "./json.js";

// Diff functionality
export { computeDiff, renderDiff } from "./diff.js";
export type {
  ChangeKind,
  NodeDiff,
  EdgeDiff,
  ClusterDiff,
  DiffSummary,
  DiffMeta,
  DiagramDiffResult,
  DiffOptions,
  RenderDiffOptions,
} from "./diff.js";

// Plugin system
export {
  createPluginRegistry,
  createJSONPlugin,
  jsonPlugin,
  createSVGPlugin,
  svgPlugin,
  HookEvent,
  PluginError,
  DependencyError,
  RuntimeError,
} from "./plugins/index.js";

// Plugin types
export type {
  DiagramsPlugin,
  CreatePlugin,
  PluginCapability,
  ImporterCapability,
  ExporterCapability,
  RendererCapability,
  MetadataCapability,
  HookCapability,
  PluginContext,
  ImportContext,
  ExportContext,
  RenderContext,
  MetadataContext,
  HookContext,
  NodeMetadata,
  PluginRegistry,
  RuntimeSupport,
  HookHandler,
} from "./plugins/types.js";
