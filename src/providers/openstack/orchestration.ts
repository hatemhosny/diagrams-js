import { _Openstack } from "./index.js";
import blazarIcon from "../../../resources/openstack/orchestration/blazar.png";
import heatIcon from "../../../resources/openstack/orchestration/heat.png";
import mistralIcon from "../../../resources/openstack/orchestration/mistral.png";
import senlinIcon from "../../../resources/openstack/orchestration/senlin.png";
import zaqarIcon from "../../../resources/openstack/orchestration/zaqar.png";

class _Orchestration extends _Openstack {
  protected static override _type = "orchestration";
}

export class Blazar extends _Orchestration {
  protected static _iconDataUrl = blazarIcon;
}

export class Heat extends _Orchestration {
  protected static _iconDataUrl = heatIcon;
}

export class Mistral extends _Orchestration {
  protected static _iconDataUrl = mistralIcon;
}

export class Senlin extends _Orchestration {
  protected static _iconDataUrl = senlinIcon;
}

export class Zaqar extends _Orchestration {
  protected static _iconDataUrl = zaqarIcon;
}
