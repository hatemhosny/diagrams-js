import { _Outscale } from "./index.js";
import computeIcon from "../../../resources/outscale/compute/compute.png";
import direct_connectIcon from "../../../resources/outscale/compute/direct-connect.png";

class _Compute extends _Outscale {
  protected static override _type = "compute";
}

export class Compute extends _Compute {
  protected static _iconDataUrl = computeIcon;
}

export class DirectConnect extends _Compute {
  protected static _iconDataUrl = direct_connectIcon;
}

// Aliases
export const OSC = Compute;
