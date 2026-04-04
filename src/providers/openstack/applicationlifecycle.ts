import { _Openstack } from "./index.js";
import freezerIcon from "../../../resources/openstack/applicationlifecycle/freezer.png";
import masakariIcon from "../../../resources/openstack/applicationlifecycle/masakari.png";
import muranoIcon from "../../../resources/openstack/applicationlifecycle/murano.png";
import solumIcon from "../../../resources/openstack/applicationlifecycle/solum.png";

class _Applicationlifecycle extends _Openstack {
  protected static override _type = "applicationlifecycle";
}

export class Freezer extends _Applicationlifecycle {
  protected static _iconDataUrl = freezerIcon;
}

export class Masakari extends _Applicationlifecycle {
  protected static _iconDataUrl = masakariIcon;
}

export class Murano extends _Applicationlifecycle {
  protected static _iconDataUrl = muranoIcon;
}

export class Solum extends _Applicationlifecycle {
  protected static _iconDataUrl = solumIcon;
}
