#!/usr/bin/env node
/**
 * Generate SVG images for documentation examples
 */

import { Custom, Diagram, Edge, Node } from "../dist/index.js";
import { dockerComposePlugin } from "../../plugin-docker-compose/dist/index.js";
import { EC2, Lambda, ECS, EKS } from "../dist/providers/aws/compute.js";
import { Aurora, RDS, Elasticache, Redshift } from "../dist/providers/aws/database.js";
import { ALB, ELB, Route53 } from "../dist/providers/aws/network.js";
import { S3 } from "../dist/providers/aws/storage.js";
import { SQS } from "../dist/providers/aws/integration.js";
import { PubSub, Dataflow, BigQuery } from "../dist/providers/gcp/analytics.js";
import { AppEngine, Functions } from "../dist/providers/gcp/compute.js";
import { Bigtable } from "../dist/providers/gcp/database.js";
import { IotCore } from "../dist/providers/gcp/iot.js";
import { Storage } from "../dist/providers/gcp/storage.js";
import { Pod, Deployment, StatefulSet, ReplicaSet } from "../dist/providers/k8s/compute.js";
import { Service, Ingress } from "../dist/providers/k8s/network.js";
import { PV, PVC, StorageClass } from "../dist/providers/k8s/storage.js";
import { HPA } from "../dist/providers/k8s/clusterconfig.js";
import { Server } from "../dist/providers/onprem/compute.js";
import { PostgreSQL } from "../dist/providers/onprem/database.js";
import { Redis } from "../dist/providers/onprem/inmemory.js";
import { Fluentd } from "../dist/providers/onprem/aggregator.js";
import { Grafana, Prometheus } from "../dist/providers/onprem/monitoring.js";
import { Nginx } from "../dist/providers/onprem/network.js";
import { Kafka } from "../dist/providers/onprem/queue.js";
import { Spark } from "../dist/providers/onprem/analytics.js";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, "..", "docs", "static", "examples");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generateExample1() {
  console.log("Generating example1-grouped-workers.svg...");
  const diagram = Diagram("Grouped Workers", { direction: "TB" });

  const lb = diagram.add(ELB("lb"));
  const workers = [
    diagram.add(EC2("worker1")),
    diagram.add(EC2("worker2")),
    diagram.add(EC2("worker3")),
    diagram.add(EC2("worker4")),
    diagram.add(EC2("worker5")),
  ];
  const events = diagram.add(RDS("events"));

  lb.to(workers);
  workers.forEach((w) => w.to(events));

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example1-grouped-workers.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample2() {
  console.log("Generating example2-clustered-web-services.svg...");
  const diagram = Diagram("Clustered Web Services");

  const dns = diagram.add(Route53("dns"));
  const lb = diagram.add(ELB("lb"));

  const svcCluster = diagram.cluster("Services");
  const svcGroup = [
    svcCluster.add(ECS("web1")),
    svcCluster.add(ECS("web2")),
    svcCluster.add(ECS("web3")),
  ];
  lb.to(svcGroup);

  const dbCluster = diagram.cluster("DB Cluster");
  const dbPrimary = dbCluster.add(RDS("userdb"));
  const dbReplica = dbCluster.add(RDS("userdb ro"));
  dbPrimary.with(dbReplica);
  svcGroup.forEach((s) => s.to(dbPrimary));

  const memcached = diagram.add(Elasticache("memcached"));
  svcGroup.forEach((s) => s.to(memcached));

  dns.to(lb);

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example2-clustered-web-services.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample3() {
  console.log("Generating example3-event-processing.svg...");
  const diagram = Diagram("Event Processing");

  const source = diagram.add(EKS("k8s source"));
  const store = diagram.add(S3("events store"));
  const dw = diagram.add(Redshift("analytics"));

  const flowsCluster = diagram.cluster("Event Flows");

  const workersCluster = flowsCluster.cluster("Event Workers");
  const workerNodes = [
    workersCluster.add(ECS("worker1")),
    workersCluster.add(ECS("worker2")),
    workersCluster.add(ECS("worker3")),
  ];
  source.to(workerNodes);

  const queue = flowsCluster.add(SQS("event queue"));
  workerNodes.forEach((w) => w.to(queue));

  const procCluster = flowsCluster.cluster("Processing");
  const handlers = [
    procCluster.add(Lambda("proc1")),
    procCluster.add(Lambda("proc2")),
    procCluster.add(Lambda("proc3")),
  ];
  queue.to(handlers);
  handlers.forEach((h) => {
    h.to(store);
    h.to(dw);
  });

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example3-event-processing.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample4() {
  console.log("Generating example4-message-collecting.svg...");
  const diagram = Diagram("Message Collecting");

  const pubsub = diagram.add(PubSub("pubsub"));

  const sourceCluster = diagram.cluster("Source of Data");
  const sources = [
    sourceCluster.add(IotCore("core1")),
    sourceCluster.add(IotCore("core2")),
    sourceCluster.add(IotCore("core3")),
  ];
  sources.forEach((s) => s.to(pubsub));

  const targetsCluster = diagram.cluster("Targets");
  const flowCluster = targetsCluster.cluster("Data Flow");
  const dataflow = flowCluster.add(Dataflow("data flow"));
  pubsub.to(dataflow);

  const lakeCluster = targetsCluster.cluster("Data Lake");
  const bq = lakeCluster.add(BigQuery("bq"));
  const gcs = lakeCluster.add(Storage("storage"));
  dataflow.to([bq, gcs]);

  const eventCluster = targetsCluster.cluster("Event Driven");

  const procCluster = eventCluster.cluster("Processing");
  const engine = procCluster.add(AppEngine("engine"));
  const bigtable = procCluster.add(Bigtable("bigtable"));
  dataflow.to(engine).to(bigtable);

  const serverlessCluster = eventCluster.cluster("Serverless");
  const func = serverlessCluster.add(Functions("func"));
  const appengine = serverlessCluster.add(AppEngine("appengine"));
  dataflow.to(func).to(appengine);

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example4-message-collecting.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample5() {
  console.log("Generating example5-k8s-exposed-pod.svg...");
  const diagram = Diagram("Exposed Pod with 3 Replicas");

  const ingress = diagram.add(Ingress("domain.com"));
  const svc = diagram.add(Service("svc"));
  const pods = [diagram.add(Pod("pod1")), diagram.add(Pod("pod2")), diagram.add(Pod("pod3"))];
  const rs = diagram.add(ReplicaSet("rs"));
  const dp = diagram.add(Deployment("dp"));
  const hpa = diagram.add(HPA("hpa"));

  ingress.to(svc);
  svc.to(pods);
  pods.forEach((p) => p.from(rs));
  rs.from(dp);
  dp.from(hpa);

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example5-k8s-exposed-pod.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample6() {
  console.log("Generating example6-k8s-stateful.svg...");
  const diagram = Diagram("Stateful Architecture");
  const appsCluster = diagram.cluster("Apps");
  const svc = appsCluster.add(Service("svc"));
  const sts = appsCluster.add(StatefulSet("sts"));
  const pods = [];
  const pvcs = [];
  for (let i = 0; i < 3; i++) {
    const pod = appsCluster.add(Pod("pod"));
    const pvc = appsCluster.add(PVC("pvc"));

    pod.with(sts).with(pvc);
    svc.to(pod).to(pvc);

    pods.push(pod);
    pvcs.push(pvc);
  }

  const pv = diagram.add(PV("pv"));
  const sc = diagram.add(StorageClass("sc"));

  pvcs.forEach((pvc) => {
    pvc.from(pv);
  });
  pv.from(sc);

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example6-k8s-stateful.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample7() {
  console.log("Generating example7-onprem-advanced.svg...");
  const diagram = Diagram("Advanced Web Service with On-Premises");

  const ingress = diagram.add(Nginx("ingress"));

  const metrics = diagram.add(Prometheus("metric"));
  const grafana = diagram.add(Grafana("monitoring"));
  metrics.from(grafana);

  const serviceCluster = diagram.cluster("Service Cluster");
  const grpcsvc = [
    serviceCluster.add(Server("grpc1")),
    serviceCluster.add(Server("grpc2")),
    serviceCluster.add(Server("grpc3")),
  ];

  const sessionsCluster = diagram.cluster("Sessions HA");
  const sessionPrimary = sessionsCluster.add(Redis("session"));
  const sessionReplica = sessionsCluster.add(Redis("replica"));
  sessionPrimary.with(sessionReplica);
  sessionReplica.from(metrics);
  grpcsvc.forEach((svc) => svc.to(sessionPrimary));

  const dbCluster = diagram.cluster("Database HA");
  const dbPrimary = dbCluster.add(PostgreSQL("users"));
  const dbReplica = dbCluster.add(PostgreSQL("replica"));
  dbPrimary.with(dbReplica);
  dbReplica.from(metrics);
  grpcsvc.forEach((svc) => svc.to(dbPrimary));

  const aggregator = diagram.add(Fluentd("logging"));
  const kafka = diagram.add(Kafka("stream"));
  const spark = diagram.add(Spark("analytics"));
  aggregator.to(kafka).to(spark);

  ingress.to(grpcsvc);
  grpcsvc.forEach((svc) => svc.to(aggregator));

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example7-onprem-advanced.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample8() {
  console.log("Generating example8-onprem-advanced-colors.svg...");
  const diagram = Diagram("Advanced Web Service with On-Premises (colored)");

  const ingress = diagram.add(Nginx("ingress"));

  const metrics = diagram.add(Prometheus("metric"));
  const grafana = diagram.add(Grafana("monitoring"));
  grafana.to(Edge({ color: "firebrick", style: "dashed" }), metrics);

  const serviceCluster = diagram.cluster("Service Cluster");
  const grpcsvc = [
    serviceCluster.add(Server("grpc1")),
    serviceCluster.add(Server("grpc2")),
    serviceCluster.add(Server("grpc3")),
  ];

  const sessionsCluster = diagram.cluster("Sessions HA");
  const sessionPrimary = sessionsCluster.add(Redis("session"));
  const sessionReplica = sessionsCluster.add(Redis("replica"));
  sessionPrimary.with(Edge({ color: "brown", style: "dashed" }), sessionReplica);
  sessionReplica.from(Edge({ label: "collect" }), metrics);
  grpcsvc.forEach((svc) => svc.to(Edge({ color: "brown" }), sessionPrimary));

  const dbCluster = diagram.cluster("Database HA");
  const dbPrimary = dbCluster.add(PostgreSQL("users"));
  const dbReplica = dbCluster.add(PostgreSQL("replica"));
  dbPrimary.with(Edge({ color: "brown", style: "dotted" }), dbReplica);
  dbReplica.from(Edge({ label: "collect" }), metrics);
  grpcsvc.forEach((svc) => svc.to(Edge({ color: "black" }), dbPrimary));

  const aggregator = diagram.add(Fluentd("logging"));
  const kafka = diagram.add(Kafka("stream"));
  const spark = diagram.add(Spark("analytics"));
  aggregator.to(Edge({ label: "parse" }), kafka);
  kafka.to(Edge({ color: "black", style: "bold" }), spark);

  grpcsvc.forEach((svc) => {
    ingress.to(Edge({ color: "darkgreen", forward: true, reverse: true })).to(svc);
  });
  grpcsvc.forEach((svc) => svc.to(Edge({ color: "darkorange" }), aggregator));

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example8-onprem-advanced-colors.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample9() {
  console.log("Generating example9-custom-nodes.svg...");
  const diagram = Diagram("Broker Consumers");

  const consumersCluster = diagram.cluster("Consumers");
  const consumers = [
    consumersCluster.add(Pod("worker")),
    consumersCluster.add(Pod("worker")),
    consumersCluster.add(Pod("worker")),
  ];

  const queue = diagram.add(
    Custom("Message queue", "https://jpadilla.github.io/rabbitmqapp/assets/img/icon.png", {
      width: "1.0",
    }),
  );

  const database = diagram.add(Aurora("Database"));

  queue.to(consumers);
  consumers.forEach((consumer) => consumer.to(database));

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example9-custom-nodes.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample10() {
  console.log("Generating example10-plugin-system.svg...");
  const { HookEvent } = await import("../dist/index.js");

  // Create a plugin that modifies node labels
  const labelPrefixPlugin = {
    name: "label-prefix",
    version: "1.0.0",
    apiVersion: "1.0",
    runtimeSupport: { node: true, browser: true, deno: true, bun: true },
    capabilities: [
      {
        type: "hook",
        hooks: [
          {
            event: HookEvent.NODE_CREATE,
            handler: async (data) => {
              data.node.label = "[AWS] " + data.node.label;
              return data;
            },
          },
        ],
      },
    ],
  };

  // Create a plugin that adds colored edges
  const coloredEdgePlugin = {
    name: "colored-edges",
    version: "1.0.0",
    apiVersion: "1.0",
    runtimeSupport: { node: true, browser: true, deno: true, bun: true },
    capabilities: [
      {
        type: "hook",
        hooks: [
          {
            event: HookEvent.EDGE_CREATE,
            handler: async (data) => {
              // Modify edge attributes via edgeAttrs
              data.edge.edgeAttrs.color = "blue";
              data.edge.edgeAttrs.penwidth = "2";
              return data;
            },
          },
        ],
      },
    ],
  };

  // Create a plugin that modifies node attributes
  const nodeStylePlugin = {
    name: "node-style",
    version: "1.0.0",
    apiVersion: "1.0",
    runtimeSupport: { node: true, browser: true, deno: true, bun: true },
    capabilities: [
      {
        type: "hook",
        hooks: [
          {
            event: HookEvent.NODE_CREATE,
            handler: async (data) => {
              // Modify node attributes via nodeAttrs
              data.node.nodeAttrs.width = "1.2";
              return data;
            },
          },
        ],
      },
    ],
  };

  const diagram = Diagram("Plugin Example");

  // Register plugins before adding nodes
  await diagram.registerPlugins([labelPrefixPlugin, coloredEdgePlugin, nodeStylePlugin]);

  const lb = diagram.add(ELB("Load Balancer"));
  const web = diagram.add(EC2("Web Server"));
  const db = diagram.add(RDS("Database"));

  // Connect nodes using chained syntax - edges will be modified by the plugin
  lb.to(web).to(db);

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example10-plugin-system.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateExample11() {
  console.log("Generating example11-plugin-hooks.svg...");
  const { HookEvent } = await import("../dist/index.js");

  // Environment-based styling plugin
  const environmentStylingPlugin = (environment) => ({
    name: "environment-styling",
    version: "1.0.0",
    apiVersion: "1.0",
    runtimeSupport: { node: true, browser: true, deno: true, bun: true },
    capabilities: [
      {
        type: "hook",
        hooks: [
          {
            event: HookEvent.NODE_CREATE,
            handler: async (data) => {
              // Style nodes based on environment
              if (environment === "prod") {
                data.node.nodeAttrs.style = "filled";
                data.node.nodeAttrs.fillcolor = "#FFE5E5"; // Light red for prod
                data.node.nodeAttrs.penwidth = "2";
                data.node.label = "[PROD] " + data.node.label;
              } else {
                data.node.nodeAttrs.style = "filled";
                data.node.nodeAttrs.fillcolor = "#E5F5E5"; // Light green for dev
                data.node.label = "[DEV] " + data.node.label;
              }
              return data;
            },
          },
          {
            event: HookEvent.EDGE_CREATE,
            handler: async (data) => {
              // Style edges based on environment
              if (environment === "prod") {
                data.edge.edgeAttrs.color = "#CC0000";
                data.edge.edgeAttrs.penwidth = "2";
              } else {
                data.edge.edgeAttrs.color = "#00AA00";
                data.edge.edgeAttrs.style = "dashed";
              }
              return data;
            },
          },
          {
            event: HookEvent.CLUSTER_CREATE,
            handler: async (data) => {
              // Style clusters based on environment
              if (environment === "prod") {
                data.cluster.clusterAttrs.bgcolor = "#FFF0F0";
                data.cluster.clusterAttrs.pencolor = "#CC0000";
                data.cluster.clusterAttrs.penwidth = "3";
              } else {
                data.cluster.clusterAttrs.bgcolor = "#F0FFF0";
                data.cluster.clusterAttrs.pencolor = "#00AA00";
              }
              return data;
            },
          },
        ],
      },
    ],
  });

  const diagram = Diagram("Environment Styling Example");

  // Register the plugin for production environment
  await diagram.registerPlugins([environmentStylingPlugin("prod")]);

  const webCluster = diagram.cluster("Web Tier");
  const lb = webCluster.add(ELB("Load Balancer"));
  const web1 = webCluster.add(EC2("Web Server 1"));
  const web2 = webCluster.add(EC2("Web Server 2"));

  const dbCluster = diagram.cluster("Database Tier");
  const db = dbCluster.add(RDS("Primary Database"));

  lb.to([web1, web2]);
  web1.to(db);
  web2.to(db);

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "example11-plugin-hooks.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateQuickstartBasic() {
  console.log("Generating quickstart-basic.svg...");
  const diagram = Diagram("My First Diagram", {
    // Diagram options
    direction: "TB", // Top to Bottom
  });

  // Add nodes
  const web = diagram.add(Node("Web Server"));
  const app = diagram.add(Node("App Server"));
  const db = diagram.add(Node("Database"));

  // Connect them
  web.to(app).to(db);

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "quickstart-basic.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateQuickstartCloud() {
  console.log("Generating quickstart-cloud.svg...");
  const diagram = Diagram("AWS Architecture", { direction: "TB" });

  // Create nodes with icons
  const lb = diagram.add(ALB("Load Balancer"));
  const web = diagram.add(EC2("Web Server"));
  const api = diagram.add(Lambda("API"));
  const db = diagram.add(RDS("Database"));
  const storage = diagram.add(S3("Storage"));

  // Connect them
  lb.to(web).to(api);
  api.to([db, storage]);

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "quickstart-cloud.svg"), svg);
  console.log("  ✓ Generated");
}

async function generateDockerCompose() {
  console.log("Generating ecommerce-app.svg...");
  const composeYaml = `
version: "3.8"
name: ecommerce-app
services:
  frontend:
    image: nginx:alpine
    ports:
      - "80:80"
    depends_on:
      - api

  api:
    image: node:18
    ports:
      - "3000:3000"
    depends_on:
      - db
      - cache

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: ecommerce
    volumes:
      - pgdata:/var/lib/postgresql/data

  cache:
    image: redis:7-alpine

volumes:
  pgdata:
`;

  const diagram = Diagram("E-commerce Application");
  await diagram.registerPlugins([dockerComposePlugin]);
  await diagram.import(composeYaml, "docker-compose");

  const svg = await diagram.render();
  fs.writeFileSync(path.join(OUTPUT_DIR, "ecommerce-app.svg"), svg);
  console.log("  ✓ Generated");
}

async function main() {
  console.log("Generating example SVGs...\n");

  await generateExample1();
  await generateExample2();
  await generateExample3();
  await generateExample4();
  await generateExample5();
  await generateExample6();
  await generateExample7();
  await generateExample8();
  await generateExample9();
  await generateExample10();
  await generateExample11();
  await generateQuickstartBasic();
  await generateQuickstartCloud();
  await generateDockerCompose();

  console.log("\n✓ All SVGs generated successfully!");
  console.log(`  Output directory: ${OUTPUT_DIR}`);
}

main().catch(console.error);
