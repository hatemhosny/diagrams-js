import { _K8s } from "./index.js";
import epIcon from "../../../resources/k8s/network/ep.png";
import ingIcon from "../../../resources/k8s/network/ing.png";
import netpolIcon from "../../../resources/k8s/network/netpol.png";
import svcIcon from "../../../resources/k8s/network/svc.png";

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "network";
  return node;
}

export function Ep(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Ep", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Ep";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = epIcon;
  return node;
}

export function Ing(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Ing", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Ing";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ingIcon;
  return node;
}

export function Netpol(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Netpol", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Netpol";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = netpolIcon;
  return node;
}

export function SVC(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "SVC", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SVC";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = svcIcon;
  return node;
}

// Aliases
export const Endpoint = Ep;
export const Ingress = Ing;
export const NetworkPolicy = Netpol;
export const Service = SVC;
