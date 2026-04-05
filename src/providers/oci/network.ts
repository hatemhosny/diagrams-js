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

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label, options);
  (node as unknown as Record<string, unknown>)._type = "network";
  return node;
}

export function DrgWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "DrgWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = drg_whiteIcon;
  return node;
}

export function Drg(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Drg", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = drgIcon;
  return node;
}

export function FirewallWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "FirewallWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = firewall_whiteIcon;
  return node;
}

export function Firewall(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Firewall", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = firewallIcon;
  return node;
}

export function InternetGatewayWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "InternetGatewayWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = internet_gateway_whiteIcon;
  return node;
}

export function InternetGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "InternetGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = internet_gatewayIcon;
  return node;
}

export function LoadBalancerWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancerWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = load_balancer_whiteIcon;
  return node;
}

export function LoadBalancer(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = load_balancerIcon;
  return node;
}

export function RouteTableWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "RouteTableWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = route_table_whiteIcon;
  return node;
}

export function RouteTable(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "RouteTable", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = route_tableIcon;
  return node;
}

export function SecurityListsWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "SecurityListsWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = security_lists_whiteIcon;
  return node;
}

export function SecurityLists(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "SecurityLists", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = security_listsIcon;
  return node;
}

export function ServiceGatewayWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ServiceGatewayWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = service_gateway_whiteIcon;
  return node;
}

export function ServiceGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ServiceGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = service_gatewayIcon;
  return node;
}

export function VcnWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VcnWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vcn_whiteIcon;
  return node;
}

export function Vcn(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Vcn", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vcnIcon;
  return node;
}
