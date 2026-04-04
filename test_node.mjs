import { Diagram, Node } from './src/index.js';

const diagram = new Diagram("Test", {
  direction: "TB",
  outformat: "svg"
});

const a = diagram.add(new Node("A"));
const b = diagram.add(new Node("B"));
a.to(b);

try {
  const result = await diagram.render();
  console.log("✅ SVG generation works!");
  console.log("Output type:", typeof result);
  console.log("Output length:", result.length);
  diagram.destroy();
} catch (e) {
  console.error("❌ Failed:", e.message);
}
