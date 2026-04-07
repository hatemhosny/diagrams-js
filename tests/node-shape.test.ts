import { describe, it, expect } from "vite-plus/test";
import { Diagram, Node, Custom } from "../src/index.js";

describe("Node shape default behavior", () => {
  it("should have shape=box at global level and no per-node shape for plain nodes", async () => {
    const diagram = Diagram("Test", {});
    diagram.add(Node("Plain Node 1"));
    diagram.add(Node("Plain Node 2"));

    const dot = await diagram.render({ format: "dot" });
    // Global node block should have shape="box"
    expect(dot).toMatch(/node\s*\[[^\]]*shape="box"/);
    // Individual nodes should not have shape attribute (they inherit from global)
    expect(dot).not.toMatch(/label="Plain Node 1"[^\]]*shape=/);
    expect(dot).not.toMatch(/label="Plain Node 2"[^\]]*shape=/);
    diagram.destroy();
  });

  it("should have shape=none and icon attributes for icon nodes at per-node level", async () => {
    const diagram = Diagram("Test", {});
    // Simulate a provider node with icon
    const node = Node("Icon Node");
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);

    const dot = await diagram.render({ format: "dot" });
    // Global default is shape="box"
    expect(dot).toMatch(/node\s*\[[^\]]*shape="box"/);
    // Icon node explicitly sets shape="none" to override global
    expect(dot).toMatch(/label="Icon Node"[^\]]*shape="none"[^\]]*\]/);
    // Icon nodes should have proper positioning attributes
    expect(dot).toMatch(/label="Icon Node"[^\]]*labelloc="b"[^\]]*\]/);
    expect(dot).toMatch(/label="Icon Node"[^\]]*imagescale="true"[^\]]*\]/);
    expect(dot).toMatch(/label="Icon Node"[^\]]*fixedsize="true"[^\]]*\]/);
    diagram.destroy();
  });

  it("should allow explicit shape override for icon nodes", async () => {
    const diagram = Diagram("Test", {});
    // Simulate a provider node with icon but explicit shape
    const node = Node("Icon Node", { shape: "circle" });
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] = "data:image/png;base64,test";
    diagram.add(node);

    const dot = await diagram.render({ format: "dot" });
    // Icon node uses user-specified shape="circle"
    expect(dot).toMatch(/label="Icon Node"[^\]]*shape="circle"[^\]]*\]/);
    // Should NOT have shape="none" at node level
    expect(dot).not.toMatch(/label="Icon Node"[^\]]*shape="none"[^\]]*\]/);
    diagram.destroy();
  });

  it("should have explicit shape at per-node level for plain nodes with custom shape", async () => {
    const diagram = Diagram("Test", {});
    diagram.add(Node("Plain Node", { shape: "diamond" }));

    const dot = await diagram.render({ format: "dot" });
    // Node explicitly sets shape="diamond" to override global "box"
    expect(dot).toMatch(/label="Plain Node"[^\]]*shape="diamond"[^\]]*\]/);
    diagram.destroy();
  });

  it("should override global shape=box with shape=none for icon nodes in mixed diagram", async () => {
    const diagram = Diagram("Test", {});
    const plainNode = Node("Plain Node");
    const iconNode = Node("Icon Node");
    (iconNode as unknown as { "~iconDataUrl": string })["~iconDataUrl"] =
      "data:image/png;base64,test";

    diagram.add(plainNode);
    diagram.add(iconNode);

    const dot = await diagram.render({ format: "dot" });
    // Global node block has shape="box"
    expect(dot).toMatch(/node\s*\[[^\]]*shape="box"/);
    // Plain node doesn't specify shape (inherits box)
    expect(dot).not.toMatch(/label="Plain Node"[^\]]*shape=/);
    // Icon node explicitly sets shape="none" to override global
    expect(dot).toMatch(/label="Icon Node"[^\]]*shape="none"[^\]]*\]/);
    diagram.destroy();
  });

  it("should have shape=none and icon attributes for Custom nodes with data URL icons", async () => {
    const diagram = Diagram("Test", {});
    // Custom node with data URL
    const customNode = Custom("Custom Service", "data:image/png;base64,customicon");
    diagram.add(customNode);

    const dot = await diagram.render({ format: "dot" });
    // Custom node explicitly sets shape="none"
    expect(dot).toMatch(/label="Custom Service"[^\]]*shape="none"[^\]]*\]/);
    // Custom nodes should have proper positioning attributes
    expect(dot).toMatch(/label="Custom Service"[^\]]*labelloc="b"[^\]]*\]/);
    expect(dot).toMatch(/label="Custom Service"[^\]]*imagescale="true"[^\]]*\]/);
    expect(dot).toMatch(/label="Custom Service"[^\]]*fixedsize="true"[^\]]*\]/);
    diagram.destroy();
  });

  it("should allow explicit shape override for Custom nodes", async () => {
    const diagram = Diagram("Test", {});
    // Custom node with explicit shape
    const customNode = Custom("Custom Service", "data:image/png;base64,customicon", {
      nodeId: "custom1",
    });
    // Override the shape after creation
    (customNode as unknown as { "~attrs": Record<string, string> })["~attrs"].shape = "ellipse";
    diagram.add(customNode);

    const dot = await diagram.render({ format: "dot" });
    // Custom node uses the overridden shape
    expect(dot).toMatch(/label="Custom Service"[^\]]*shape="ellipse"[^\]]*\]/);
    diagram.destroy();
  });
});
