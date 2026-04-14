/**
 * Plugin registry implementation with dependency resolution
 *
 * This module provides the core plugin management functionality including
 * registration, dependency resolution, and capability management.
 */

import type {
  DiagramsPlugin,
  ImporterCapability,
  ExporterCapability,
  RendererCapability,
  MetadataCapability,
  PluginRegistry,
  PluginContext,
  HookEvent,
  HookHandler,
  RuntimeSupport,
} from "./types.js";

import { PluginError, DependencyError, RuntimeError, HookEvent as HookEventEnum } from "./types.js";
import { Diagram } from "../Diagram.js";
import { Node } from "../Node.js";
import { Edge } from "../Edge.js";
import { Custom } from "../Custom.js";
import { Cluster } from "../Cluster.js";
import { loadResourcesList, loadYaml } from "../provider-loader.ts";

/**
 * Detect the current runtime environment
 */
function detectRuntime(): "node" | "browser" | "deno" | "bun" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof (globalThis as any).Deno !== "undefined") return "deno";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof (globalThis as any).Bun !== "undefined") return "bun";
  if (typeof window !== "undefined" && typeof document !== "undefined") return "browser";
  if (typeof process !== "undefined" && process.versions?.node) return "node";
  return "node"; // Default fallback
}

/**
 * Check if the plugin supports the current runtime
 */
function checkRuntimeSupport(runtimeSupport: RuntimeSupport): void {
  const currentRuntime = detectRuntime();

  if (!runtimeSupport[currentRuntime]) {
    throw new RuntimeError(
      "unknown", // Will be set later
      runtimeSupport,
      currentRuntime,
    );
  }
}

/**
 * Topological sort for dependency resolution
 * Returns plugins in order of dependency (dependencies first)
 */
function topologicalSort(
  plugins: Map<string, { plugin: DiagramsPlugin; config: unknown }>,
): Array<{ plugin: DiagramsPlugin; config: unknown }> {
  const visited = new Set<string>();
  const temp = new Set<string>();
  const result: Array<{ plugin: DiagramsPlugin; config: unknown }> = [];
  const circular: string[] = [];

  function visit(name: string, path: string[] = []) {
    if (temp.has(name)) {
      // Circular dependency detected
      const cycleStart = path.indexOf(name);
      circular.push(...path.slice(cycleStart), name);
      return;
    }

    if (visited.has(name)) return;

    const entry = plugins.get(name);
    if (!entry) return; // Dependency not found, will be handled later

    temp.add(name);
    path.push(name);

    // Visit dependencies first
    for (const dep of entry.plugin.dependencies || []) {
      visit(dep, [...path]);
    }

    temp.delete(name);
    visited.add(name);
    result.push(entry);
  }

  for (const [name] of plugins) {
    if (!visited.has(name)) {
      visit(name);
    }
  }

  if (circular.length > 0) {
    throw new DependencyError(circular[0], [], circular);
  }

  return result;
}

/**
 * Create a plugin registry
 *
 * @example
 * ```typescript
 * const registry = createPluginRegistry();
 * await registry.register(createDockerComposePlugin);
 * await registry.register(createAWSMetadataPlugin, { region: 'us-west-2' });
 * ```
 */
export function createPluginRegistry(): PluginRegistry {
  const plugins = new Map<string, DiagramsPlugin>();
  const pluginConfigs = new Map<string, unknown>();
  const importers = new Map<string, ImporterCapability>();
  const exporters = new Map<string, ExporterCapability>();
  const renderers = new Map<string, RendererCapability>();
  const metadataProviders = new Map<string, MetadataCapability>();
  const hooks = new Map<
    HookEvent,
    Array<{ handler: HookHandler; priority: number; pluginName: string }>
  >();

  // Pending plugins for batch dependency resolution
  const pendingPlugins = new Map<string, { plugin: DiagramsPlugin; config: unknown }>();

  /**
   * Build plugin context
   */
  function buildContext(): PluginContext {
    return {
      registry: registryInstance,
      fetch: globalThis.fetch.bind(globalThis),
      getPlugin: (name: string) => plugins.get(name),
      getImporter: (name: string) => importers.get(name),
      getExporter: (name: string) => exporters.get(name),
      getRenderer: (format: string) => renderers.get(format),
      getMetadataProvider: (provider: string) => metadataProviders.get(provider),
      executeHooks: async <T>(event: HookEvent, data: T): Promise<T> => {
        return registryInstance.executeHooks(event, data);
      },
      loadResourcesList: () => loadResourcesList(),
      loadYaml: () => loadYaml(),
      lib: {
        Diagram,
        Node,
        Edge,
        Custom,
        Cluster,
        HookEvent: HookEventEnum,
        PluginError,
        DependencyError,
        RuntimeError,
      },
    };
  }

  /**
   * Register capabilities from a plugin
   */
  function registerCapabilities(plugin: DiagramsPlugin): void {
    for (const capability of plugin.capabilities) {
      switch (capability.type) {
        case "importer":
          importers.set(capability.name, capability);
          break;
        case "exporter":
          exporters.set(capability.name, capability);
          break;
        case "renderer":
          renderers.set(capability.name, capability);
          for (const format of capability.formats) {
            renderers.set(format, capability);
          }
          break;
        case "metadata":
          metadataProviders.set(capability.provider, capability);
          break;
        case "hook":
          for (const { event, handler, priority = 0 } of capability.hooks) {
            const eventHooks = hooks.get(event) || [];
            eventHooks.push({ handler, priority, pluginName: plugin.name });
            // Sort by priority (descending)
            eventHooks.sort((a, b) => b.priority - a.priority);
            hooks.set(event, eventHooks);
          }
          break;
      }
    }
  }

  /**
   * Unregister capabilities from a plugin
   */
  function unregisterCapabilities(plugin: DiagramsPlugin): void {
    for (const capability of plugin.capabilities) {
      switch (capability.type) {
        case "importer":
          importers.delete(capability.name);
          break;
        case "exporter":
          exporters.delete(capability.name);
          break;
        case "renderer":
          renderers.delete(capability.name);
          for (const format of capability.formats) {
            renderers.delete(format);
          }
          break;
        case "metadata":
          metadataProviders.delete(capability.provider);
          break;
        case "hook":
          for (const { event } of capability.hooks) {
            const eventHooks = hooks.get(event);
            if (eventHooks) {
              const filtered = eventHooks.filter((h) => h.pluginName !== plugin.name);
              if (filtered.length === 0) {
                hooks.delete(event);
              } else {
                hooks.set(event, filtered);
              }
            }
          }
          break;
      }
    }
  }

  /**
   * Resolve and register all pending plugins with dependency resolution
   */
  async function resolvePendingPlugins(): Promise<void> {
    if (pendingPlugins.size === 0) return;

    // Check for missing dependencies
    for (const [name, { plugin }] of pendingPlugins) {
      if (plugin.dependencies) {
        const missing = plugin.dependencies.filter(
          (dep) => !plugins.has(dep) && !pendingPlugins.has(dep),
        );
        if (missing.length > 0) {
          throw new DependencyError(name, missing);
        }
      }
    }

    // Sort by dependencies (dependencies first)
    const sorted = topologicalSort(pendingPlugins);

    // Initialize plugins in order
    for (const { plugin, config } of sorted) {
      // Check runtime support
      try {
        checkRuntimeSupport(plugin.runtimeSupport);
      } catch (error) {
        if (error instanceof RuntimeError) {
          throw new RuntimeError(plugin.name, plugin.runtimeSupport, detectRuntime());
        }
        throw error;
      }

      // Validate required config
      if (plugin.requiredConfig) {
        const configRecord = config as Record<string, unknown> | undefined;
        const missing = plugin.requiredConfig.filter(
          (key) => !configRecord || configRecord[key] === undefined,
        );
        if (missing.length > 0) {
          throw new PluginError(
            `Plugin "${plugin.name}" requires configuration: ${missing.join(", ")}`,
            plugin.name,
          );
        }
      }

      // Initialize plugin
      if (plugin.initialize) {
        const context = buildContext();
        await plugin.initialize(config, context);
      }

      // Register plugin and capabilities
      plugins.set(plugin.name, plugin);
      pluginConfigs.set(plugin.name, config);
      registerCapabilities(plugin);

      // console.log(`✓ Plugin "${plugin.name}" v${plugin.version} registered`);
    }

    // Clear pending
    pendingPlugins.clear();
  }

  const registryInstance: PluginRegistry = {
    /**
     * Register a plugin
     */
    register: async (plugin: DiagramsPlugin): Promise<void> => {
      // Validate plugin structure
      if (!plugin.name) {
        throw new PluginError("Plugin must have a name");
      }
      if (!plugin.version) {
        throw new PluginError("Plugin must have a version", plugin.name);
      }
      if (!plugin.apiVersion) {
        throw new PluginError("Plugin must have an apiVersion", plugin.name);
      }
      if (!plugin.capabilities || plugin.capabilities.length === 0) {
        throw new PluginError("Plugin must have at least one capability", plugin.name);
      }
      if (!plugin.runtimeSupport) {
        throw new PluginError("Plugin must declare runtimeSupport", plugin.name);
      }

      // Check for duplicate
      if (plugins.has(plugin.name)) {
        throw new PluginError(`Plugin "${plugin.name}" is already registered`, plugin.name);
      }

      // Add to pending for batch dependency resolution
      pendingPlugins.set(plugin.name, { plugin, config: undefined });

      // Try to resolve immediately
      await resolvePendingPlugins();
    },

    /**
     * Unregister a plugin
     */
    unregister: async (name: string): Promise<void> => {
      const plugin = plugins.get(name);
      if (!plugin) {
        throw new PluginError(`Plugin "${name}" is not registered`, name);
      }

      // Check if other plugins depend on this one
      const dependents: string[] = [];
      for (const [pluginName, p] of plugins) {
        if (p.dependencies?.includes(name)) {
          dependents.push(pluginName);
        }
      }
      if (dependents.length > 0) {
        throw new PluginError(
          `Cannot unregister "${name}" - required by: ${dependents.join(", ")}`,
          name,
        );
      }

      // Call destroy if available
      if (plugin.destroy) {
        await plugin.destroy();
      }

      // Unregister capabilities
      unregisterCapabilities(plugin);

      // Remove from maps
      plugins.delete(name);
      pluginConfigs.delete(name);

      console.log(`✗ Plugin "${name}" unregistered`);
    },

    /**
     * Get a plugin by name
     */
    getPlugin: (name: string) => plugins.get(name),

    /**
     * Get an importer by name
     */
    getImporter: (name: string) => importers.get(name),

    /**
     * Get an exporter by name
     */
    getExporter: (name: string) => exporters.get(name),

    /**
     * Get a renderer by format
     */
    getRenderer: (format: string) => renderers.get(format),

    /**
     * Get a metadata provider by name
     */
    getMetadataProvider: (provider: string) => metadataProviders.get(provider),

    /**
     * Execute hooks for an event
     */
    executeHooks: async <T>(event: HookEvent, data: T): Promise<T> => {
      const eventHooks = hooks.get(event) || [];
      let result = data;

      for (const { handler, pluginName } of eventHooks) {
        try {
          const context = buildContext();
          const newResult = await handler(result, { ...context, event });
          if (newResult !== undefined) {
            result = newResult as T;
          }
        } catch (error) {
          console.error(`Hook error in plugin "${pluginName}" for event "${event}":`, error);
          // Continue with other hooks
        }
      }

      return result;
    },

    /**
     * List all registered plugins
     */
    listPlugins: () => Array.from(plugins.values()),

    /**
     * List all capabilities by type
     */
    listCapabilities: () => ({
      importers: Array.from(importers.keys()),
      exporters: Array.from(exporters.keys()),
      renderers: Array.from(renderers.keys()),
      metadataProviders: Array.from(metadataProviders.keys()),
    }),
    loadResourcesList: () => loadResourcesList(),
    loadYaml: () => loadYaml(),
  };

  return registryInstance;
}
