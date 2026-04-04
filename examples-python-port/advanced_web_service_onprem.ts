// Example 7: Advanced Web Service with On-Premises
// Ported from diagrams-py docs/getting-started/examples.md

import { Diagram, Cluster } from "../dist/index.js";
import { Spark } from "../dist/providers/onprem/analytics.js";
import { Server } from "../dist/providers/onprem/compute.js";
import { PostgreSQL } from "../dist/providers/onprem/database.js";
import { Redis } from "../dist/providers/onprem/inmemory.js";
import { Fluentd } from "../dist/providers/onprem/aggregator.js";
import { Grafana, Prometheus } from "../dist/providers/onprem/monitoring.js";
import { Nginx } from "../dist/providers/onprem/network.js";
import { Kafka } from "../dist/providers/onprem/queue.js";

const diagram = new Diagram("Advanced Web Service with On-Premises", {
  outformat: "svg",
});

const ingress = diagram.add(new Nginx("ingress"));

const metrics = diagram.add(new Prometheus("metric"));
const grafana = diagram.add(new Grafana("monitoring"));

// metrics << grafana (grafana connects to metrics)
grafana.from(metrics);

diagram.cluster("Service Cluster", (svcCluster) => {
  const grpcsvc = [
    svcCluster.add(new Server("grpc1")),
    svcCluster.add(new Server("grpc2")),
    svcCluster.add(new Server("grpc3")),
  ];

  // Connect ingress to service cluster
  ingress.to(grpcsvc);

  svcCluster.cluster("Sessions HA", (sessionsCluster) => {
    const sessionPrimary = sessionsCluster.add(new Redis("session"));
    const sessionReplica = sessionsCluster.add(new Redis("replica"));

    // primary - replica (bidirectional)
    sessionPrimary.with(sessionReplica);

    // replica << metrics
    sessionReplica.from(metrics);

    // grpcsvc >> primary
    grpcsvc.forEach((svc) => svc.to(sessionPrimary));
  });

  svcCluster.cluster("Database HA", (dbCluster) => {
    const dbPrimary = dbCluster.add(new PostgreSQL("users"));
    const dbReplica = dbCluster.add(new PostgreSQL("replica"));

    // primary - replica (bidirectional)
    dbPrimary.with(dbReplica);

    // replica << metrics
    dbReplica.from(metrics);

    // grpcsvc >> primary
    grpcsvc.forEach((svc) => svc.to(dbPrimary));
  });

  const aggregator = diagram.add(new Fluentd("logging"));
  const kafka = diagram.add(new Kafka("stream"));
  const spark = diagram.add(new Spark("analytics"));

  // aggregator >> kafka >> spark
  aggregator.to(kafka).to(spark);

  // Connect service cluster to aggregator
  grpcsvc.forEach((svc) => svc.to(aggregator));
});

const svg = await diagram.render();
console.log("Generated SVG for Advanced Web Service with On-Premises example");
diagram.destroy();
