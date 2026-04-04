import { _Openstack } from "./index.js";
import tricircleIcon from "../../../resources/openstack/multiregion/tricircle.png";

class _Multiregion extends _Openstack {
  protected static override _type = "multiregion";
}

export class Tricircle extends _Multiregion {
  protected static _iconDataUrl = tricircleIcon;
}
