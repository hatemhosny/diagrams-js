import { Diagram, Node, Edge } from "./src/index.js";

// Create a simple diagram
const diagram = new Diagram("Simple Example", {
  direction: "TB",
  outformat: "svg",
});

// Create nodes
const web = diagram.add(new Node("Web Server"));
const app = diagram.add(new Node("App Server"));
const db = diagram.add(new Node("Database"));

// Connect them: web -> app -> db
web.to(app).to(db);

// Add a custom edge
web.to(new Edge({ color: "blue", style: "dashed" }), db);

// Render to SVG
const svg = await diagram.render();
console.log("SVG generated, length:", svg.length);

diagram.destroy();
