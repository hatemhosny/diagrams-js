/**
 * Diagram diff computation and rendering.
 *
 * Provides visual diff capabilities for comparing two versions of a diagram,
 * showing added, removed, and modified elements side-by-side.
 *
 * @example
 * ```typescript
 * import { Diagram, computeDiff, renderDiff } from "diagrams-js";
 *
 * const before = JSON.parse(await fs.readFile("arch.v1.json", "utf8"));
 * const after  = JSON.parse(await fs.readFile("arch.v2.json", "utf8"));
 *
 * const diff = computeDiff(before, after);
 * const html = await renderDiff(diff, before, after, { format: "html" });
 * await fs.writeFile("diff.html", html);
 * ```
 *
 * @packageDocumentation
 */

import { Diagram as DiagramConstructor } from "./Diagram.js";

import type { Diagram } from "./Diagram.js";
import type { DiagramJSON, DiagramNodeJSON, DiagramEdgeJSON, DiagramClusterJSON } from "./json.js";

/**
 * Type of change detected during diff computation.
 */
export type ChangeKind = "added" | "removed" | "modified" | "unchanged";

/**
 * Diff result for a single node.
 */
export interface NodeDiff {
  /** The type of change */
  kind: ChangeKind;
  /** The node before changes (for removed, modified) */
  before?: DiagramNodeJSON;
  /** The node after changes (for added, modified) */
  after?: DiagramNodeJSON;
  /** Array of field paths that changed (for modified) */
  changes?: string[];
}

/**
 * Diff result for a single edge.
 */
export interface EdgeDiff {
  /** The type of change */
  kind: ChangeKind;
  /** The edge before changes */
  before?: DiagramEdgeJSON;
  /** The edge after changes */
  after?: DiagramEdgeJSON;
  /** Array of field paths that changed */
  changes?: string[];
}

/**
 * Diff result for a cluster (recursive).
 */
export interface ClusterDiff {
  /** The type of change */
  kind: ChangeKind;
  /** Cluster label */
  label: string;
  /** The cluster before changes */
  before?: DiagramClusterJSON;
  /** The cluster after changes */
  after?: DiagramClusterJSON;
  /** Array of field paths that changed */
  changes?: string[];
  /** Nested cluster diffs */
  clusters?: ClusterDiff[];
  /** Node IDs in this cluster and their diff status */
  nodes?: Map<string, NodeDiff>;
}

/**
 * Summary of changes in the diff.
 */
export interface DiffSummary {
  /** Number of added nodes/edges/clusters */
  added: number;
  /** Number of removed nodes/edges/clusters */
  removed: number;
  /** Number of modified nodes/edges/clusters */
  modified: number;
  /** Number of unchanged nodes/edges/clusters */
  unchanged: number;
}

/**
 * Metadata-level changes (diagram options, not individual elements).
 */
export interface DiffMeta {
  /** Diagram name change */
  name?: { before?: string; after?: string };
  /** Theme change */
  theme?: { before?: string; after?: string };
  /** Direction change */
  direction?: { before?: string; after?: string };
  /** Curve style change */
  curvestyle?: { before?: string; after?: string };
  /** Graph attributes change */
  graphAttr?: { before?: Record<string, string>; after?: Record<string, string> };
  /** Node attributes change */
  nodeAttr?: { before?: Record<string, string>; after?: Record<string, string> };
  /** Edge attributes change */
  edgeAttr?: { before?: Record<string, string>; after?: Record<string, string> };
}

/**
 * Complete diff result for a diagram comparison.
 */
export interface DiagramDiffResult {
  /** Node diffs by node ID */
  nodes: Map<string, NodeDiff>;
  /** Edge diffs by composite key "from->to[label]" */
  edges: Map<string, EdgeDiff>;
  /** Cluster diffs */
  clusters: ClusterDiff[];
  /** Summary counts */
  summary: DiffSummary;
  /** Metadata-level changes */
  meta: DiffMeta;
}

/**
 * Options for computing a diff.
 */
export interface DiffOptions {
  /** Fields to ignore during comparison */
  ignore?: {
    /** Ignore position/layout changes (default: true) */
    position?: boolean;
    /** Ignore metadata changes entirely, or specific metadata keys */
    metadata?: boolean | string[];
    /** Ignore specific Graphviz attributes */
    attrs?: string[];
    /** Ignore node ID changes - treat same-fingerprint nodes as unchanged (default: false) */
    nodeId?: boolean;
  };
  /** Custom node matching function (overrides default ID + fingerprint matching) */
  matchNodes?: (a: DiagramNodeJSON, b: DiagramNodeJSON) => boolean;
}

/**
 * Options for rendering a diff.
 */
export interface RenderDiffOptions {
  /** Output format: svg (combined) or html (self-contained page) */
  format?: "svg" | "html";
  /** Layout mode: side-by-side (default) or stacked */
  layout?: "side-by-side" | "stacked";
  /** Color theme: light (default) or dark */
  theme?: "light" | "dark";
  /** How to display unchanged elements: "show" | "dim" | "hide" (default: "show") */
  showUnchanged?: "show" | "dim" | "hide";
  /** Show legend in HTML output (default: true) */
  showLegend?: boolean;
  /** Show summary header in HTML output (default: true) */
  showSummary?: boolean;
  /** Enable hover tooltips in HTML output (default: true) */
  hoverDetails?: boolean;
}

// Color scheme for diff visualization
const COLORS = {
  light: {
    added: { border: "#2EA043", fill: "rgba(46, 160, 67, 0.1)", badge: "#2EA043" },
    removed: { border: "#F85149", fill: "rgba(248, 81, 73, 0.1)", badge: "#F85149" },
    modified: { border: "#D29922", fill: "rgba(210, 153, 34, 0.1)", badge: "#D29922" },
    unchanged: { border: "#8C959F", fill: "transparent", badge: "#8C959F" },
  },
  dark: {
    added: { border: "#3FB950", fill: "rgba(63, 185, 80, 0.15)", badge: "#3FB950" },
    removed: { border: "#F85149", fill: "rgba(248, 81, 73, 0.15)", badge: "#F85149" },
    modified: { border: "#D29922", fill: "rgba(210, 153, 34, 0.15)", badge: "#D29922" },
    unchanged: { border: "#6E7681", fill: "transparent", badge: "#6E7681" },
  },
};

/**
 * Compute a fingerprint for node matching fallback.
 * Combines label, provider, type, and resource.
 * Excludes node ID since IDs are non-deterministic (auto-generated with timestamp + random).
 */
function nodeFingerprint(node: DiagramNodeJSON): string {
  return `${node.label || ""}|${node.provider || ""}|${node.type || ""}|${node.resource || ""}`;
}

/**
 * Compute a label fingerprint for detecting label changes.
 * Same provider/type/resource but different label = label change (treated as modified).
 */
function labelFingerprint(node: DiagramNodeJSON): string {
  return `${node.provider || ""}|${node.type || ""}|${node.resource || ""}`;
}

/**
 * Check if two sets have equal contents.
 */
function setsEqual<T>(a: Set<T>, b: Set<T>): boolean {
  if (a.size !== b.size) return false;
  for (const item of a) {
    if (!b.has(item)) return false;
  }
  return true;
}

/**
 * Deep equality check for objects, with optional ignore paths.
 */
function deepEqual(a: unknown, b: unknown, ignorePaths: string[] = []): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return a === b;
  if (typeof a !== "object") return a === b;

  const aObj = a as Record<string, unknown>;
  const bObj = b as Record<string, unknown>;
  const aKeys = Object.keys(aObj).filter((k) => !ignorePaths.includes(k));
  const bKeys = Object.keys(bObj).filter((k) => !ignorePaths.includes(k));

  if (aKeys.length !== bKeys.length) return false;

  for (const key of aKeys) {
    if (!bKeys.includes(key)) return false;
    const nestedIgnore = ignorePaths
      .filter((p) => p.startsWith(`${key}.`))
      .map((p) => p.slice(key.length + 1));
    if (!deepEqual(aObj[key], bObj[key], nestedIgnore)) return false;
  }

  return true;
}

/**
 * Get the list of changed field paths between two objects.
 */
function getChanges(
  before: Record<string, unknown>,
  after: Record<string, unknown>,
  prefix = "",
  ignorePaths: string[] = [],
): string[] {
  const changes: string[] = [];
  const allKeys = new Set([...Object.keys(before), ...Object.keys(after)]);

  for (const key of allKeys) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (ignorePaths.includes(path)) continue;

    const beforeVal = before[key];
    const afterVal = after[key];

    if (!(key in before)) {
      changes.push(`${path} (added)`);
    } else if (!(key in after)) {
      changes.push(`${path} (removed)`);
    } else if (
      typeof beforeVal === "object" &&
      beforeVal !== null &&
      typeof afterVal === "object" &&
      afterVal !== null
    ) {
      const nestedChanges = getChanges(
        beforeVal as Record<string, unknown>,
        afterVal as Record<string, unknown>,
        path,
        ignorePaths,
      );
      changes.push(...nestedChanges);
    } else if (beforeVal !== afterVal) {
      changes.push(`${path}: ${JSON.stringify(beforeVal)} → ${JSON.stringify(afterVal)}`);
    }
  }

  return changes;
}

/**
 * Compute the diff between two diagram versions.
 *
 * @param before - The original diagram (JSON or Diagram object)
 * @param after - The updated diagram (JSON or Diagram object)
 * @param opts - Options for diff computation
 * @returns Complete diff result with nodes, edges, clusters, and summary
 *
 * @example
 * ```typescript
 * const diff = computeDiff(diagramV1.toJSON(), diagramV2.toJSON());
 * console.log(diff.summary); // { added: 2, removed: 1, modified: 3, ... }
 * ```
 */
export function computeDiff(
  before: DiagramJSON | Diagram,
  after: DiagramJSON | Diagram,
  opts: DiffOptions = {},
): DiagramDiffResult {
  // Normalize inputs to JSON
  const beforeJson: DiagramJSON =
    typeof (before as Diagram).toJSON === "function"
      ? (before as Diagram).toJSON()
      : (before as DiagramJSON);
  const afterJson: DiagramJSON =
    typeof (after as Diagram).toJSON === "function"
      ? (after as Diagram).toJSON()
      : (after as DiagramJSON);

  // Build ignore paths
  const ignorePaths: string[] = [];
  if (opts.ignore?.position !== false) {
    // Position-related attrs are ignored by default
    ignorePaths.push("attrs.pos", "attrs.lp");
  }
  if (opts.ignore?.attrs) {
    for (const attr of opts.ignore.attrs) {
      ignorePaths.push(`attrs.${attr}`);
    }
  }
  if (opts.ignore?.metadata === true) {
    ignorePaths.push("metadata");
  } else if (Array.isArray(opts.ignore?.metadata)) {
    for (const key of opts.ignore.metadata) {
      ignorePaths.push(`metadata.${key}`);
    }
  }

  const result: DiagramDiffResult = {
    nodes: new Map(),
    edges: new Map(),
    clusters: [],
    summary: { added: 0, removed: 0, modified: 0, unchanged: 0 },
    meta: {},
  };

  // Compute metadata changes
  if (beforeJson.name !== afterJson.name) {
    result.meta.name = { before: beforeJson.name, after: afterJson.name };
  }
  if (beforeJson.theme !== afterJson.theme) {
    result.meta.theme = { before: beforeJson.theme, after: afterJson.theme };
  }
  if (beforeJson.direction !== afterJson.direction) {
    result.meta.direction = { before: beforeJson.direction, after: afterJson.direction };
  }
  if (beforeJson.curvestyle !== afterJson.curvestyle) {
    result.meta.curvestyle = { before: beforeJson.curvestyle, after: afterJson.curvestyle };
  }

  // Deep compare graphAttr, nodeAttr, edgeAttr
  const graphAttrChanges = getChanges(beforeJson.graphAttr || {}, afterJson.graphAttr || {}, "");
  if (graphAttrChanges.length > 0) {
    result.meta.graphAttr = { before: beforeJson.graphAttr, after: afterJson.graphAttr };
  }

  const nodeAttrChanges = getChanges(beforeJson.nodeAttr || {}, afterJson.nodeAttr || {}, "");
  if (nodeAttrChanges.length > 0) {
    result.meta.nodeAttr = { before: beforeJson.nodeAttr, after: afterJson.nodeAttr };
  }

  const edgeAttrChanges = getChanges(beforeJson.edgeAttr || {}, afterJson.edgeAttr || {}, "");
  if (edgeAttrChanges.length > 0) {
    result.meta.edgeAttr = { before: beforeJson.edgeAttr, after: afterJson.edgeAttr };
  }

  // Phase 1: Match nodes by fingerprint (label + provider + service + type)
  // IDs are non-deterministic (auto-generated with timestamp + random), so we don't use them for matching.
  // This ensures identical diagrams created separately will show as unchanged.
  const beforeNodes = new Map(beforeJson.nodes.map((n) => [n.id, n]));
  const afterNodes = new Map(afterJson.nodes.map((n) => [n.id, n]));

  const matchedBefore = new Set<string>();
  const matchedAfter = new Set<string>();
  const idMapping = new Map<string, string>(); // after ID -> before ID (for mapping edges)

  // Build fingerprint maps for matching
  const beforeFingerprints = new Map(beforeJson.nodes.map((n) => [nodeFingerprint(n), n.id]));

  for (const [afterId, afterNode] of afterNodes) {
    const fp = nodeFingerprint(afterNode);
    if (beforeFingerprints.has(fp)) {
      const beforeId = beforeFingerprints.get(fp)!;
      const beforeNode = beforeNodes.get(beforeId)!;

      // Skip if already matched (duplicate fingerprints)
      if (matchedBefore.has(beforeId) || matchedAfter.has(afterId)) continue;

      matchedBefore.add(beforeId);
      matchedAfter.add(afterId);
      idMapping.set(afterId, beforeId);

      // Compare nodes (ignoring ID since it's non-deterministic)
      const changes = getChanges(
        beforeNode as unknown as Record<string, unknown>,
        afterNode as unknown as Record<string, unknown>,
        "",
        [...ignorePaths, "id"],
      );

      if (changes.length === 0) {
        result.nodes.set(afterId, { kind: "unchanged", before: beforeNode, after: afterNode });
        result.summary.unchanged++;
      } else {
        result.nodes.set(afterId, {
          kind: "modified",
          before: beforeNode,
          after: afterNode,
          changes,
        });
        result.summary.modified++;
      }
    }
  }

  // Phase 2: Detect modifications by label fingerprint (same provider/service/type, different label)
  // This catches nodes that changed label but keep the same provider/type
  // Uses edge connectivity to disambiguate when multiple nodes have the same label fingerprint
  const unmatchedBefore = Array.from(beforeNodes.entries()).filter(
    ([id]) => !matchedBefore.has(id),
  );
  const unmatchedAfter = Array.from(afterNodes.entries()).filter(([id]) => !matchedAfter.has(id));

  // Group unmatched nodes by label fingerprint
  const beforeByLabelFP = new Map<string, string[]>();
  for (const [id, node] of unmatchedBefore) {
    const fp = labelFingerprint(node);
    if (!beforeByLabelFP.has(fp)) beforeByLabelFP.set(fp, []);
    beforeByLabelFP.get(fp)!.push(id);
  }

  const afterByLabelFP = new Map<string, string[]>();
  for (const [id, node] of unmatchedAfter) {
    const fp = labelFingerprint(node);
    if (!afterByLabelFP.has(fp)) afterByLabelFP.set(fp, []);
    afterByLabelFP.get(fp)!.push(id);
  }

  // Build edge connectivity maps for disambiguation
  // For each node, track which matched nodes it connects to
  function getConnectedMatchedIds(
    nodeId: string,
    edges: DiagramEdgeJSON[],
    isBefore: boolean,
  ): Set<string> {
    const connected = new Set<string>();
    for (const edge of edges) {
      // Check if this edge involves the node we're checking
      const isFromNode = edge.from === nodeId;
      const isToNode = edge.to === nodeId;
      if (!isFromNode && !isToNode) continue;

      // Get the other endpoint of the edge
      const otherId = isFromNode ? edge.to : edge.from;

      // Map to the "before" ID space for comparison
      const mappedId = isBefore ? otherId : idMapping.get(otherId) || otherId;

      // Check if the other endpoint is a matched node
      const isMatched = isBefore ? matchedBefore.has(otherId) : idMapping.has(otherId);

      if (mappedId && isMatched) {
        connected.add(mappedId);
      }
    }
    return connected;
  }

  // For each label fingerprint group, try to match using edge connectivity
  for (const [labelFp, afterIds] of afterByLabelFP) {
    const beforeIds = beforeByLabelFP.get(labelFp);
    if (!beforeIds || beforeIds.length === 0) continue;

    // Build connectivity signatures for after nodes
    const afterSignatures = afterIds.map((afterId) => ({
      id: afterId,
      node: afterNodes.get(afterId)!,
      connected: getConnectedMatchedIds(afterId, afterJson.edges || [], false),
    }));

    // Build connectivity signatures for before nodes
    const beforeSignatures = beforeIds.map((beforeId) => ({
      id: beforeId,
      node: beforeNodes.get(beforeId)!,
      connected: getConnectedMatchedIds(beforeId, beforeJson.edges || [], true),
    }));

    // Match by connectivity signature (exact match of connected nodes)
    for (const afterSig of afterSignatures) {
      if (matchedAfter.has(afterSig.id)) continue;

      // Find best match: same connectivity signature
      // If both have empty connectivity, skip (will be handled by Phase 2b)
      const bestMatch = beforeSignatures.find(
        (b) =>
          !matchedBefore.has(b.id) &&
          setsEqual(afterSig.connected, b.connected) &&
          afterSig.connected.size > 0,
      );

      if (bestMatch) {
        matchedBefore.add(bestMatch.id);
        matchedAfter.add(afterSig.id);
        idMapping.set(afterSig.id, bestMatch.id);

        const beforeNode = bestMatch.node;
        const afterNode = afterSig.node;

        if (beforeNode.label !== afterNode.label) {
          result.nodes.set(afterSig.id, {
            kind: "modified",
            before: beforeNode,
            after: afterNode,
            changes: [`label: "${beforeNode.label}" → "${afterNode.label}"`],
          });
          result.summary.modified++;
        } else {
          result.nodes.set(afterSig.id, {
            kind: "unchanged",
            before: beforeNode,
            after: afterNode,
          });
          result.summary.unchanged++;
        }
      }
    }
  }

  // Phase 2b: Simple label fingerprint matching for remaining unmatched nodes
  // Only match 1:1 - if counts differ, the extras are added/removed
  const remainingUnmatchedBefore = Array.from(beforeNodes.entries()).filter(
    ([id]) => !matchedBefore.has(id),
  );
  const remainingUnmatchedAfter = Array.from(afterNodes.entries()).filter(
    ([id]) => !matchedAfter.has(id),
  );

  // Group by label fingerprint
  const remainingBeforeByFP = new Map<string, string[]>();
  for (const [id, node] of remainingUnmatchedBefore) {
    const fp = labelFingerprint(node);
    if (!remainingBeforeByFP.has(fp)) remainingBeforeByFP.set(fp, []);
    remainingBeforeByFP.get(fp)!.push(id);
  }

  const remainingAfterByFP = new Map<string, string[]>();
  for (const [id, node] of remainingUnmatchedAfter) {
    const fp = labelFingerprint(node);
    if (!remainingAfterByFP.has(fp)) remainingAfterByFP.set(fp, []);
    remainingAfterByFP.get(fp)!.push(id);
  }

  // Only match when counts are equal (1:1 mapping)
  for (const [fp, afterIds] of remainingAfterByFP) {
    const beforeIds = remainingBeforeByFP.get(fp);
    if (!beforeIds) continue;

    // Only match if same count - otherwise extras are added/removed
    const matchCount = Math.min(afterIds.length, beforeIds.length);

    for (let i = 0; i < matchCount; i++) {
      const afterId = afterIds[i];
      const beforeId = beforeIds[i];

      // Skip if already matched
      if (matchedBefore.has(beforeId) || matchedAfter.has(afterId)) continue;

      const beforeNode = beforeNodes.get(beforeId)!;
      const afterNode = afterNodes.get(afterId)!;

      matchedBefore.add(beforeId);
      matchedAfter.add(afterId);
      idMapping.set(afterId, beforeId);

      if (beforeNode.label !== afterNode.label) {
        result.nodes.set(afterId, {
          kind: "modified",
          before: beforeNode,
          after: afterNode,
          changes: [`label: "${beforeNode.label}" → "${afterNode.label}"`],
        });
        result.summary.modified++;
      } else {
        result.nodes.set(afterId, {
          kind: "unchanged",
          before: beforeNode,
          after: afterNode,
        });
        result.summary.unchanged++;
      }
    }
  }

  // Phase 3: Remaining unmatched = added/removed
  for (const [id, node] of beforeNodes) {
    if (!matchedBefore.has(id)) {
      result.nodes.set(id, { kind: "removed", before: node });
      result.summary.removed++;
    }
  }

  for (const [id, node] of afterNodes) {
    if (!matchedAfter.has(id)) {
      result.nodes.set(id, { kind: "added", after: node });
      result.summary.added++;
    }
  }

  // Match edges using the ID mapping
  const beforeEdges = beforeJson.edges || [];
  const afterEdges = afterJson.edges || [];

  // Edge key for matching - only uses endpoints, not label
  // This allows us to detect label changes as modifications rather than add/remove
  function edgeMatchKey(edge: DiagramEdgeJSON, side: "before" | "after"): string {
    // idMapping maps afterId -> beforeId
    // For "before" side: use edge.from/to as-is (they are before IDs)
    // For "after" side: map after IDs to before IDs for comparison
    let fromId: string;
    let toId: string;

    if (side === "before") {
      fromId = edge.from;
      toId = edge.to;
    } else {
      // side === "after": map after IDs back to before IDs
      fromId = idMapping.get(edge.from) || edge.from;
      toId = idMapping.get(edge.to) || edge.to;
    }

    return `${fromId}->${toId}`;
  }

  // Full edge key including label for storage
  function edgeKey(edge: DiagramEdgeJSON): string {
    return `${edge.from}->${edge.to}[${edge.label || ""}]`;
  }

  // Build maps using match keys for comparison
  const beforeEdgeMatchMap = new Map<string, DiagramEdgeJSON>();
  for (const e of beforeEdges) {
    beforeEdgeMatchMap.set(edgeMatchKey(e, "before"), e);
  }

  const afterEdgeMatchMap = new Map<string, DiagramEdgeJSON>();
  for (const e of afterEdges) {
    afterEdgeMatchMap.set(edgeMatchKey(e, "after"), e);
  }

  const matchedBeforeEdges = new Set<string>();
  const matchedAfterEdges = new Set<string>();

  // Match edges by endpoints (ignoring label)
  for (const [matchKey, afterEdge] of afterEdgeMatchMap) {
    if (beforeEdgeMatchMap.has(matchKey)) {
      const beforeEdge = beforeEdgeMatchMap.get(matchKey)!;
      const beforeStorageKey = edgeKey(beforeEdge);
      const afterStorageKey = edgeKey(afterEdge);

      matchedBeforeEdges.add(beforeStorageKey);
      matchedAfterEdges.add(afterStorageKey);

      // Compare edges, but ignore from/to ID changes since those are just
      // remapped node IDs - the logical connection is the same
      const changes = getChanges(
        beforeEdge as unknown as Record<string, unknown>,
        afterEdge as unknown as Record<string, unknown>,
        "",
        [...ignorePaths, "from", "to"],
      );

      if (changes.length === 0) {
        result.edges.set(afterStorageKey, {
          kind: "unchanged",
          before: beforeEdge,
          after: afterEdge,
        });
        result.summary.unchanged++;
      } else {
        result.edges.set(afterStorageKey, {
          kind: "modified",
          before: beforeEdge,
          after: afterEdge,
          changes,
        });
        result.summary.modified++;
      }
    }
  }

  // Added edges
  for (const e of afterEdges) {
    const key = edgeKey(e);
    if (!matchedAfterEdges.has(key)) {
      result.edges.set(key, { kind: "added", after: e });
      result.summary.added++;
    }
  }

  // Removed edges
  for (const e of beforeEdges) {
    const key = edgeKey(e);
    if (!matchedBeforeEdges.has(key)) {
      result.edges.set(key, { kind: "removed", before: e });
      result.summary.removed++;
    }
  }

  // Match clusters (simplified - by label path)
  function matchClusters(
    beforeClusters: DiagramClusterJSON[] = [],
    afterClusters: DiagramClusterJSON[] = [],
    path: string[] = [],
  ): ClusterDiff[] {
    const diffs: ClusterDiff[] = [];
    const beforeMap = new Map(beforeClusters.map((c) => [c.label, c]));
    const afterMap = new Map(afterClusters.map((c) => [c.label, c]));

    const allLabels = new Set([...beforeMap.keys(), ...afterMap.keys()]);

    for (const label of allLabels) {
      const beforeCluster = beforeMap.get(label);
      const afterCluster = afterMap.get(label);

      if (beforeCluster && afterCluster) {
        // Compare clusters
        const changes: string[] = [];
        if (!deepEqual(beforeCluster.graphAttr || {}, afterCluster.graphAttr || {})) {
          changes.push("graphAttr");
        }

        const nested = matchClusters(beforeCluster.clusters, afterCluster.clusters, [
          ...path,
          label,
        ]);

        const clusterDiff: ClusterDiff = {
          kind: changes.length > 0 ? "modified" : "unchanged",
          label,
          before: beforeCluster,
          after: afterCluster,
          changes: changes.length > 0 ? changes : undefined,
          clusters: nested.length > 0 ? nested : undefined,
        };
        diffs.push(clusterDiff);

        if (changes.length > 0) {
          result.summary.modified++;
        } else {
          result.summary.unchanged++;
        }
      } else if (beforeCluster) {
        diffs.push({ kind: "removed", label, before: beforeCluster });
        result.summary.removed++;
      } else if (afterCluster) {
        diffs.push({ kind: "added", label, after: afterCluster });
        result.summary.added++;
      }
    }

    return diffs;
  }

  result.clusters = matchClusters(beforeJson.clusters, afterJson.clusters);

  return result;
}

/**
 * Post-process an SVG to inject diff styling classes.
 * Uses Graphviz's emitted <title> elements to identify nodes and edges.
 * Highlights changed items using drop-shadow filters (like VisualEditor) instead of stroke modifications.
 */
/**
 * Decode common XML entities in SVG <title> content.
 * Graphviz encodes special characters like >, <, &, - in titles.
 */
function decodeSvgTitle(title: string): string {
  return title
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#45;/g, "-");
}

function injectDiffStyling(
  svg: string,
  elements: Map<string, NodeDiff | EdgeDiff>,
  side: "before" | "after",
  theme: "light" | "dark",
  showUnchanged: "show" | "dim" | "hide",
): string {
  const colors = COLORS[theme];

  // Parse SVG to inject classes
  // We use regex to find <g class="(node|edge)"> elements and their <title> children
  let processed = svg;

  // Process nodes
  // Match complete <g class="node">...</g> elements by counting nested tags
  const nodeRegex =
    /<g([^>]*)class="node"([^>]*)>([\s\S]*?)<title>([^<]+)<\/title>([\s\S]*?)<\/g>/g;
  processed = processed.replace(
    nodeRegex,
    (match, beforeAttrs, afterAttrs, _beforeTitle, nodeId, _afterTitle) => {
      const decodedNodeId = decodeSvgTitle(nodeId);
      const diff = elements.get(decodedNodeId) as NodeDiff | undefined;
      if (!diff) return match;

      let kind = diff.kind;
      // For "before" side, show removed nodes; for "after" side, show added
      if (side === "before" && kind === "added") kind = "unchanged"; // shouldn't appear
      if (side === "after" && kind === "removed") kind = "unchanged"; // shouldn't appear

      if (kind === "unchanged" && showUnchanged === "hide") {
        return ""; // Remove unchanged nodes
      }

      const color = colors[kind];
      const opacity = kind === "unchanged" && showUnchanged === "dim" ? "0.4" : "1";

      // Use drop-shadow filter for highlighting (like VisualEditor) instead of stroke
      // This doesn't obscure the label. Add margin to prevent glow from being cropped.
      const filterStyle =
        kind !== "unchanged"
          ? `filter: drop-shadow(0 0 4px ${color.border}) drop-shadow(0 0 4px ${color.border});`
          : "";

      // Replace the opening tag, preserving all attributes and avoiding duplication
      let modified = match.replace(
        /<g\b([^>]*)class="node"([^>]*)>/,
        `<g$1data-diff-kind="${kind}" $2class="node" style="opacity:${opacity};${filterStyle}">`,
      );

      // Add subtle fill to the shape (ellipse or polygon) without changing stroke
      if (kind !== "unchanged") {
        modified = modified
          .replace(
            /<ellipse([^>]*)style="([^"]*)"/g,
            (m, attrs, existingStyle) =>
              `<ellipse${attrs}style="${existingStyle};fill:${color.fill}"`,
          )
          .replace(/<ellipse(?![^>]*style=)/g, `<ellipse style="fill:${color.fill}"`)
          .replace(
            /<polygon([^>]*)style="([^"]*)"/g,
            (m, attrs, existingStyle) =>
              `<polygon${attrs}style="${existingStyle};fill:${color.fill}"`,
          )
          .replace(/<polygon(?![^>]*style=)/g, `<polygon style="fill:${color.fill}"`);
      }

      return modified;
    },
  );

  // Process edges
  // Match complete <g class="edge">...</g> elements by counting nested tags
  const edgeRegex =
    /<g([^>]*)class="edge"([^>]*)>([\s\S]*?)<title>([^<]+)<\/title>([\s\S]*?)<\/g>/g;
  processed = processed.replace(
    edgeRegex,
    (match, beforeAttrs, afterAttrs, _beforeTitle, edgeTitle, _afterTitle) => {
      // Edge titles in SVG are like "web->db", but edge keys include the label suffix "[]"
      const decodedEdgeTitle = decodeSvgTitle(edgeTitle);
      let diff = elements.get(decodedEdgeTitle) as EdgeDiff | undefined;
      if (!diff) {
        diff = elements.get(`${decodedEdgeTitle}[]`) as EdgeDiff | undefined;
      }
      if (!diff) return match;

      let kind = diff.kind;
      if (side === "before" && kind === "added") kind = "unchanged";
      if (side === "after" && kind === "removed") kind = "unchanged";

      if (kind === "unchanged" && showUnchanged === "hide") {
        return "";
      }

      const color = colors[kind];
      const opacity = kind === "unchanged" && showUnchanged === "dim" ? "0.4" : "1";

      // For edges, use stroke color and width, plus drop-shadow for emphasis
      const strokeStyle =
        kind !== "unchanged"
          ? `stroke:${color.border};stroke-width:2;filter: drop-shadow(0 0 2px ${color.border});`
          : "";

      // Replace the opening tag, preserving all attributes and avoiding duplication
      let modified = match.replace(
        /<g\b([^>]*)class="edge"([^>]*)>/,
        `<g$1data-diff-kind="${kind}" $2class="edge" style="opacity:${opacity}">`,
      );

      if (kind !== "unchanged") {
        modified = modified
          .replace(/<path/g, `<path style="${strokeStyle}"`)
          .replace(/<polygon/g, `<polygon style="fill:${color.border};stroke:${color.border}"`);
      }

      return modified;
    },
  );

  return processed;
}

/**
 * Generate HTML wrapper for side-by-side diff visualization.
 */
function generateDiffHTML(
  beforeSvg: string,
  afterSvg: string,
  diff: DiagramDiffResult,
  opts: Required<RenderDiffOptions>,
): string {
  const colors = COLORS[opts.theme];
  const { summary, meta } = diff;

  const metaChanges: string[] = [];
  if (meta.name) metaChanges.push(`Name: "${meta.name.before}" → "${meta.name.after}"`);
  if (meta.theme) metaChanges.push(`Theme: ${meta.theme.before} → ${meta.theme.after}`);
  if (meta.direction)
    metaChanges.push(`Direction: ${meta.direction.before} → ${meta.direction.after}`);
  if (meta.curvestyle)
    metaChanges.push(`Curve style: ${meta.curvestyle.before} → ${meta.curvestyle.after}`);

  const summaryPills = [
    summary.added > 0 ? `<span class="pill added">+${summary.added}</span>` : "",
    summary.removed > 0 ? `<span class="pill removed">−${summary.removed}</span>` : "",
    summary.modified > 0 ? `<span class="pill modified">~${summary.modified}</span>` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const layoutClass = opts.layout === "stacked" ? "stacked" : "side-by-side";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diagram Diff</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      margin: 0;
      padding: 20px;
      background: ${opts.theme === "dark" ? "#0d1117" : "#f6f8fa"};
      color: ${opts.theme === "dark" ? "#c9d1d9" : "#24292f"};
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 16px 20px;
      background: ${opts.theme === "dark" ? "#161b22" : "#ffffff"};
      border: 1px solid ${opts.theme === "dark" ? "#30363d" : "#d0d7de"};
      border-radius: 8px;
    }
    .header h1 { margin: 0; font-size: 20px; }
    .summary { display: flex; gap: 8px; align-items: center; }
    .pill {
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
    }
    .pill.added { background: ${colors.added.fill}; color: ${colors.added.badge}; border: 1px solid ${colors.added.border}; }
    .pill.removed { background: ${colors.removed.fill}; color: ${colors.removed.badge}; border: 1px solid ${colors.removed.border}; }
    .pill.modified { background: ${colors.modified.fill}; color: ${colors.modified.badge}; border: 1px solid ${colors.modified.border}; }
    .meta-changes {
      margin-bottom: 16px;
      padding: 12px 16px;
      background: ${opts.theme === "dark" ? "#161b22" : "#ffffff"};
      border: 1px solid ${opts.theme === "dark" ? "#30363d" : "#d0d7de"};
      border-radius: 8px;
      font-size: 13px;
    }
    .meta-changes h3 { margin: 0 0 8px 0; font-size: 14px; }
    .meta-changes ul { margin: 0; padding-left: 20px; }
    .diagrams {
      display: flex;
      gap: 20px;
      ${opts.layout === "stacked" ? "flex-direction: column;" : ""}
    }
    .diagram-panel {
      flex: 1;
      background: ${opts.theme === "dark" ? "#161b22" : "#ffffff"};
      border: 1px solid ${opts.theme === "dark" ? "#30363d" : "#d0d7de"};
      border-radius: 8px;
      overflow: auto;
    }
    .diagram-panel h2 {
      margin: 0;
      padding: 12px 16px;
      font-size: 14px;
      border-bottom: 1px solid ${opts.theme === "dark" ? "#30363d" : "#d0d7de"};
      background: ${opts.theme === "dark" ? "#21262d" : "#f6f8fa"};
    }
    .diagram-panel .svg-container {
      padding: 24px;
      overflow: auto;
      max-height: 70vh;
    }
    .diagram-panel svg {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
    }
    .legend {
      margin-top: 20px;
      padding: 16px 20px;
      background: ${opts.theme === "dark" ? "#161b22" : "#ffffff"};
      border: 1px solid ${opts.theme === "dark" ? "#30363d" : "#d0d7de"};
      border-radius: 8px;
    }
    .legend h3 { margin: 0 0 12px 0; font-size: 14px; }
    .legend-items { display: flex; gap: 24px; flex-wrap: wrap; }
    .legend-item { display: flex; align-items: center; gap: 8px; font-size: 13px; }
    .legend-color {
      width: 16px;
      height: 16px;
      border-radius: 3px;
      border: 2px solid;
    }
    .tooltip {
      position: absolute;
      background: ${opts.theme === "dark" ? "#161b22" : "#ffffff"};
      border: 1px solid ${opts.theme === "dark" ? "#30363d" : "#d0d7de"};
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 12px;
      max-width: 300px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      pointer-events: none;
      z-index: 1000;
      display: none;
    }
    .tooltip h4 { margin: 0 0 4px 0; font-size: 12px; }
    .tooltip ul { margin: 0; padding-left: 16px; }
    [data-diff-kind] { cursor: pointer; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Diagram Diff</h1>
    ${opts.showSummary ? `<div class="summary">${summaryPills}</div>` : ""}
  </div>

  ${
    metaChanges.length > 0
      ? `
  <div class="meta-changes">
    <h3>Diagram Options Changed</h3>
    <ul>${metaChanges.map((c) => `<li>${c}</li>`).join("")}</ul>
  </div>
  `
      : ""
  }

  <div class="diagrams ${layoutClass}">
    <div class="diagram-panel">
      <h2>Before</h2>
      <div class="svg-container">${beforeSvg}</div>
    </div>
    <div class="diagram-panel">
      <h2>After</h2>
      <div class="svg-container">${afterSvg}</div>
    </div>
  </div>

  ${
    opts.showLegend
      ? `
  <div class="legend">
    <h3>Legend</h3>
    <div class="legend-items">
      <div class="legend-item">
        <div class="legend-color" style="background: ${colors.added.fill}; border-color: ${colors.added.border};"></div>
        <span>Added</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: ${colors.removed.fill}; border-color: ${colors.removed.border};"></div>
        <span>Removed</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: ${colors.modified.fill}; border-color: ${colors.modified.border};"></div>
        <span>Modified</span>
      </div>
      <div class="legend-item">
        <div class="legend-color" style="background: ${colors.unchanged.fill}; border-color: ${colors.unchanged.border};"></div>
        <span>Unchanged</span>
      </div>
    </div>
  </div>
  `
      : ""
  }

  ${
    opts.hoverDetails
      ? `
  <div class="tooltip" id="tooltip"></div>
  <script>
    const tooltip = document.getElementById('tooltip');
    const nodeData = ${JSON.stringify(Object.fromEntries(diff.nodes))};
    const edgeData = ${JSON.stringify(Object.fromEntries(diff.edges))};

    document.querySelectorAll('[data-diff-kind]').forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        const kind = el.getAttribute('data-diff-kind');
        const title = el.querySelector('title');
        if (!title) return;

        const id = title.textContent;
        const data = nodeData[id] || edgeData[id];
        if (!data || !data.changes) return;

        let html = '<h4>' + (data.before?.label || data.after?.label || id) + '</h4>';
        html += '<ul>' + data.changes.map(c => '<li>' + c + '</li>').join('') + '</ul>';

        tooltip.innerHTML = html;
        tooltip.style.display = 'block';
      });

      el.addEventListener('mousemove', (e) => {
        tooltip.style.left = (e.pageX + 10) + 'px';
        tooltip.style.top = (e.pageY + 10) + 'px';
      });

      el.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
    });
  </script>
  `
      : ""
  }
</body>
</html>`;
}

/**
 * Render a visual diff between two diagram versions.
 *
 * @param diff - The computed diff result from `computeDiff()`
 * @param before - The original diagram (JSON or Diagram object)
 * @param after - The updated diagram (JSON or Diagram object)
 * @param opts - Options for rendering the diff
 * @returns Promise resolving to SVG or HTML string
 *
 * @example
 * ```typescript
 * const diff = computeDiff(beforeJson, afterJson);
 * const html = await renderDiff(diff, beforeJson, afterJson, { format: "html" });
 * await fs.writeFile("diff.html", html);
 * ```
 */
export async function renderDiff(
  diff: DiagramDiffResult,
  before: DiagramJSON | Diagram,
  after: DiagramJSON | Diagram,
  opts: RenderDiffOptions = {},
): Promise<string> {
  const options: Required<RenderDiffOptions> = {
    format: opts.format ?? "html",
    layout: opts.layout ?? "side-by-side",
    theme: opts.theme ?? "light",
    showUnchanged: opts.showUnchanged ?? "show",
    showLegend: opts.showLegend ?? true,
    showSummary: opts.showSummary ?? true,
    hoverDetails: opts.hoverDetails ?? true,
  };

  // Normalize inputs
  const beforeJson: DiagramJSON =
    typeof (before as Diagram).toJSON === "function"
      ? (before as Diagram).toJSON()
      : (before as DiagramJSON);
  const afterJson: DiagramJSON =
    typeof (after as Diagram).toJSON === "function"
      ? (after as Diagram).toJSON()
      : (after as DiagramJSON);

  // Render both diagrams
  const beforeDiagram = await DiagramConstructor.fromJSON(beforeJson);
  const afterDiagram = await DiagramConstructor.fromJSON(afterJson);

  let beforeSvg = (await beforeDiagram.render({ format: "svg" })) as string;
  let afterSvg = (await afterDiagram.render({ format: "svg" })) as string;

  // Inject diff styling
  beforeSvg = injectDiffStyling(
    beforeSvg,
    diff.nodes,
    "before",
    options.theme,
    options.showUnchanged,
  );
  beforeSvg = injectDiffStyling(
    beforeSvg,
    diff.edges,
    "before",
    options.theme,
    options.showUnchanged,
  );

  afterSvg = injectDiffStyling(afterSvg, diff.nodes, "after", options.theme, options.showUnchanged);
  afterSvg = injectDiffStyling(afterSvg, diff.edges, "after", options.theme, options.showUnchanged);

  if (options.format === "html") {
    return generateDiffHTML(beforeSvg, afterSvg, diff, options);
  }

  // For SVG format, combine both into a single SVG side-by-side
  const colors = COLORS[options.theme];

  // Extract viewBox and dimensions from both SVGs
  const beforeMatch = beforeSvg.match(/viewBox="([^"]+)"/);
  const afterMatch = afterSvg.match(/viewBox="([^"]+)"/);
  const beforeViewBox = beforeMatch ? beforeMatch[1] : "0 0 800 600";
  const afterViewBox = afterMatch ? afterMatch[1] : "0 0 800 600";

  const beforeDims = beforeViewBox.split(" ").map(Number);
  const afterDims = afterViewBox.split(" ").map(Number);

  const beforeWidth = beforeDims[2] || 800;
  const beforeHeight = beforeDims[3] || 600;
  const afterWidth = afterDims[2] || 800;
  const afterHeight = afterDims[3] || 600;

  const gap = 40;
  const totalWidth = beforeWidth + gap + afterWidth;
  const maxHeight = Math.max(beforeHeight, afterHeight);

  // Extract just the content (remove outer svg tags)
  const beforeContent = beforeSvg.replace(/<svg[^>]*>[\s\S]*?<\/svg>/, (m) => {
    const inner = m.replace(/<svg[^>]*>/, "").replace(/<\/svg>$/, "");
    return inner;
  });
  const afterContent = afterSvg.replace(/<svg[^>]*>[\s\S]*?<\/svg>/, (m) => {
    const inner = m.replace(/<svg[^>]*>/, "").replace(/<\/svg>$/, "");
    return inner;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${maxHeight + 60}" width="${totalWidth}" height="${maxHeight + 60}">
  <defs>
    <style>
      .diff-title { font-family: sans-serif; font-size: 14px; font-weight: bold; }
      .diff-legend { font-family: sans-serif; font-size: 11px; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="${options.theme === "dark" ? "#0d1117" : "#ffffff"}"/>

  <!-- Before panel -->
  <g transform="translate(0, 30)">
    <text x="${beforeWidth / 2}" y="-10" text-anchor="middle" class="diff-title" fill="${options.theme === "dark" ? "#c9d1d9" : "#24292f"}">Before</text>
    <g transform="translate(0, 0)">${beforeContent}</g>
  </g>

  <!-- After panel -->
  <g transform="translate(${beforeWidth + gap}, 30)">
    <text x="${afterWidth / 2}" y="-10" text-anchor="middle" class="diff-title" fill="${options.theme === "dark" ? "#c9d1d9" : "#24292f"}">After</text>
    <g transform="translate(0, 0)">${afterContent}</g>
  </g>

  <!-- Legend -->
  ${
    options.showLegend
      ? `
  <g transform="translate(20, ${maxHeight + 45})">
    <text x="0" y="0" class="diff-legend" fill="${options.theme === "dark" ? "#c9d1d9" : "#24292f"}">Legend:</text>
    <rect x="50" y="-10" width="12" height="12" fill="${colors.added.fill}" stroke="${colors.added.border}" stroke-width="2"/>
    <text x="68" y="0" class="diff-legend" fill="${options.theme === "dark" ? "#c9d1d9" : "#24292f"}">Added</text>
    <rect x="120" y="-10" width="12" height="12" fill="${colors.removed.fill}" stroke="${colors.removed.border}" stroke-width="2"/>
    <text x="138" y="0" class="diff-legend" fill="${options.theme === "dark" ? "#c9d1d9" : "#24292f"}">Removed</text>
    <rect x="200" y="-10" width="12" height="12" fill="${colors.modified.fill}" stroke="${colors.modified.border}" stroke-width="2"/>
    <text x="218" y="0" class="diff-legend" fill="${options.theme === "dark" ? "#c9d1d9" : "#24292f"}">Modified</text>
  </g>
  `
      : ""
  }
</svg>`;
}
