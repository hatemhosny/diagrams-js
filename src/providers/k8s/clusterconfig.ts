import { _K8s } from "./index.js";
import hpaIcon from "../../../resources/k8s/clusterconfig/hpa.png";
import limitsIcon from "../../../resources/k8s/clusterconfig/limits.png";
import quotaIcon from "../../../resources/k8s/clusterconfig/quota.png";

function _Clusterconfig(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "clusterconfig";
  return node;
}

export function HPA(label?: string, options?: Record<string, unknown>) {
  const node = _Clusterconfig(label ?? "HPA", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hpaIcon;
  return node;
}

export function Limits(label?: string, options?: Record<string, unknown>) {
  const node = _Clusterconfig(label ?? "Limits", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = limitsIcon;
  return node;
}

export function Quota(label?: string, options?: Record<string, unknown>) {
  const node = _Clusterconfig(label ?? "Quota", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = quotaIcon;
  return node;
}

// Aliases
export const LimitRange = Limits;
export const HorizontalPodAutoscaler = HPA;
