import { describe, it, expect } from "vite-plus/test";
import { Diagram, Node, Edge } from "../src/index.js";

describe("Diagram Options - DOT Output", () => {
  it("should set diagram name in DOT output", async () => {
    const diagram = Diagram("My Test Diagram", {});
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('digraph "My Test Diagram"');
    diagram.destroy();
  });

  it("should set direction LR by default", async () => {
    const diagram = Diagram("Test", {});
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('rankdir="LR"');
    diagram.destroy();
  });

  it("should set direction TB", async () => {
    const diagram = Diagram("Test", { direction: "TB" });
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('rankdir="TB"');
    expect(dot).not.toContain('rankdir="LR"');
    diagram.destroy();
  });

  it("should set direction BT", async () => {
    const diagram = Diagram("Test", { direction: "BT" });
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('rankdir="BT"');
    diagram.destroy();
  });

  it("should set direction RL", async () => {
    const diagram = Diagram("Test", { direction: "RL" });
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('rankdir="RL"');
    diagram.destroy();
  });

  it("should set curve style ortho by default", async () => {
    const diagram = Diagram("Test", {});
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('splines="ortho"');
    diagram.destroy();
  });

  it("should set curve style curved", async () => {
    const diagram = Diagram("Test", { curvestyle: "curved" });
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('splines="curved"');
    diagram.destroy();
  });

  it("should set curve style spline", async () => {
    const diagram = Diagram("Test", { curvestyle: "spline" });
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('splines="spline"');
    diagram.destroy();
  });

  it("should set curve style polyline", async () => {
    const diagram = Diagram("Test", { curvestyle: "polyline" });
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('splines="polyline"');
    diagram.destroy();
  });

  it("should set graph attributes", async () => {
    const diagram = Diagram("Test", {
      graphAttr: {
        fontsize: "45",
        bgcolor: "transparent",
      },
    });
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('fontsize="45"');
    expect(dot).toContain('bgcolor="transparent"');
    diagram.destroy();
  });

  it("should set node attributes", async () => {
    const diagram = Diagram("Test", {
      nodeAttr: {
        style: "filled",
        fillcolor: "lightblue",
      },
    });
    diagram.add(Node("Test Node"));
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('style="filled"');
    expect(dot).toContain('fillcolor="lightblue"');
    diagram.destroy();
  });

  it("should set edge attributes", async () => {
    const diagram = Diagram("Test", {
      edgeAttr: {
        color: "red",
        style: "dashed",
      },
    });
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('color="red"');
    expect(dot).toContain('style="dashed"');
    diagram.destroy();
  });

  it("should combine multiple options correctly", async () => {
    const diagram = Diagram("Complex", {
      direction: "TB",
      curvestyle: "spline",
      graphAttr: { fontsize: "20" },
      nodeAttr: { shape: "circle" },
      edgeAttr: { penwidth: "2" },
    });
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('rankdir="TB"');
    expect(dot).toContain('splines="spline"');
    expect(dot).toContain('fontsize="20"');
    expect(dot).toContain('penwidth="2"');
    diagram.destroy();
  });
});

describe("Node Behaviors - DOT Output", () => {
  it("should create node with label", async () => {
    const diagram = Diagram("Test", {});
    diagram.add(Node("My Node"));
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('label="My Node"');
    diagram.destroy();
  });

  it("should create node with empty label", async () => {
    const diagram = Diagram("Test", {});
    diagram.add(Node(""));
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('label=""');
    diagram.destroy();
  });

  it("should create node with custom attributes", async () => {
    const diagram = Diagram("Test", {});
    diagram.add(Node("Test", { color: "red", fillcolor: "blue" }));
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('color="red"');
    expect(dot).toContain('fillcolor="blue"');
    diagram.destroy();
  });

  it("should create multiple nodes", async () => {
    const diagram = Diagram("Test", {});
    diagram.add(Node("Node A"));
    diagram.add(Node("Node B"));
    diagram.add(Node("Node C"));
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('label="Node A"');
    expect(dot).toContain('label="Node B"');
    expect(dot).toContain('label="Node C"');
    diagram.destroy();
  });

  it("should create node with multiline label", async () => {
    const diagram = Diagram("Test", {});
    diagram.add(Node("Line 1\nLine 2"));
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('label="Line 1\nLine 2"');
    diagram.destroy();
  });
});

describe("Edge Behaviors - DOT Output", () => {
  it("should create forward edge by default with to()", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toMatch(/"[^"]+"\s*->\s*"[^"]+"/);
    diagram.destroy();
  });

  it("should create edge with label", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "data flow" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('label="data flow"');
    diagram.destroy();
  });

  it("should have default edge label font size of 8", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "test" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('fontsize="8"');
    diagram.destroy();
  });

  it("should allow custom edge label font size", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "test", fontsize: "14" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('fontsize="14"');
    diagram.destroy();
  });

  it("should respect diagram edgeAttr font size", async () => {
    const diagram = Diagram("Test", {
      edgeAttr: {
        fontsize: "9",
      },
    });
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "test" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('fontsize="9"');
    diagram.destroy();
  });

  it("should have default edge font properties", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "test" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('fontsize="8"');
    expect(dot).toContain('fontcolor="#2D3436"');
    expect(dot).toContain('fontname="Sans-Serif"');
    diagram.destroy();
  });

  it("should allow diagram edgeAttr to customize fontcolor", async () => {
    const diagram = Diagram("Test", {
      edgeAttr: {
        fontcolor: "red",
      },
    });
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "test" }), node2);
    const dot = await diagram.render({ format: "dot" });
    // Check edge block has fontcolor="red"
    expect(dot).toMatch(/edge \[[^\]]*fontcolor="red"[^\]]*\]/);
    diagram.destroy();
  });

  it("should allow diagram edgeAttr to customize fontname", async () => {
    const diagram = Diagram("Test", {
      edgeAttr: {
        fontname: "Arial",
      },
    });
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "test" }), node2);
    const dot = await diagram.render({ format: "dot" });
    // Check edge block has fontname="Arial"
    expect(dot).toMatch(/edge \[[^\]]*fontname="Arial"[^\]]*\]/);
    diagram.destroy();
  });

  it("should allow diagram edgeAttr to customize all font properties", async () => {
    const diagram = Diagram("Test", {
      edgeAttr: {
        fontsize: "12",
        fontcolor: "blue",
        fontname: "Helvetica",
      },
    });
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "test" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('fontsize="12"');
    expect(dot).toContain('fontcolor="blue"');
    expect(dot).toContain('fontname="Helvetica"');
    diagram.destroy();
  });

  it("should allow edge-level override of diagram fontcolor", async () => {
    const diagram = Diagram("Test", {
      edgeAttr: {
        fontcolor: "red",
      },
    });
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "test", fontcolor: "green" }), node2);
    const dot = await diagram.render({ format: "dot" });
    // Edge-level should override diagram-level
    expect(dot).toContain('fontcolor="green"');
    diagram.destroy();
  });

  it("should allow edge-level override of diagram fontname", async () => {
    const diagram = Diagram("Test", {
      edgeAttr: {
        fontname: "Arial",
      },
    });
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ label: "test", fontname: "Times" }), node2);
    const dot = await diagram.render({ format: "dot" });
    // Edge-level should override diagram-level
    expect(dot).toContain('fontname="Times"');
    diagram.destroy();
  });

  it("should create edge with color", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ color: "blue" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('color="blue"');
    diagram.destroy();
  });

  it("should create edge with style dashed", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ style: "dashed" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('style="dashed"');
    diagram.destroy();
  });

  it("should create edge with style dotted", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ style: "dotted" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('style="dotted"');
    diagram.destroy();
  });

  it("should create edge with style bold", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ style: "bold" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('style="bold"');
    diagram.destroy();
  });

  it("should create edge with forward direction", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ forward: true }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('dir="forward"');
    diagram.destroy();
  });

  it("should create edge with reverse direction", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node2.from(node1);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('dir="back"');
    diagram.destroy();
  });

  it("should create bidirectional edge", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ forward: true, reverse: true }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('dir="both"');
    diagram.destroy();
  });

  it("should create edge with no direction using with()", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.with(node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('dir="none"');
    diagram.destroy();
  });

  it("should create edge with custom penwidth", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ penwidth: "3" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('penwidth="3"');
    diagram.destroy();
  });

  it("should create edge with custom arrowhead", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ arrowhead: "vee" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('arrowhead="vee"');
    diagram.destroy();
  });

  it("should create edge with custom arrowsize", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ arrowsize: "1.5" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('arrowsize="1.5"');
    diagram.destroy();
  });

  it("should create edge with minlen", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ minlen: "2" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('minlen="2"');
    diagram.destroy();
  });

  it("should combine multiple edge attributes", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ color: "red", style: "dashed", label: "test", penwidth: "2" }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('color="red"');
    expect(dot).toContain('style="dashed"');
    expect(dot).toContain('label="test"');
    expect(dot).toContain('penwidth="2"');
    diagram.destroy();
  });
});

describe("Connection Patterns - DOT Output", () => {
  it("should connect nodes in chain with to()", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    const node3 = diagram.add(Node("C"));
    node1.to(node2).to(node3);
    const dot = (await diagram.render({ format: "dot" })) as string;
    const edgeMatches = (dot.match(/->/g) || []).length;
    expect(edgeMatches).toBe(2);
    diagram.destroy();
  });

  it("should connect one to many nodes", async () => {
    const diagram = Diagram("Test", {});
    const source = diagram.add(Node("Source"));
    const targets = [diagram.add(Node("A")), diagram.add(Node("B")), diagram.add(Node("C"))];
    source.to(targets);
    const dot = (await diagram.render({ format: "dot" })) as string;
    const edgeMatches = (dot.match(/->/g) || []).length;
    expect(edgeMatches).toBe(3);
    diagram.destroy();
  });

  it("should connect many to one node with from()", async () => {
    const diagram = Diagram("Test", {});
    const target = diagram.add(Node("Target"));
    const sources = [diagram.add(Node("A")), diagram.add(Node("B")), diagram.add(Node("C"))];
    target.from(sources);
    const dot = (await diagram.render({ format: "dot" })) as string;
    const edgeMatches = (dot.match(/->/g) || []).length;
    expect(edgeMatches).toBe(3);
    diagram.destroy();
  });

  it("should support from() with single node", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node2.from(node1);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('dir="back"');
    diagram.destroy();
  });

  it("should support with() with multiple nodes", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const others = [diagram.add(Node("B")), diagram.add(Node("C"))];
    node1.with(others);
    const dot = (await diagram.render({ format: "dot" })) as string;
    const edgeMatches = (dot.match(/->/g) || []).length;
    expect(edgeMatches).toBe(2);
    expect(dot).toContain('dir="none"');
    diagram.destroy();
  });

  it("should support bidirectional connections", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(Edge({ forward: true, reverse: true }), node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('dir="both"');
    diagram.destroy();
  });

  it("should support edge chaining with to(Edge)", async () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    const node3 = diagram.add(Node("C"));
    node1.to(Edge({ color: "red" }), node2).to(Edge({ color: "blue" }), node3);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('color="red"');
    expect(dot).toContain('color="blue"');
    diagram.destroy();
  });

  it("should support mixed connections", async () => {
    const diagram = Diagram("Test", {});
    const lb = diagram.add(Node("LB"));
    const web1 = diagram.add(Node("Web1"));
    const web2 = diagram.add(Node("Web2"));
    const db = diagram.add(Node("DB"));

    lb.to([web1, web2]);
    web1.to(db);
    web2.to(db);

    const dot = (await diagram.render({ format: "dot" })) as string;
    const edgeMatches = (dot.match(/->/g) || []).length;
    expect(edgeMatches).toBe(4);
    diagram.destroy();
  });
});

describe("Cluster Behaviors - DOT Output", () => {
  it("should create cluster with label", async () => {
    const diagram = Diagram("Test", {});
    diagram.cluster("My Cluster");
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('subgraph "cluster_My_Cluster"');
    expect(dot).toContain('label="My Cluster"');
    diagram.destroy();
  });

  it("should create cluster with nodes", async () => {
    const diagram = Diagram("Test", {});
    const cluster = diagram.cluster("Services");
    cluster.add(Node("Service A"));
    cluster.add(Node("Service B"));
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('subgraph "cluster_Services"');
    expect(dot).toContain('label="Service A"');
    expect(dot).toContain('label="Service B"');
    diagram.destroy();
  });

  it("should support nested clusters", async () => {
    const diagram = Diagram("Test", {});
    const outer = diagram.cluster("Outer");
    const inner = outer.cluster("Inner");
    inner.add(Node("Node"));
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('subgraph "cluster_Outer"');
    expect(dot).toContain('subgraph "cluster_Inner"');
    diagram.destroy();
  });

  it("should set cluster style attributes", async () => {
    const diagram = Diagram("Test", { theme: "pastel" });
    diagram.cluster("My Cluster");
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('style="rounded"');
    diagram.destroy();
  });

  it("should support connections between clusters", async () => {
    const diagram = Diagram("Test", {});
    const frontend = diagram.cluster("Frontend");
    const backend = diagram.cluster("Backend");
    const web = frontend.add(Node("Web"));
    const api = backend.add(Node("API"));
    web.to(api);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('subgraph "cluster_Frontend"');
    expect(dot).toContain('subgraph "cluster_Backend"');
    expect(dot).toMatch(/->/);
    diagram.destroy();
  });

  it("should set different cluster background colors by depth", async () => {
    const diagram = Diagram("Test", { theme: "blues" });
    const cluster1 = diagram.cluster("Level1");
    const cluster2 = cluster1.cluster("Level2");
    const cluster3 = cluster2.cluster("Level3");
    cluster3.add(Node("Deep"));
    const dot = (await diagram.render({ format: "dot" })) as string;
    // Should have different bgcolor values for different depths
    const bgColors = dot.match(/bgcolor="#[A-Fa-f0-9]+"/g);
    expect(bgColors?.length).toBeGreaterThanOrEqual(3);
    diagram.destroy();
  });
});

describe("Theme Behaviors - DOT Output", () => {
  it("should apply neutral theme colors", async () => {
    const diagram = Diagram("Test", { theme: "neutral" });
    diagram.cluster("Test");
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain("bgcolor=");
    diagram.destroy();
  });

  it("should apply pastel theme colors", async () => {
    const diagram = Diagram("Test", { theme: "pastel" });
    diagram.cluster("Test");
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain("bgcolor=");
    diagram.destroy();
  });

  it("should apply blues theme colors", async () => {
    const diagram = Diagram("Test", { theme: "blues" });
    diagram.cluster("Test");
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain("bgcolor=");
    diagram.destroy();
  });

  it("should apply greens theme colors", async () => {
    const diagram = Diagram("Test", { theme: "greens" });
    diagram.cluster("Test");
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain("bgcolor=");
    diagram.destroy();
  });

  it("should apply orange theme colors", async () => {
    const diagram = Diagram("Test", { theme: "orange" });
    diagram.cluster("Test");
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain("bgcolor=");
    diagram.destroy();
  });

  it("should set edge colors based on theme", async () => {
    const diagram = Diagram("Test", { theme: "blues" });
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(node2);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain("color=");
    diagram.destroy();
  });
});

describe("Autolabel Feature", () => {
  it("should not add autolabel by default", () => {
    const diagram = Diagram("Test", {});
    const node = diagram.add(Node("My Server"));
    expect(node.label).toBe("My Server");
    diagram.destroy();
  });

  it("should add autolabel prefix when enabled", () => {
    const diagram = Diagram("Test", { autolabel: true });
    const node = diagram.add(Node("My Server"));
    // autolabel adds "Node" prefix by default when ~type is not set
    expect(node.label).toContain("Node");
    expect(node.label).toContain("My Server");
    diagram.destroy();
  });

  it("should use ~type for autolabel prefix when provided", () => {
    const diagram = Diagram("Test", { autolabel: true });
    const node = Node("My Server", { "~type": "EC2" });
    diagram.add(node);
    expect(node.label).toBe("EC2\nMy Server");
    diagram.destroy();
  });

  it("should handle autolabel with empty node label", () => {
    const diagram = Diagram("Test", { autolabel: true });
    const node = Node("", { "~type": "EC2" });
    diagram.add(node);
    expect(node.label).toBe("EC2");
    diagram.destroy();
  });
});

describe("Provider Node Behaviors - DOT Output", () => {
  it("should create provider node with icon attributes", async () => {
    const diagram = Diagram("Test", {});
    const node = Node("EC2");
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('image="data:image/png;base64,test"');
    expect(dot).toContain('shape="none"');
    diagram.destroy();
  });

  it("should respect diagram nodeAttr.shape for icon nodes", async () => {
    const diagram = Diagram("Test", {
      nodeAttr: {
        shape: "box",
      },
    });
    const node = Node("EC2");
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('image="data:image/png;base64,test"');
    // When diagram nodeAttr.shape is set, icon nodes should use that shape
    expect(dot).toContain('shape="box"');
    expect(dot).not.toContain('shape="none"');
    diagram.destroy();
  });

  it("should respect diagram nodeAttr.shape=circle for icon nodes", async () => {
    const diagram = Diagram("Test", {
      nodeAttr: {
        shape: "circle",
      },
    });
    const node = Node("EC2");
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('image="data:image/png;base64,test"');
    expect(dot).toContain('shape="circle"');
    expect(dot).not.toContain('shape="none"');
    diagram.destroy();
  });

  it("should allow node-level shape to override diagram nodeAttr for icon nodes", async () => {
    const diagram = Diagram("Test", {
      nodeAttr: {
        shape: "box",
      },
    });
    const node = Node("EC2", { shape: "ellipse" });
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('image="data:image/png;base64,test"');
    // Node-level shape should take precedence over diagram nodeAttr
    // Check that the specific node has shape="ellipse"
    expect(dot).toMatch(/label="EC2"[^\]]*shape="ellipse"[^\]]*\]/);
    diagram.destroy();
  });

  it("should respect diagram nodeAttr.height for icon nodes", async () => {
    const diagram = Diagram("Test", {
      nodeAttr: {
        height: "2.0",
      },
    });
    const node = Node("EC2");
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('height="2.0"');
    diagram.destroy();
  });

  it("should respect diagram nodeAttr.width for icon nodes", async () => {
    const diagram = Diagram("Test", {
      nodeAttr: {
        width: "2.0",
      },
    });
    const node = Node("EC2");
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('width="2.0"');
    diagram.destroy();
  });

  it("should respect diagram nodeAttr.margin for icon nodes", async () => {
    const diagram = Diagram("Test", {
      nodeAttr: {
        margin: "0.2,0.2",
      },
    });
    const node = Node("EC2");
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('margin="0.2,0.2"');
    diagram.destroy();
  });

  it("should allow node-level height to override diagram nodeAttr for icon nodes", async () => {
    const diagram = Diagram("Test", {
      nodeAttr: {
        height: "2.0",
      },
    });
    const node = Node("EC2", { height: "1.5" });
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);
    const dot = await diagram.render({ format: "dot" });
    // Node-level should take precedence
    expect(dot).toMatch(/label="EC2"[^\]]*height="1.5"[^\]]*\]/);
    diagram.destroy();
  });
});

describe("Icon Node Attributes - DOT Output", () => {
  it("should create provider node with all icon positioning attributes", async () => {
    const diagram = Diagram("Test", {});
    const node = Node("Service");
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('height="0.9"');
    expect(dot).toContain('width="0.8"');
    expect(dot).toContain('fixedsize="true"');
    expect(dot).toContain('margin="0,0"');
    expect(dot).toContain('labelloc="b"');
    expect(dot).toContain('imagescale="true"');
    diagram.destroy();
  });

  it("should handle mixed plain and icon nodes", async () => {
    const diagram = Diagram("Test", {});
    const plainNode = diagram.add(Node("Plain"));
    const iconNode = Node("Icon");
    (iconNode as unknown as { "~iconDataUrl": string })["~iconDataUrl"] =
      "data:image/png;base64,test";
    diagram.add(iconNode);
    plainNode.to(iconNode);
    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('label="Plain"');
    expect(dot).toContain('label="Icon"');
    expect(dot).toContain('shape="none"');
    expect(dot).toMatch(/->/);
    diagram.destroy();
  });
});

describe("Complex Integration - DOT Output", () => {
  it("should create complete web architecture diagram", async () => {
    const diagram = Diagram("Web Architecture", {
      direction: "TB",
      theme: "pastel",
    });

    const lb = diagram.add(Node("Load Balancer"));
    const webCluster = diagram.cluster("Web Tier");
    const web1 = webCluster.add(Node("Web Server 1"));
    const web2 = webCluster.add(Node("Web Server 2"));

    const dbCluster = diagram.cluster("Database Tier");
    const primary = dbCluster.add(Node("Primary DB"));
    const replica = dbCluster.add(Node("Replica DB"));

    lb.to([web1, web2]);
    web1.to(primary);
    web2.to(primary);
    primary.with(Edge({ style: "dashed" }), replica);

    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('digraph "Web Architecture"');
    expect(dot).toContain('rankdir="TB"');
    // Cluster names have spaces replaced with underscores
    expect(dot).toContain('subgraph "cluster_Web_Tier"');
    expect(dot).toContain('subgraph "cluster_Database_Tier"');
    expect(dot).toContain('style="dashed"');
    diagram.destroy();
  });

  it("should create diagram with all edge styles", async () => {
    const diagram = Diagram("Edge Styles", {});
    const source = diagram.add(Node("Source"));
    const targets = {
      solid: diagram.add(Node("Solid")),
      dashed: diagram.add(Node("Dashed")),
      dotted: diagram.add(Node("Dotted")),
      bold: diagram.add(Node("Bold")),
    };

    source.to(targets.solid);
    source.to(Edge({ style: "dashed" }), targets.dashed);
    source.to(Edge({ style: "dotted" }), targets.dotted);
    source.to(Edge({ style: "bold" }), targets.bold);

    const dot = await diagram.render({ format: "dot" });
    expect(dot).toContain('style="dashed"');
    expect(dot).toContain('style="dotted"');
    expect(dot).toContain('style="bold"');
    diagram.destroy();
  });

  it("should create diagram with all curve styles", async () => {
    const styles = ["ortho", "curved", "spline", "polyline"] as const;
    for (const style of styles) {
      const diagram = Diagram(`Curve ${style}`, { curvestyle: style });
      const node1 = diagram.add(Node("A"));
      const node2 = diagram.add(Node("B"));
      node1.to(node2);
      const dot = await diagram.render({ format: "dot" });
      expect(dot).toContain(`splines="${style}"`);
      diagram.destroy();
    }
  });

  it("should create diagram with all directions", async () => {
    const directions = ["TB", "BT", "LR", "RL"] as const;
    for (const dir of directions) {
      const diagram = Diagram(`Dir ${dir}`, { direction: dir });
      const node1 = diagram.add(Node("A"));
      const node2 = diagram.add(Node("B"));
      node1.to(node2);
      const dot = await diagram.render({ format: "dot" });
      expect(dot).toContain(`rankdir="${dir}"`);
      diagram.destroy();
    }
  });
});
