import { describe, it, expect } from "vite-plus/test";
import { Diagram, Node, Edge, HookEvent } from "../src/index.js";
import type { DiagramsPlugin } from "../src/plugins/types.js";

describe("Diagram", () => {
  it("should create a diagram with default options", () => {
    const diagram = Diagram("Test Diagram", {});
    expect(diagram.name).toBe("Test Diagram");
    expect(diagram.filename).toBe("test_diagram");
    expect(diagram.direction).toBe("LR");
  });

  it("should support different directions", () => {
    const diagram = Diagram("Test", { direction: "TB" });
    expect(diagram.direction).toBe("TB");
  });

  it("should generate DOT source", () => {
    const diagram = Diagram("Test", {});
    const dot = diagram.toString();
    expect(dot).toContain('digraph "Test"');
    expect(dot).toContain('rankdir="LR"');
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
  });

  it("should support autolabel", () => {
    const diagram = Diagram("Test", { autolabel: true });
    const node = diagram.add(Node("test"));
    expect(node.label).toContain("Node");
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
  });

  it("should support bidirectional connections with with()", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    node1.with(node2);

    const dot = diagram.toString();
    expect(dot).toContain('"' + node1.nodeId + '" -> "' + node2.nodeId + '"');
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
  });

  it("should support edge customization", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    node1.to(Edge({ color: "red", style: "dashed" }), node2);

    const dot = diagram.toString();
    expect(dot).toContain('color="red"');
    expect(dot).toContain('style="dashed"');
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
  });

  it("should support edge customization with with()", () => {
    const diagram = Diagram("Test", {});
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));

    node1.with(Edge({ color: "purple", style: "dashed" }), node2);

    const dot = diagram.toString();
    expect(dot).toContain('color="purple"');
    expect(dot).toContain('style="dashed"');
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
  });
});

describe("Cluster", () => {
  it("should create a cluster via diagram.cluster()", () => {
    const diagram = Diagram("Test");
    const cluster = diagram.cluster("My Cluster");
    expect(cluster.label).toBe("My Cluster");
    expect(cluster.name).toBe("cluster_My_Cluster");
  });

  it("should nest clusters", () => {
    const diagram = Diagram("Test");
    const cluster1 = diagram.cluster("Outer");
    const cluster2 = cluster1.cluster("Inner");
    expect(cluster2.depth).toBe(1);
  });

  it("should add nodes to clusters explicitly", () => {
    const diagram = Diagram("Test");
    const cluster = diagram.cluster("My Cluster");
    const node = cluster.add(Node("Test Node"));
    expect(node.label).toBe("Test Node");
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
    diagram["~trackNodeWithIcon"](server, testIconData);

    const result = await diagram.render();
    expect(typeof result).toBe("string");

    // Check that icon image was injected
    expect(result).toContain("<image");
    expect(result).toContain('href="data:image/png;base64,');
  });

  it("should render PNG with icons", async () => {
    const diagram = Diagram("Icon PNG Test", {
      direction: "TB",
    });

    const server = diagram.add(Node("Server"));

    // Manually track node with icon data
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram["~trackNodeWithIcon"](server, testIconData);

    const result = await diagram.render({ format: "png" });
    expect(result instanceof Uint8Array).toBe(true);
    expect(result.length).toBeGreaterThan(0);

    // Verify PNG magic bytes
    expect(result[0]).toBe(0x89);
    expect(result[1]).toBe(0x50);
    expect(result[2]).toBe(0x4e);
    expect(result[3]).toBe(0x47);
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
  });

  it("should render JPG with icons", async () => {
    const diagram = Diagram("Icon JPG Test", {
      direction: "TB",
    });

    const server = diagram.add(Node("Server"));

    // Manually track node with icon data
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram["~trackNodeWithIcon"](server, testIconData);

    const result = await diagram.render({ format: "jpg" });
    expect(result instanceof Uint8Array).toBe(true);
    expect(result.length).toBeGreaterThan(0);

    // Verify JPG magic bytes (JPEG starts with 0xFF 0xD8)
    expect(result[0]).toBe(0xff);
    expect(result[1]).toBe(0xd8);
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
  });

  it("should include image attribute in DOT format for icons", async () => {
    const diagram = Diagram("DOT Icons Test", {
      direction: "TB",
    });

    const server = diagram.add(Node("Server"));

    // Manually track node with icon data
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram["~trackNodeWithIcon"](server, testIconData);

    const result = await diagram.render({ format: "dot" });
    expect(typeof result).toBe("string");

    // Check that DOT includes image attribute
    expect(result).toContain("image=");
    expect(result).toContain("data:image/png;base64,");
  });

  it("should not have duplicate attributes in DOT format", async () => {
    const diagram = Diagram("DOT No Duplicates Test", {
      direction: "TB",
    });

    // Create a node with icon data URL so icon attributes are set
    const server = Node("Server");
    (server as unknown as { "~iconDataUrl": string })["~iconDataUrl"] =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.add(server);

    const result = await diagram.render({ format: "dot" });
    expect(typeof result).toBe("string");

    // Cast to string for regex matching
    const resultStr = result as string;

    // Count occurrences of width="0.8" - should appear only once
    const widthMatches = (resultStr.match(/width="0\.8"/g) || []).length;
    expect(widthMatches).toBe(1);

    // Count occurrences of height="0.9" - should appear only once
    const heightMatches = (resultStr.match(/height="0\.9"/g) || []).length;
    expect(heightMatches).toBe(1);
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
  });
});

describe("Custom Nodes", () => {
  it("should create Custom node with data URL icon", async () => {
    const { Custom } = await import("../src/Custom.js");

    const diagram = Diagram("Custom Node Test");
    const testIconData =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

    const custom = diagram.add(Custom("My Service", testIconData));
    expect(custom["~getIconUrl"]()).toBe(testIconData);

    // Render and check that icon is injected
    const result = await diagram.render();
    expect(typeof result).toBe("string");
    expect(result).toContain("<image");
    expect(result).toContain('href="data:image/png;base64,');
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
  });

  it("should fetch and inline remote URL as base64 data URL", async () => {
    const { Custom } = await import("../src/Custom.js");

    // Mock fetch to return a test image
    const originalFetch = globalThis.fetch;
    const testBase64 =
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    globalThis.fetch = async () =>
      ({
        ok: true,
        headers: { get: () => "image/png" },
        arrayBuffer: async () => {
          // Convert base64 to ArrayBuffer
          const binary = atob(testBase64);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }
          return bytes.buffer;
        },
      }) as unknown as Response;

    try {
      const diagram = Diagram("Remote Icon Test");
      diagram.add(Custom("My Service", "https://example.com/icon.png"));

      // Render - this should fetch and convert the icon
      const result = await diagram.render();
      expect(typeof result).toBe("string");

      // The SVG should contain the inlined data URL, not the external URL
      const resultStr = result as string;

      // Should NOT contain the external URL
      expect(resultStr).not.toContain("https://example.com/icon.png");

      // Should contain a data URL
      expect(resultStr).toContain("data:image/png;base64,");

      // Should have icon injected
      expect(resultStr).toContain("<image");
    } finally {
      // Restore original fetch
      globalThis.fetch = originalFetch;
    }
  });

  it("should use data URL in DOT output for remote icons", async () => {
    const { Custom } = await import("../src/Custom.js");

    // Mock fetch to return a test image
    const originalFetch = globalThis.fetch;
    const testBase64 =
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    globalThis.fetch = async () =>
      ({
        ok: true,
        headers: { get: () => "image/png" },
        arrayBuffer: async () => {
          const binary = atob(testBase64);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }
          return bytes.buffer;
        },
      }) as unknown as Response;

    try {
      const diagram = Diagram("Remote Icon DOT Test");
      diagram.add(Custom("My Service", "https://example.com/icon.png"));

      // Get DOT output via render (which waits for async icon loading)
      const dot = await diagram.render({ format: "dot" });

      // DOT should contain data URL, not external URL
      expect(dot).not.toContain("https://example.com/icon.png");
      expect(dot).toContain("data:image/png;base64,");
      expect(dot).toContain(`image="data:image/png;base64,${testBase64}"`);
    } finally {
      globalThis.fetch = originalFetch;
    }
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
  });

  it("should create Iconify node with iconify API URL", async () => {
    const { Iconify } = await import("../src/Custom.js");

    const diagram = Diagram("Iconify Test");
    const node = diagram.add(Iconify("Home", "mdi:home"));

    // Verify the node was created with the correct label
    expect(node.label).toBe("Home");

    // Verify the icon URL points to iconify API
    expect(node["~getIconUrl"]()).toBe("https://api.iconify.design/mdi:home.svg");
  });

  it("should allow Iconify nodes in diagrams", async () => {
    const { Iconify } = await import("../src/Custom.js");

    // Mock fetch to return a test SVG
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () =>
      ({
        ok: true,
        headers: { get: () => "image/svg+xml" },
        arrayBuffer: async () => {
          const svg = "<svg></svg>";
          const buffer = new Uint8Array(svg.length);
          for (let i = 0; i < svg.length; i++) {
            buffer[i] = svg.charCodeAt(i);
          }
          return buffer.buffer;
        },
      }) as unknown as Response;

    try {
      const diagram = Diagram("Iconify Diagram");
      const web = diagram.add(Iconify("Web Server", "mdi:server"));
      const db = diagram.add(Iconify("Database", "mdi:database"));

      web.to(db);

      const result = await diagram.render();
      expect(typeof result).toBe("string");

      // Should have iconify URLs fetched
      const resultStr = result as string;
      expect(resultStr).toContain("<image");
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
});

describe("Plugin System", () => {
  it("should have built-in JSON plugin registered", async () => {
    const diagram = Diagram("Test");
    await diagram.registerPlugins([]); // Register default plugins (includes JSON)
    const jsonExporter = diagram.registry.getExporter("json");
    expect(jsonExporter).toBeDefined();
    expect(jsonExporter?.name).toBe("json");
  });

  it("should export to JSON using plugin", async () => {
    const diagram = Diagram("Test");
    await diagram.registerPlugins([]); // Register default plugins (includes JSON)
    const node1 = diagram.add(Node("Node1"));
    const node2 = diagram.add(Node("Node2"));
    node1.to(node2);

    const json = await diagram.export("json");
    expect(typeof json).toBe("string");
    const parsed = JSON.parse(json as string);
    expect(parsed.name).toBe("Test");
    expect(parsed.nodes).toHaveLength(2);
    expect(parsed.edges).toHaveLength(1);
  });

  it("should support custom plugins", async () => {
    // Create a test plugin
    const testPlugin = () => ({
      name: "test-exporter",
      version: "1.0.0",
      apiVersion: "1.0" as const,
      runtimeSupport: { node: true, browser: true, deno: true, bun: true },
      capabilities: [
        {
          type: "exporter" as const,
          name: "test-format",
          extension: ".test",
          mimeType: "text/plain",
          export: async (diagram: ReturnType<typeof Diagram>) => {
            return `Test export: ${diagram.name}`;
          },
        },
      ],
    });

    const diagram = Diagram("Test Plugin");
    await diagram.registerPlugins([testPlugin()]);

    const exporter = diagram.registry.getExporter("test-format");
    expect(exporter).toBeDefined();

    const result = await diagram.export("test-format");
    expect(result).toBe("Test export: Test Plugin");
  });

  it("should list registered capabilities", async () => {
    const diagram = Diagram("Test");
    await diagram.registerPlugins([]); // Register default plugins (includes JSON)
    const capabilities = diagram.registry.listCapabilities();
    expect(capabilities.exporters).toContain("json");
  });

  it("should support plugin dependency resolution", async () => {
    // Create a base plugin with at least one capability
    const basePlugin = () => ({
      name: "base-plugin",
      version: "1.0.0",
      apiVersion: "1.0" as const,
      runtimeSupport: { node: true, browser: true, deno: true, bun: true },
      capabilities: [
        {
          type: "exporter" as const,
          name: "base-format",
          extension: ".base",
          mimeType: "text/plain",
          export: async () => "Base export",
        },
      ],
    });

    // Create a dependent plugin
    const dependentPlugin = () => ({
      name: "dependent-plugin",
      version: "1.0.0",
      apiVersion: "1.0" as const,
      runtimeSupport: { node: true, browser: true, deno: true, bun: true },
      dependencies: ["base-plugin"],
      capabilities: [
        {
          type: "exporter" as const,
          name: "dependent-format",
          extension: ".dep",
          mimeType: "text/plain",
          export: async () => "Dependent export",
        },
      ],
    });

    const diagram = Diagram("Test");
    await diagram.registerPlugins([basePlugin(), dependentPlugin()]);

    const exporter = diagram.registry.getExporter("dependent-format");
    expect(exporter).toBeDefined();
  });

  it("should support node metadata", () => {
    const diagram = Diagram("Test");
    const node = diagram.add(Node("Test Node"));

    // Initially empty
    expect(node.metadata).toEqual({});

    // Set metadata
    node.metadata = { test: "value", number: 123 };
    expect(node.metadata.test).toBe("value");
    expect(node.metadata.number).toBe(123);
  });

  it("should execute hooks", async () => {
    const hookCalls: string[] = [];

    // Create a plugin with hooks
    const hookPlugin = (): DiagramsPlugin => ({
      name: "hook-plugin",
      version: "1.0.0",
      apiVersion: "1.0",
      runtimeSupport: { node: true, browser: true, deno: true, bun: true },
      capabilities: [
        {
          type: "hook",
          hooks: [
            {
              event: HookEvent.BEFORE_EXPORT,
              handler: async () => {
                hookCalls.push("before:export");
              },
            },
            {
              event: HookEvent.AFTER_EXPORT,
              handler: async () => {
                hookCalls.push("after:export");
              },
            },
          ],
        },
      ],
    });

    const diagram = Diagram("Test");
    await diagram.registerPlugins([hookPlugin()]);

    await diagram.export("json");

    expect(hookCalls).toContain("before:export");
    expect(hookCalls).toContain("after:export");
  });

  it("should support importing array of sources each in its own cluster", async () => {
    // Create a test importer plugin that handles arrays
    const arrayImporterPlugin = (): DiagramsPlugin => ({
      name: "array-importer",
      version: "1.0.0",
      apiVersion: "1.0",
      runtimeSupport: { node: true, browser: true, deno: true, bun: true },
      capabilities: [
        {
          type: "importer",
          name: "array-test",
          extensions: [".txt"],
          canImport: async (_source: string | string[]) => {
            return true;
          },
          import: async (source: string | string[], diagram: Diagram) => {
            const sources = Array.isArray(source) ? source : [source];

            for (let i = 0; i < sources.length; i++) {
              if (sources.length > 1) {
                // Multiple sources - each in its own cluster
                const cluster = diagram.cluster(`import-${i}`);
                const node = Node(`node-${i}`, { label: sources[i] });
                cluster.add(node);
              } else {
                // Single source - add directly (no cluster)
                diagram.add(Node("single-node", { label: sources[i] }));
              }
            }
          },
        },
      ],
    });

    const diagram = Diagram("Array Import Test");
    await diagram.registerPlugins([arrayImporterPlugin()]);

    // Test with array of sources
    await diagram.import(["source-1", "source-2", "source-3"], "array-test");

    // Verify the diagram has nodes
    const json = diagram.toJSON();
    expect(json.nodes.length).toBeGreaterThanOrEqual(3);
    expect(json.clusters).toBeDefined();
    expect(json.clusters!.length).toBeGreaterThanOrEqual(3); // Each source in its own cluster
  });

  it("should wait for async plugin initialization before executing hooks", async () => {
    const hookCalls: string[] = [];
    let initCompleted = false;

    // Create a plugin with async initialize that takes time
    const slowPlugin = (): DiagramsPlugin => ({
      name: "slow-plugin",
      version: "1.0.0",
      apiVersion: "1.0",
      runtimeSupport: { node: true, browser: true, deno: true, bun: true },
      async initialize() {
        // Simulate slow initialization
        await new Promise((resolve) => setTimeout(resolve, 50));
        initCompleted = true;
      },
      capabilities: [
        {
          type: "hook",
          hooks: [
            {
              event: HookEvent.BEFORE_EXPORT,
              handler: async () => {
                // This should only fire AFTER initialize completes
                if (!initCompleted) {
                  throw new Error("Hook fired before initialization completed!");
                }
                hookCalls.push("before:export");
              },
            },
          ],
        },
      ],
    });

    const diagram = Diagram("Test");

    // Register plugins explicitly
    await diagram.registerPlugins([slowPlugin()]);

    // Add a node immediately
    diagram.add(Node("Test Node"));

    // Export should wait for plugin initialization
    await diagram.export("json");

    // Hook should have fired
    expect(hookCalls).toContain("before:export");
    expect(initCompleted).toBe(true);
  });

  it("should handle node:create hooks with async initialization", async () => {
    const nodeCreateCalls: string[] = [];

    // Create a plugin that hooks into node:create
    const trackingPlugin = (): DiagramsPlugin => ({
      name: "tracking-plugin",
      version: "1.0.0",
      apiVersion: "1.0",
      runtimeSupport: { node: true, browser: true, deno: true, bun: true },
      async initialize() {
        // Simulate async work
        await new Promise((resolve) => setTimeout(resolve, 10));
      },
      capabilities: [
        {
          type: "hook",
          hooks: [
            {
              event: HookEvent.NODE_CREATE,
              handler: async (data) => {
                const nodeData = data as { node: { label: string } };
                nodeCreateCalls.push(nodeData.node.label);
                return data;
              },
            },
          ],
        },
      ],
    });

    // Create diagram and register plugins explicitly
    const diagram = Diagram("Test");
    await diagram.registerPlugins([trackingPlugin()]);

    // Now add nodes - hooks should fire
    diagram.add(Node("Node 1"));
    diagram.add(Node("Node 2"));

    // Wait a bit for async hooks to complete
    await new Promise((resolve) => setTimeout(resolve, 50));

    // Hooks should have fired
    expect(nodeCreateCalls).toContain("Node 1");
    expect(nodeCreateCalls).toContain("Node 2");
  });

  it("should allow hooks to modify node properties", async () => {
    // Create a plugin that renames nodes
    const renamePlugin = (): DiagramsPlugin => ({
      name: "rename-plugin",
      version: "1.0.0",
      apiVersion: "1.0",
      runtimeSupport: { node: true, browser: true, deno: true, bun: true },
      capabilities: [
        {
          type: "hook",
          hooks: [
            {
              event: HookEvent.NODE_CREATE,
              handler: async (data) => {
                const nodeData = data as { node: { label: string } };
                // Rename the node
                nodeData.node.label = "Renamed:" + nodeData.node.label;
                return nodeData;
              },
            },
          ],
        },
      ],
    });

    // Create diagram and register plugins explicitly
    const diagram = Diagram("Test");
    await diagram.registerPlugins([renamePlugin()]);

    // Add a node
    const node = diagram.add(Node("Original"));

    // Wait for hook to complete
    await new Promise((resolve) => setTimeout(resolve, 50));

    // The node should have been renamed
    const json = diagram.toJSON();
    const nodeInJson = json.nodes.find((n) => n.id === node.nodeId);
    expect(nodeInJson?.label).toBe("Renamed:Original");

    // The DOT output should also reflect the renamed label
    const dot = diagram.toString();
    expect(dot).toContain("Renamed:Original");
  });
});
