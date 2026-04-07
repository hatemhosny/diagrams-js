import { _Gcp } from "./index.js";
import armorIcon from "../../../resources/gcp/network/armor.png";
import cdnIcon from "../../../resources/gcp/network/cdn.png";
import cloud_idsIcon from "../../../resources/gcp/network/cloud-ids.png";
import dedicated_interconnectIcon from "../../../resources/gcp/network/dedicated-interconnect.png";
import dnsIcon from "../../../resources/gcp/network/dns.png";
import external_ip_addressesIcon from "../../../resources/gcp/network/external-ip-addresses.png";
import firewall_rulesIcon from "../../../resources/gcp/network/firewall-rules.png";
import load_balancingIcon from "../../../resources/gcp/network/load-balancing.png";
import natIcon from "../../../resources/gcp/network/nat.png";
import network_connectivity_centerIcon from "../../../resources/gcp/network/network-connectivity-center.png";
import network_intelligence_centerIcon from "../../../resources/gcp/network/network-intelligence-center.png";
import network_securityIcon from "../../../resources/gcp/network/network-security.png";
import network_tiersIcon from "../../../resources/gcp/network/network-tiers.png";
import network_topologyIcon from "../../../resources/gcp/network/network-topology.png";
import networkIcon from "../../../resources/gcp/network/network.png";
import partner_interconnectIcon from "../../../resources/gcp/network/partner-interconnect.png";
import premium_network_tierIcon from "../../../resources/gcp/network/premium-network-tier.png";
import private_service_connectIcon from "../../../resources/gcp/network/private-service-connect.png";
import routerIcon from "../../../resources/gcp/network/router.png";
import routesIcon from "../../../resources/gcp/network/routes.png";
import service_meshIcon from "../../../resources/gcp/network/service-mesh.png";
import standard_network_tierIcon from "../../../resources/gcp/network/standard-network-tier.png";
import traffic_directorIcon from "../../../resources/gcp/network/traffic-director.png";
import virtual_private_cloudIcon from "../../../resources/gcp/network/virtual-private-cloud.png";
import vpnIcon from "../../../resources/gcp/network/vpn.png";

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "network";
  return node;
}

export function Armor(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Armor", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = armorIcon;
  return node;
}

export function CDN(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CDN", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cdnIcon;
  return node;
}

export function CloudIDS(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CloudIDS", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_idsIcon;
  return node;
}

export function DedicatedInterconnect(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "DedicatedInterconnect", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dedicated_interconnectIcon;
  return node;
}

export function DNS(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "DNS", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dnsIcon;
  return node;
}

export function ExternalIpAddresses(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ExternalIpAddresses", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = external_ip_addressesIcon;
  return node;
}

export function FirewallRules(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "FirewallRules", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = firewall_rulesIcon;
  return node;
}

export function LoadBalancing(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancing", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = load_balancingIcon;
  return node;
}

export function NAT(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NAT", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = natIcon;
  return node;
}

export function NetworkConnectivityCenter(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkConnectivityCenter", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_connectivity_centerIcon;
  return node;
}

export function NetworkIntelligenceCenter(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkIntelligenceCenter", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_intelligence_centerIcon;
  return node;
}

export function NetworkSecurity(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkSecurity", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_securityIcon;
  return node;
}

export function NetworkTiers(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkTiers", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_tiersIcon;
  return node;
}

export function NetworkTopology(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkTopology", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_topologyIcon;
  return node;
}

export function Network(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Network", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = networkIcon;
  return node;
}

export function PartnerInterconnect(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "PartnerInterconnect", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = partner_interconnectIcon;
  return node;
}

export function PremiumNetworkTier(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "PremiumNetworkTier", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = premium_network_tierIcon;
  return node;
}

export function PrivateServiceConnect(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "PrivateServiceConnect", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = private_service_connectIcon;
  return node;
}

export function Router(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Router", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = routerIcon;
  return node;
}

export function Routes(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Routes", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = routesIcon;
  return node;
}

export function ServiceMesh(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ServiceMesh", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_meshIcon;
  return node;
}

export function StandardNetworkTier(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "StandardNetworkTier", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = standard_network_tierIcon;
  return node;
}

export function TrafficDirector(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "TrafficDirector", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = traffic_directorIcon;
  return node;
}

export function VirtualPrivateCloud(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VirtualPrivateCloud", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtual_private_cloudIcon;
  return node;
}

export function VPN(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPN", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpnIcon;
  return node;
}

// Aliases
export const IDS = CloudIDS;
export const PSC = PrivateServiceConnect;
export const VPC = VirtualPrivateCloud;
