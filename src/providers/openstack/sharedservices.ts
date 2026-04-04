import { _Openstack } from "./index.js";
import barbicanIcon from "../../../resources/openstack/sharedservices/barbican.png";
import glanceIcon from "../../../resources/openstack/sharedservices/glance.png";
import karborIcon from "../../../resources/openstack/sharedservices/karbor.png";
import keystoneIcon from "../../../resources/openstack/sharedservices/keystone.png";
import searchlightIcon from "../../../resources/openstack/sharedservices/searchlight.png";

class _Sharedservices extends _Openstack {
  protected static override _type = "sharedservices";
}

export class Barbican extends _Sharedservices {
  protected static _iconDataUrl = barbicanIcon;
}

export class Glance extends _Sharedservices {
  protected static _iconDataUrl = glanceIcon;
}

export class Karbor extends _Sharedservices {
  protected static _iconDataUrl = karborIcon;
}

export class Keystone extends _Sharedservices {
  protected static _iconDataUrl = keystoneIcon;
}

export class Searchlight extends _Sharedservices {
  protected static _iconDataUrl = searchlightIcon;
}
