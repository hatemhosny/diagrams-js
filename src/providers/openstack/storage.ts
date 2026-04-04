import { _Openstack } from "./index.js";
import cinderIcon from "../../../resources/openstack/storage/cinder.png";
import manilaIcon from "../../../resources/openstack/storage/manila.png";
import swiftIcon from "../../../resources/openstack/storage/swift.png";

class _Storage extends _Openstack {
  protected static override _type = "storage";
}

export class Cinder extends _Storage {
  protected static override _iconDataUrl = cinderIcon;
}

export class Manila extends _Storage {
  protected static override _iconDataUrl = manilaIcon;
}

export class Swift extends _Storage {
  protected static override _iconDataUrl = swiftIcon;
}
