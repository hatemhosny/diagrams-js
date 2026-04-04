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

class _Compute extends _Gcp {
  protected static override _type = "compute";
}

export class AppEngine extends _Compute {
  protected static override _iconDataUrl = app_engineIcon;
}

export class BinaryAuthorization extends _Compute {
  protected static override _iconDataUrl = binary_authorizationIcon;
}

export class ComputeEngine extends _Compute {
  protected static override _iconDataUrl = compute_engineIcon;
}

export class ContainerOptimizedOS extends _Compute {
  protected static override _iconDataUrl = container_optimized_osIcon;
}

export class Functions extends _Compute {
  protected static override _iconDataUrl = functionsIcon;
}

export class GKEOnPrem extends _Compute {
  protected static override _iconDataUrl = gke_on_premIcon;
}

export class GPU extends _Compute {
  protected static override _iconDataUrl = gpuIcon;
}

export class KubernetesEngine extends _Compute {
  protected static override _iconDataUrl = kubernetes_engineIcon;
}

export class OSConfigurationManagement extends _Compute {
  protected static override _iconDataUrl = os_configuration_managementIcon;
}

export class OSInventoryManagement extends _Compute {
  protected static override _iconDataUrl = os_inventory_managementIcon;
}

export class OSPatchManagement extends _Compute {
  protected static override _iconDataUrl = os_patch_managementIcon;
}

export class Run extends _Compute {
  protected static override _iconDataUrl = runIcon;
}

// Aliases
export const GAE = AppEngine;
export const GCE = ComputeEngine;
export const GCF = Functions;
export const GKE = KubernetesEngine;
export const CloudRun = Run;
