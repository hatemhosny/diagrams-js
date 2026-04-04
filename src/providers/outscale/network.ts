import { _Outscale } from "./index.js";
import client_vpnIcon from "../../../resources/outscale/network/client-vpn.png";
import internet_serviceIcon from "../../../resources/outscale/network/internet-service.png";
import load_balancerIcon from "../../../resources/outscale/network/load-balancer.png";
import nat_serviceIcon from "../../../resources/outscale/network/nat-service.png";
import netIcon from "../../../resources/outscale/network/net.png";
import site_to_site_vpngIcon from "../../../resources/outscale/network/site-to-site-vpng.png";

class _Network extends _Outscale {
  protected static override _type = "network";
}

export class ClientVpn extends _Network {
  protected static override _iconDataUrl = client_vpnIcon;
}

export class InternetService extends _Network {
  protected static override _iconDataUrl = internet_serviceIcon;
}

export class LoadBalancer extends _Network {
  protected static override _iconDataUrl = load_balancerIcon;
}

export class NatService extends _Network {
  protected static override _iconDataUrl = nat_serviceIcon;
}

export class Net extends _Network {
  protected static override _iconDataUrl = netIcon;
}

export class SiteToSiteVpng extends _Network {
  protected static override _iconDataUrl = site_to_site_vpngIcon;
}
