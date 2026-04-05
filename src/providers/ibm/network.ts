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

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)._type = "network";
  return node;
}

export function Bridge(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Bridge", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = bridgeIcon;
  return node;
}

export function DirectLink(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "DirectLink", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = direct_linkIcon;
  return node;
}

export function Enterprise(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Enterprise", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = enterpriseIcon;
  return node;
}

export function Firewall(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Firewall", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = firewallIcon;
  return node;
}

export function FloatingIp(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "FloatingIp", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = floating_ipIcon;
  return node;
}

export function Gateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Gateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = gatewayIcon;
  return node;
}

export function InternetServices(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "InternetServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = internet_servicesIcon;
  return node;
}

export function LoadBalancerListener(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancerListener", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = load_balancer_listenerIcon;
  return node;
}

export function LoadBalancerPool(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancerPool", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = load_balancer_poolIcon;
  return node;
}

export function LoadBalancer(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = load_balancerIcon;
  return node;
}

export function LoadBalancingRouting(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancingRouting", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = load_balancing_routingIcon;
  return node;
}

export function PublicGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "PublicGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = public_gatewayIcon;
  return node;
}

export function Region(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Region", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = regionIcon;
  return node;
}

export function Router(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Router", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = routerIcon;
  return node;
}

export function Rules(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Rules", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = rulesIcon;
  return node;
}

export function Subnet(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Subnet", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = subnetIcon;
  return node;
}

export function TransitGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "TransitGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = transit_gatewayIcon;
  return node;
}

export function Vpc(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Vpc", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vpcIcon;
  return node;
}

export function VpnConnection(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VpnConnection", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vpn_connectionIcon;
  return node;
}

export function VpnGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VpnGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vpn_gatewayIcon;
  return node;
}

export function VpnPolicy(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VpnPolicy", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vpn_policyIcon;
  return node;
}
