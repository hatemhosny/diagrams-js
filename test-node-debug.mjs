// Test script to check Node class and .to() method
import { Diagram, Node } from "./dist/index.mjs";

console.log("=== Testing diagrams-ts module ===\n");

// 1. Does the module import successfully?
console.log("1. Module import: SUCCESS");

// 2. What is the type of Node?
console.log("2. Type of Node:", typeof Node);
console.log("   Node is a class:", Node.toString().substring(0, 50) + "...");

// 3. What is Node.prototype.to?
console.log("3. Node.prototype.to:", typeof Node.prototype.to);
console.log("   Node.prototype.to is a function:", typeof Node.prototype.to === "function");

// Create a diagram first (required for creating nodes)
const diagram = new Diagram("Test", { direction: "LR", outformat: "svg" });

// 4. Create a node and check node1.to
const node1 = new Node("Node 1");
const node2 = new Node("Node 2");

console.log("4. node1.to:", typeof node1.to);
console.log("   node1.to is a function:", typeof node1.to === "function");

// 5. Is node1 an instance of Node?
console.log("5. node1 instanceof Node:", node1 instanceof Node);

// 6. Try calling the to method
try {
  const result = node1.to(node2);
  console.log("6. node1.to(node2) succeeded!");
  console.log("   Result is node2:", result === node2);
} catch (err) {
  console.log("6. ERROR calling node1.to(node2):", err.message);
}

// Additional debugging info
console.log("\n=== Additional Debugging ===");
console.log("node1 constructor:", node1.constructor.name);
console.log("node1.__proto__:", node1.__proto__ === Node.prototype);
console.log("Object.getPrototypeOf(node1):", Object.getPrototypeOf(node1) === Node.prototype);
console.log('node1 has own property "to":', node1.hasOwnProperty("to"));
console.log('Node.prototype.hasOwnProperty("to"):', Node.prototype.hasOwnProperty("to"));
console.log("node1.to === Node.prototype.to:", node1.to === Node.prototype.to);

// Check all properties of node1
console.log("\n=== node1 properties ===");
console.log("node1 keys:", Object.keys(node1));
console.log("node1.nodeId:", node1.nodeId);
console.log("node1.label:", node1.label);

// Check prototype chain
console.log("\n=== Prototype Chain ===");
let proto = node1;
let level = 0;
while (proto) {
  console.log(`Level ${level}:`, proto.constructor?.name || "null");
  const props = Object.getOwnPropertyNames(proto);
  if (props.includes("to")) {
    console.log(`  -> 'to' found at this level!`);
  }
  proto = Object.getPrototypeOf(proto);
  level++;
  if (level > 5) break;
}
