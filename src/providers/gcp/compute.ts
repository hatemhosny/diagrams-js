import { _Gcp } from "./index.js";
import app_engineIcon from "../../../resources/gcp/compute/app-engine.png";
import binary_authorizationIcon from "../../../resources/gcp/compute/binary-authorization.png";
import compute_engineIcon from "../../../resources/gcp/compute/compute-engine.png";
import container_optimized_osIcon from "../../../resources/gcp/compute/container-optimized-os.png";
import functionsIcon from "../../../resources/gcp/compute/functions.png";
import gke_on_premIcon from "../../../resources/gcp/compute/gke-on-prem.png";
import gpuIcon from "../../../resources/gcp/compute/gpu.png";
import kubernetes_engineIcon from "../../../resources/gcp/compute/kubernetes-engine.png";
import os_configuration_managementIcon from "../../../resources/gcp/compute/os-configuration-management.png";
import os_inventory_managementIcon from "../../../resources/gcp/compute/os-inventory-management.png";
import os_patch_managementIcon from "../../../resources/gcp/compute/os-patch-management.png";
import runIcon from "../../../resources/gcp/compute/run.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "compute";
  return node;
}

export function AppEngine(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "AppEngine", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppEngine";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_engineIcon;
  return node;
}

export function BinaryAuthorization(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "BinaryAuthorization", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BinaryAuthorization";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = binary_authorizationIcon;
  return node;
}

export function ComputeEngine(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ComputeEngine", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ComputeEngine";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = compute_engineIcon;
  return node;
}

export function ContainerOptimizedOS(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ContainerOptimizedOS", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ContainerOptimizedOS";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_optimized_osIcon;
  return node;
}

export function Functions(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Functions", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Functions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = functionsIcon;
  return node;
}

export function GKEOnPrem(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "GKEOnPrem", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "GKEOnPrem";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = gke_on_premIcon;
  return node;
}

export function GPU(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "GPU", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "GPU";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = gpuIcon;
  return node;
}

export function KubernetesEngine(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "KubernetesEngine", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "KubernetesEngine";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kubernetes_engineIcon;
  return node;
}

export function OSConfigurationManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OSConfigurationManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "OSConfigurationManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = os_configuration_managementIcon;
  return node;
}

export function OSInventoryManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OSInventoryManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "OSInventoryManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = os_inventory_managementIcon;
  return node;
}

export function OSPatchManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OSPatchManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "OSPatchManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = os_patch_managementIcon;
  return node;
}

export function Run(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Run", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Run";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = runIcon;
  return node;
}

// Aliases
export const GAE = AppEngine;
export const GCE = ComputeEngine;
export const GCF = Functions;
export const GKE = KubernetesEngine;
export const CloudRun = Run;
