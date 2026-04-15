import { describe, it, expect } from "vite-plus/test";
import { Diagram, Node, Edge } from "../src/index.js";
import type { DiagramJSON } from "../src/index.js";

// ============================================================================
// toJSON() serialization tests
// ============================================================================

describe("Diagram.toJSON() - Basic Serialization", () => {
  it("should serialize an empty diagram with defaults", () => {
    const diagram = Diagram("Test");
    const json = diagram.toJSON();

    expect(json.name).toBe("Test");
    expect(json.nodes).toEqual([]);
    expect(json.edges).toBeUndefined();
    expect(json.clusters).toBeUndefined();
    // Default values should be omitted
    expect(json.direction).toBeUndefined(); // default is LR
    expect(json.curvestyle).toBeUndefined(); // default is ortho
    expect(json.autolabel).toBeUndefined(); // default is false
    expect(json.strict).toBeUndefined(); // default is false
    expect(json.theme).toBeUndefined(); // default is pastel
  });

  it("should serialize diagram name", () => {
    const diagram = Diagram("My Architecture");
    const json = diagram.toJSON();
    expect(json.name).toBe("My Architecture");
  });

  it("should omit name for unnamed diagrams", () => {
    const diagram = Diagram("");
    const json = diagram.toJSON();
    expect(json.name).toBeUndefined();
  });

  it("should serialize custom filename when different from auto-generated", () => {
    const diagram = Diagram("Test", { filename: "custom_output" });
    const json = diagram.toJSON();
    expect(json.filename).toBe("custom_output");
  });

  it("should omit filename when it matches auto-generated", () => {
    const diagram = Diagram("My Test", {}); // filename auto-generates to "my_test"
    const json = diagram.toJSON();
    expect(json.filename).toBeUndefined();
  });
});

describe("Diagram.toJSON() - Diagram Options", () => {
  it("should serialize non-default direction", () => {
    const diagram = Diagram("Test", { direction: "TB" });
    const json = diagram.toJSON();
    expect(json.direction).toBe("TB");
  });

  it("should serialize all direction options", () => {
    for (const dir of ["TB", "BT", "LR", "RL"] as const) {
      const diagram = Diagram("Test", { direction: dir });
      const json = diagram.toJSON();
      if (dir === "LR") {
        expect(json.direction).toBeUndefined(); // default
      } else {
        expect(json.direction).toBe(dir);
      }
    }
  });

  it("should serialize non-default curvestyle", () => {
    const diagram = Diagram("Test", { curvestyle: "curved" });
    const json = diagram.toJSON();
    expect(json.curvestyle).toBe("curved");
  });

  it("should serialize all curvestyle options", () => {
    for (const style of ["ortho", "curved", "spline", "polyline"] as const) {
      const diagram = Diagram("Test", { curvestyle: style });
      const json = diagram.toJSON();
      if (style === "ortho") {
        expect(json.curvestyle).toBeUndefined(); // default
      } else {
        expect(json.curvestyle).toBe(style);
      }
    }
  });

  it("should serialize autolabel when true", () => {
    const diagram = Diagram("Test", { autolabel: true });
    const json = diagram.toJSON();
    expect(json.autolabel).toBe(true);
  });

  it("should serialize strict when true", () => {
    const diagram = Diagram("Test", { strict: true });
    const json = diagram.toJSON();
    expect(json.strict).toBe(true);
  });

  it("should serialize non-default theme", () => {
    const diagram = Diagram("Test", { theme: "blues" });
    const json = diagram.toJSON();
    expect(json.theme).toBe("blues");
  });

  it("should serialize custom graphAttr", () => {
    const diagram = Diagram("Test", { graphAttr: { bgcolor: "transparent" } });
    const json = diagram.toJSON();
    expect(json.graphAttr).toEqual({ bgcolor: "transparent" });
  });

  it("should serialize custom nodeAttr", () => {
    const diagram = Diagram("Test", { nodeAttr: { style: "filled", fillcolor: "lightblue" } });
    const json = diagram.toJSON();
    expect(json.nodeAttr).toEqual({ style: "filled", fillcolor: "lightblue" });
  });

  it("should serialize custom edgeAttr", () => {
    const diagram = Diagram("Test", { edgeAttr: { color: "red", style: "dashed" } });
    const json = diagram.toJSON();
    expect(json.edgeAttr).toEqual({ color: "red", style: "dashed" });
  });
});

describe("Diagram.toJSON() - Nodes", () => {
  it("should serialize a single node", () => {
    const diagram = Diagram("Test");
    diagram.add(Node("Web Server", { nodeId: "web" }));
    const json = diagram.toJSON();

    expect(json.nodes).toHaveLength(1);
    expect(json.nodes[0].id).toBe("web");
    expect(json.nodes[0].label).toBe("Web Server");
  });

  it("should serialize multiple nodes", () => {
    const diagram = Diagram("Test");
    diagram.add(Node("Node A", { nodeId: "a" }));
    diagram.add(Node("Node B", { nodeId: "b" }));
    diagram.add(Node("Node C", { nodeId: "c" }));
    const json = diagram.toJSON();

    expect(json.nodes).toHaveLength(3);
    const ids = json.nodes.map((n) => n.id);
    expect(ids).toContain("a");
    expect(ids).toContain("b");
    expect(ids).toContain("c");
  });

  it("should serialize node with custom attributes", () => {
    const diagram = Diagram("Test");
    diagram.add(Node("Styled", { nodeId: "styled", color: "blue", style: "filled" }));
    const json = diagram.toJSON();

    const node = json.nodes.find((n) => n.id === "styled");
    expect(node).toBeDefined();
    expect(node!.attrs).toBeDefined();
    expect(node!.attrs!.color).toBe("blue");
    expect(node!.attrs!.style).toBe("filled");
  });

  it("should serialize a node with empty label", () => {
    const diagram = Diagram("Test");
    diagram.add(Node("", { nodeId: "empty" }));
    const json = diagram.toJSON();

    expect(json.nodes).toHaveLength(1);
    expect(json.nodes[0].id).toBe("empty");
    expect(json.nodes[0].label).toBeUndefined(); // empty label omitted
  });

  it("should preserve node IDs for deterministic output", () => {
    const diagram = Diagram("Test");
    diagram.add(Node("A", { nodeId: "node-alpha" }));
    diagram.add(Node("B", { nodeId: "node-beta" }));
    const json = diagram.toJSON();

    expect(json.nodes[0].id).toBe("node-alpha");
    expect(json.nodes[1].id).toBe("node-beta");
  });
});

describe("Diagram.toJSON() - Edges", () => {
  it("should serialize forward edges", () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.to(b);

    const json = diagram.toJSON();

    expect(json.edges).toHaveLength(1);
    expect(json.edges![0].from).toBe("a");
    expect(json.edges![0].to).toBe("b");
    // forward is default, so direction should be omitted
    expect(json.edges![0].direction).toBeUndefined();
  });

  it("should serialize back edges from .from()", () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    b.from(a);

    const json = diagram.toJSON();

    expect(json.edges).toHaveLength(1);
    expect(json.edges![0].direction).toBe("back");
  });

  it("should serialize undirected edges from .with()", () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.with(b);

    const json = diagram.toJSON();

    expect(json.edges).toHaveLength(1);
    expect(json.edges![0].direction).toBe("none");
  });

  it("should serialize edge label", () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.to(Edge({ label: "HTTP" }), b);

    const json = diagram.toJSON();

    expect(json.edges![0].label).toBe("HTTP");
  });

  it("should serialize edge color", () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.to(Edge({ color: "red" }), b);

    const json = diagram.toJSON();

    expect(json.edges![0].color).toBe("red");
  });

  it("should serialize edge style", () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.to(Edge({ style: "dashed" }), b);

    const json = diagram.toJSON();

    expect(json.edges![0].style).toBe("dashed");
  });

  it("should serialize edge with all properties", () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.to(Edge({ label: "data", color: "blue", style: "bold" }), b);

    const json = diagram.toJSON();

    expect(json.edges![0]).toEqual({
      from: "a",
      to: "b",
      label: "data",
      color: "blue",
      style: "bold",
    });
  });

  it("should serialize multiple edges", () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    const c = diagram.add(Node("C", { nodeId: "c" }));
    a.to(b);
    b.to(c);
    a.to(c);

    const json = diagram.toJSON();

    expect(json.edges).toHaveLength(3);
  });

  it("should omit edges array when no edges exist", () => {
    const diagram = Diagram("Test");
    diagram.add(Node("A", { nodeId: "a" }));

    const json = diagram.toJSON();

    expect(json.edges).toBeUndefined();
  });
});

describe("Diagram.toJSON() - Clusters", () => {
  it("should serialize a simple cluster", () => {
    const diagram = Diagram("Test");
    const cluster = diagram.cluster("VPC");
    cluster.add(Node("Web", { nodeId: "web" }));

    const json = diagram.toJSON();

    expect(json.clusters).toHaveLength(1);
    expect(json.clusters![0].label).toBe("VPC");
    expect(json.clusters![0].nodes).toEqual(["web"]);
  });

  it("should serialize cluster node refs and put node defs in top-level nodes", () => {
    const diagram = Diagram("Test");
    const cluster = diagram.cluster("Services");
    cluster.add(Node("API", { nodeId: "api" }));
    cluster.add(Node("Worker", { nodeId: "worker" }));

    const json = diagram.toJSON();

    // Cluster should reference node IDs
    expect(json.clusters![0].nodes).toEqual(["api", "worker"]);

    // Nodes should appear in top-level nodes array
    const nodeIds = json.nodes.map((n) => n.id);
    expect(nodeIds).toContain("api");
    expect(nodeIds).toContain("worker");
  });

  it("should separate top-level and cluster nodes", () => {
    const diagram = Diagram("Test");
    diagram.add(Node("External", { nodeId: "ext" }));
    const cluster = diagram.cluster("Internal");
    cluster.add(Node("App", { nodeId: "app" }));

    const json = diagram.toJSON();

    // Both nodes in top-level array
    const nodeIds = json.nodes.map((n) => n.id);
    expect(nodeIds).toContain("ext");
    expect(nodeIds).toContain("app");

    // Only "app" is referenced in the cluster
    expect(json.clusters![0].nodes).toEqual(["app"]);
  });

  it("should serialize nested clusters", () => {
    const diagram = Diagram("Test");
    const outer = diagram.cluster("VPC");
    const inner = outer.cluster("Private Subnet");
    inner.add(Node("DB", { nodeId: "db" }));

    const json = diagram.toJSON();

    expect(json.clusters).toHaveLength(1);
    expect(json.clusters![0].label).toBe("VPC");
    expect(json.clusters![0].clusters).toHaveLength(1);
    expect(json.clusters![0].clusters![0].label).toBe("Private Subnet");
    expect(json.clusters![0].clusters![0].nodes).toEqual(["db"]);
  });

  it("should serialize deeply nested clusters", () => {
    const diagram = Diagram("Test");
    const l1 = diagram.cluster("Level 1");
    const l2 = l1.cluster("Level 2");
    const l3 = l2.cluster("Level 3");
    l3.add(Node("Deep", { nodeId: "deep" }));

    const json = diagram.toJSON();

    expect(json.clusters![0].label).toBe("Level 1");
    expect(json.clusters![0].clusters![0].label).toBe("Level 2");
    expect(json.clusters![0].clusters![0].clusters![0].label).toBe("Level 3");
    expect(json.clusters![0].clusters![0].clusters![0].nodes).toEqual(["deep"]);
  });

  it("should omit clusters array when no clusters exist", () => {
    const diagram = Diagram("Test");
    diagram.add(Node("A", { nodeId: "a" }));
    const json = diagram.toJSON();
    expect(json.clusters).toBeUndefined();
  });
});

// ============================================================================
// Diagram.fromJSON() deserialization tests
// ============================================================================

describe("Diagram.fromJSON() - Basic Deserialization", () => {
  it("should create a diagram from minimal JSON", async () => {
    const json: DiagramJSON = {
      nodes: [],
    };
    const diagram = await Diagram.fromJSON(json);
    expect(diagram.name).toBe("");
  });

  it("should create a diagram from a JSON string", async () => {
    const jsonStr = JSON.stringify({
      name: "From String",
      nodes: [{ id: "a", label: "Node A" }],
    });
    const diagram = await Diagram.fromJSON(jsonStr);
    expect(diagram.name).toBe("From String");
  });

  it("should restore diagram name", async () => {
    const diagram = await Diagram.fromJSON({ name: "My Architecture", nodes: [] });
    expect(diagram.name).toBe("My Architecture");
  });

  it("should restore diagram options", async () => {
    const diagram = await Diagram.fromJSON({
      name: "Test",
      direction: "TB",
      curvestyle: "curved",
      autolabel: true,
      strict: true,
      theme: "blues",
      nodes: [],
    });

    expect(diagram.direction).toBe("TB");
    expect(diagram.curveStyle).toBe("curved");
    expect(diagram.autolabel).toBe(true);
    expect(diagram.strict).toBe(true);
    expect(diagram.theme).toBe("blues");
  });

  it("should restore custom filename", async () => {
    const diagram = await Diagram.fromJSON({
      name: "Test",
      filename: "custom_name",
      nodes: [],
    });
    expect(diagram.filename).toBe("custom_name");
  });

  it("should throw on missing nodes array", async () => {
    await expect(Diagram.fromJSON({} as DiagramJSON)).rejects.toThrow("'nodes' array is required");
  });

  it("should throw on duplicate node IDs", async () => {
    await expect(
      Diagram.fromJSON({
        nodes: [
          { id: "dup", label: "First" },
          { id: "dup", label: "Second" },
        ],
      }),
    ).rejects.toThrow('Duplicate node ID: "dup"');
  });
});

describe("Diagram.fromJSON() - Nodes", () => {
  it("should restore nodes with IDs and labels", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [
        { id: "web", label: "Web Server" },
        { id: "db", label: "Database" },
      ],
    });

    const dot = diagram.toString();
    expect(dot).toContain('"web"');
    expect(dot).toContain('label="Web Server"');
    expect(dot).toContain('"db"');
    expect(dot).toContain('label="Database"');
  });

  it("should restore node custom attributes", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [{ id: "styled", label: "Styled", attrs: { color: "blue", style: "filled" } }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('color="blue"');
    expect(dot).toContain('style="filled"');
  });

  it("should restore nodes with empty labels", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [{ id: "empty" }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('"empty"');
  });
});

describe("Diagram.fromJSON() - Edges", () => {
  it("should restore forward edges", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [
        { id: "a", label: "A" },
        { id: "b", label: "B" },
      ],
      edges: [{ from: "a", to: "b" }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('"a" -> "b"');
    expect(dot).toContain('dir="forward"');
  });

  it("should restore back edges", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [
        { id: "a", label: "A" },
        { id: "b", label: "B" },
      ],
      edges: [{ from: "a", to: "b", direction: "back" }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('"a" -> "b"');
    expect(dot).toContain('dir="back"');
  });

  it("should restore undirected edges", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [
        { id: "a", label: "A" },
        { id: "b", label: "B" },
      ],
      edges: [{ from: "a", to: "b", direction: "none" }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('"a" -> "b"');
    expect(dot).toContain('dir="none"');
  });

  it("should restore bidirectional edges", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [
        { id: "a", label: "A" },
        { id: "b", label: "B" },
      ],
      edges: [{ from: "a", to: "b", direction: "both" }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('"a" -> "b"');
    expect(dot).toContain('dir="both"');
  });

  it("should restore edge labels", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [
        { id: "a", label: "A" },
        { id: "b", label: "B" },
      ],
      edges: [{ from: "a", to: "b", label: "HTTP" }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('label="HTTP"');
  });

  it("should restore edge colors", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [
        { id: "a", label: "A" },
        { id: "b", label: "B" },
      ],
      edges: [{ from: "a", to: "b", color: "red" }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('color="red"');
  });

  it("should restore edge styles", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [
        { id: "a", label: "A" },
        { id: "b", label: "B" },
      ],
      edges: [{ from: "a", to: "b", style: "dashed" }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('style="dashed"');
  });

  it("should throw on edge referencing unknown source node", async () => {
    await expect(
      Diagram.fromJSON({
        nodes: [{ id: "b", label: "B" }],
        edges: [{ from: "unknown", to: "b" }],
      }),
    ).rejects.toThrow('Edge references unknown source node: "unknown"');
  });

  it("should throw on edge referencing unknown target node", async () => {
    await expect(
      Diagram.fromJSON({
        nodes: [{ id: "a", label: "A" }],
        edges: [{ from: "a", to: "unknown" }],
      }),
    ).rejects.toThrow('Edge references unknown target node: "unknown"');
  });
});

describe("Diagram.fromJSON() - Clusters", () => {
  it("should restore simple cluster with nodes", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [{ id: "web", label: "Web" }],
      clusters: [{ label: "VPC", nodes: ["web"] }],
    });

    const dot = diagram.toString();
    expect(dot).toContain("cluster_VPC");
    expect(dot).toContain('label="Web"');
  });

  it("should restore nested clusters", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [{ id: "db", label: "DB" }],
      clusters: [
        {
          label: "VPC",
          clusters: [{ label: "Private", nodes: ["db"] }],
        },
      ],
    });

    const dot = diagram.toString();
    expect(dot).toContain("cluster_VPC");
    expect(dot).toContain("cluster_Private");
    expect(dot).toContain('label="DB"');
  });

  it("should restore cluster custom graphAttr", async () => {
    const diagram = await Diagram.fromJSON({
      nodes: [{ id: "a", label: "A" }],
      clusters: [{ label: "Group", nodes: ["a"], graphAttr: { color: "red" } }],
    });

    const dot = diagram.toString();
    expect(dot).toContain('color="red"');
  });
});

// ============================================================================
// Round-trip consistency tests (critical for provisioning)
// ============================================================================

describe("Round-trip: toJSON() -> Diagram.fromJSON()", () => {
  it("should round-trip a simple diagram", async () => {
    const original = Diagram("Simple", { direction: "TB" });
    const a = original.add(Node("A", { nodeId: "a" }));
    const b = original.add(Node("B", { nodeId: "b" }));
    a.to(b);

    const json = original.toJSON();
    const restored = await Diagram.fromJSON(json);

    expect(restored.name).toBe("Simple");
    expect(restored.direction).toBe("TB");

    const dot = restored.toString();
    expect(dot).toContain('"a" -> "b"');
  });

  it("should round-trip all diagram options", async () => {
    const original = Diagram("Options Test", {
      direction: "RL",
      curvestyle: "spline",
      autolabel: true,
      strict: true,
      theme: "greens",
    });
    original.add(Node("X", { nodeId: "x" }));

    const json = original.toJSON();
    const restored = await Diagram.fromJSON(json);

    expect(restored.name).toBe("Options Test");
    expect(restored.direction).toBe("RL");
    expect(restored.curveStyle).toBe("spline");
    expect(restored.autolabel).toBe(true);
    expect(restored.strict).toBe(true);
    expect(restored.theme).toBe("greens");
  });

  it("should round-trip multiple nodes and edges", async () => {
    const original = Diagram("Multi");
    const a = original.add(Node("A", { nodeId: "a" }));
    const b = original.add(Node("B", { nodeId: "b" }));
    const c = original.add(Node("C", { nodeId: "c" }));
    a.to(Edge({ label: "data", color: "blue" }), b);
    b.to(c);
    c.with(a);

    const json = original.toJSON();
    const restored = await Diagram.fromJSON(json);

    const dot = restored.toString();
    expect(dot).toContain('"a" -> "b"');
    expect(dot).toContain('"b" -> "c"');
    expect(dot).toContain('"c" -> "a"');
    expect(dot).toContain('label="data"');
    expect(dot).toContain('color="blue"');
  });

  it("should round-trip clusters", async () => {
    const original = Diagram("Clustered");
    const cluster = original.cluster("VPC");
    const web = cluster.add(Node("Web", { nodeId: "web" }));
    const ext = original.add(Node("External", { nodeId: "ext" }));
    ext.to(web);

    const json = original.toJSON();
    const restored = await Diagram.fromJSON(json);

    const dot = restored.toString();
    expect(dot).toContain("cluster_VPC");
    expect(dot).toContain('label="Web"');
    expect(dot).toContain('"ext" -> "web"');
  });

  it("should round-trip nested clusters", async () => {
    const original = Diagram("Nested");
    const vpc = original.cluster("VPC");
    const pub = vpc.cluster("Public");
    const priv = vpc.cluster("Private");
    pub.add(Node("LB", { nodeId: "lb" }));
    priv.add(Node("DB", { nodeId: "db" }));

    const json = original.toJSON();
    const restored = await Diagram.fromJSON(json);

    const dot = restored.toString();
    expect(dot).toContain("cluster_VPC");
    expect(dot).toContain("cluster_Public");
    expect(dot).toContain("cluster_Private");
    expect(dot).toContain('label="LB"');
    expect(dot).toContain('label="DB"');
  });

  it("should produce identical JSON on double round-trip", async () => {
    const original = Diagram("Double");
    const a = original.add(Node("A", { nodeId: "a" }));
    const b = original.add(Node("B", { nodeId: "b" }));
    a.to(Edge({ label: "link", style: "dashed" }), b);
    const cluster = original.cluster("Group");
    cluster.add(Node("C", { nodeId: "c" }));

    const json1 = original.toJSON();
    const restored1 = await Diagram.fromJSON(json1);
    const json2 = restored1.toJSON();

    expect(json2).toEqual(json1);
  });

  it("should round-trip edge directions consistently", async () => {
    const original = Diagram("Directions");
    const a = original.add(Node("A", { nodeId: "a" }));
    const b = original.add(Node("B", { nodeId: "b" }));
    const c = original.add(Node("C", { nodeId: "c" }));
    const d = original.add(Node("D", { nodeId: "d" }));

    a.to(b); // forward
    c.from(d); // back
    a.with(c); // none

    const json = original.toJSON();
    const restored = await Diagram.fromJSON(json);
    const json2 = restored.toJSON();

    expect(json2.edges).toEqual(json.edges);
  });

  it("should round-trip graph/node/edge attributes", async () => {
    const original = Diagram("Attrs", {
      graphAttr: { bgcolor: "transparent" },
      nodeAttr: { style: "filled" },
      edgeAttr: { arrowhead: "vee" },
    });
    original.add(Node("A", { nodeId: "a" }));

    const json = original.toJSON();
    const restored = await Diagram.fromJSON(json);

    expect(restored.graphAttr.bgcolor).toBe("transparent");
    expect(restored.nodeAttr.style).toBe("filled");
    expect(restored.edgeAttr.arrowhead).toBe("vee");
  });
});

// ============================================================================
// render({ format: "json" }) tests
// ============================================================================

describe("render({ format: 'json' })", () => {
  it("should render diagram as JSON string", async () => {
    const diagram = Diagram("JSON Render");
    diagram.add(Node("A", { nodeId: "a" }));

    const result = await diagram.render({ format: "json" });
    expect(typeof result).toBe("string");

    const parsed = JSON.parse(result as string);
    expect(parsed.name).toBe("JSON Render");
    expect(parsed.nodes).toHaveLength(1);
    expect(parsed.nodes[0].id).toBe("a");
  });

  it("should render JSON as data URL", async () => {
    const diagram = Diagram("JSON Data URL");
    diagram.add(Node("A", { nodeId: "a" }));

    const result = await diagram.render({ format: "json", dataUrl: true });
    expect(typeof result).toBe("string");
    expect(result).toMatch(/^data:application\/json;base64,/);
  });

  it("should produce valid JSON that round-trips", async () => {
    const diagram = Diagram("Render RT", { direction: "TB" });
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.to(b);

    const jsonStr = (await diagram.render({ format: "json" })) as string;
    const restored = await Diagram.fromJSON(jsonStr);

    expect(restored.name).toBe("Render RT");
    expect(restored.direction).toBe("TB");
  });
});

// ============================================================================
// Provider node serialization
// ============================================================================

describe("toJSON() - Provider Nodes", () => {
  it("should serialize provider metadata on nodes", () => {
    const diagram = Diagram("Test");
    const node = Node("Web Server", { nodeId: "web" });
    (node as unknown as Record<string, unknown>)["~provider"] = "aws";
    (node as unknown as Record<string, unknown>)["~type"] = "compute";
    diagram.add(node);

    const json = diagram.toJSON();

    expect(json.nodes[0].provider).toBe("aws");
    expect(json.nodes[0].service).toBe("compute");
  });

  it("should serialize resource on provider nodes", () => {
    const diagram = Diagram("Test");
    const node = Node("My Server", { nodeId: "ec2" });
    (node as unknown as Record<string, unknown>)["~provider"] = "aws";
    (node as unknown as Record<string, unknown>)["~type"] = "compute";
    (node as unknown as Record<string, unknown>)["~resource"] = "EC2";
    diagram.add(node);

    const json = diagram.toJSON();

    expect(json.nodes[0].provider).toBe("aws");
    expect(json.nodes[0].service).toBe("compute");
    expect(json.nodes[0].type).toBe("EC2");
  });

  it("should NOT include iconUrl for provider nodes", () => {
    const diagram = Diagram("Test");
    const node = Node("EC2", { nodeId: "ec2" });
    (node as unknown as Record<string, unknown>)["~provider"] = "aws";
    (node as unknown as Record<string, unknown>)["~type"] = "compute";
    (node as unknown as Record<string, unknown>)["~resource"] = "EC2";
    (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.add(node);

    const json = diagram.toJSON();

    // Provider nodes should not embed iconUrl
    expect(json.nodes[0].iconUrl).toBeUndefined();
    // But should still have provider/service/type for resolution
    expect(json.nodes[0].provider).toBe("aws");
    expect(json.nodes[0].service).toBe("compute");
    expect(json.nodes[0].type).toBe("EC2");
  });

  it("should filter out default icon attributes for provider nodes", () => {
    const diagram = Diagram("Test");
    const node = Node("EC2", { nodeId: "ec2" });
    (node as unknown as Record<string, unknown>)["~provider"] = "aws";
    (node as unknown as Record<string, unknown>)["~type"] = "compute";
    (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.add(node);

    const json = diagram.toJSON();

    // Icon attributes (shape=none, height=0.9 etc) should be filtered out
    const attrs = json.nodes[0].attrs ?? {};
    expect(attrs.shape).toBeUndefined();
    expect(attrs.height).toBeUndefined();
    expect(attrs.width).toBeUndefined();
    expect(attrs.fixedsize).toBeUndefined();
  });

  it("should not leak ~-prefixed internal keys into DOT output", () => {
    const diagram = Diagram("Test");
    const node = Node("Server", { nodeId: "srv" });
    (node as unknown as Record<string, unknown>)["~provider"] = "aws";
    (node as unknown as Record<string, unknown>)["~type"] = "compute";
    (node as unknown as Record<string, unknown>)["~resource"] = "EC2";
    diagram.add(node);

    const dot = diagram.toString();
    // No ~ keys should appear in the DOT output
    expect(dot).not.toContain("~provider");
    expect(dot).not.toContain("~type");
    expect(dot).not.toContain("~resource");
    expect(dot).not.toContain("~iconDir");
    expect(dot).not.toContain("~icon");
  });
});

// ============================================================================
// Real provider node tests (using actual generated provider factories)
// ============================================================================

describe("toJSON() / Diagram.fromJSON() - Real Provider Nodes", () => {
  it("should serialize a real EKS node with provider/service/type but NO iconUrl", async () => {
    const { ElasticKubernetesService } = await import("../src/providers/aws/compute.js");
    const diagram = Diagram("EKS Test");
    diagram.add(ElasticKubernetesService("k8s source"));

    const json = diagram.toJSON();

    expect(json.nodes).toHaveLength(1);
    expect(json.nodes[0].label).toBe("k8s source");
    expect(json.nodes[0].provider).toBe("aws");
    expect(json.nodes[0].service).toBe("compute");
    expect(json.nodes[0].type).toBe("ElasticKubernetesService");
    // Provider nodes should NOT embed iconUrl - icons are resolved from type
    expect(json.nodes[0].iconUrl).toBeUndefined();
  });

  it("should serialize a real EC2 node with type but NO iconUrl", async () => {
    const { EC2 } = await import("../src/providers/aws/compute.js");
    const diagram = Diagram("EC2 Test");
    diagram.add(EC2("Web Server"));

    const json = diagram.toJSON();

    expect(json.nodes[0].label).toBe("Web Server");
    expect(json.nodes[0].provider).toBe("aws");
    expect(json.nodes[0].service).toBe("compute");
    expect(json.nodes[0].type).toBe("EC2");
    expect(json.nodes[0].iconUrl).toBeUndefined();
  });

  it("should auto-resolve icons via dynamic imports (no providers option needed)", async () => {
    // Diagram.fromJSON dynamically imports provider modules based on provider/service
    const diagram = await Diagram.fromJSON({
      name: "Lambda Test",
      nodes: [
        { id: "fn1", label: "My Function", provider: "aws", service: "compute", type: "Lambda" },
      ],
    });

    // DOT output must contain icon-related attributes
    const dot = diagram.toString();
    expect(dot).toContain('shape="none"');
    expect(dot).toContain("image=");

    // Rendered SVG should contain icon injection
    const svg = await diagram.render();
    expect(typeof svg).toBe("string");
    expect(svg).toContain("<svg");
    expect(svg).toContain("<image");
  });

  it("should auto-resolve icons for DOT output without providers option", async () => {
    const json = {
      name: "DOT Icon Test",
      nodes: [{ id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" }],
    } satisfies DiagramJSON;

    // No providers option - modules loaded dynamically
    const diagram = await Diagram.fromJSON(json);

    const dot = diagram.toString();
    expect(dot).toContain('shape="none"');
    expect(dot).toContain('height="0.9"');
    expect(dot).toContain('width="0.8"');
    expect(dot).toContain('labelloc="b"');
    expect(dot).toContain("image=");
  });

  it("should round-trip provider node and preserve type in double round-trip", async () => {
    const { EC2 } = await import("../src/providers/aws/compute.js");
    const diagram = Diagram("RT Test");
    const ec2 = diagram.add(EC2("API"));
    const plain = diagram.add(Node("Cache", { nodeId: "cache" }));
    ec2.to(plain);

    const json1 = diagram.toJSON();

    // No iconUrl in JSON
    expect(json1.nodes.find((n) => n.type === "EC2")!.iconUrl).toBeUndefined();

    // Provider module loaded dynamically based on provider/service
    const restored = await Diagram.fromJSON(json1);
    const json2 = restored.toJSON();

    // Type field should survive double round-trip
    const ec2Node = json2.nodes.find((n) => n.type === "EC2");
    expect(ec2Node).toBeDefined();
    expect(ec2Node!.provider).toBe("aws");
    expect(ec2Node!.service).toBe("compute");
    expect(ec2Node!.type).toBe("EC2");

    // Edges survive too
    expect(json2.edges).toHaveLength(1);
  });

  it("should still support explicit iconUrl for Custom/manual nodes", async () => {
    const testIcon =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

    const diagram = await Diagram.fromJSON({
      name: "Icon Import Test",
      nodes: [
        {
          id: "web",
          label: "Web Server",
          iconUrl: testIcon,
        },
      ],
    });

    // DOT output must contain icon attrs
    const dot = diagram.toString();
    expect(dot).toContain('shape="none"');
    expect(dot).toContain("image=");

    // SVG must contain injected icons
    const svg = await diagram.render();
    expect(svg).toContain("<image");
    expect(svg).toContain('href="data:image/png;base64,');
  });

  it("should produce renderable diagram from Diagram.fromJSON without providers option", async () => {
    // Provider modules loaded dynamically based on provider/service
    const diagram = await Diagram.fromJSON({
      name: "Event Processing",
      nodes: [
        {
          id: "eks-1",
          label: "k8s source",
          provider: "aws",
          service: "compute",
          type: "ElasticKubernetesService",
        },
        {
          id: "lambda-1",
          label: "processor",
          provider: "aws",
          service: "compute",
          type: "Lambda",
        },
      ],
      edges: [{ from: "eks-1", to: "lambda-1" }],
    });

    // Must render without Graphviz error and WITH icons
    const svg = await diagram.render();
    expect(typeof svg).toBe("string");
    expect(svg).toContain("<svg");
    expect(svg).toContain("k8s source");
    expect(svg).toContain("processor");
    expect(svg).toContain("<image");
  });

  it("should gracefully fall back to plain nodes when type is not registered", async () => {
    // Use a fake type that no module has registered
    const diagram = await Diagram.fromJSON({
      name: "No Provider Test",
      nodes: [
        { id: "web", label: "Web", provider: "custom", service: "compute", type: "UnknownType123" },
      ],
    });

    // Should render without error, just without icons
    const svg = await diagram.render();
    expect(svg).toContain("<svg");
    expect(svg).toContain("Web");
  });

  it("should work with multiple providers via dynamic imports", async () => {
    // Provider modules loaded dynamically based on provider/service
    const diagram = await Diagram.fromJSON({
      name: "Multi Provider Test",
      nodes: [
        { id: "web", label: "Web", provider: "aws", service: "compute", type: "EC2" },
        { id: "db", label: "DB", provider: "aws", service: "database", type: "RDS" },
      ],
      edges: [{ from: "web", to: "db" }],
    });

    const dot = diagram.toString();
    // Both nodes should have icon attributes
    const imageCount = (dot.match(/image=/g) || []).length;
    expect(imageCount).toBe(2);
  });
});

// ============================================================================
// Custom node serialization
// ============================================================================

describe("toJSON() / Diagram.fromJSON() - Custom Nodes", () => {
  it("should serialize Custom node with iconUrl", async () => {
    const { Custom } = await import("../src/Custom.js");
    const diagram = Diagram("Custom Test");
    const testIcon =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.add(Custom("My Service", testIcon, { nodeId: "custom1" }));

    const json = diagram.toJSON();

    const nodeDef = json.nodes.find((n) => n.id === "custom1");
    expect(nodeDef).toBeDefined();
    expect(nodeDef!.iconUrl).toBe(testIcon);
  });

  it("should restore Custom node iconUrl from JSON", async () => {
    const testIcon =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    const diagram = await Diagram.fromJSON({
      nodes: [{ id: "custom1", label: "My Service", iconUrl: testIcon }],
    });

    const dot = diagram.toString();
    // The node should have icon-related attributes
    expect(dot).toContain('"custom1"');
    expect(dot).toContain('label="My Service"');
  });
});

// ============================================================================
// Edge case and error handling tests
// ============================================================================

describe("JSON - Edge Cases", () => {
  it("should handle diagram with nodes but no edges", async () => {
    const original = Diagram("No Edges");
    original.add(Node("Lonely", { nodeId: "alone" }));

    const json = original.toJSON();
    expect(json.edges).toBeUndefined();

    const restored = await Diagram.fromJSON(json);
    const dot = restored.toString();
    expect(dot).toContain('"alone"');
    expect(dot).not.toContain("->");
  });

  it("should handle diagram with only clusters (no top-level nodes)", () => {
    const original = Diagram("Only Clusters");
    const cluster = original.cluster("Group");
    cluster.add(Node("A", { nodeId: "a" }));

    const json = original.toJSON();
    // All nodes should still be in nodes array
    expect(json.nodes).toHaveLength(1);
    expect(json.clusters).toHaveLength(1);
  });

  it("should handle special characters in labels", async () => {
    const diagram = Diagram('Special "Chars"');
    diagram.add(Node('Node with "quotes"', { nodeId: "special" }));

    const json = diagram.toJSON();
    const restored = await Diagram.fromJSON(json);

    expect(restored.name).toBe('Special "Chars"');
    const dot = restored.toString();
    expect(dot).toContain("special");
  });

  it("should handle empty cluster", async () => {
    const original = Diagram("Empty Cluster");
    original.cluster("Empty");

    const json = original.toJSON();
    expect(json.clusters).toHaveLength(1);
    expect(json.clusters![0].label).toBe("Empty");
    expect(json.clusters![0].nodes).toBeUndefined();

    const restored = await Diagram.fromJSON(json);
    const dot = restored.toString();
    expect(dot).toContain("cluster_Empty");
  });

  it("should handle a complex architecture diagram", async () => {
    const original = Diagram("Complex Arch", { direction: "TB", theme: "blues" });

    // Top-level nodes
    const internet = original.add(Node("Internet", { nodeId: "internet" }));

    // VPC cluster
    const vpc = original.cluster("VPC");
    const pubSubnet = vpc.cluster("Public Subnet");
    const privSubnet = vpc.cluster("Private Subnet");

    const lb = pubSubnet.add(Node("Load Balancer", { nodeId: "lb" }));
    const web1 = pubSubnet.add(Node("Web Server 1", { nodeId: "web1" }));
    const web2 = pubSubnet.add(Node("Web Server 2", { nodeId: "web2" }));

    const app = privSubnet.add(Node("App Server", { nodeId: "app" }));
    const db = privSubnet.add(Node("Database", { nodeId: "db" }));
    const cache = privSubnet.add(Node("Cache", { nodeId: "cache" }));

    internet.to(lb);
    lb.to([web1, web2]);
    web1.to(app);
    web2.to(app);
    app.to(Edge({ label: "SQL" }), db);
    app.to(Edge({ label: "get/set", style: "dashed" }), cache);

    const json = original.toJSON();

    // Verify structure
    expect(json.nodes.length).toBe(7); // internet + lb + web1 + web2 + app + db + cache
    expect(json.edges!.length).toBe(7);
    expect(json.clusters!.length).toBe(1); // VPC
    expect(json.clusters![0].clusters!.length).toBe(2); // Public + Private

    // Round-trip
    const restored = await Diagram.fromJSON(json);
    const json2 = restored.toJSON();
    expect(json2).toEqual(json);
  });
});

// ============================================================================
// Schema validation structure tests
// ============================================================================

describe("JSON Schema Conformance", () => {
  it("should produce JSON matching schema structure", () => {
    const diagram = Diagram("Schema Test", { direction: "TB" });
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.to(Edge({ label: "link" }), b);
    const cluster = diagram.cluster("Group");
    cluster.add(Node("C", { nodeId: "c" }));

    const json = diagram.toJSON();

    // Verify top-level properties are correct types
    expect(typeof json.name).toBe("string");
    expect(json.direction).toBe("TB");
    expect(Array.isArray(json.nodes)).toBe(true);
    expect(Array.isArray(json.edges)).toBe(true);
    expect(Array.isArray(json.clusters)).toBe(true);

    // Verify node structure
    for (const node of json.nodes) {
      expect(typeof node.id).toBe("string");
      expect(node.id.length).toBeGreaterThan(0);
    }

    // Verify edge structure
    for (const edge of json.edges!) {
      expect(typeof edge.from).toBe("string");
      expect(typeof edge.to).toBe("string");
    }

    // Verify cluster structure
    for (const cluster of json.clusters!) {
      expect(typeof cluster.label).toBe("string");
    }
  });

  it("should accept $schema property in Diagram.fromJSON", async () => {
    const json: DiagramJSON = {
      $schema: "https://diagrams-js.hatemhosny.dev/schema/diagram.json",
      name: "With Schema",
      nodes: [{ id: "a", label: "A" }],
    };

    const diagram = await Diagram.fromJSON(json);
    expect(diagram.name).toBe("With Schema");
  });
});

// ============================================================================
// Provisioning-focused tests (consistency for cloud architecture)
// ============================================================================

describe("Provisioning Consistency", () => {
  it("should preserve node IDs across serialization for resource mapping", async () => {
    const original = Diagram("Infra");
    original.add(
      Node("Web Server", {
        nodeId: "aws-ec2-web-001",
      }),
    );
    original.add(
      Node("Database", {
        nodeId: "aws-rds-db-001",
      }),
    );

    const json = original.toJSON();
    expect(json.nodes.find((n) => n.id === "aws-ec2-web-001")).toBeDefined();
    expect(json.nodes.find((n) => n.id === "aws-rds-db-001")).toBeDefined();

    const restored = await Diagram.fromJSON(json);
    const dot = restored.toString();
    expect(dot).toContain('"aws-ec2-web-001"');
    expect(dot).toContain('"aws-rds-db-001"');
  });

  it("should preserve all edge metadata for network topology", async () => {
    const original = Diagram("Network");
    const a = original.add(Node("Service A", { nodeId: "svc-a" }));
    const b = original.add(Node("Service B", { nodeId: "svc-b" }));
    a.to(
      Edge({
        label: "gRPC",
        color: "#4285F4",
        style: "bold",
      }),
      b,
    );

    const json = original.toJSON();
    const edge = json.edges![0];
    expect(edge.from).toBe("svc-a");
    expect(edge.to).toBe("svc-b");
    expect(edge.label).toBe("gRPC");
    expect(edge.color).toBe("#4285F4");
    expect(edge.style).toBe("bold");

    const restored = await Diagram.fromJSON(json);
    const dot = restored.toString();
    expect(dot).toContain('label="gRPC"');
    expect(dot).toContain('color="#4285F4"');
    expect(dot).toContain('style="bold"');
  });

  it("should preserve provider/service/type info for resource identification", () => {
    const diagram = Diagram("AWS Infra");
    const node = Node("API Server", { nodeId: "api" });
    (node as unknown as Record<string, unknown>)["~provider"] = "aws";
    (node as unknown as Record<string, unknown>)["~type"] = "compute";
    (node as unknown as Record<string, unknown>)["~resource"] = "EC2";
    diagram.add(node);

    const json = diagram.toJSON();
    const nodeDef = json.nodes.find((n) => n.id === "api")!;
    expect(nodeDef.provider).toBe("aws");
    expect(nodeDef.service).toBe("compute");
    expect(nodeDef.type).toBe("EC2");
  });

  it("should preserve cluster hierarchy for security group mapping", async () => {
    const original = Diagram("Security");
    const vpc = original.cluster("VPC-001");
    const pubSubnet = vpc.cluster("subnet-pub-001");
    const privSubnet = vpc.cluster("subnet-priv-001");

    pubSubnet.add(Node("ALB", { nodeId: "alb-001" }));
    privSubnet.add(Node("RDS", { nodeId: "rds-001" }));

    const json = original.toJSON();

    // Verify cluster hierarchy
    expect(json.clusters![0].label).toBe("VPC-001");
    expect(json.clusters![0].clusters![0].label).toBe("subnet-pub-001");
    expect(json.clusters![0].clusters![1].label).toBe("subnet-priv-001");
    expect(json.clusters![0].clusters![0].nodes).toEqual(["alb-001"]);
    expect(json.clusters![0].clusters![1].nodes).toEqual(["rds-001"]);

    // Round-trip preserves everything
    const restored = await Diagram.fromJSON(json);
    const json2 = restored.toJSON();
    expect(json2).toEqual(json);
  });
});
