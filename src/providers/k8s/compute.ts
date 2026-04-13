import { _K8s } from "./index.js";
import cronjobIcon from "../../../resources/k8s/compute/cronjob.png";
import deployIcon from "../../../resources/k8s/compute/deploy.png";
import dsIcon from "../../../resources/k8s/compute/ds.png";
import jobIcon from "../../../resources/k8s/compute/job.png";
import podIcon from "../../../resources/k8s/compute/pod.png";
import rsIcon from "../../../resources/k8s/compute/rs.png";
import stsIcon from "../../../resources/k8s/compute/sts.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "compute";
  return node;
}

export function Cronjob(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Cronjob", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cronjob";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cronjobIcon;
  return node;
}

export function Deploy(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Deploy", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Deploy";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = deployIcon;
  return node;
}

export function DS(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "DS", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DS";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dsIcon;
  return node;
}

export function Job(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Job", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Job";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = jobIcon;
  return node;
}

export function Pod(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Pod", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Pod";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = podIcon;
  return node;
}

export function RS(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "RS", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RS";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rsIcon;
  return node;
}

export function STS(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "STS", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "STS";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = stsIcon;
  return node;
}

// Aliases
export const Deployment = Deploy;
export const DaemonSet = DS;
export const ReplicaSet = RS;
export const StatefulSet = STS;
