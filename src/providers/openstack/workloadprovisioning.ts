import { _Openstack } from "./index.js";
import magnumIcon from "../../../resources/openstack/workloadprovisioning/magnum.png";
import saharaIcon from "../../../resources/openstack/workloadprovisioning/sahara.png";
import troveIcon from "../../../resources/openstack/workloadprovisioning/trove.png";

class _Workloadprovisioning extends _Openstack {
  protected static override _type = "workloadprovisioning";
}

export class Magnum extends _Workloadprovisioning {
  protected static _iconDataUrl = magnumIcon;
}

export class Sahara extends _Workloadprovisioning {
  protected static _iconDataUrl = saharaIcon;
}

export class Trove extends _Workloadprovisioning {
  protected static _iconDataUrl = troveIcon;
}
