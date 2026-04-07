import { Node } from "../../Node.js";

export function _K8s(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "K8s", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "k8s";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "k8s";
  return node;
}

export function K8s(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label ?? "K8s", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "k8s.png";
  return node;
}
