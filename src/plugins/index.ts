/**
 * Plugin system for diagrams-js
 *
 * This module provides a flexible plugin architecture for extending diagrams-js
 * with additional import/export formats, metadata providers, and custom functionality.
 *
 * @example
 * ```typescript
 * import { Diagram, createPluginRegistry } from "diagrams-js";
 * import { createDockerComposePlugin } from "@diagrams-js/plugin-docker-compose";
 *
 * const diagram = Diagram("My Architecture", {
 *   plugins: [createDockerComposePlugin]
 * });
 *
 * // Import from Docker Compose
 * await diagram.import(dockerComposeYaml, "docker-compose");
 *
 * // Export to Terraform
 * const terraform = await diagram.export("terraform");
 * ```
 */

// Core types
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
} from "./types.js";

export { HookEvent, PluginError, DependencyError, RuntimeError } from "./types.js";

// Registry
export { createPluginRegistry } from "./registry.js";

// Built-in plugins
export { createJSONPlugin, jsonPlugin } from "./built-in/json.js";
