import { _Openstack } from "./index.js";
import designateIcon from "../../../resources/openstack/networking/designate.png";
import neutronIcon from "../../../resources/openstack/networking/neutron.png";
import octaviaIcon from "../../../resources/openstack/networking/octavia.png";

class _Networking extends _Openstack {
  protected static override _type = "networking";
}

export class Designate extends _Networking {
  protected static override _iconDataUrl = designateIcon;
}

export class Neutron extends _Networking {
  protected static override _iconDataUrl = neutronIcon;
}

export class Octavia extends _Networking {
  protected static override _iconDataUrl = octaviaIcon;
}
