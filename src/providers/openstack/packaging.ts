import { _Openstack } from "./index.js";
import lociIcon from "../../../resources/openstack/packaging/loci.png";
import puppetIcon from "../../../resources/openstack/packaging/puppet.png";
import rpmIcon from "../../../resources/openstack/packaging/rpm.png";

class _Packaging extends _Openstack {
  protected static override _type = "packaging";
}

export class LOCI extends _Packaging {
  protected static override _iconDataUrl = lociIcon;
}

export class Puppet extends _Packaging {
  protected static override _iconDataUrl = puppetIcon;
}

export class RPM extends _Packaging {
  protected static override _iconDataUrl = rpmIcon;
}
