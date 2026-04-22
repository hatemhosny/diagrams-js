/**
 * Built-in JSON plugin for diagrams-js
 *
 * This plugin provides import/export capabilities for the native JSON format.
 * It is automatically registered with every diagram.
 */

import type {
  DiagramsPlugin,
  ImporterCapability,
  ExporterCapability,
  ImportContext,
} from "../types.js";
import type { Diagram } from "../../Diagram.js";
import type { DiagramJSON } from "../../json.js";
import { fromJSON as fromJSONImpl } from "../../json.js";
import { loadProviderModules } from "../../provider-loader.js";
import type { Node } from "../../Node.js";

/**
 * Create the built-in JSON plugin
 *
 * This plugin is automatically registered with every diagram and provides
 * native JSON serialization/deserialization capabilities.
 *
 * @example
 * ```typescript
 * const diagram = Diagram('Test');
 * // JSON import/export is available by default
 * const json = diagram.toJSON();
 * ```
 */
export function createJSONPlugin(): DiagramsPlugin {
  return {
    name: "json",
    version: "1.0.0",
    apiVersion: "1.0",
    runtimeSupport: {
      node: true,
      browser: true,
      deno: true,
      bun: true,
    },
    capabilities: [
      {
        type: "importer",
        name: "json",
        extensions: [".json"],
        mimeTypes: ["application/json"],

        canImport: async (source: string | string[]): Promise<boolean> => {
          try {
            const sources = Array.isArray(source) ? source : [source];
            for (const src of sources) {
              const parsed = JSON.parse(src);
              // Basic validation - check for required fields
              if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.nodes)) {
                return false;
              }
            }
            return true;
          } catch {
            return false;
          }
        },

        import: async (
          source: string | string[],
          diagram: Diagram,
          context: ImportContext,
        ): Promise<void> => {
          const sources = Array.isArray(source) ? source : [source];

          for (let i = 0; i < sources.length; i++) {
            const json: DiagramJSON = JSON.parse(sources[i]);

            // Import the JSON using Diagram.fromJSON() to get proper icon resolution
            const importedDiagram = await fromJSONImpl(json);

            // Merge the imported diagram into the target diagram
            await mergeDiagrams(diagram, importedDiagram, context.lib);
          }
        },
      } as ImporterCapability,

      {
        type: "exporter",
        name: "json",
        extension: ".json",
        mimeType: "application/json",

        export: async (diagram: Diagram): Promise<string> => {
          const json = diagram.toJSON();
          return JSON.stringify(json, null, 2);
        },
      } as ExporterCapability,
    ],
  };
}

/**
 * Merge an imported diagram into the target diagram
 * This copies all nodes, edges, and clusters from the source to the target
 * This is a reusable utility that can be used by other plugins
 */
export async function mergeDiagrams(
  target: Diagram,
  source: Diagram,
  lib: ImportContext["lib"],
): Promise<void> {
  // Get the JSON representation of the source diagram
  const json = source.toJSON();

  // Collect unique provider/service pairs from nodes that have them
  const providerServicePairs = new Map<string, [string, string]>();
  for (const node of json.nodes) {
    if (node.provider && node.service) {
      const key = `${node.provider}/${node.service}`;
      providerServicePairs.set(key, [node.provider, node.service]);
    }
  }

  // Dynamically load provider modules based on provider/service
  const factoryLookup = await loadProviderModules(Array.from(providerServicePairs.values()));

  // Build a map of node IDs to Node objects from the source diagram
  const sourceNodes = new Map<string, Node>();

  // Helper to collect nodes from a diagram (including from clusters)
  function collectNodes(diag: Diagram): void {
    // Get all nodes from the diagram's internal structure
    const diagJson = diag.toJSON();

    // Create nodes in the target diagram
    for (const nodeDef of diagJson.nodes) {
      // Try to use a provider factory function if type is specified and a matching factory exists
      const factory = nodeDef.type ? factoryLookup.get(nodeDef.type) : undefined;

      let node: Node;
      if (factory) {
        // Use the provider factory - it sets ~provider, ~type, ~resource, ~iconDataUrl
        const nodeOptions: Record<string, unknown> = {
          nodeId: nodeDef.id,
        };
        if (nodeDef.attrs) {
          Object.assign(nodeOptions, nodeDef.attrs);
        }
        node = factory(nodeDef.label || nodeDef.id, nodeOptions);
      } else if (nodeDef.iconUrl && _isRemoteUrl(nodeDef.iconUrl)) {
        // Remote icon URL - use Custom node which handles fetching automatically
        const nodeOptions: Record<string, unknown> = {
          nodeId: nodeDef.id,
        };
        if (nodeDef.attrs) {
          Object.assign(nodeOptions, nodeDef.attrs);
        }
        node = lib.Custom(nodeDef.label || nodeDef.id, nodeDef.iconUrl, nodeOptions);
      } else {
        // Build node options with provider metadata for icon resolution
        const nodeOptions: Record<string, unknown> = {
          nodeId: nodeDef.id,
        };

        // If the node has provider info, pass it in the options
        // This allows the Node factory to properly set up icon tracking
        if (nodeDef.provider) {
          nodeOptions["~provider"] = nodeDef.provider;
        }
        if (nodeDef.service) {
          nodeOptions["~type"] = nodeDef.service;
        }
        if (nodeDef.type) {
          nodeOptions["~resource"] = nodeDef.type;
        }
        if (nodeDef.iconUrl) {
          nodeOptions["~iconDataUrl"] = nodeDef.iconUrl;
        }
        if (nodeDef.attrs) {
          Object.assign(nodeOptions, nodeDef.attrs);
        }

        // Create the node in the target diagram
        node = lib.Node(nodeDef.label || nodeDef.id, nodeOptions);
      }

      // Copy metadata if present
      if (nodeDef.metadata) {
        node.metadata = nodeDef.metadata;
      }

      // Add to target diagram
      target.add(node);
      sourceNodes.set(nodeDef.id, node);
    }
  }

  collectNodes(source);

  // Create clusters and add nodes to them
  if (json.clusters) {
    for (const clusterDef of json.clusters) {
      const cluster = target.cluster(clusterDef.label);

      // Copy cluster attributes if any
      if (clusterDef.graphAttr) {
        Object.assign(cluster.graphAttr, clusterDef.graphAttr);
      }

      // Add nodes to the cluster
      if (clusterDef.nodes) {
        for (const nodeId of clusterDef.nodes) {
          const node = sourceNodes.get(nodeId);
          if (node) {
            cluster.add(node);
          }
        }
      }
    }
  }

  // Create edges from the JSON
  if (json.edges) {
    for (const edgeDef of json.edges) {
      const fromNode = sourceNodes.get(edgeDef.from);
      const toNode = sourceNodes.get(edgeDef.to);

      if (fromNode && toNode) {
        const edgeOptions: Record<string, unknown> = {};
        if (edgeDef.label) edgeOptions.label = edgeDef.label;
        if (edgeDef.color) edgeOptions.color = edgeDef.color;
        if (edgeDef.style) edgeOptions.style = edgeDef.style;
        if (edgeDef.direction) edgeOptions.dir = edgeDef.direction;
        if (edgeDef.attrs) Object.assign(edgeOptions, edgeDef.attrs);

        const edge = lib.Edge(edgeOptions);
        const direction = edgeDef.direction ?? "forward";
        switch (direction) {
          case "forward":
            edge.forward = true;
            break;
          case "back":
            edge.reverse = true;
            break;
          case "both":
            edge.forward = true;
            edge.reverse = true;
            break;
          case "none":
            // neither forward nor reverse
            break;
          default:
            edge.forward = true;
        }
        fromNode["~connect"](toNode, edge);
      }
    }
  }
}

/**
 * Check if a URL is a remote URL (http/https)
 * Data URLs return false
 */
function _isRemoteUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

/**
 * Default JSON plugin instance
 * Exported for convenience
 */
export const jsonPlugin = createJSONPlugin();
