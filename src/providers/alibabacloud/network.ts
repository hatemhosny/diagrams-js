import { _Alibabacloud } from "./index.js";
import cdnIcon from "../../../resources/alibabacloud/network/cdn.png";
import cloud_enterprise_networkIcon from "../../../resources/alibabacloud/network/cloud-enterprise-network.png";
import elastic_ip_addressIcon from "../../../resources/alibabacloud/network/elastic-ip-address.png";
import express_connectIcon from "../../../resources/alibabacloud/network/express-connect.png";
import nat_gatewayIcon from "../../../resources/alibabacloud/network/nat-gateway.png";
import server_load_balancerIcon from "../../../resources/alibabacloud/network/server-load-balancer.png";
import smart_access_gatewayIcon from "../../../resources/alibabacloud/network/smart-access-gateway.png";
import virtual_private_cloudIcon from "../../../resources/alibabacloud/network/virtual-private-cloud.png";
import vpn_gatewayIcon from "../../../resources/alibabacloud/network/vpn-gateway.png";

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)._type = "network";
  return node;
}

export function Cdn(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Cdn", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cdnIcon;
  return node;
}

export function CloudEnterpriseNetwork(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CloudEnterpriseNetwork", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cloud_enterprise_networkIcon;
  return node;
}

export function ElasticIpAddress(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ElasticIpAddress", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = elastic_ip_addressIcon;
  return node;
}

export function ExpressConnect(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ExpressConnect", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = express_connectIcon;
  return node;
}

export function NatGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NatGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = nat_gatewayIcon;
  return node;
}

export function ServerLoadBalancer(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ServerLoadBalancer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = server_load_balancerIcon;
  return node;
}

export function SmartAccessGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "SmartAccessGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = smart_access_gatewayIcon;
  return node;
}

export function VirtualPrivateCloud(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VirtualPrivateCloud", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = virtual_private_cloudIcon;
  return node;
}

export function VpnGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VpnGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vpn_gatewayIcon;
  return node;
}

// Aliases
export const CEN = CloudEnterpriseNetwork;
export const EIP = ElasticIpAddress;
export const SLB = ServerLoadBalancer;
export const VPC = VirtualPrivateCloud;
