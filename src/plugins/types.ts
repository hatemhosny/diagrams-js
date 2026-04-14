/**
 * Plugin system types and interfaces for diagrams-js
 *
 * This module defines the core plugin architecture that enables extensible
 * import/export formats, cloud metadata integration, and third-party extensions.
 */

import type { Diagram } from "../Diagram.js";
import type { Node } from "../Node.js";

/**
 * Runtime environment support declaration
 */
export interface RuntimeSupport {
  /** Supports Node.js runtime */
  node: boolean;
  /** Supports browser runtime */
  browser: boolean;
  /** Supports Deno runtime */
  deno: boolean;
  /** Supports Bun runtime */
  bun: boolean;
}

/**
 * Core plugin interface - all plugins must implement this
 * Plugins are created via factory functions to maintain consistency with diagrams-js patterns
 */
export interface DiagramsPlugin {
  /** Unique plugin name (e.g., "docker-compose", "aws-metadata") */
  name: string;
  /** Plugin version (semver) */
  version: string;
  /** Plugin API version for compatibility checking */
  apiVersion: "1.0";

  /** Runtime environment support */
  runtimeSupport: RuntimeSupport;

  /** Plugin dependencies - names of other plugins that must be loaded first */
  dependencies?: string[];

  /** Required configuration keys (if any) */
  requiredConfig?: string[];

  /** Plugin capabilities */
  capabilities: PluginCapability[];

  /**
   * Initialize the plugin with configuration
   * Called after dependencies are resolved
   */
  initialize?: (config: unknown, context: PluginContext) => Promise<void>;

  /**
   * Clean up resources when plugin is unregistered
   */
  destroy?: () => Promise<void>;
}

/**
 * Plugin capability types
 */
export type PluginCapability =
  | ImporterCapability
  | ExporterCapability
  | RendererCapability
  | MetadataCapability
  | HookCapability;

/**
 * Import capability - allows importing from external formats
 */
export interface ImporterCapability {
  type: "importer";
  /** Unique importer name (e.g., "docker-compose", "terraform") */
  name: string;
  /** File extensions this importer handles (e.g., [".yml", ".yaml"]) */
  extensions: string[];
  /** MIME types this importer can handle */
  mimeTypes?: string[];
  /** Check if this importer can handle the given source */
  canImport: (source: string | string[], context: ImportContext) => Promise<boolean>;
  /** Import source into diagram */
  import: (source: string | string[], diagram: Diagram, context: ImportContext) => Promise<void>;
}

/**
 * Export capability - allows exporting to external formats
 */
export interface ExporterCapability {
  type: "exporter";
  /** Unique exporter name (e.g., "docker-compose", "terraform") */
  name: string;
  /** Default file extension (e.g., ".tf", ".yml") */
  extension: string;
  /** MIME type of exported content */
  mimeType: string;
  /** Export diagram to the target format */
  export: (diagram: Diagram, context: ExportContext) => Promise<string | Uint8Array>;
}

/**
 * Renderer capability - custom renderers for different output formats
 */
export interface RendererCapability {
  type: "renderer";
  /** Renderer name */
  name: string;
  /** Supported output formats */
  formats: string[];
  /** Render SVG to target format */
  render: (svg: string, format: string, context: RenderContext) => Promise<string | Uint8Array>;
}

/**
 * Metadata capability - provides cloud provider metadata (pricing, specs, etc.)
 */
export interface MetadataCapability {
  type: "metadata";
  /** Cloud provider name (e.g., "aws", "azure", "gcp") */
  provider: string;
  /** Node types this provider supports */
  nodeTypes: string[];
  /** Get metadata for a node type */
  getMetadata: (
    nodeType: string,
    config: unknown,
    context: MetadataContext,
  ) => Promise<NodeMetadata>;
}

/**
 * Hook capability - register lifecycle hooks
 */
export interface HookCapability {
  type: "hook";
  /** Hooks to register */
  hooks: Array<{
    /** Hook event name */
    event: HookEvent;
    /** Handler function */
    handler: HookHandler;
    /** Priority (higher = earlier execution, default: 0) */
    priority?: number;
  }>;
}

/**
 * Plugin factory function type
 */
export type CreatePlugin = (config?: unknown) => DiagramsPlugin;

/**
 * Plugin input type - can be a plugin instance or a factory function
 */
export type PluginInput = DiagramsPlugin | CreatePlugin;

/**
 * Plugin context passed to capabilities and hooks
 */
export interface PluginContext {
  /** The plugin registry */
  registry: PluginRegistry;
  /** Fetch function for making HTTP requests */
  fetch: typeof globalThis.fetch;
  /** Get a registered plugin by name */
  getPlugin: (name: string) => DiagramsPlugin | undefined;
  /** Get an importer by name */
  getImporter: (name: string) => ImporterCapability | undefined;
  /** Get an exporter by name */
  getExporter: (name: string) => ExporterCapability | undefined;
  /** Get a renderer by format */
  getRenderer: (format: string) => RendererCapability | undefined;
  /** Get a metadata provider by name */
  getMetadataProvider: (provider: string) => MetadataCapability | undefined;
  /** Execute hooks for an event */
  executeHooks: <T>(event: HookEvent, data: T) => Promise<T>;
  /** Get a list of available resources */
  loadResourcesList: () => Promise<typeof import("../providers/resources-list.ts") | null>;
  /** Load Yaml module */
  loadYaml: () => Promise<typeof import("../yaml.ts") | null>;
  /**
   * Library exports - use these instead of importing diagrams-js to avoid multiple instances.
   * This provides access to all diagrams-js exports including Diagram, Node, Edge, Custom, Iconify, etc.
   */
  lib: typeof import("../index.js");
}

/**
 * Context passed to importers
 */
export interface ImportContext extends PluginContext {
  /** Format being imported */
  format: string;
  /** Source content (string or array of strings for grouped/clustered import) */
  source: string | string[];
}

/**
 * Context passed to exporters
 */
export interface ExportContext extends PluginContext {
  /** Format being exported */
  format: string;
}

/**
 * Context passed to renderers
 */
export interface RenderContext extends PluginContext {
  /** Output format */
  format: string;
  /** Render options */
  options?: Record<string, unknown>;
}

/**
 * Context passed to metadata providers
 */
export interface MetadataContext extends PluginContext {
  /** Node being queried */
  node: Node;
  /** Current node metadata (if any) */
  currentMetadata?: Record<string, unknown>;
}

/**
 * Context passed to hook handlers
 */
export interface HookContext extends PluginContext {
  /** Event being handled */
  event: HookEvent;
}

/**
 * Hook event types
 */
export enum HookEvent {
  // Import/Export lifecycle
  BEFORE_IMPORT = "before:import",
  AFTER_IMPORT = "after:import",
  BEFORE_EXPORT = "before:export",
  AFTER_EXPORT = "after:export",

  // Diagram lifecycle
  BEFORE_RENDER = "before:render",
  AFTER_RENDER = "after:render",
  BEFORE_SERIALIZE = "before:serialize",
  AFTER_DESERIALIZE = "after:deserialize",

  // Element lifecycle
  NODE_CREATE = "node:create",
  EDGE_CREATE = "edge:create",
  CLUSTER_CREATE = "cluster:create",

  // Metadata
  METADATA_ATTACH = "metadata:attach",
  METADATA_CALCULATE = "metadata:calculate",
}

/**
 * Hook handler function type
 */
export type HookHandler<T = unknown> = (data: T, context: HookContext) => Promise<T | void>;

/**
 * Node metadata structure
 */
export interface NodeMetadata {
  /** Cloud provider */
  provider?: string;
  /** Region */
  region?: string;
  /** Instance/node type */
  instanceType?: string;
  /** Specifications */
  specifications?: {
    cpu?: number | string;
    memory?: string;
    storage?: string;
    [key: string]: unknown;
  };
  /** Pricing information */
  pricing?: {
    hourly?: number;
    monthly?: number;
    onDemand?: number;
    reserved?: number;
    spot?: number;
    [key: string]: unknown;
  };
  /** Availability zones */
  availabilityZones?: string[];
  /** Compliance certifications */
  compliance?: string[];
  /** Additional provider-specific metadata */
  [key: string]: unknown;
}

/**
 * Plugin registry interface
 */
export interface PluginRegistry {
  /** Register a plugin */
  register: (plugin: DiagramsPlugin) => Promise<void>;
  /** Unregister a plugin */
  unregister: (name: string) => Promise<void>;
  /** Get a plugin by name */
  getPlugin: (name: string) => DiagramsPlugin | undefined;
  /** Get an importer by name */
  getImporter: (name: string) => ImporterCapability | undefined;
  /** Get an exporter by name */
  getExporter: (name: string) => ExporterCapability | undefined;
  /** Get a renderer by format */
  getRenderer: (format: string) => RendererCapability | undefined;
  /** Get a metadata provider by name */
  getMetadataProvider: (provider: string) => MetadataCapability | undefined;
  /** Execute hooks for an event */
  executeHooks: <T>(event: HookEvent, data: T) => Promise<T>;
  /** List all registered plugins */
  listPlugins: () => DiagramsPlugin[];
  /** List all capabilities by type */
  listCapabilities: () => {
    importers: string[];
    exporters: string[];
    renderers: string[];
    metadataProviders: string[];
  };
  loadResourcesList: () => Promise<typeof import("../providers/resources-list.ts") | null>;
  loadYaml: () => Promise<typeof import("../yaml.ts") | null>;
}

/**
 * Error thrown when a plugin fails to load
 */
export class PluginError extends Error {
  constructor(
    message: string,
    public pluginName?: string,
    public cause?: Error,
  ) {
    super(message);
    this.name = "PluginError";
  }
}

/**
 * Error thrown when dependency resolution fails
 */
export class DependencyError extends PluginError {
  constructor(
    pluginName: string,
    public missingDependencies: string[],
    public circularDependencies?: string[],
  ) {
    super(
      `Plugin "${pluginName}" has unresolved dependencies: ${missingDependencies.join(", ")}`,
      pluginName,
    );
    this.name = "DependencyError";
  }
}

/**
 * Error thrown when runtime is not supported
 */
export class RuntimeError extends PluginError {
  constructor(
    pluginName: string,
    public requiredRuntimes: RuntimeSupport,
    public currentRuntime: string,
  ) {
    super(`Plugin "${pluginName}" does not support ${currentRuntime} runtime`, pluginName);
    this.name = "RuntimeError";
  }
}
