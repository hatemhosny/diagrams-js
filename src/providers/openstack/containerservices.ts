import { _Openstack } from "./index.js";
import kuryrIcon from "../../../resources/openstack/containerservices/kuryr.png";

class _Containerservices extends _Openstack {
  protected static override _type = "containerservices";
}

export class Kuryr extends _Containerservices {
  protected static _iconDataUrl = kuryrIcon;
}
