import { _Openstack } from "./index.js";
import ec2apiIcon from "../../../resources/openstack/apiproxies/ec2api.png";

class _Apiproxies extends _Openstack {
  protected static override _type = "apiproxies";
}

export class EC2API extends _Apiproxies {
  protected static override _iconDataUrl = ec2apiIcon;
}
