import { _Openstack } from "./index.js";
import tackerIcon from "../../../resources/openstack/nfv/tacker.png";

class _Nfv extends _Openstack {
  protected static override _type = "nfv";
}

export class Tacker extends _Nfv {
  protected static override _iconDataUrl = tackerIcon;
}
