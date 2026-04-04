// Example 9: RabbitMQ Consumers with Custom Nodes
// Ported from diagrams-py docs/getting-started/examples.md
// Note: This example uses a custom image URL. In production, download the image first.

import { Diagram, Cluster, Node } from "../dist/index.js";
import { Aurora } from "../dist/providers/aws/database.js";
import { Pod } from "../dist/providers/k8s/compute.js";

const diagram = new Diagram("Broker Consumers", {
  outformat: "svg",
});

diagram.cluster("Consumers", (consumerCluster) => {
  const consumers = [
    consumerCluster.add(new Pod("worker")),
    consumerCluster.add(new Pod("worker")),
    consumerCluster.add(new Pod("worker")),
  ];

  // Create a custom node with external icon
  // In Python: queue = Custom("Message queue", rabbitmq_icon)
  // In diagrams-ts, you can extend Node or use a Generic node
  // For this example, we'll use a placeholder or create a generic node
  const queue = diagram.add(new Node("Message queue"));

  // queue >> consumers >> Aurora("Database")
  queue.to(consumers);
  consumers.forEach((c) => c.to(new Aurora("Database")));
});

const svg = await diagram.render();
console.log("Generated SVG for Broker Consumers example");
console.log("Note: Custom icons would need the actual image file downloaded first");
diagram.destroy();
