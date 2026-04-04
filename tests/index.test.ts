import { describe, it, expect, beforeEach } from "vite-plus/test";
import { Diagram, Node, Edge, Cluster, setIconBaseDir, clearDiagram } from "../src/index.js";

// Set up icon base directory
setIconBaseDir("resources");

describe("Diagram", () => {
  beforeEach(() => {
    // Clear any lingering context
    while (clearDiagram()) {
      // Keep clearing until empty
    }
  });

  it("should create a diagram with default options", () => {
    const diagram = new Diagram("Test Diagram", {});
    expect(diagram.name).toBe("Test Diagram");
    expect(diagram.filename).toBe("test_diagram");
    expect(diagram.direction).toBe("LR");
    diagram.destroy();
  });

  it("should support different directions", () => {
    const diagram = new Diagram("Test", { direction: "TB" });
    expect(diagram.direction).toBe("TB");
    diagram.destroy();
  });

  it("should generate DOT source", () => {
    const diagram = new Diagram("Test", {});
    const dot = diagram.toString();
    expect(dot).toContain('digraph "Test"');
    expect(dot).toContain('rankdir="LR"');
    diagram.destroy();
  });
});

describe("Node", () => {
  beforeEach(() => {
    // Clear any lingering context
    while (clearDiagram()) {
      // Keep clearing until empty
    }
  });

  it("should throw error if created outside diagram context", () => {
    expect(() => {
      new Node("test");
    }).toThrow("Global diagrams context not set up");
  });

  it("should create a node within diagram context", () => {
    const diagram = new Diagram("Test", {});
    const node = new Node("My Node");
    expect(node.label).toBe("My Node");
    expect(node.nodeId).toBeDefined();
    diagram.destroy();
  });

  it("should support autolabel", () => {
    const diagram = new Diagram("Test", { autolabel: true });
    const node = new Node("test");
    expect(node.label).toContain("Node");
    diagram.destroy();
  });
});

describe("Edge", () => {
  it("should create an edge with default attributes", () => {
    const edge = new Edge({});
    expect(edge.forward).toBe(false);
    expect(edge.reverse).toBe(false);
    expect(edge.attrs.dir).toBe("none");
  });

  it("should support forward direction", () => {
    const edge = new Edge({ forward: true });
    expect(edge.attrs.dir).toBe("forward");
  });

  it("should support custom attributes", () => {
    const edge = new Edge({ label: "test", color: "red", style: "dashed" });
    expect(edge.attrs.label).toBe("test");
    expect(edge.attrs.color).toBe("red");
    expect(edge.attrs.style).toBe("dashed");
  });

  it("should provide factory methods", () => {
    expect(Edge.label("test").attrs.label).toBe("test");
    expect(Edge.color("red").attrs.color).toBe("red");
    expect(Edge.style("dashed").attrs.style).toBe("dashed");
  });
});

describe("Node connections", () => {
  beforeEach(() => {
    // Clear any lingering context
    while (clearDiagram()) {
      // Keep clearing until empty
    }
  });

  it("should connect nodes with to()", () => {
    const diagram = new Diagram("Test", {});
    const node1 = diagram.add(new Node("Node1"));
    const node2 = diagram.add(new Node("Node2"));

    const result = node1.to(node2);
    expect(result).toBe(node2);

    const dot = diagram.toString();
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node2.nodeId + '"');
    diagram.destroy();
  });

  it("should connect nodes with from()", () => {
    const diagram = new Diagram("Test", {});
    const node1 = diagram.add(new Node("Node1"));
    const node2 = diagram.add(new Node("Node2"));

    node2.from(node1);

    const dot = diagram.toString();
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node2.nodeId + '"');
    diagram.destroy();
  });

  it("should support bidirectional connections with with()", () => {
    const diagram = new Diagram("Test", {});
    const node1 = diagram.add(new Node("Node1"));
    const node2 = diagram.add(new Node("Node2"));

    node1.with(node2);

    const dot = diagram.toString();
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node2.nodeId + '"');
    diagram.destroy();
  });

  it("should connect to multiple nodes", () => {
    const diagram = new Diagram("Test", {});
    const node1 = diagram.add(new Node("Node1"));
    const node2 = diagram.add(new Node("Node2"));
    const node3 = diagram.add(new Node("Node3"));

    node1.to([node2, node3]);

    const dot = diagram.toString();
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node2.nodeId + '"');
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node3.nodeId + '"');
    diagram.destroy();
  });

  it("should support edge customization", () => {
    const diagram = new Diagram("Test", {});
    const node1 = diagram.add(new Node("Node1"));
    const node2 = diagram.add(new Node("Node2"));

    node1.to(new Edge({ color: "red", style: "dashed" }), node2);

    const dot = diagram.toString();
    expect(dot).toContain('color="red"');
    expect(dot).toContain('style="dashed"');
    diagram.destroy();
  });
});

describe("Cluster", () => {
  beforeEach(() => {
    // Clear any lingering context
    while (clearDiagram()) {
      // Keep clearing until empty
    }
  });

  it("should throw error if created outside diagram context", () => {
    expect(() => {
      new Cluster("test");
    }).toThrow("Global diagrams context not set up");
  });

  it("should create a cluster within diagram context", () => {
    const diagram = new Diagram("Test");
    const cluster = new Cluster("My Cluster");
    expect(cluster.label).toBe("My Cluster");
    expect(cluster.name).toBe("cluster_My_Cluster");
    diagram.destroy();
  });

  it("should nest clusters", () => {
    const diagram = new Diagram("Test");
    const cluster1 = new Cluster("Outer");
    cluster1.run(() => {
      const cluster2 = new Cluster("Inner");
      expect(cluster2.depth).toBe(1);
    });
    diagram.destroy();
  });
});
