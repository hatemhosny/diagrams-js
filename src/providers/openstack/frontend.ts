import { _Openstack } from "./index.js";
import horizonIcon from "../../../resources/openstack/frontend/horizon.png";

class _Frontend extends _Openstack {
  protected static override _type = "frontend";
}

export class Horizon extends _Frontend {
  protected static override _iconDataUrl = horizonIcon;
}
