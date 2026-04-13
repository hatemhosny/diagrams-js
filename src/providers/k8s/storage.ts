import { _K8s } from "./index.js";
import pvIcon from "../../../resources/k8s/storage/pv.png";
import pvcIcon from "../../../resources/k8s/storage/pvc.png";
import scIcon from "../../../resources/k8s/storage/sc.png";
import volIcon from "../../../resources/k8s/storage/vol.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function PV(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "PV", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PV";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pvIcon;
  return node;
}

export function PVC(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "PVC", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PVC";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pvcIcon;
  return node;
}

export function SC(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "SC", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SC";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = scIcon;
  return node;
}

export function Vol(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Vol", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Vol";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = volIcon;
  return node;
}

// Aliases
export const PersistentVolume = PV;
export const PersistentVolumeClaim = PVC;
export const StorageClass = SC;
export const Volume = Vol;
