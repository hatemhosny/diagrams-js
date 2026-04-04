import { _Generic } from "./index.js";
import firewallIcon from "../../../resources/generic/network/firewall.png";
import routerIcon from "../../../resources/generic/network/router.png";
import subnetIcon from "../../../resources/generic/network/subnet.png";
import switchIcon from "../../../resources/generic/network/switch.png";
import vpnIcon from "../../../resources/generic/network/vpn.png";

class _Network extends _Generic {
  protected static override _type = "network";
}

export class Firewall extends _Network {
  protected static override _iconDataUrl = firewallIcon;
}

export class Router extends _Network {
  protected static override _iconDataUrl = routerIcon;
}

export class Subnet extends _Network {
  protected static override _iconDataUrl = subnetIcon;
}

export class Switch extends _Network {
  protected static override _iconDataUrl = switchIcon;
}

export class VPN extends _Network {
  protected static override _iconDataUrl = vpnIcon;
}
