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

class _Compute extends _Oci {
  protected static override _type = "compute";
}

export class AutoscaleWhite extends _Compute {
  protected static _iconDataUrl = autoscale_whiteIcon;
}

export class Autoscale extends _Compute {
  protected static _iconDataUrl = autoscaleIcon;
}

export class BMWhite extends _Compute {
  protected static _iconDataUrl = bm_whiteIcon;
}

export class BM extends _Compute {
  protected static _iconDataUrl = bmIcon;
}

export class ContainerWhite extends _Compute {
  protected static _iconDataUrl = container_whiteIcon;
}

export class Container extends _Compute {
  protected static _iconDataUrl = containerIcon;
}

export class FunctionsWhite extends _Compute {
  protected static _iconDataUrl = functions_whiteIcon;
}

export class Functions extends _Compute {
  protected static _iconDataUrl = functionsIcon;
}

export class InstancePoolsWhite extends _Compute {
  protected static _iconDataUrl = instance_pools_whiteIcon;
}

export class InstancePools extends _Compute {
  protected static _iconDataUrl = instance_poolsIcon;
}

export class OCIRWhite extends _Compute {
  protected static _iconDataUrl = ocir_whiteIcon;
}

export class OCIR extends _Compute {
  protected static _iconDataUrl = ocirIcon;
}

export class OKEWhite extends _Compute {
  protected static _iconDataUrl = oke_whiteIcon;
}

export class OKE extends _Compute {
  protected static _iconDataUrl = okeIcon;
}

export class VMWhite extends _Compute {
  protected static _iconDataUrl = vm_whiteIcon;
}

export class VM extends _Compute {
  protected static _iconDataUrl = vmIcon;
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
