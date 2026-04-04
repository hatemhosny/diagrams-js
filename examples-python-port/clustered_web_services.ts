// Example 2: Clustered Web Services
// Ported from diagrams-py docs/getting-started/examples.md

import { Diagram, Cluster } from "../dist/index.js";
import { ECS } from "../dist/providers/aws/compute.js";
import { RDS, ElastiCache } from "../dist/providers/aws/database.js";
import { ALB, Route53 } from "../dist/providers/aws/network.js";

const diagram = new Diagram("Clustered Web Services", {
  outformat: "svg",
});

const dns = diagram.add(new Route53("dns"));
const lb = diagram.add(new ALB("lb"));

diagram.cluster("Services", (svcCluster) => {
  const svcGroup = [
    svcCluster.add(new ECS("web1")),
    svcCluster.add(new ECS("web2")),
    svcCluster.add(new ECS("web3")),
  ];

  // Connect lb to service group
  lb.to(svcGroup);

  svcCluster.cluster("DB Cluster", (dbCluster) => {
    const dbPrimary = dbCluster.add(new RDS("userdb"));
    const dbReadReplicas = [dbCluster.add(new RDS("userdb ro"))];

    // Connect service group to db (bidirectional with primary)
    svcGroup.forEach((svc) => svc.to(dbPrimary));
  });
});

const memcached = diagram.add(new ElastiCache("memcached"));

// Main flow
dns.to(lb);

const svg = await diagram.render();
console.log("Generated SVG for Clustered Web Services example");
diagram.destroy();
