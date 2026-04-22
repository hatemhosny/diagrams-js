/**
 * Built-in SVG plugin for diagrams-js
 *
 * This plugin provides import/export capabilities for SVG format with embedded
 * diagram metadata, enabling round-trip serialization through SVG images.
 *
 * Graphviz does not natively support passing arbitrary data-* attributes through
 * to generated SVG elements, so this plugin uses a post-processing step to inject
 * diagram data after rendering.
 *
 * @example
 * ```typescript
 * const diagram = Diagram('My Architecture');
 * diagram.add(EC2('Web Server'));
 *
 * // Export SVG with embedded metadata
 * const svg = await diagram.export('svg');
 *
 * // Import back from SVG
 * const restored = Diagram('Restored');
 * await restored.import(svg, 'svg');
 * ```
 */

import type {
  DiagramsPlugin,
  ImporterCapability,
  ExporterCapability,
  ImportContext,
} from "../types.js";
import type { Diagram } from "../../Diagram.js";
import type { DiagramJSON, DiagramClusterJSON } from "../../json.js";
import { fromJSON as fromJSONImpl } from "../../json.js";
import { mergeDiagrams } from "./json.js";

const SVG_PLUGIN_VERSION = "1.0.0";
const DIAGRAM_VERSION = "1.0";

/**
 * Encode a UTF-8 string to base64 in a cross-platform way.
 */
function utf8ToBase64(str: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str, "utf-8").toString("base64");
  }
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Decode a base64 string to UTF-8 in a cross-platform way.
 */
function base64ToUtf8(str: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str, "base64").toString("utf-8");
  }
  const binary = atob(str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

/**
 * Escape a string for use in an XML attribute value.
 */
function escapeXmlAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Build data attributes for a node element.
 */
function buildNodeDataAttrs(node: DiagramJSON["nodes"][number]): string {
  const attrs: Record<string, string> = { "data-node-id": node.id };
  if (node.label !== undefined) attrs["data-node-label"] = node.label;
  if (node.provider !== undefined) attrs["data-node-provider"] = node.provider;
  if (node.service !== undefined) attrs["data-node-service"] = node.service;
  if (node.type !== undefined) attrs["data-node-type"] = node.type;
  if (node.metadata && Object.keys(node.metadata).length > 0) {
    attrs["data-node-metadata"] = utf8ToBase64(JSON.stringify(node.metadata));
  }
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${escapeXmlAttr(v)}"`)
    .join(" ");
}

/**
 * Build data attributes for a cluster element.
 */
function buildClusterDataAttrs(cluster: DiagramClusterJSON): string {
  const attrs: Record<string, string> = { "data-cluster-label": cluster.label };
  if (cluster.nodes && cluster.nodes.length > 0) {
    attrs["data-cluster-nodes"] = cluster.nodes.join(",");
  }
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${escapeXmlAttr(v)}"`)
    .join(" ");
}

/**
 * Enhance an SVG element by adding data attributes.
 * Matches elements by their class and <title> content.
 *
 * The regex is carefully constrained so it cannot cross `<g` boundaries,
 * preventing it from consuming sibling elements when titles are matched.
 */
function enhanceSVGElement(svg: string, className: string, title: string, attrs: string): string {
  if (!attrs) return svg;
  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(
    `<g\\b([^>]*)class="${className}"([^>]*)>` +
      `((?:(?!<g\\b)[\\s\\S])*?)<title>${escapedTitle}<\\/title>`,
    "g",
  );
  return svg.replace(regex, (match, beforeClass, afterClass, innerContent) => {
    return (
      `<g${beforeClass}class="${className}"${afterClass} ${attrs}>` +
      `${innerContent}<title>${title}</title>`
    );
  });
}

/**
 * Embed diagram JSON metadata into an SVG string.
 *
 * Because Graphviz does not pass arbitrary data-* attributes through from DOT
 * to the generated SVG, we post-process the rendered SVG to attach:
 *
 * 1. The full diagram JSON (base64-encoded) to the root <svg> element.
 * 2. Per-element data attributes to node and cluster groups for easy DOM querying.
 */
export function embedDiagramData(svg: string, json: DiagramJSON): string {
  const jsonStr = JSON.stringify(json);
  const base64 = utf8ToBase64(jsonStr);

  // Inject root-level data attribute on the <svg> element
  svg = svg.replace(
    /<svg\b([^>]*)>/,
    `<svg$1 data-diagram-version="${DIAGRAM_VERSION}" data-diagram-json="${base64}">`,
  );

  // Add per-element data attributes for nodes
  for (const node of json.nodes) {
    const attrs = buildNodeDataAttrs(node);
    svg = enhanceSVGElement(svg, "node", node.id, attrs);
  }

  // Add per-element data attributes for clusters
  if (json.clusters) {
    for (const cluster of json.clusters) {
      const clusterDotName = `cluster_${cluster.label.replace(/\s+/g, "_")}`;
      const attrs = buildClusterDataAttrs(cluster);
      svg = enhanceSVGElement(svg, "cluster", clusterDotName, attrs);
    }
  }

  return svg;
}

/**
 * Extract diagram JSON metadata from an SVG string.
 */
function extractDiagramData(svg: string): DiagramJSON | null {
  const match = svg.match(/data-diagram-json="([^"]+)"/);
  if (!match) return null;
  try {
    const jsonStr = base64ToUtf8(match[1]);
    return JSON.parse(jsonStr) as DiagramJSON;
  } catch {
    return null;
  }
}

/**
 * Create the built-in SVG plugin
 *
 * This plugin is automatically registered with every diagram and provides
 * SVG export/import with embedded metadata capabilities.
 */
export function createSVGPlugin(): DiagramsPlugin {
  return {
    name: "svg",
    version: SVG_PLUGIN_VERSION,
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
        name: "svg",
        extensions: [".svg"],
        mimeTypes: ["image/svg+xml"],

        canImport: async (source: string | string[]): Promise<boolean> => {
          const sources = Array.isArray(source) ? source : [source];
          for (const src of sources) {
            if (typeof src !== "string") return false;
            if (!src.trim().startsWith("<svg") && !src.includes("<svg")) {
              return false;
            }
            if (!src.includes('data-diagram-json="')) {
              return false;
            }
          }
          return true;
        },

        import: async (
          source: string | string[],
          diagram: Diagram,
          context: ImportContext,
        ): Promise<void> => {
          const sources = Array.isArray(source) ? source : [source];

          for (const src of sources) {
            const json = extractDiagramData(src);
            if (!json) {
              throw new Error(
                "Invalid diagram SVG: missing or corrupted embedded diagram data. " +
                  "Make sure the SVG was exported using diagrams-js SVG export.",
              );
            }

            // Delegate to the JSON importer if available for consistent merge logic
            const jsonImporter = context.getImporter("json");
            if (jsonImporter) {
              await jsonImporter.import(JSON.stringify(json), diagram, context);
            } else {
              // Fallback: import directly using fromJSON and merge
              const importedDiagram = await fromJSONImpl(json);
              await mergeDiagrams(diagram, importedDiagram, context.lib);
            }
          }
        },
      } as ImporterCapability,

      {
        type: "exporter",
        name: "svg",
        extension: ".svg",
        mimeType: "image/svg+xml",

        export: async (diagram: Diagram): Promise<string> => {
          return (await diagram.render({ format: "svg" })) as string;
        },
      } as ExporterCapability,
    ],
  };
}

/**
 * Default SVG plugin instance
 * Exported for convenience
 */
export const svgPlugin = createSVGPlugin();
