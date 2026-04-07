import { _Digitalocean } from "./index.js";
import containersIcon from "../../../resources/digitalocean/compute/containers.png";
import dockerIcon from "../../../resources/digitalocean/compute/docker.png";
import droplet_connectIcon from "../../../resources/digitalocean/compute/droplet-connect.png";
import droplet_snapshotIcon from "../../../resources/digitalocean/compute/droplet-snapshot.png";
import dropletIcon from "../../../resources/digitalocean/compute/droplet.png";
import k8s_clusterIcon from "../../../resources/digitalocean/compute/k8s-cluster.png";
import k8s_node_poolIcon from "../../../resources/digitalocean/compute/k8s-node-pool.png";
import k8s_nodeIcon from "../../../resources/digitalocean/compute/k8s-node.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Digitalocean(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "compute";
  return node;
}

export function Containers(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Containers", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = containersIcon;
  return node;
}

export function Docker(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Docker", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dockerIcon;
  return node;
}

export function DropletConnect(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "DropletConnect", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = droplet_connectIcon;
  return node;
}

export function DropletSnapshot(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "DropletSnapshot", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = droplet_snapshotIcon;
  return node;
}

export function Droplet(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Droplet", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dropletIcon;
  return node;
}

export function K8sCluster(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "K8sCluster", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = k8s_clusterIcon;
  return node;
}

export function K8sNodePool(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "K8sNodePool", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = k8s_node_poolIcon;
  return node;
}

export function K8sNode(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "K8sNode", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = k8s_nodeIcon;
  return node;
}
