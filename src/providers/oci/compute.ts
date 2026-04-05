import { _Oci } from "./index.js";
import autoscale_whiteIcon from "../../../resources/oci/compute/autoscale-white.png";
import autoscaleIcon from "../../../resources/oci/compute/autoscale.png";
import bm_whiteIcon from "../../../resources/oci/compute/bm-white.png";
import bmIcon from "../../../resources/oci/compute/bm.png";
import container_whiteIcon from "../../../resources/oci/compute/container-white.png";
import containerIcon from "../../../resources/oci/compute/container.png";
import functions_whiteIcon from "../../../resources/oci/compute/functions-white.png";
import functionsIcon from "../../../resources/oci/compute/functions.png";
import instance_pools_whiteIcon from "../../../resources/oci/compute/instance-pools-white.png";
import instance_poolsIcon from "../../../resources/oci/compute/instance-pools.png";
import ocir_whiteIcon from "../../../resources/oci/compute/ocir-white.png";
import ocirIcon from "../../../resources/oci/compute/ocir.png";
import oke_whiteIcon from "../../../resources/oci/compute/oke-white.png";
import okeIcon from "../../../resources/oci/compute/oke.png";
import vm_whiteIcon from "../../../resources/oci/compute/vm-white.png";
import vmIcon from "../../../resources/oci/compute/vm.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label, options);
  (node as unknown as Record<string, unknown>)._type = "compute";
  return node;
}

export function AutoscaleWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "AutoscaleWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = autoscale_whiteIcon;
  return node;
}

export function Autoscale(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Autoscale", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = autoscaleIcon;
  return node;
}

export function BMWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "BMWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = bm_whiteIcon;
  return node;
}

export function BM(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "BM", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = bmIcon;
  return node;
}

export function ContainerWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ContainerWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = container_whiteIcon;
  return node;
}

export function Container(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Container", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = containerIcon;
  return node;
}

export function FunctionsWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "FunctionsWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = functions_whiteIcon;
  return node;
}

export function Functions(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Functions", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = functionsIcon;
  return node;
}

export function InstancePoolsWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "InstancePoolsWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = instance_pools_whiteIcon;
  return node;
}

export function InstancePools(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "InstancePools", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = instance_poolsIcon;
  return node;
}

export function OCIRWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OCIRWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ocir_whiteIcon;
  return node;
}

export function OCIR(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OCIR", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ocirIcon;
  return node;
}

export function OKEWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OKEWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = oke_whiteIcon;
  return node;
}

export function OKE(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OKE", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = okeIcon;
  return node;
}

export function VMWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VMWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vm_whiteIcon;
  return node;
}

export function VM(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VM", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vmIcon;
  return node;
}

// Aliases
export const VirtualMachine = VM;
export const VirtualMachineWhite = VMWhite;
export const BareMetal = BM;
export const BareMetalWhite = BMWhite;
export const OCIRegistry = OCIR;
export const OCIRegistryWhite = OCIRWhite;
export const ContainerEngine = OKE;
export const ContainerEngineWhite = OKEWhite;
