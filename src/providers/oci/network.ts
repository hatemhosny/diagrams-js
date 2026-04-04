import { _Oci } from "./index.js";
import drg_whiteIcon from "../../../resources/oci/network/drg-white.png";
import drgIcon from "../../../resources/oci/network/drg.png";
import firewall_whiteIcon from "../../../resources/oci/network/firewall-white.png";
import firewallIcon from "../../../resources/oci/network/firewall.png";
import internet_gateway_whiteIcon from "../../../resources/oci/network/internet-gateway-white.png";
import internet_gatewayIcon from "../../../resources/oci/network/internet-gateway.png";
import load_balancer_whiteIcon from "../../../resources/oci/network/load-balancer-white.png";
import load_balancerIcon from "../../../resources/oci/network/load-balancer.png";
import route_table_whiteIcon from "../../../resources/oci/network/route-table-white.png";
import route_tableIcon from "../../../resources/oci/network/route-table.png";
import security_lists_whiteIcon from "../../../resources/oci/network/security-lists-white.png";
import security_listsIcon from "../../../resources/oci/network/security-lists.png";
import service_gateway_whiteIcon from "../../../resources/oci/network/service-gateway-white.png";
import service_gatewayIcon from "../../../resources/oci/network/service-gateway.png";
import vcn_whiteIcon from "../../../resources/oci/network/vcn-white.png";
import vcnIcon from "../../../resources/oci/network/vcn.png";

class _Network extends _Oci {
  protected static override _type = "network";
}

export class DrgWhite extends _Network {
  protected static _iconDataUrl = drg_whiteIcon;
}

export class Drg extends _Network {
  protected static _iconDataUrl = drgIcon;
}

export class FirewallWhite extends _Network {
  protected static _iconDataUrl = firewall_whiteIcon;
}

export class Firewall extends _Network {
  protected static _iconDataUrl = firewallIcon;
}

export class InternetGatewayWhite extends _Network {
  protected static _iconDataUrl = internet_gateway_whiteIcon;
}

export class InternetGateway extends _Network {
  protected static _iconDataUrl = internet_gatewayIcon;
}

export class LoadBalancerWhite extends _Network {
  protected static _iconDataUrl = load_balancer_whiteIcon;
}

export class LoadBalancer extends _Network {
  protected static _iconDataUrl = load_balancerIcon;
}

export class RouteTableWhite extends _Network {
  protected static _iconDataUrl = route_table_whiteIcon;
}

export class RouteTable extends _Network {
  protected static _iconDataUrl = route_tableIcon;
}

export class SecurityListsWhite extends _Network {
  protected static _iconDataUrl = security_lists_whiteIcon;
}

export class SecurityLists extends _Network {
  protected static _iconDataUrl = security_listsIcon;
}

export class ServiceGatewayWhite extends _Network {
  protected static _iconDataUrl = service_gateway_whiteIcon;
}

export class ServiceGateway extends _Network {
  protected static _iconDataUrl = service_gatewayIcon;
}

export class VcnWhite extends _Network {
  protected static _iconDataUrl = vcn_whiteIcon;
}

export class Vcn extends _Network {
  protected static _iconDataUrl = vcnIcon;
}
