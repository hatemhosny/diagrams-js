/**
 * Provider module loader for dynamic imports.
 *
 * Dynamically imports provider modules based on provider/service names
 * to resolve node factories without global state.
 *
 * @packageDocumentation
 */

import type { Node } from "./Node.js";

/**
 * A node factory function (e.g., `EC2`, `Lambda`, `S3`).
 */
export type NodeFactory = (label?: string, options?: Record<string, unknown>) => Node;

let importStrategy: "relative" | "direct" | "bare" | "cdn" | null = null;

/**
 * Attempts to import a provider module using multiple path strategies.
 *
 * Tries in order:
 * 1. Relative subpath: `./aws/compute` - resolved by package exports to `./dist/providers/aws/compute.js`
 *    (works in Node.js, Bun with package.json exports)
 * 2. Direct relative path: `./providers/aws/compute.js`
 *    (fallback for Deno, browsers, or when package exports not available)
 * 3. Bare module imports: `diagrams-js/aws/compute`
 *    (Node.js/Bun or browsers/Deno with importmaps)
 * 4. CDN: `https://esm.sh/diagrams-js/aws/compute`
 *
 * @param provider - Provider name (e.g., 'aws')
 * @param service - Service name (e.g., 'compute')
 * @returns The imported module or null if all attempts fail
 */
async function tryImportProvider(
  provider: string,
  service?: string,
): Promise<Record<string, unknown> | null> {
  // Use indirect dynamic imports to prevent bundlers from analyzing paths
  // while still working with native ES module resolution
  const getPath = (parts: Array<string | undefined>) => parts.filter((x) => x != null).join("/");

  // Strategy 1: Relative subpath import (resolved by package exports)
  // In Node.js/Bun: ./aws/compute -> package exports -> ./dist/providers/aws/compute.js
  if (!importStrategy || importStrategy === "relative") {
    try {
      const path = getPath([".", provider, service]);
      const module = await import(path);
      importStrategy = "relative";
      return module;
    } catch {
      // Package exports not available
    }
  }

  // Strategy 2: Direct relative path with .js extension
  // For Deno, browsers, or environments without package exports support
  if (!importStrategy || importStrategy === "direct") {
    try {
      const path = getPath([".", "providers", provider, service]);
      const module = await import(path + ".js");
      importStrategy = "direct";
      return module;
    } catch {
      // Relative path not available
    }
  }

  // Strategy 3: bare module imports for Node.js/Bun or browsers/Deno with importmaps
  if (!importStrategy || importStrategy === "bare") {
    try {
      const path = getPath(["diagrams-js", provider, service]);
      const module = await import(path);
      importStrategy = "bare";
      return module;
    } catch {
      // bare module not supported
    }
  }
  // Strategy 4: CDN - constructed dynamically
  if (!importStrategy || importStrategy === "cdn") {
    try {
      const path = getPath(["https://esm.sh", "diagrams-js", provider, service]);
      const module = await import(path);
      importStrategy = "cdn";
      return module;
    } catch {
      // Module not found - fall back to plain nodes
    }
  }
  return null;
}

/**
 * Dynamically imports provider modules and builds a factory lookup.
 *
 * This uses multiple import strategies to support different environments:
 * - Package exports (Node.js/Bun with package.json exports)
 * - Direct relative paths (Deno, browsers, etc.)
 *
 * @param providerServices - Array of [provider, service] tuples to load
 * @returns Map of type names to factory functions
 */
export async function loadProviderModules(
  providerServices: Array<[string, string]>,
): Promise<Map<string, NodeFactory>> {
  const factoryLookup = new Map<string, NodeFactory>();

  for (const [provider, service] of providerServices) {
    const module = await tryImportProvider(provider, service);

    if (module) {
      // Extract all factory functions (exported functions that aren't internal)
      for (const [name, fn] of Object.entries(module)) {
        if (typeof fn === "function" && !name.startsWith("_")) {
          factoryLookup.set(name, fn as NodeFactory);
        }
      }
    }
    // If module not found, we'll fall back to plain nodes - that's fine
  }

  return factoryLookup;
}

export async function loadResourcesList() {
  return (await tryImportProvider("find-resource")) as
    | typeof import("./providers/find-resource.ts")
    | null;
}
