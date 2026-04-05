import { _K8s } from "./index.js";
import cmIcon from "../../../resources/k8s/podconfig/cm.png";
import secretIcon from "../../../resources/k8s/podconfig/secret.png";

function _Podconfig(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)._type = "podconfig";
  return node;
}

export function CM(label?: string, options?: Record<string, unknown>) {
  const node = _Podconfig(label ?? "CM", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cmIcon;
  return node;
}

export function Secret(label?: string, options?: Record<string, unknown>) {
  const node = _Podconfig(label ?? "Secret", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = secretIcon;
  return node;
}

// Aliases
export const ConfigMap = CM;
