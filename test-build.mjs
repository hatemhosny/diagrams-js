import { Diagram, setIconBaseDir } from "./dist/index.mjs";

// Note: In a real project, you'd use:
// import { Diagram, setIconBaseDir } from "diagrams-ts";
// import { EC2, RDS, ELB } from "diagrams-ts/providers/aws/compute.js";

// For now, we'll test that the core built correctly
setIconBaseDir("resources");

const diagram = new Diagram("Build Test", {
  direction: "TB",
  outformat: "svg",
  show: false,
});

console.log("✓ Diagram created successfully");
console.log("  Name:", diagram.name);
console.log("  Direction:", diagram.direction);
console.log("  Theme:", diagram.theme);

const dot = diagram.toString();
console.log("\n✓ DOT source generated");
console.log("  Length:", dot.length, "characters");

diagram.destroy();
console.log("\n✓ Core library build verified!");
console.log("\nNext: Import providers like:");
console.log('  import { EC2, S3 } from "diagrams-ts/providers/aws/compute.js"');
