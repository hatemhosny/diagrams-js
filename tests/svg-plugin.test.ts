import { describe, it, expect } from "vite-plus/test";
import { Diagram, Node, Edge } from "../src/index.js";

describe("SVG Plugin - Export", () => {
  it("should export SVG with embedded diagram JSON", async () => {
    const diagram = Diagram("Test", { direction: "TB" });
    diagram.add(Node("A", { nodeId: "a" }));
    const svg = (await diagram.export("svg")) as string;

    expect(typeof svg).toBe("string");
    expect(svg).toContain("<svg");
    expect(svg).toContain('data-diagram-version="1.0"');
    expect(svg).toContain('data-diagram-json="');
  });

  it("should embed node data attributes in exported SVG", async () => {
    const diagram = Diagram("Test");
    const node = Node("Web", { nodeId: "web" });
    (node as unknown as Record<string, unknown>)["~provider"] = "aws";
    (node as unknown as Record<string, unknown>)["~type"] = "compute";
    (node as unknown as Record<string, unknown>)["~resource"] = "EC2";
    diagram.add(node);

    const svg = (await diagram.export("svg")) as string;
    expect(svg).toContain('data-node-id="web"');
    expect(svg).toContain('data-node-label="Web"');
    expect(svg).toContain('data-node-provider="aws"');
    expect(svg).toContain('data-node-type="compute"');
    expect(svg).toContain('data-node-resource="EC2"');
  });

  it("should embed cluster data attributes in exported SVG", async () => {
    const diagram = Diagram("Test");
    const cluster = diagram.cluster("My Cluster");
    cluster.add(Node("DB", { nodeId: "db" }));

    const svg = (await diagram.export("svg")) as string;
    expect(svg).toContain('data-cluster-label="My Cluster"');
    expect(svg).toContain('data-cluster-nodes="db"');
  });

  it("should embed node metadata as base64 when present", async () => {
    const diagram = Diagram("Test");
    const node = Node("Server", { nodeId: "srv" });
    node.metadata = { region: "us-east-1", cost: 100 };
    diagram.add(node);

    const svg = (await diagram.export("svg")) as string;
    expect(svg).toContain('data-node-metadata="');
  });

  it("should produce deterministic embedded JSON for identical diagrams", async () => {
    const d1 = Diagram("Test");
    d1.add(Node("A", { nodeId: "a" }));

    const d2 = Diagram("Test");
    d2.add(Node("A", { nodeId: "a" }));

    const svg1 = (await d1.export("svg")) as string;
    const svg2 = (await d2.export("svg")) as string;

    const match1 = svg1.match(/data-diagram-json="([^"]+)"/);
    const match2 = svg2.match(/data-diagram-json="([^"]+)"/);
    expect(match1).toBeDefined();
    expect(match2).toBeDefined();
    expect(match1![1]).toBe(match2![1]);
  });
});

describe("SVG Plugin - Import via diagram.import()", () => {
  it("should merge nodes and edges from exported SVG", async () => {
    const original = Diagram("Original", { direction: "TB", theme: "blues" });
    const a = original.add(Node("A", { nodeId: "a" }));
    const b = original.add(Node("B", { nodeId: "b" }));
    a.to(Edge({ label: "link" }), b);
    const svg = (await original.export("svg")) as string;

    const restored = Diagram("Target");
    await restored.import(svg, "svg");

    const dot = restored.toString();
    expect(dot).toContain('"a"');
    expect(dot).toContain('"b"');
    expect(dot).toContain('"a" -> "b"');
    expect(dot).toContain('label="link"');
  });

  it("should merge clusters from exported SVG", async () => {
    const original = Diagram("Original");
    const c = original.cluster("VPC");
    c.add(Node("Web", { nodeId: "web" }));
    const svg = (await original.export("svg")) as string;

    const restored = Diagram("Target");
    await restored.import(svg, "svg");

    const dot = restored.toString();
    expect(dot).toContain("cluster_VPC");
    expect(dot).toContain('label="Web"');
  });
});

describe("SVG Plugin - Import via Diagram.fromSVG()", () => {
  it("should restore diagram options from SVG", async () => {
    const original = Diagram("Original", { direction: "TB", theme: "blues", curvestyle: "spline" });
    original.add(Node("A", { nodeId: "a" }));
    const svg = (await original.export("svg")) as string;

    const restored = await Diagram.fromSVG(svg);
    expect(restored.name).toBe("Original");
    expect(restored.direction).toBe("TB");
    expect(restored.theme).toBe("blues");
    expect(restored.curveStyle).toBe("spline");
  });

  it("should restore nodes, edges, and clusters from SVG", async () => {
    const original = Diagram("Original", { direction: "RL" });
    const c = original.cluster("Services");
    const a = c.add(Node("A", { nodeId: "a" }));
    const b = original.add(Node("B", { nodeId: "b" }));
    a.to(Edge({ label: "conn" }), b);
    const svg = (await original.export("svg")) as string;

    const restored = await Diagram.fromSVG(svg);
    const json = restored.toJSON();

    expect(json.name).toBe("Original");
    expect(restored.direction).toBe("RL");
    expect(json.nodes).toHaveLength(2);
    expect(json.edges).toHaveLength(1);
    expect(json.edges![0].label).toBe("conn");
    expect(json.clusters).toHaveLength(1);
    expect(json.clusters![0].label).toBe("Services");
    expect(json.clusters![0].nodes).toContain("a");
  });

  it("should round-trip provider metadata through SVG", async () => {
    const original = Diagram("Provider Test");
    const node = Node("Web", { nodeId: "web" });
    (node as unknown as Record<string, unknown>)["~provider"] = "aws";
    (node as unknown as Record<string, unknown>)["~type"] = "compute";
    (node as unknown as Record<string, unknown>)["~resource"] = "EC2";
    original.add(node);

    const svg = (await original.export("svg")) as string;
    const restored = await Diagram.fromSVG(svg);
    const json = restored.toJSON();

    expect(json.nodes[0].provider).toBe("aws");
    expect(json.nodes[0].type).toBe("compute");
    expect(json.nodes[0].resource).toBe("EC2");
  });
});

describe("SVG Plugin - Round-trip Consistency", () => {
  it("should produce identical JSON after SVG export -> Diagram.fromSVG -> toJSON", async () => {
    const original = Diagram("RoundTrip", { direction: "BT", theme: "greens" });
    const a = original.add(Node("A", { nodeId: "a" }));
    const b = original.add(Node("B", { nodeId: "b" }));
    const c = original.add(Node("C", { nodeId: "c" }));
    a.to(Edge({ label: "ab" }), b);
    b.to(Edge({ label: "bc", color: "red" }), c);
    const cluster = original.cluster("Group");
    cluster.add(Node("D", { nodeId: "d" }));

    const json1 = original.toJSON();
    const svg = (await original.export("svg")) as string;
    const restored = await Diagram.fromSVG(svg);
    const json2 = restored.toJSON();

    expect(json2).toEqual(json1);
  });
});

describe("SVG Plugin - Custom Classes and Data Attributes", () => {
  it("should inject node className and dataAttrs into SVG", async () => {
    const diagram = Diagram("Test");
    diagram.add(
      Node("Web", { nodeId: "web", className: "server", dataAttrs: { team: "backend" } }),
    );
    const svg = (await diagram.export("svg")) as string;

    expect(svg).toContain('class="node server"');
    expect(svg).toContain('data-team="backend"');
    expect(svg).toContain('data-node-id="web"');
  });

  it("should inject edge className and dataAttrs into SVG", async () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.to(Edge({ className: "critical", dataAttrs: { latency: "50ms" } }), b);
    const svg = (await diagram.export("svg")) as string;

    expect(svg).toContain('class="edge critical"');
    expect(svg).toContain('data-latency="50ms"');
    expect(svg).toContain('data-edge-from="a"');
    expect(svg).toContain('data-edge-to="b"');
  });

  it("should inject cluster className and dataAttrs into SVG", async () => {
    const diagram = Diagram("Test");
    const cluster = diagram.cluster("VPC", {
      className: "production",
      dataAttrs: { region: "us-east-1" },
    });
    cluster.add(Node("Web", { nodeId: "web" }));
    const svg = (await diagram.export("svg")) as string;

    expect(svg).toContain('class="cluster production"');
    expect(svg).toContain('data-region="us-east-1"');
    expect(svg).toContain('data-cluster-label="VPC"');
  });

  it("should assign edge IDs in SVG", async () => {
    const diagram = Diagram("Test");
    const a = diagram.add(Node("A", { nodeId: "a" }));
    const b = diagram.add(Node("B", { nodeId: "b" }));
    a.to(b);
    const svg = (await diagram.export("svg")) as string;

    expect(svg).toContain('id="diagram_edge_0"');
  });

  it("should inject nested cluster className and dataAttrs into SVG", async () => {
    const diagram = Diagram("Test");
    const outer = diagram.cluster("VPC", { className: "vpc-class" });
    const inner = outer.cluster("Subnet", { className: "subnet-class", dataAttrs: { az: "a" } });
    inner.add(Node("Server", { nodeId: "srv" }));
    const svg = (await diagram.export("svg")) as string;

    expect(svg).toContain('class="cluster vpc-class"');
    expect(svg).toContain('class="cluster subnet-class"');
    expect(svg).toContain('data-az="a"');
    expect(svg).toContain('data-cluster-label="Subnet"');
  });
});

describe("SVG Plugin - Round-trip with custom classes/attrs", () => {
  it("should round-trip className and dataAttrs through SVG", async () => {
    const original = Diagram("Test");
    const node = original.add(
      Node("Web", { nodeId: "web", className: "server", dataAttrs: { team: "backend" } }),
    );
    const cluster = original.cluster("VPC", {
      className: "production",
      dataAttrs: { region: "us-east-1" },
    });
    const db = cluster.add(Node("DB", { nodeId: "db" }));
    node.to(Edge({ className: "critical", dataAttrs: { latency: "50ms" } }), db);

    const svg = (await original.export("svg")) as string;
    const restored = await Diagram.fromSVG(svg);
    const json = restored.toJSON();

    expect(json.nodes.find((n) => n.id === "web")?.className).toBe("server");
    expect(json.nodes.find((n) => n.id === "web")?.dataAttrs).toEqual({ team: "backend" });
    expect(json.edges?.[0].className).toBe("critical");
    expect(json.edges?.[0].dataAttrs).toEqual({ latency: "50ms" });
    expect(json.clusters?.[0].className).toBe("production");
    expect(json.clusters?.[0].dataAttrs).toEqual({ region: "us-east-1" });
  });
});

describe("SVG Plugin - Error Handling", () => {
  it("should throw when importing plain SVG without embedded data", async () => {
    const plainSvg = `<svg xmlns="http://www.w3.org/2000/svg"><text>Hello</text></svg>`;
    await expect(Diagram.fromSVG(plainSvg)).rejects.toThrow(
      "missing or corrupted embedded diagram data",
    );
  });

  it("should throw when diagram.import is used with plain SVG", async () => {
    const plainSvg = `<svg xmlns="http://www.w3.org/2000/svg"><text>Hello</text></svg>`;
    const diagram = Diagram("Test");
    await expect(diagram.import(plainSvg, "svg")).rejects.toThrow(
      "missing or corrupted embedded diagram data",
    );
  });

  it("should return false for canImport on plain SVG", async () => {
    const diagram = Diagram("Test");
    // canImport is internal; we test via import throwing
    const plainSvg = `<svg xmlns="http://www.w3.org/2000/svg"><text>Hello</text></svg>`;
    await expect(diagram.import(plainSvg, "svg")).rejects.toThrow();
  });
});
