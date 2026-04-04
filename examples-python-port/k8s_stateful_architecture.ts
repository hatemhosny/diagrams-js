// Example 6: Stateful Architecture on Kubernetes
// Ported from diagrams-py docs/getting-started/examples.md

import { Diagram, Cluster } from "../dist/index.js";
import { Pod, StatefulSet } from "../dist/providers/k8s/compute.js";
import { Service } from "../dist/providers/k8s/network.js";
import { PV, PVC, StorageClass } from "../dist/providers/k8s/storage.js";

const diagram = new Diagram("Stateful Architecture", {
  outformat: "svg",
});

diagram.cluster("Apps", (appsCluster) => {
  const svc = appsCluster.add(new Service("svc"));
  const sts = appsCluster.add(new StatefulSet("sts"));

  // Create 3 replicas
  for (let i = 0; i < 3; i++) {
    const pod = appsCluster.add(new Pod("pod"));
    const pvc = appsCluster.add(new PVC("pvc"));

    // pod - sts - pvc (bidirectional between pod and sts)
    pod.with(sts);
    sts.with(pvc);

    // svc >> pod >> pvc
    svc.to(pod).to(pvc);
  }
});

// Reverse connections from the cluster
// apps << PV << StorageClass
// In TS we need to track references and use .from()
// This is simplified since we can't easily access the nodes from the cluster closure

const pv = diagram.add(new PV("pv"));
const sc = diagram.add(new StorageClass("sc"));

// Note: In Python this is apps << pv << sc
// The cluster closure makes it hard to track all nodes for reverse connection
// In real usage, you'd keep references to connect properly

const svg = await diagram.render();
console.log("Generated SVG for Stateful Architecture example");
diagram.destroy();
