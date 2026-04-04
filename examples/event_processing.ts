import { Diagram, Node } from "../src/index.js";

// Example: Simple architecture with basic nodes
// For provider examples with icons, see demo.html

const diagram = new Diagram("Event Processing", {
  direction: "TB",
  outformat: "svg",
});

// Create nodes
const source = diagram.add(new Node("K8s Source"));
const queue = diagram.add(new Node("Event Queue"));
const worker1 = diagram.add(new Node("Worker 1"));
const worker2 = diagram.add(new Node("Worker 2"));
const store = diagram.add(new Node("Events Store"));

// Connect them
source.to(queue);
queue.to([worker1, worker2]);
worker1.to(store);
worker2.to(store);

// Render
const svg = await diagram.render();
console.log("Generated SVG length:", svg.length);

diagram.destroy();
