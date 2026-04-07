import { _Oci } from "./index.js";
import backbone_whiteIcon from "../../../resources/oci/connectivity/backbone-white.png";
import backboneIcon from "../../../resources/oci/connectivity/backbone.png";
import cdn_whiteIcon from "../../../resources/oci/connectivity/cdn-white.png";
import cdnIcon from "../../../resources/oci/connectivity/cdn.png";
import customer_datacenterIcon from "../../../resources/oci/connectivity/customer-datacenter.png";
import customer_datacntr_whiteIcon from "../../../resources/oci/connectivity/customer-datacntr-white.png";
import customer_premises_whiteIcon from "../../../resources/oci/connectivity/customer-premises-white.png";
import customer_premisesIcon from "../../../resources/oci/connectivity/customer-premises.png";
import disconnected_regions_whiteIcon from "../../../resources/oci/connectivity/disconnected-regions-white.png";
import disconnected_regionsIcon from "../../../resources/oci/connectivity/disconnected-regions.png";
import dns_whiteIcon from "../../../resources/oci/connectivity/dns-white.png";
import dnsIcon from "../../../resources/oci/connectivity/dns.png";
import fast_connect_whiteIcon from "../../../resources/oci/connectivity/fast-connect-white.png";
import fast_connectIcon from "../../../resources/oci/connectivity/fast-connect.png";
import nat_gateway_whiteIcon from "../../../resources/oci/connectivity/nat-gateway-white.png";
import nat_gatewayIcon from "../../../resources/oci/connectivity/nat-gateway.png";
import vpn_whiteIcon from "../../../resources/oci/connectivity/vpn-white.png";
import vpnIcon from "../../../resources/oci/connectivity/vpn.png";

function _Connectivity(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "connectivity";
  return node;
}

export function BackboneWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "BackboneWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = backbone_whiteIcon;
  return node;
}

export function Backbone(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "Backbone", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = backboneIcon;
  return node;
}

export function CDNWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "CDNWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cdn_whiteIcon;
  return node;
}

export function CDN(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "CDN", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cdnIcon;
  return node;
}

export function CustomerDatacenter(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "CustomerDatacenter", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = customer_datacenterIcon;
  return node;
}

export function CustomerDatacntrWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "CustomerDatacntrWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = customer_datacntr_whiteIcon;
  return node;
}

export function CustomerPremisesWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "CustomerPremisesWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = customer_premises_whiteIcon;
  return node;
}

export function CustomerPremises(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "CustomerPremises", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = customer_premisesIcon;
  return node;
}

export function DisconnectedRegionsWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "DisconnectedRegionsWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = disconnected_regions_whiteIcon;
  return node;
}

export function DisconnectedRegions(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "DisconnectedRegions", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = disconnected_regionsIcon;
  return node;
}

export function DNSWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "DNSWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dns_whiteIcon;
  return node;
}

export function DNS(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "DNS", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dnsIcon;
  return node;
}

export function FastConnectWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "FastConnectWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fast_connect_whiteIcon;
  return node;
}

export function FastConnect(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "FastConnect", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fast_connectIcon;
  return node;
}

export function NATGatewayWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "NATGatewayWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nat_gateway_whiteIcon;
  return node;
}

export function NATGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "NATGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nat_gatewayIcon;
  return node;
}

export function VPNWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "VPNWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpn_whiteIcon;
  return node;
}

export function VPN(label?: string, options?: Record<string, unknown>) {
  const node = _Connectivity(label ?? "VPN", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpnIcon;
  return node;
}
