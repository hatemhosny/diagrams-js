import { _K8s } from "./index.js";
import etcdIcon from "../../../resources/k8s/infra/etcd.png";
import masterIcon from "../../../resources/k8s/infra/master.png";
import nodeIcon from "../../../resources/k8s/infra/node.png";

function _Infra(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "infra";
  return node;
}

export function ETCD(label?: string, options?: Record<string, unknown>) {
  const node = _Infra(label ?? "ETCD", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = etcdIcon;
  return node;
}

export function Master(label?: string, options?: Record<string, unknown>) {
  const node = _Infra(label ?? "Master", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = masterIcon;
  return node;
}

export function Node(label?: string, options?: Record<string, unknown>) {
  const node = _Infra(label ?? "Node", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nodeIcon;
  return node;
}
