import { describe, it, expect } from "vite-plus/test";
import { Diagram, Node, Edge } from "../src/index.js";

describe("Diagram", () => {
  it("should create a diagram with default options", () => {
    const diagram = Diagram("Test Diagram", {});
    expect(diagram.name).toBe("Test Diagram");
    expect(diagram.filename).toBe("test_diagram");
    expect(diagram.direction).toBe("LR");
    diagram.destroy();
  });

  it("should support different directions", () => {
    const diagram = Diagram("Test", { direction: "TB" });
    expect(diagram.direction).toBe("TB");
    diagram.destroy();
  });

  it("should generate DOT source", () => {
    const diagram = Diagram("Test", {});
    const dot = diagram.toString();
    expect(dot).toContain('digraph "Test"');
    expect(dot).toContain('rankdir="LR"');
    diagram.destroy();
  });
});

describe("Node", () => {
  it("should create a node without context", () => {
    const node = Node("test");
    expect(node.label).toBe("test");
    expect(node.nodeId).toBeDefined();
  });

  it("should create a node within diagram context", () => {
    const diagram = Diagram("Test", {});
    const node = diagram.add(Node("My Node"));
    expect(node.label).toBe("My Node");
    expect(node.nodeId).toBeDefined();
    diagram.destroy();
  });

  it("should support autolabel", () => {
    const diagram = Diagram("Test", { autolabel: true });
    const node = diagram.add(Node("test"));
    expect(node.label).toContain("Node");
    diagram.destroy();
  });
});

describe("Edge", () => {
  it("should create an edge with default attributes", () => {
    const edge = Edge({});
    expect(edge.forward).toBe(false);
    expect(edge.reverse).toBe(false);
    expect(edge.attrs.dir).toBe("none");
  });

  it("should support forward direction", () => {
    const edge = Edge({ forward: true });
    expect(edge.attrs.dir).toBe("forward");
  });

  it("should support custom attributes", () => {
    const edge = Edge({ label: "test", color: "red", style: "dashed" });
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
  it("should connect nodes with to()", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    const result = node1.to(node2);
    expect(result).toBe(node2);

    const dot = diagram.toString();
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node2.nodeId + '"');
    diagram.destroy();
  });

  it("should connect nodes with from()", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    node2.from(node1);

    const dot = diagram.toString();
    // node2.from(node1) creates an edge from node2 to node1 with dir=back
    // This places node2 to the left of node1 in the layout
    expect(dot).toContain('"' + node2.nodeId + '" -> "' + node1.nodeId + '"');
    expect(dot).toContain('dir="back"');
    diagram.destroy();
  });

  it("should support bidirectional connections with with()", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    node1.with(node2);

    const dot = diagram.toString();
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node2.nodeId + '"');
    diagram.destroy();
  });

  it("should connect to multiple nodes", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));
    const node3 = diagram.add(Node("Node3"));

    node1.to([node2, node3]);

    const dot = diagram.toString();
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node2.nodeId + '"');
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node3.nodeId + '"');
    diagram.destroy();
  });

  it("should support edge customization", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    node1.to(Edge({ color: "red", style: "dashed" }), node2);

    const dot = diagram.toString();
    expect(dot).toContain('color="red"');
    expect(dot).toContain('style="dashed"');
    diagram.destroy();
  });

  it("should support edge customization with forEach", () => {
    const diagram = Diagram("Test", {});
    const cluster = diagram.cluster("Test Cluster");
    const nodes = [
      cluster.add(Node("Node1")),
      cluster.add(Node("Node2")),
      cluster.add(Node("Node3")),
    ];
    const target = diagram.add(Node("Target"));

    // Test that nodes from cluster work with forEach and styled edges
    nodes.forEach((node) => {
      node.to(Edge({ color: "blue", style: "dotted" }), target);
    });

    const dot = diagram.toString();
    expect(dot).toContain('color="blue"');
    expect(dot).toContain('style="dotted"');
    // Should have 3 edges
    const edgeMatches = dot.match(/->/g);
    expect(edgeMatches?.length).toBe(3);
    diagram.destroy();
  });

  it("should support edge customization with with()", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    node1.with(Edge({ color: "purple", style: "dashed" }), node2);

    const dot = diagram.toString();
    expect(dot).toContain('color="purple"');
    expect(dot).toContain('style="dashed"');
    diagram.destroy();
  });

  it("should support edge customization with from(Edge, Node)", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    node1.from(Edge({ color: "orange", label: "test" }), node2);

    const dot = diagram.toString();
    expect(dot).toContain('color="orange"');
    expect(dot).toContain('label="test"');
    expect(dot).toContain('dir="back"');
    diagram.destroy();
  });

  it("should support to(Edge) chaining", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    // Test node.to(edge) returns edge for chaining
    const edge = node1.to(Edge({ color: "purple", forward: true, reverse: true }));
    edge.from(node2);

    const dot = diagram.toString();
    expect(dot).toContain('color="purple"');
    expect(dot).toContain('dir="both"');
    diagram.destroy();
  });
});

describe("Cluster", () => {
  it("should create a cluster via diagram.cluster()", () => {
    const diagram = Diagram("Test");
    const cluster = diagram.cluster("My Cluster");
    expect(cluster.label).toBe("My Cluster");
    expect(cluster.name).toBe("cluster_My_Cluster");
    diagram.destroy();
  });

  it("should nest clusters", () => {
    const diagram = Diagram("Test");
    const cluster1 = diagram.cluster("Outer");
    const cluster2 = cluster1.cluster("Inner");
    expect(cluster2.depth).toBe(1);
    diagram.destroy();
  });

  it("should add nodes to clusters explicitly", () => {
    const diagram = Diagram("Test");
    const cluster = diagram.cluster("My Cluster");
    const node = cluster.add(Node("Test Node"));
    expect(node.label).toBe("Test Node");
    diagram.destroy();
  });
});

describe("Image Rendering", () => {
  it("should render to SVG", async () => {
    const diagram = Diagram("SVG Test", {
      direction: "TB",
    });
    const node1 = diagram.add(Node("Node 1"));
    const node2 = diagram.add(Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render();
    expect(typeof result).toBe("string");
    expect(result).toContain('<?xml version="1.0"');
    expect(result).toContain("<svg");
    expect(result).toContain("</svg>");
    diagram.destroy();
  });

  it("should render to SVG with explicit format option", async () => {
    const diagram = Diagram("SVG Test", {
      direction: "TB",
    });
    const node1 = diagram.add(Node("Node 1"));
    const node2 = diagram.add(Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render({ format: "svg" });
    expect(typeof result).toBe("string");
    expect(result).toContain('<?xml version="1.0"');
    expect(result).toContain("<svg");
    expect(result).toContain("</svg>");
    diagram.destroy();
  });

  it("should render to PNG in Node.js", async () => {
    const diagram = Diagram("PNG Test", {
      direction: "TB",
    });
    const node1 = diagram.add(Node("Node 1"));
    const node2 = diagram.add(Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render({ format: "png" });
    expect(result instanceof Uint8Array).toBe(true);
    expect(result.length).toBeGreaterThan(0);

    // Check PNG magic bytes
    const pngMagic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
    for (let i = 0; i < pngMagic.length; i++) {
      expect(result[i]).toBe(pngMagic[i]);
    }
    diagram.destroy();
  });

  it("should support icon data tracking", async () => {
    // Create diagram and manually track icon data
    const diagram = Diagram("Icon Tracking Test", {
      direction: "TB",
    });

    const server = diagram.add(Node("Server"));

    // Manually track node with icon data (simulating provider class behavior)
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.trackNodeWithIcon(server, testIconData);

    const result = await diagram.render();
    expect(typeof result).toBe("string");

    // Check that icon image was injected
    expect(result).toContain("<image");
    expect(result).toContain('href="data:image/png;base64,');
    diagram.destroy();
  });

  it("should render PNG with icons", async () => {
    const diagram = Diagram("Icon PNG Test", {
      direction: "TB",
    });

    const server = diagram.add(Node("Server"));

    // Manually track node with icon data
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.trackNodeWithIcon(server, testIconData);

    const result = await diagram.render({ format: "png" });
    expect(result instanceof Uint8Array).toBe(true);
    expect(result.length).toBeGreaterThan(0);

    // Verify PNG magic bytes
    expect(result[0]).toBe(0x89);
    expect(result[1]).toBe(0x50);
    expect(result[2]).toBe(0x4e);
    expect(result[3]).toBe(0x47);
    diagram.destroy();
  });

  it("should allow rendering same diagram to multiple formats", async () => {
    const diagram = Diagram("Multi Format Test", {
      direction: "LR",
    });
    const node1 = diagram.add(Node("A"));
    const node2 = diagram.add(Node("B"));
    node1.to(node2);

    // Render to SVG
    const svg = await diagram.render({ format: "svg" });
    expect(typeof svg).toBe("string");
    expect(svg).toContain("<svg");

    // Render to PNG
    const png = await diagram.render({ format: "png" });
    expect(png instanceof Uint8Array).toBe(true);
    expect(png.length).toBeGreaterThan(0);

    // Verify PNG magic bytes
    expect(png[0]).toBe(0x89);
    expect(png[1]).toBe(0x50);

    diagram.destroy();
  });

  it("should render to JPG in Node.js", async () => {
    const diagram = Diagram("JPG Test", {
      direction: "TB",
    });
    const node1 = diagram.add(Node("Node 1"));
    const node2 = diagram.add(Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render({ format: "jpg" });
    expect(result instanceof Uint8Array).toBe(true);
    expect(result.length).toBeGreaterThan(0);

    // Check JPG magic bytes (JPEG starts with 0xFF 0xD8)
    expect(result[0]).toBe(0xff);
    expect(result[1]).toBe(0xd8);
    diagram.destroy();
  });

  it("should render JPG with icons", async () => {
    const diagram = Diagram("Icon JPG Test", {
      direction: "TB",
    });

    const server = diagram.add(Node("Server"));

    // Manually track node with icon data
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.trackNodeWithIcon(server, testIconData);

    const result = await diagram.render({ format: "jpg" });
    expect(result instanceof Uint8Array).toBe(true);
    expect(result.length).toBeGreaterThan(0);

    // Verify JPG magic bytes (JPEG starts with 0xFF 0xD8)
    expect(result[0]).toBe(0xff);
    expect(result[1]).toBe(0xd8);
    diagram.destroy();
  });

  it("should render to DOT format", async () => {
    const diagram = Diagram("DOT Test", {
      direction: "LR",
    });
    const node1 = diagram.add(Node("Node A"));
    const node2 = diagram.add(Node("Node B"));
    node1.to(node2);

    const result = await diagram.render({ format: "dot" });
    expect(typeof result).toBe("string");

    // Check that it's a valid DOT format
    expect(result).toContain("digraph");
    expect(result).toContain('label="Node A"');
    expect(result).toContain('label="Node B"');
    expect(result).toContain("->");
    diagram.destroy();
  });

  it("should include image attribute in DOT format for icons", async () => {
    const diagram = Diagram("DOT Icons Test", {
      direction: "TB",
    });

    const server = diagram.add(Node("Server"));

    // Manually track node with icon data
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.trackNodeWithIcon(server, testIconData);

    const result = await diagram.render({ format: "dot" });
    expect(typeof result).toBe("string");

    // Check that DOT includes image attribute
    expect(result).toContain("image=");
    expect(result).toContain("data:image/png;base64,");
    diagram.destroy();
  });

  it("should not have duplicate attributes in DOT format", async () => {
    const diagram = Diagram("DOT No Duplicates Test", {
      direction: "TB",
    });

    const server = diagram.add(Node("Server"));

    // Manually track node with icon data
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.trackNodeWithIcon(server, testIconData);

    const result = await diagram.render({ format: "dot" });
    expect(typeof result).toBe("string");

    // Cast to string for regex matching
    const resultStr = result as string;

    // Count occurrences of width="1.0" - should appear only once
    const widthMatches = (resultStr.match(/width="1\.0"/g) || []).length;
    expect(widthMatches).toBe(1);

    // Count occurrences of height="1.0" - should appear only once
    const heightMatches = (resultStr.match(/height="1\.0"/g) || []).length;
    expect(heightMatches).toBe(1);

    diagram.destroy();
  });

  it("should render SVG as data URL", async () => {
    const diagram = Diagram("Data URL Test");
    const node1 = diagram.add(Node("Node 1"));
    const node2 = diagram.add(Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render({ format: "svg", dataUrl: true });
    expect(typeof result).toBe("string");

    // Check that it's a data URL
    expect(result).toMatch(/^data:image\/svg\+xml;base64,/);
    diagram.destroy();
  });

  it("should render PNG as data URL", async () => {
    const diagram = Diagram("Data URL PNG Test");
    const node1 = diagram.add(Node("Node 1"));
    const node2 = diagram.add(Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render({ format: "png", dataUrl: true });
    expect(typeof result).toBe("string");

    // Check that it's a data URL
    expect(result).toMatch(/^data:image\/png;base64,/);
    diagram.destroy();
  });

  it("should render JPG as data URL", async () => {
    const diagram = Diagram("Data URL JPG Test");
    const node1 = diagram.add(Node("Node 1"));
    const node2 = diagram.add(Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render({ format: "jpg", dataUrl: true });
    expect(typeof result).toBe("string");

    // Check that it's a data URL
    expect(result).toMatch(/^data:image\/jpeg;base64,/);
    diagram.destroy();
  });

  it("should render DOT as data URL", async () => {
    const diagram = Diagram("Data URL DOT Test");
    const node1 = diagram.add(Node("Node 1"));
    const node2 = diagram.add(Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render({ format: "dot", dataUrl: true });
    expect(typeof result).toBe("string");

    // Check that it's a data URL
    expect(result).toMatch(/^data:text\/plain;base64,/);
    diagram.destroy();
  });
});

describe("Custom Nodes", () => {
  it("should create Custom node with data URL icon", async () => {
    const { Custom } = await import("../src/Custom.js");

    const diagram = Diagram("Custom Node Test");
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

    const custom = diagram.add(Custom("My Service", testIconData));
    expect(custom.getIconUrl()).toBe(testIconData);

    // Render and check that icon is injected
    const result = await diagram.render();
    expect(typeof result).toBe("string");
    expect(result).toContain("<image");
    expect(result).toContain('href="data:image/png;base64,');

    diagram.destroy();
  });

  it("should deduplicate icons using <use> tags for multiple Custom nodes", async () => {
    const { Custom } = await import("../src/Custom.js");

    const diagram = Diagram("Custom Nodes Deduplication Test");
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

    // Create multiple Custom nodes with the same icon
    const node1 = diagram.add(Custom("Service 1", testIconData));
    const node2 = diagram.add(Custom("Service 2", testIconData));
    const node3 = diagram.add(Custom("Service 3", testIconData));

    node1.to(node2);
    node2.to(node3);

    const result = await diagram.render();
    expect(typeof result).toBe("string");

    // Should have <defs> section with icon definition
    expect(result).toContain("<defs>");

    // Should use <use> tags for deduplication
    expect(result).toContain("<use");
    expect(result).toContain('href="#icon-');

    // Cast to string for regex matching
    const resultStr = result as string;

    // Should only have one icon definition, not three
    const iconDefMatches = resultStr.match(/<g id="icon-/g);
    expect(iconDefMatches?.length).toBe(1);

    // Should have three <use> references
    const useMatches = resultStr.match(/<use href="/g);
    expect(useMatches?.length).toBe(3);

    diagram.destroy();
  });

  it("should handle different icons for different Custom nodes", async () => {
    const { Custom } = await import("../src/Custom.js");

    const diagram = Diagram("Custom Nodes Different Icons Test");
    const iconData1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    const iconData2 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFxgIArlYOPQAAAABJRU5ErkJggg==";

    const node1 = diagram.add(Custom("Service A", iconData1));
    const node2 = diagram.add(Custom("Service B", iconData2));

    node1.to(node2);

    const result = await diagram.render();
    expect(typeof result).toBe("string");

    // Cast to string for regex matching
    const resultStr = result as string;

    // Should have two different icon definitions
    const iconDefMatches = resultStr.match(/<g id="icon-/g);
    expect(iconDefMatches?.length).toBe(2);

    // Extract the icon IDs and verify they are different
    const idMatches = resultStr.match(/<g id="(icon-[^"]+)"/g);
    expect(idMatches?.length).toBe(2);
    if (idMatches) {
      const id1 = idMatches[0].replace('<g id="', "").replace('"', "");
      const id2 = idMatches[1].replace('<g id="', "").replace('"', "");
      expect(id1).not.toBe(id2);
    }

    diagram.destroy();
  });
});
