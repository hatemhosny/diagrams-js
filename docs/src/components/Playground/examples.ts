export const examples = [
  {
    name: "Grouped Workers on AWS",
    config: {
      title: "Grouped Workers on AWS",
      script: {
        language: "javascript",
        content: `import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";
import { ELB } from "diagrams-js/aws/network";

const diagram = Diagram("Grouped Workers", {
  direction: "TB",
});

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
workers.forEach(w => w.to(events));
`,
      },
    },
  },
  {
    name: "Clustered Web Services",
    config: {
      title: "Clustered Web Services",
      script: {
        language: "javascript",
        content: `import { Diagram } from "diagrams-js";
import { ECS } from "diagrams-js/aws/compute";
import { RDS, Elasticache } from "diagrams-js/aws/database";
import { ELB, Route53 } from "diagrams-js/aws/network";

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
svcGroup.forEach(s => s.to(dbPrimary));

const memcached = diagram.add(Elasticache("memcached"));
svcGroup.forEach(s => s.to(memcached));

dns.to(lb);
`,
      },
    },
  },
  {
    name: "Event Processing on AWS",
    config: {
      title: "Event Processing on AWS",
      script: {
        language: "javascript",
        content: `import { Diagram } from "diagrams-js";
import { ECS, EKS, Lambda } from "diagrams-js/aws/compute";
import { Redshift } from "diagrams-js/aws/database";
import { SQS } from "diagrams-js/aws/integration";
import { S3 } from "diagrams-js/aws/storage";

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
workerNodes.forEach(w => w.to(queue));

const procCluster = flowsCluster.cluster("Processing");
const handlers = [
  procCluster.add(Lambda("proc1")),
  procCluster.add(Lambda("proc2")),
  procCluster.add(Lambda("proc3")),
];
queue.to(handlers);
handlers.forEach(h => {
  h.to(store);
  h.to(dw);
});
`,
      },
    },
  },
  {
    name: "Message Collecting System on GCP",
    config: {
      title: "Message Collecting System on GCP",
      script: {
        language: "javascript",
        content: `import { Diagram } from "diagrams-js";
import { BigQuery, Dataflow, PubSub } from "diagrams-js/gcp/analytics";
import { AppEngine, Functions } from "diagrams-js/gcp/compute";
import { Bigtable } from "diagrams-js/gcp/database";
import { IotCore } from "diagrams-js/gcp/iot";
import { Storage } from "diagrams-js/gcp/storage";

const diagram = Diagram("Message Collecting");

const pubsub = diagram.add(PubSub("pubsub"));

const sourceCluster = diagram.cluster("Source of Data");
const sources = [
  sourceCluster.add(IotCore("core1")),
  sourceCluster.add(IotCore("core2")),
  sourceCluster.add(IotCore("core3")),
];
sources.forEach(s => s.to(pubsub));

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
`,
      },
    },
  },
  {
    name: "Exposed Pod with 3 Replicas",
    config: {
      title: "Exposed Pod with 3 Replicas",
      script: {
        language: "javascript",
        content: `import { Diagram } from "diagrams-js";
import { HPA } from "diagrams-js/k8s/clusterconfig";
import { Deployment, Pod, ReplicaSet } from "diagrams-js/k8s/compute";
import { Ingress, Service } from "diagrams-js/k8s/network";

const diagram = Diagram("Exposed Pod with 3 Replicas");

const ingress = diagram.add(Ingress("domain.com"));
const svc = diagram.add(Service("svc"));
const pods = [
  diagram.add(Pod("pod1")),
  diagram.add(Pod("pod2")),
  diagram.add(Pod("pod3")),
];
const rs = diagram.add(ReplicaSet("rs"));
const dp = diagram.add(Deployment("dp"));
const hpa = diagram.add(HPA("hpa"));

ingress.to(svc);
svc.to(pods);
pods.forEach(p => p.from(rs));
rs.from(dp);
dp.from(hpa);
`,
      },
    },
  },
  {
    name: "Stateful Architecture on Kubernetes",
    config: {
      title: "Stateful Architecture on Kubernetes",
      script: {
        language: "javascript",
        content: `import { Diagram } from "diagrams-js";
import { Pod, StatefulSet } from "diagrams-js/k8s/compute";
import { Service } from "diagrams-js/k8s/network";
import { PV, PVC, StorageClass } from "diagrams-js/k8s/storage";

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

pvcs.forEach(pvc => {
  pvc.from(pv);
});
pv.from(sc);
`,
      },
    },
  },
  {
    name: "Advanced Web Service with On-Premises",
    config: {
      title: "Advanced Web Service with On-Premises",
      script: {
        language: "javascript",
        content: `import { Diagram } from "diagrams-js";
import { Spark } from "diagrams-js/onprem/analytics";
import { Server } from "diagrams-js/onprem/compute";
import { PostgreSQL } from "diagrams-js/onprem/database";
import { Redis } from "diagrams-js/onprem/inmemory";
import { Fluentd } from "diagrams-js/onprem/aggregator";
import { Grafana, Prometheus } from "diagrams-js/onprem/monitoring";
import { Nginx } from "diagrams-js/onprem/network";
import { Kafka } from "diagrams-js/onprem/queue";

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
`,
      },
    },
  },
  {
    name: "Advanced Web Service (with colors and labels)",
    config: {
      title: "Advanced Web Service (with colors and labels)",
      script: {
        language: "javascript",
        content: `import { Diagram, Edge } from "diagrams-js";
import { Spark } from "diagrams-js/onprem/analytics";
import { Server } from "diagrams-js/onprem/compute";
import { PostgreSQL } from "diagrams-js/onprem/database";
import { Redis } from "diagrams-js/onprem/inmemory";
import { Fluentd } from "diagrams-js/onprem/aggregator";
import { Grafana, Prometheus } from "diagrams-js/onprem/monitoring";
import { Nginx } from "diagrams-js/onprem/network";
import { Kafka } from "diagrams-js/onprem/queue";

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
  ingress.to(Edge({ color: "darkgreen", forward: true, reverse: true }), svc);
});
grpcsvc.forEach((svc) => svc.to(Edge({ color: "darkorange" }), aggregator));
`,
      },
    },
  },
  {
    name: "RabbitMQ Consumers with Custom Nodes",
    config: {
      title: "RabbitMQ Consumers with Custom Nodes",
      script: {
        language: "javascript",
        content: `import { Diagram, Custom } from "diagrams-js";
import { Pod } from "diagrams-js/k8s/compute";
import { Aurora } from "diagrams-js/aws/database";

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
`,
      },
    },
  },
  {
    name: "Plugin System Example",
    config: {
      title: "Plugin System Example",
      script: {
        language: "javascript",
        content: `import { Diagram, HookEvent } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";
import { ELB } from "diagrams-js/aws/network";

// Create a plugin that modifies node labels
const labelPrefixPlugin = () => ({
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
});

// Create a plugin that adds colored edges
const coloredEdgePlugin = () => ({
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
});

// Create a plugin that modifies node attributes
const nodeStylePlugin = () => ({
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
});

const diagram = Diagram("Plugin Example");

// Register plugins before adding nodes
await diagram.registerPlugins([labelPrefixPlugin, coloredEdgePlugin, nodeStylePlugin]);

const lb = diagram.add(ELB("Load Balancer"));
const web = diagram.add(EC2("Web Server"));
const db = diagram.add(RDS("Database"));

// Connect nodes using chained syntax - edges will be modified by the plugin
lb.to(web).to(db);
`,
      },
    },
  },
  {
    name: "Blank Template",
    config: {
      title: "Blank Template",
      script: {
        language: "javascript",
        content: `import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";

const diagram = Diagram("My Diagram");

const server = diagram.add(EC2("Server"));
`,
      },
    },
  },
].map((ex) => {
  ex.config.script.content += `
const svg = await diagram.render();

document.getElementById("diagram").innerHTML = svg;

//await diagram.save("${ex.config.title.toLowerCase().replaceAll(" ", "-")}.svg");
`;
  return ex;
});
