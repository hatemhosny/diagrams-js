import { _Onprem } from "./index.js";
import argocdIcon from "../../../resources/onprem/gitops/argocd.png";
import flaggerIcon from "../../../resources/onprem/gitops/flagger.png";
import fluxIcon from "../../../resources/onprem/gitops/flux.png";

function _Gitops(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "gitops";
  return node;
}

export function Argocd(label?: string, options?: Record<string, unknown>) {
  const node = _Gitops(label ?? "Argocd", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = argocdIcon;
  return node;
}

export function Flagger(label?: string, options?: Record<string, unknown>) {
  const node = _Gitops(label ?? "Flagger", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = flaggerIcon;
  return node;
}

export function Flux(label?: string, options?: Record<string, unknown>) {
  const node = _Gitops(label ?? "Flux", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fluxIcon;
  return node;
}

// Aliases
export const ArgoCD = Argocd;
