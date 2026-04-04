// Example 4: Message Collecting System on GCP
// Ported from diagrams-py docs/getting-started/examples.md

import { Diagram, Cluster } from "../dist/index.js";
import { BigQuery, Dataflow, PubSub } from "../dist/providers/gcp/analytics.js";
import { AppEngine, Functions } from "../dist/providers/gcp/compute.js";
import { BigTable } from "../dist/providers/gcp/database.js";
import { IotCore } from "../dist/providers/gcp/iot.js";
import { GCS } from "../dist/providers/gcp/storage.js";

const diagram = new Diagram("Message Collecting", {
  outformat: "svg",
});

const pubsub = diagram.add(new PubSub("pubsub"));

diagram.cluster("Source of Data", (sourceCluster) => {
  const sources = [
    sourceCluster.add(new IotCore("core1")),
    sourceCluster.add(new IotCore("core2")),
    sourceCluster.add(new IotCore("core3")),
  ];

  // Connect sources to pubsub
  sources.forEach((s) => s.to(pubsub));
});

diagram.cluster("Targets", (targetsCluster) => {
  targetsCluster.cluster("Data Flow", (flowCluster) => {
    const flow = flowCluster.add(new Dataflow("data flow"));

    // Connect pubsub to flow
    pubsub.to(flow);

    targetsCluster.cluster("Data Lake", (lakeCluster) => {
      const bq = lakeCluster.add(new BigQuery("bq"));
      const gcs = lakeCluster.add(new GCS("storage"));

      // Connect flow to data lake components
      flow.to([bq, gcs]);
    });

    targetsCluster.cluster("Event Driven", (eventCluster) => {
      eventCluster.cluster("Processing", (procCluster) => {
        const engine = procCluster.add(new AppEngine("engine"));
        const bigtable = procCluster.add(new BigTable("bigtable"));

        // Connect flow -> engine -> bigtable
        flow.to(engine).to(bigtable);
      });

      eventCluster.cluster("Serverless", (serverlessCluster) => {
        const func = serverlessCluster.add(new Functions("func"));
        const appengine = serverlessCluster.add(new AppEngine("appengine"));

        // Connect flow -> func -> appengine
        flow.to(func).to(appengine);
      });
    });
  });
});

const svg = await diagram.render();
console.log("Generated SVG for Message Collecting example");
diagram.destroy();
