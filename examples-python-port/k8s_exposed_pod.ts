// Example 5: Exposed Pod with 3 Replicas on Kubernetes
// Ported from diagrams-py docs/getting-started/examples.md

import { Diagram } from "../dist/index.js";
import { HPA } from "../dist/providers/k8s/clusterconfig.js";
import { Deployment, Pod, ReplicaSet } from "../dist/providers/k8s/compute.js";
import { Ingress, Service } from "../dist/providers/k8s/network.js";

const diagram = new Diagram("Exposed Pod with 3 Replicas", {
  outformat: "svg",
});

const ingress = diagram.add(new Ingress("domain.com"));
const svc = diagram.add(new Service("svc"));

// Create 3 pods
const pods = [
  diagram.add(new Pod("pod1")),
  diagram.add(new Pod("pod2")),
  diagram.add(new Pod("pod3")),
];

const rs = diagram.add(new ReplicaSet("rs"));
const dp = diagram.add(new Deployment("dp"));
const hpa = diagram.add(new HPA("hpa"));

// Connect: ingress >> svc >> [pod1, pod2, pod3] << rs << dp << hpa
// This is: forward then reverse connections

// Forward connections
ingress.to(svc);
svc.to(pods);

// Reverse connections (using .from())
pods.forEach((pod) => pod.from(rs));
rs.from(dp);
dp.from(hpa);

const svg = await diagram.render();
console.log("Generated SVG for Exposed Pod with 3 Replicas example");
diagram.destroy();
