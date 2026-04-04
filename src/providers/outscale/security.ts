import { _Outscale } from "./index.js";
import firewallIcon from "../../../resources/outscale/security/firewall.png";
import identity_and_access_managementIcon from "../../../resources/outscale/security/identity-and-access-management.png";

class _Security extends _Outscale {
  protected static override _type = "security";
}

export class Firewall extends _Security {
  protected static override _iconDataUrl = firewallIcon;
}

export class IdentityAndAccessManagement extends _Security {
  protected static override _iconDataUrl = identity_and_access_managementIcon;
}
