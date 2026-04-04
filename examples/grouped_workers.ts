import { Diagram, Node } from "../src/index.js";

// Example: Grouped workers architecture
// For provider examples with icons, see demo.html

const diagram = new Diagram("Grouped Workers", {
  direction: "TB",
  outformat: "svg",
});

// Create nodes
const lb = diagram.add(new Node("Load Balancer"));
const workers = [
  diagram.add(new Node("Worker 1")),
  diagram.add(new Node("Worker 2")),
  diagram.add(new Node("Worker 3")),
  diagram.add(new Node("Worker 4")),
  diagram.add(new Node("Worker 5")),
];

// Connect them: lb >> workers
lb.to(workers);

// Render
const svg = await diagram.render();
console.log("Generated SVG length:", svg.length);

diagram.destroy();
