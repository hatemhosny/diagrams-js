import { _Openstack } from "./index.js";
import cyborgIcon from "../../../resources/openstack/baremetal/cyborg.png";
import ironicIcon from "../../../resources/openstack/baremetal/ironic.png";

class _Baremetal extends _Openstack {
  protected static override _type = "baremetal";
}

export class Cyborg extends _Baremetal {
  protected static _iconDataUrl = cyborgIcon;
}

export class Ironic extends _Baremetal {
  protected static _iconDataUrl = ironicIcon;
}
