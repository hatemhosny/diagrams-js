import { _K8s } from "./index.js";
import nsIcon from "../../../resources/k8s/group/ns.png";

function _Group(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "group";
  return node;
}

export function NS(label?: string, options?: Record<string, unknown>) {
  const node = _Group(label ?? "NS", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nsIcon;
  return node;
}

// Aliases
export const Namespace = NS;
