// Example 3: Event Processing on AWS
// Ported from diagrams-py docs/getting-started/examples.md

import { Diagram, Cluster } from "../dist/index.js";
import { ECS, EKS, Lambda } from "../dist/providers/aws/compute.js";
import { Redshift } from "../dist/providers/aws/database.js";
import { SQS } from "../dist/providers/aws/integration.js";
import { S3 } from "../dist/providers/aws/storage.js";

const diagram = new Diagram("Event Processing", {
  outformat: "svg",
});

const source = diagram.add(new EKS("k8s source"));

diagram.cluster("Event Flows", (flowsCluster) => {
  flowsCluster.cluster("Event Workers", (workersCluster) => {
    const workers = [
      workersCluster.add(new ECS("worker1")),
      workersCluster.add(new ECS("worker2")),
      workersCluster.add(new ECS("worker3")),
    ];

    // Connect source to workers
    source.to(workers);

    const queue = flowsCluster.add(new SQS("event queue"));

    // Connect workers to queue
    workers.forEach((w) => w.to(queue));

    flowsCluster.cluster("Processing", (procCluster) => {
      const handlers = [
        procCluster.add(new Lambda("proc1")),
        procCluster.add(new Lambda("proc2")),
        procCluster.add(new Lambda("proc3")),
      ];

      // Connect queue to handlers
      queue.to(handlers);

      const store = diagram.add(new S3("events store"));
      const dw = diagram.add(new Redshift("analytics"));

      // Connect handlers to both store and data warehouse
      handlers.forEach((h) => {
        h.to(store);
        h.to(dw);
      });
    });
  });
});

const svg = await diagram.render();
console.log("Generated SVG for Event Processing example");
diagram.destroy();
