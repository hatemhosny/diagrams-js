import { _K8s } from "./index.js";
import crdIcon from "../../../resources/k8s/others/crd.png";
import pspIcon from "../../../resources/k8s/others/psp.png";

function _Others(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "others";
  return node;
}

export function CRD(label?: string, options?: Record<string, unknown>) {
  const node = _Others(label ?? "CRD", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = crdIcon;
  return node;
}

export function PSP(label?: string, options?: Record<string, unknown>) {
  const node = _Others(label ?? "PSP", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pspIcon;
  return node;
}
