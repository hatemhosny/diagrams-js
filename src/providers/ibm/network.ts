import { _Ibm } from "./index.js";
import bridgeIcon from "../../../resources/ibm/network/bridge.png";
import direct_linkIcon from "../../../resources/ibm/network/direct-link.png";
import enterpriseIcon from "../../../resources/ibm/network/enterprise.png";
import firewallIcon from "../../../resources/ibm/network/firewall.png";
import floating_ipIcon from "../../../resources/ibm/network/floating-ip.png";
import gatewayIcon from "../../../resources/ibm/network/gateway.png";
import internet_servicesIcon from "../../../resources/ibm/network/internet-services.png";
import load_balancer_listenerIcon from "../../../resources/ibm/network/load-balancer-listener.png";
import load_balancer_poolIcon from "../../../resources/ibm/network/load-balancer-pool.png";
import load_balancerIcon from "../../../resources/ibm/network/load-balancer.png";
import load_balancing_routingIcon from "../../../resources/ibm/network/load-balancing-routing.png";
import public_gatewayIcon from "../../../resources/ibm/network/public-gateway.png";
import regionIcon from "../../../resources/ibm/network/region.png";
import routerIcon from "../../../resources/ibm/network/router.png";
import rulesIcon from "../../../resources/ibm/network/rules.png";
import subnetIcon from "../../../resources/ibm/network/subnet.png";
import transit_gatewayIcon from "../../../resources/ibm/network/transit-gateway.png";
import vpcIcon from "../../../resources/ibm/network/vpc.png";
import vpn_connectionIcon from "../../../resources/ibm/network/vpn-connection.png";
import vpn_gatewayIcon from "../../../resources/ibm/network/vpn-gateway.png";
import vpn_policyIcon from "../../../resources/ibm/network/vpn-policy.png";

class _Network extends _Ibm {
  protected static override _type = "network";
}

export class Bridge extends _Network {
  protected static override _iconDataUrl = bridgeIcon;
}

export class DirectLink extends _Network {
  protected static override _iconDataUrl = direct_linkIcon;
}

export class Enterprise extends _Network {
  protected static override _iconDataUrl = enterpriseIcon;
}

export class Firewall extends _Network {
  protected static override _iconDataUrl = firewallIcon;
}

export class FloatingIp extends _Network {
  protected static override _iconDataUrl = floating_ipIcon;
}

export class Gateway extends _Network {
  protected static override _iconDataUrl = gatewayIcon;
}

export class InternetServices extends _Network {
  protected static override _iconDataUrl = internet_servicesIcon;
}

export class LoadBalancerListener extends _Network {
  protected static override _iconDataUrl = load_balancer_listenerIcon;
}

export class LoadBalancerPool extends _Network {
  protected static override _iconDataUrl = load_balancer_poolIcon;
}

export class LoadBalancer extends _Network {
  protected static override _iconDataUrl = load_balancerIcon;
}

export class LoadBalancingRouting extends _Network {
  protected static override _iconDataUrl = load_balancing_routingIcon;
}

export class PublicGateway extends _Network {
  protected static override _iconDataUrl = public_gatewayIcon;
}

export class Region extends _Network {
  protected static override _iconDataUrl = regionIcon;
}

export class Router extends _Network {
  protected static override _iconDataUrl = routerIcon;
}

export class Rules extends _Network {
  protected static override _iconDataUrl = rulesIcon;
}

export class Subnet extends _Network {
  protected static override _iconDataUrl = subnetIcon;
}

export class TransitGateway extends _Network {
  protected static override _iconDataUrl = transit_gatewayIcon;
}

export class Vpc extends _Network {
  protected static override _iconDataUrl = vpcIcon;
}

export class VpnConnection extends _Network {
  protected static override _iconDataUrl = vpn_connectionIcon;
}

export class VpnGateway extends _Network {
  protected static override _iconDataUrl = vpn_gatewayIcon;
}

export class VpnPolicy extends _Network {
  protected static override _iconDataUrl = vpn_policyIcon;
}
