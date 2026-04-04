// Example 1: Grouped Workers on AWS
// Ported from diagrams-py docs/getting-started/examples.md

import { Diagram } from "../dist/index.mjs";
import { EC2 } from "../dist/providers/aws/compute.js";
import { RDS } from "../dist/providers/aws/database.js";
import { ALB } from "../dist/providers/aws/network.js";

const diagram = new Diagram("Grouped Workers", {
  direction: "TB",
  outformat: "svg",
});

const lb = diagram.add(new ALB("lb"));
const workers = [
  diagram.add(new EC2("worker1")),
  diagram.add(new EC2("worker2")),
  diagram.add(new EC2("worker3")),
  diagram.add(new EC2("worker4")),
  diagram.add(new EC2("worker5")),
];
const events = diagram.add(new RDS("events"));

// Connect: lb >> workers >> events
lb.to(workers);
workers.forEach((w) => w.to(events));

const svg = await diagram.render();
console.log("Generated SVG for Grouped Workers example");
diagram.destroy();
