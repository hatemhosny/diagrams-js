import { _K8s } from "./index.js";
import apiIcon from "../../../resources/k8s/controlplane/api.png";
import c_c_mIcon from "../../../resources/k8s/controlplane/c-c-m.png";
import c_mIcon from "../../../resources/k8s/controlplane/c-m.png";
import k_proxyIcon from "../../../resources/k8s/controlplane/k-proxy.png";
import kubeletIcon from "../../../resources/k8s/controlplane/kubelet.png";
import schedIcon from "../../../resources/k8s/controlplane/sched.png";

function _Controlplane(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "controlplane";
  return node;
}

export function API(label?: string, options?: Record<string, unknown>) {
  const node = _Controlplane(label ?? "API", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "API";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = apiIcon;
  return node;
}

export function CCM(label?: string, options?: Record<string, unknown>) {
  const node = _Controlplane(label ?? "CCM", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CCM";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = c_c_mIcon;
  return node;
}

export function CM(label?: string, options?: Record<string, unknown>) {
  const node = _Controlplane(label ?? "CM", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CM";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = c_mIcon;
  return node;
}

export function KProxy(label?: string, options?: Record<string, unknown>) {
  const node = _Controlplane(label ?? "KProxy", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "KProxy";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = k_proxyIcon;
  return node;
}

export function Kubelet(label?: string, options?: Record<string, unknown>) {
  const node = _Controlplane(label ?? "Kubelet", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Kubelet";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kubeletIcon;
  return node;
}

export function Sched(label?: string, options?: Record<string, unknown>) {
  const node = _Controlplane(label ?? "Sched", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Sched";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = schedIcon;
  return node;
}

// Aliases
export const APIServer = API;
export const ControllerManager = CM;
export const KubeProxy = KProxy;
export const Scheduler = Sched;
