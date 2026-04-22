import { describe, it, expect } from "vite-plus/test";
import { Diagram, Node } from "../src/index.js";

describe("SVG Plugin - Icon preservation", () => {
  it("should preserve icons in exported SVG with multiple icon nodes", async () => {
    const diagram = Diagram("Test");
    const node1 = Node("Server 1", { nodeId: "n1" });
    const node2 = Node("Server 2", { nodeId: "n2" });
    (node1 as unknown as { "~iconDataUrl": string })["~iconDataUrl"] =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    (node2 as unknown as { "~iconDataUrl": string })["~iconDataUrl"] =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.add(node1);
    diagram.add(node2);

    const rendered = (await diagram.render({ format: "svg" })) as string;
    const exported = (await diagram.export("svg")) as string;

    const renderedImageCount = (rendered.match(/<image/g) || []).length;
    const exportedImageCount = (exported.match(/<image/g) || []).length;

    console.log("rendered images:", renderedImageCount);
    console.log("exported images:", exportedImageCount);

    expect(exportedImageCount).toBe(renderedImageCount);
  });

  it("should preserve use tags in exported SVG with multiple icon nodes", async () => {
    const diagram = Diagram("Test");
    const node1 = Node("Server 1", { nodeId: "n1" });
    const node2 = Node("Server 2", { nodeId: "n2" });
    (node1 as unknown as { "~iconDataUrl": string })["~iconDataUrl"] =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    (node2 as unknown as { "~iconDataUrl": string })["~iconDataUrl"] =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.add(node1);
    diagram.add(node2);

    const rendered = (await diagram.render({ format: "svg" })) as string;
    const exported = (await diagram.export("svg")) as string;

    const renderedUseCount = (rendered.match(/<use/g) || []).length;
    const exportedUseCount = (exported.match(/<use/g) || []).length;

    console.log("rendered uses:", renderedUseCount);
    console.log("exported uses:", exportedUseCount);

    expect(exportedUseCount).toBe(renderedUseCount);
  });

  it("render() with embedData=false should match export with data stripped", async () => {
    const diagram = Diagram("Test");
    const node = Node("Server", { nodeId: "n1" });
    (node as unknown as { "~iconDataUrl": string })["~iconDataUrl"] =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    diagram.add(node);

    const rendered = (await diagram.render({ format: "svg", embedData: false })) as string;
    const exported = (await diagram.export("svg")) as string;

    // Remove data attributes from exported for comparison
    const strippedExported = exported
      .replace(/ data-diagram-version="[^"]*"/g, "")
      .replace(/ data-diagram-json="[^"]*"/g, "")
      .replace(/ data-node-id="[^"]*"/g, "")
      .replace(/ data-node-label="[^"]*"/g, "");

    expect(strippedExported).toBe(rendered);
  });

  it("render() should embed diagram data by default", async () => {
    const diagram = Diagram("Test");
    diagram.add(Node("A", { nodeId: "a" }));

    const svg = (await diagram.render({ format: "svg" })) as string;

    expect(svg).toContain('data-diagram-version="1.0"');
    expect(svg).toContain('data-diagram-json="');
    expect(svg).toContain('data-node-id="a"');
  });

  it("render() with embedData=false should not include diagram data", async () => {
    const diagram = Diagram("Test");
    diagram.add(Node("A", { nodeId: "a" }));

    const svg = (await diagram.render({ format: "svg", embedData: false })) as string;

    expect(svg).not.toContain('data-diagram-json="');
    expect(svg).not.toContain('data-node-id="a"');
  });
});
