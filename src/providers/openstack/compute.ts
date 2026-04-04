import { _Openstack } from "./index.js";
import novaIcon from "../../../resources/openstack/compute/nova.png";
import qinlingIcon from "../../../resources/openstack/compute/qinling.png";
import zunIcon from "../../../resources/openstack/compute/zun.png";

class _Compute extends _Openstack {
  protected static override _type = "compute";
}

export class Nova extends _Compute {
  protected static override _iconDataUrl = novaIcon;
}

export class Qinling extends _Compute {
  protected static override _iconDataUrl = qinlingIcon;
}

export class Zun extends _Compute {
  protected static override _iconDataUrl = zunIcon;
}
