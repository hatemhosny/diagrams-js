import { describe, it, expect } from "vite-plus/test";
import { Diagram, Node, Edge } from "../src/index.js";

describe("Diagram", () => {
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
  it("should create a node without context", () => {
    const node = new Node("test");
    expect(node.label).toBe("test");
    expect(node.nodeId).toBeDefined();
  });

  it("should create a node within diagram context", () => {
    const diagram = new Diagram("Test", {});
    const node = diagram.add(new Node("My Node"));
    expect(node.label).toBe("My Node");
    expect(node.nodeId).toBeDefined();
    diagram.destroy();
  });

  it("should support autolabel", () => {
    const diagram = new Diagram("Test", { autolabel: true });
    const node = diagram.add(new Node("test"));
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
    // node2.from(node1) creates an edge from node2 to node1 with dir=back
    // This places node2 to the left of node1 in the layout
    expect(dot).toContain('"' + node2.nodeId + '" -> "' + node1.nodeId + '"');
    expect(dot).toContain('dir="back"');
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
  it("should create a cluster via diagram.cluster()", () => {
    const diagram = new Diagram("Test");
    const cluster = diagram.cluster("My Cluster");
    expect(cluster.label).toBe("My Cluster");
    expect(cluster.name).toBe("cluster_My_Cluster");
    diagram.destroy();
  });

  it("should nest clusters", () => {
    const diagram = new Diagram("Test");
    const cluster1 = diagram.cluster("Outer");
    const cluster2 = cluster1.cluster("Inner");
    expect(cluster2.depth).toBe(1);
    diagram.destroy();
  });

  it("should add nodes to clusters explicitly", () => {
    const diagram = new Diagram("Test");
    const cluster = diagram.cluster("My Cluster");
    const node = cluster.add(new Node("Test Node"));
    expect(node.label).toBe("Test Node");
    diagram.destroy();
  });
});

describe("Image Rendering", () => {
  it("should render to SVG", async () => {
    const diagram = new Diagram("SVG Test", {
      direction: "TB",
    });
    const node1 = diagram.add(new Node("Node 1"));
    const node2 = diagram.add(new Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render();
    expect(typeof result).toBe("string");
    expect(result).toContain('<?xml version="1.0"');
    expect(result).toContain("<svg");
    expect(result).toContain("</svg>");
    diagram.destroy();
  });

  it("should render to SVG with explicit format option", async () => {
    const diagram = new Diagram("SVG Test", {
      direction: "TB",
    });
    const node1 = diagram.add(new Node("Node 1"));
    const node2 = diagram.add(new Node("Node 2"));
    node1.to(node2);

    const result = await diagram.render({ format: "svg" });
    expect(typeof result).toBe("string");
    expect(result).toContain('<?xml version="1.0"');
    expect(result).toContain("<svg");
    expect(result).toContain("</svg>");
    diagram.destroy();
  });

  it("should render to PNG in Node.js", async () => {
    const diagram = new Diagram("PNG Test", {
      direction: "TB",
    });
    const node1 = diagram.add(new Node("Node 1"));
    const node2 = diagram.add(new Node("Node 2"));
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
    const diagram = new Diagram("Icon Tracking Test", {
      direction: "TB",
    });

    const server = diagram.add(new Node("Server"));

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
    const diagram = new Diagram("Icon PNG Test", {
      direction: "TB",
    });

    const server = diagram.add(new Node("Server"));

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
    const diagram = new Diagram("Multi Format Test", {
      direction: "LR",
    });
    const node1 = diagram.add(new Node("A"));
    const node2 = diagram.add(new Node("B"));
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
    const diagram = new Diagram("JPG Test", {
      direction: "TB",
    });
    const node1 = diagram.add(new Node("Node 1"));
    const node2 = diagram.add(new Node("Node 2"));
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
    const diagram = new Diagram("Icon JPG Test", {
      direction: "TB",
    });

    const server = diagram.add(new Node("Server"));

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
});

describe("Custom Nodes", () => {
  it("should create Custom node with data URL icon", async () => {
    const { Custom } = await import("../src/Custom.js");

    const diagram = new Diagram("Custom Node Test");
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

    const custom = diagram.add(new Custom("My Service", testIconData));
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

    const diagram = new Diagram("Custom Nodes Deduplication Test");
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

    // Create multiple Custom nodes with the same icon
    const node1 = diagram.add(new Custom("Service 1", testIconData));
    const node2 = diagram.add(new Custom("Service 2", testIconData));
    const node3 = diagram.add(new Custom("Service 3", testIconData));

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

    const diagram = new Diagram("Custom Nodes Different Icons Test");
    const iconData1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    const iconData2 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFxgIArlYOPQAAAABJRU5ErkJggg==";

    const node1 = diagram.add(new Custom("Service A", iconData1));
    const node2 = diagram.add(new Custom("Service B", iconData2));

    node1.to(node2);

    const result = await diagram.render();
    expect(typeof result).toBe("string");

    // Cast to string for regex matching
    const resultStr = result as string;

    // Should have two different icon definitions
    const iconDefMatches = resultStr.match(/<g id="icon-/g);
    expect(iconDefMatches?.length).toBe(2);

    diagram.destroy();
  });
});
