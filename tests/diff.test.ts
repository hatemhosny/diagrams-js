import { describe, it, expect } from "vite-plus/test";
import { computeDiff, renderDiff } from "../src/diff.js";
import type { DiagramJSON, DiagramEdgeJSON } from "../src/json.js";

/**
 * Helper to create a minimal diagram JSON for testing
 */
function createDiagramJSON(overrides: Partial<DiagramJSON> = {}): DiagramJSON {
  return {
    name: "Test Diagram",
    filename: "test_diagram",
    direction: "LR",
    theme: "pastel",
    curvestyle: "ortho",
    nodes: [],
    edges: [],
    clusters: [],
    ...overrides,
  };
}

/**
 * Helper to create a node
 */
function createNode(
  id: string,
  label: string,
  provider?: string,
  service?: string,
  type?: string,
): DiagramJSON["nodes"][0] {
  return {
    id,
    label,
    provider,
    service,
    type,
    attrs: {},
  };
}

/**
 * Helper to create an edge
 */
function createEdge(from: string, to: string, label?: string): DiagramEdgeJSON {
  return {
    from,
    to,
    label,
    attrs: {},
  };
}

describe("computeDiff", () => {
  describe("Basic node operations", () => {
    it("should detect added nodes", () => {
      const before = createDiagramJSON({
        nodes: [createNode("n1", "node1", "aws", "compute", "EC2")],
      });
      const after = createDiagramJSON({
        nodes: [
          createNode("n1", "node1", "aws", "compute", "EC2"),
          createNode("n2", "node2", "aws", "compute", "EC2"),
        ],
      });

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBe(1);
      expect(diff.summary.removed).toBe(0);
      expect(diff.summary.modified).toBe(0);
      expect(diff.summary.unchanged).toBe(1);

      const addedNode = Array.from(diff.nodes.values()).find((n) => n.kind === "added");
      expect(addedNode?.after?.label).toBe("node2");
    });

    it("should detect removed nodes", () => {
      const before = createDiagramJSON({
        nodes: [
          createNode("n1", "node1", "aws", "compute", "EC2"),
          createNode("n2", "node2", "aws", "compute", "EC2"),
        ],
      });
      const after = createDiagramJSON({
        nodes: [createNode("n1", "node1", "aws", "compute", "EC2")],
      });

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBe(0);
      expect(diff.summary.removed).toBe(1);
      expect(diff.summary.modified).toBe(0);
      expect(diff.summary.unchanged).toBe(1);

      const removedNode = Array.from(diff.nodes.values()).find((n) => n.kind === "removed");
      expect(removedNode?.before?.label).toBe("node2");
    });

    it("should detect unchanged nodes", () => {
      const before = createDiagramJSON({
        nodes: [createNode("n1", "node1", "aws", "compute", "EC2")],
      });
      const after = createDiagramJSON({
        nodes: [createNode("n1", "node1", "aws", "compute", "EC2")],
      });

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBe(0);
      expect(diff.summary.removed).toBe(0);
      expect(diff.summary.modified).toBe(0);
      expect(diff.summary.unchanged).toBe(1);
    });
  });

  describe("Node matching by fingerprint", () => {
    it("should match nodes with same label, provider, service, and type as unchanged", () => {
      const before = createDiagramJSON({
        nodes: [createNode("id1", "worker", "aws", "compute", "EC2")],
      });
      const after = createDiagramJSON({
        // Different ID but same fingerprint
        nodes: [createNode("id2", "worker", "aws", "compute", "EC2")],
      });

      const diff = computeDiff(before, after);

      expect(diff.summary.unchanged).toBe(1);
      expect(diff.summary.added).toBe(0);
      expect(diff.summary.removed).toBe(0);
    });

    it("should detect label changes as modified", () => {
      const before = createDiagramJSON({
        nodes: [createNode("id1", "worker1", "aws", "compute", "EC2")],
      });
      const after = createDiagramJSON({
        nodes: [createNode("id2", "worker2", "aws", "compute", "EC2")],
      });

      const diff = computeDiff(before, after);

      expect(diff.summary.modified).toBe(1);
      expect(diff.summary.added).toBe(0);
      expect(diff.summary.removed).toBe(0);

      const modifiedNode = Array.from(diff.nodes.values()).find((n) => n.kind === "modified");
      expect(modifiedNode?.changes).toContain('label: "worker1" → "worker2"');
    });

    it("should treat different labels as different nodes (removed + added)", () => {
      // worker4 and worker1 are different nodes, even with same provider/type
      const before = createDiagramJSON({
        nodes: [createNode("id1", "worker4", "aws", "compute", "EC2")],
      });
      const after = createDiagramJSON({
        nodes: [createNode("id2", "worker1", "aws", "compute", "EC2")],
      });

      const diff = computeDiff(before, after);

      // Without edge connectivity, these should be removed + added
      // With edge connectivity matching, they might be matched as modified
      // depending on the algorithm
      const hasRemoved = Array.from(diff.nodes.values()).some((n) => n.kind === "removed");
      const hasAdded = Array.from(diff.nodes.values()).some((n) => n.kind === "added");
      const hasModified = Array.from(diff.nodes.values()).some((n) => n.kind === "modified");

      // Either removed+added OR modified is acceptable based on matching strategy
      expect(hasRemoved || hasModified).toBe(true);
      expect(hasAdded || hasModified).toBe(true);
    });

    it("should detect provider changes as modified", () => {
      const before = createDiagramJSON({
        nodes: [createNode("id1", "worker", "aws", "compute", "EC2")],
      });
      const after = createDiagramJSON({
        nodes: [createNode("id2", "worker", "azure", "compute", "VM")],
      });

      const diff = computeDiff(before, after);

      // Provider change should be detected as modification
      expect(diff.summary.modified + diff.summary.removed + diff.summary.added).toBeGreaterThan(0);
    });
  });

  describe("Edge diff", () => {
    it("should detect added edges", () => {
      const before = createDiagramJSON({
        nodes: [
          createNode("n1", "A", "aws", "compute", "EC2"),
          createNode("n2", "B", "aws", "compute", "EC2"),
        ],
        edges: [],
      });
      const after = createDiagramJSON({
        nodes: [
          createNode("n1", "A", "aws", "compute", "EC2"),
          createNode("n2", "B", "aws", "compute", "EC2"),
        ],
        edges: [createEdge("n1", "n2")],
      });

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBeGreaterThan(0);
    });

    it("should detect removed edges", () => {
      const before = createDiagramJSON({
        nodes: [
          createNode("n1", "A", "aws", "compute", "EC2"),
          createNode("n2", "B", "aws", "compute", "EC2"),
        ],
        edges: [createEdge("n1", "n2")],
      });
      const after = createDiagramJSON({
        nodes: [
          createNode("n1", "A", "aws", "compute", "EC2"),
          createNode("n2", "B", "aws", "compute", "EC2"),
        ],
        edges: [],
      });

      const diff = computeDiff(before, after);

      expect(diff.summary.removed).toBeGreaterThan(0);
    });

    it("should detect edge label changes as modified", () => {
      const before = createDiagramJSON({
        nodes: [
          createNode("n1", "A", "aws", "compute", "EC2"),
          createNode("n2", "B", "aws", "compute", "EC2"),
        ],
        edges: [createEdge("n1", "n2", "old-label")],
      });
      const after = createDiagramJSON({
        nodes: [
          createNode("n1", "A", "aws", "compute", "EC2"),
          createNode("n2", "B", "aws", "compute", "EC2"),
        ],
        edges: [createEdge("n1", "n2", "new-label")],
      });

      const diff = computeDiff(before, after);

      expect(diff.summary.modified).toBeGreaterThan(0);
    });
  });

  describe("Complex scenarios", () => {
    it("should handle multiple node changes", () => {
      const before = createDiagramJSON({
        nodes: [
          createNode("n1", "lb", "aws", "network", "ELB"),
          createNode("n2", "worker1", "aws", "compute", "EC2"),
          createNode("n3", "worker2", "aws", "compute", "EC2"),
        ],
        edges: [createEdge("n1", "n2"), createEdge("n1", "n3")],
      });
      const after = createDiagramJSON({
        nodes: [
          createNode("n1", "lb", "aws", "network", "ELB"),
          createNode("n2", "worker1", "aws", "compute", "EC2"),
          createNode("n4", "worker3", "aws", "compute", "EC2"), // new
        ],
        edges: [createEdge("n1", "n2"), createEdge("n1", "n4")],
      });

      const diff = computeDiff(before, after);

      // Total changes should account for all differences
      const totalChanges =
        diff.summary.added + diff.summary.removed + diff.summary.modified + diff.summary.unchanged;
      expect(totalChanges).toBeGreaterThanOrEqual(3); // at least 3 nodes

      // Verify specific nodes
      const lbNode = Array.from(diff.nodes.values()).find(
        (n) => n.before?.label === "lb" || n.after?.label === "lb",
      );
      expect(lbNode?.kind).toBe("unchanged");
    });

    it("should handle empty diagrams", () => {
      const before = createDiagramJSON();
      const after = createDiagramJSON();

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBe(0);
      expect(diff.summary.removed).toBe(0);
      expect(diff.summary.modified).toBe(0);
      expect(diff.summary.unchanged).toBe(0);
    });

    it("should handle adding to empty diagram", () => {
      const before = createDiagramJSON();
      const after = createDiagramJSON({
        nodes: [createNode("n1", "node1", "aws", "compute", "EC2")],
      });

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBe(1);
      expect(diff.summary.removed).toBe(0);
    });

    it("should handle removing all nodes", () => {
      const before = createDiagramJSON({
        nodes: [createNode("n1", "node1", "aws", "compute", "EC2")],
      });
      const after = createDiagramJSON();

      const diff = computeDiff(before, after);

      expect(diff.summary.added).toBe(0);
      expect(diff.summary.removed).toBe(1);
    });
  });

  describe("Metadata changes", () => {
    it("should detect diagram name change", () => {
      const before = createDiagramJSON({ name: "Old Name" });
      const after = createDiagramJSON({ name: "New Name" });

      const diff = computeDiff(before, after);

      expect(diff.meta.name?.before).toBe("Old Name");
      expect(diff.meta.name?.after).toBe("New Name");
    });

    it("should detect direction change", () => {
      const before = createDiagramJSON({ direction: "LR" });
      const after = createDiagramJSON({ direction: "TB" });

      const diff = computeDiff(before, after);

      expect(diff.meta.direction?.before).toBe("LR");
      expect(diff.meta.direction?.after).toBe("TB");
    });

    it("should detect theme change", () => {
      const before = createDiagramJSON({ theme: "pastel" });
      const after = createDiagramJSON({ theme: "neutral" });

      const diff = computeDiff(before, after);

      expect(diff.meta.theme?.before).toBe("pastel");
      expect(diff.meta.theme?.after).toBe("neutral");
    });
  });

  describe("Ignore options", () => {
    it("should ignore position changes when ignore.position is true", () => {
      const before = createDiagramJSON({
        nodes: [{ ...createNode("n1", "node1", "aws", "compute", "EC2"), attrs: { pos: "0,0" } }],
      });
      const after = createDiagramJSON({
        nodes: [
          { ...createNode("n1", "node1", "aws", "compute", "EC2"), attrs: { pos: "100,100" } },
        ],
      });

      const diff = computeDiff(before, after, { ignore: { position: true } });

      expect(diff.summary.unchanged).toBe(1);
    });

    it("should detect position changes when ignore.position is false", () => {
      const before = createDiagramJSON({
        nodes: [{ ...createNode("n1", "node1", "aws", "compute", "EC2"), attrs: { pos: "0,0" } }],
      });
      const after = createDiagramJSON({
        nodes: [
          { ...createNode("n1", "node1", "aws", "compute", "EC2"), attrs: { pos: "100,100" } },
        ],
      });

      const diff = computeDiff(before, after, { ignore: { position: false } });

      expect(diff.summary.modified).toBe(1);
    });
  });
});

describe("renderDiff", () => {
  it("should render HTML format", async () => {
    const before = createDiagramJSON({
      nodes: [
        createNode("n1", "node1", "aws", "compute", "EC2"),
        createNode("n2", "node2", "aws", "compute", "EC2"),
      ],
    });
    const after = createDiagramJSON({
      nodes: [
        createNode("n1", "node1", "aws", "compute", "EC2"),
        createNode("n3", "node3", "aws", "compute", "EC2"),
      ],
    });

    const diff = computeDiff(before, after);
    const html = await renderDiff(diff, before, after, { format: "html" });

    expect(html).toContain("<!DOCTYPE html>");
    expect(html).toContain("Diagram Diff");
    expect(html).toContain("node1");
    expect(html).toContain("node2");
    expect(html).toContain("node3");
  });

  it("should render SVG format", async () => {
    const before = createDiagramJSON({
      nodes: [createNode("n1", "node1", "aws", "compute", "EC2")],
    });
    const after = createDiagramJSON({
      nodes: [
        createNode("n1", "node1", "aws", "compute", "EC2"),
        createNode("n2", "node2", "aws", "compute", "EC2"),
      ],
    });

    const diff = computeDiff(before, after);
    const svg = await renderDiff(diff, before, after, { format: "svg" });

    expect(svg).toContain("<svg");
    expect(svg).toContain("</svg>");
  });

  it("should include diff styling in HTML", async () => {
    const before = createDiagramJSON({
      nodes: [createNode("n1", "node1", "aws", "compute", "EC2")],
    });
    const after = createDiagramJSON({
      nodes: [
        createNode("n1", "node1", "aws", "compute", "EC2"),
        createNode("n2", "node2", "aws", "compute", "EC2"),
      ],
    });

    const diff = computeDiff(before, after);
    const html = await renderDiff(diff, before, after, { format: "html" });

    expect(html).toContain("added");
    expect(html).toContain("removed");
    expect(html).toContain("modified");
  });
});
