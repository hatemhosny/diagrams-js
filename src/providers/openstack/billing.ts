import { _Openstack } from "./index.js";
import cloudkittyIcon from "../../../resources/openstack/billing/cloudkitty.png";

class _Billing extends _Openstack {
  protected static override _type = "billing";
}

export class Cloudkitty extends _Billing {
  protected static _iconDataUrl = cloudkittyIcon;
}

// Aliases
export const CloudKitty = Cloudkitty;
