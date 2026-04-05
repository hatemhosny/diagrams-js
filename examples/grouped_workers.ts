import { Diagram, Node } from "../src/index.js";

// Example: Grouped workers architecture
// For provider examples with icons, see demo.html

const diagram = Diagram("Grouped Workers", {
  direction: "TB",
});

// Create nodes
const lb = diagram.add(Node("Load Balancer"));
const workers = [
  diagram.add(Node("Worker 1")),
  diagram.add(Node("Worker 2")),
  diagram.add(Node("Worker 3")),
  diagram.add(Node("Worker 4")),
  diagram.add(Node("Worker 5")),
];

// Connect them: lb >> workers
lb.to(workers);

// Render
const svg = await diagram.render();
console.log("Generated SVG length:", svg.length);

diagram.destroy();
