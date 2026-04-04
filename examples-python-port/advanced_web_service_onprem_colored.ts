// Example 8: Advanced Web Service with On-Premises (with colored edges)
// Ported from diagrams-py docs/getting-started/examples.md

import { Diagram, Cluster, Edge } from "../dist/index.js";
import { Spark } from "../dist/providers/onprem/analytics.js";
import { Server } from "../dist/providers/onprem/compute.js";
import { PostgreSQL } from "../dist/providers/onprem/database.js";
import { Redis } from "../dist/providers/onprem/inmemory.js";
import { Fluentd } from "../dist/providers/onprem/aggregator.js";
import { Grafana, Prometheus } from "../dist/providers/onprem/monitoring.js";
import { Nginx } from "../dist/providers/onprem/network.js";
import { Kafka } from "../dist/providers/onprem/queue.js";

const diagram = new Diagram("Advanced Web Service with On-Premises (colored)", {
  outformat: "svg",
});

const ingress = diagram.add(new Nginx("ingress"));

const metrics = diagram.add(new Prometheus("metric"));
const grafana = diagram.add(new Grafana("monitoring"));

// metrics << Edge(color="firebrick", style="dashed") << grafana
grafana.from(new Edge({ color: "firebrick", style: "dashed" }), metrics);

diagram.cluster("Service Cluster", (svcCluster) => {
  const grpcsvc = [
    svcCluster.add(new Server("grpc1")),
    svcCluster.add(new Server("grpc2")),
    svcCluster.add(new Server("grpc3")),
  ];

  // ingress >> Edge(color="darkgreen") << grpcsvc
  // Note: In TS we reverse this - connect grpcsvc to ingress with the edge
  grpcsvc.forEach((svc) => {
    svc.to(new Edge({ color: "darkgreen" }), ingress);
  });

  svcCluster.cluster("Sessions HA", (sessionsCluster) => {
    const sessionPrimary = sessionsCluster.add(new Redis("session"));
    const sessionReplica = sessionsCluster.add(new Redis("replica"));

    // primary - Edge(color="brown", style="dashed") - replica
    sessionPrimary.with(new Edge({ color: "brown", style: "dashed" }), sessionReplica);

    // replica << Edge(label="collect") << metrics
    sessionReplica.from(new Edge({ label: "collect" }), metrics);

    // grpcsvc >> Edge(color="brown") >> primary
    grpcsvc.forEach((svc) => svc.to(new Edge({ color: "brown" }), sessionPrimary));
  });

  svcCluster.cluster("Database HA", (dbCluster) => {
    const dbPrimary = dbCluster.add(new PostgreSQL("users"));
    const dbReplica = dbCluster.add(new PostgreSQL("replica"));

    // primary - Edge(color="brown", style="dotted") - replica
    dbPrimary.with(new Edge({ color: "brown", style: "dotted" }), dbReplica);

    // replica << Edge(label="collect") << metrics
    dbReplica.from(new Edge({ label: "collect" }), metrics);

    // grpcsvc >> Edge(color="black") >> primary
    grpcsvc.forEach((svc) => svc.to(new Edge({ color: "black" }), dbPrimary));
  });

  const aggregator = diagram.add(new Fluentd("logging"));
  const kafka = diagram.add(new Kafka("stream"));
  const spark = diagram.add(new Spark("analytics"));

  // aggregator >> Edge(label="parse") >> kafka >> Edge(color="black", style="bold") >> spark
  aggregator
    .to(new Edge({ label: "parse" }), kafka)
    .to(new Edge({ color: "black", style: "bold" }), spark);

  // grpcsvc >> Edge(color="darkorange") >> aggregator
  grpcsvc.forEach((svc) => svc.to(new Edge({ color: "darkorange" }), aggregator));
});

const svg = await diagram.render();
console.log("Generated SVG for Advanced Web Service with On-Premises (colored) example");
diagram.destroy();
