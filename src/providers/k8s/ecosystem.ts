import { _K8s } from "./index.js";
import external_dnsIcon from "../../../resources/k8s/ecosystem/external-dns.png";
import helmIcon from "../../../resources/k8s/ecosystem/helm.png";
import krewIcon from "../../../resources/k8s/ecosystem/krew.png";
import kustomizeIcon from "../../../resources/k8s/ecosystem/kustomize.png";

function _Ecosystem(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)._type = "ecosystem";
  return node;
}

export function ExternalDns(label?: string, options?: Record<string, unknown>) {
  const node = _Ecosystem(label ?? "ExternalDns", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = external_dnsIcon;
  return node;
}

export function Helm(label?: string, options?: Record<string, unknown>) {
  const node = _Ecosystem(label ?? "Helm", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = helmIcon;
  return node;
}

export function Krew(label?: string, options?: Record<string, unknown>) {
  const node = _Ecosystem(label ?? "Krew", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = krewIcon;
  return node;
}

export function Kustomize(label?: string, options?: Record<string, unknown>) {
  const node = _Ecosystem(label ?? "Kustomize", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = kustomizeIcon;
  return node;
}
