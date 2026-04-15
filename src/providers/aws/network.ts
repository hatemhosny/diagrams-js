import { _Aws } from "./index.js";
import api_gateway_endpointIcon from "../../../resources/aws/network/api-gateway-endpoint.png";
import api_gatewayIcon from "../../../resources/aws/network/api-gateway.png";
import app_meshIcon from "../../../resources/aws/network/app-mesh.png";
import client_vpnIcon from "../../../resources/aws/network/client-vpn.png";
import cloud_mapIcon from "../../../resources/aws/network/cloud-map.png";
import cloudfront_download_distributionIcon from "../../../resources/aws/network/cloudfront-download-distribution.png";
import cloudfront_edge_locationIcon from "../../../resources/aws/network/cloudfront-edge-location.png";
import cloudfront_streaming_distributionIcon from "../../../resources/aws/network/cloudfront-streaming-distribution.png";
import cloudfrontIcon from "../../../resources/aws/network/cloudfront.png";
import direct_connectIcon from "../../../resources/aws/network/direct-connect.png";
import elastic_load_balancingIcon from "../../../resources/aws/network/elastic-load-balancing.png";
import elb_application_load_balancerIcon from "../../../resources/aws/network/elb-application-load-balancer.png";
import elb_classic_load_balancerIcon from "../../../resources/aws/network/elb-classic-load-balancer.png";
import elb_network_load_balancerIcon from "../../../resources/aws/network/elb-network-load-balancer.png";
import endpointIcon from "../../../resources/aws/network/endpoint.png";
import global_acceleratorIcon from "../../../resources/aws/network/global-accelerator.png";
import internet_gatewayIcon from "../../../resources/aws/network/internet-gateway.png";
import naclIcon from "../../../resources/aws/network/nacl.png";
import nat_gatewayIcon from "../../../resources/aws/network/nat-gateway.png";
import network_firewallIcon from "../../../resources/aws/network/network-firewall.png";
import networking_and_content_deliveryIcon from "../../../resources/aws/network/networking-and-content-delivery.png";
import private_subnetIcon from "../../../resources/aws/network/private-subnet.png";
import privatelinkIcon from "../../../resources/aws/network/privatelink.png";
import public_subnetIcon from "../../../resources/aws/network/public-subnet.png";
import route_53_hosted_zoneIcon from "../../../resources/aws/network/route-53-hosted-zone.png";
import route_53Icon from "../../../resources/aws/network/route-53.png";
import route_tableIcon from "../../../resources/aws/network/route-table.png";
import site_to_site_vpnIcon from "../../../resources/aws/network/site-to-site-vpn.png";
import transit_gateway_attachmentIcon from "../../../resources/aws/network/transit-gateway-attachment.png";
import transit_gatewayIcon from "../../../resources/aws/network/transit-gateway.png";
import vpc_customer_gatewayIcon from "../../../resources/aws/network/vpc-customer-gateway.png";
import vpc_elastic_network_adapterIcon from "../../../resources/aws/network/vpc-elastic-network-adapter.png";
import vpc_elastic_network_interfaceIcon from "../../../resources/aws/network/vpc-elastic-network-interface.png";
import vpc_flow_logsIcon from "../../../resources/aws/network/vpc-flow-logs.png";
import vpc_peeringIcon from "../../../resources/aws/network/vpc-peering.png";
import vpc_routerIcon from "../../../resources/aws/network/vpc-router.png";
import vpc_traffic_mirroringIcon from "../../../resources/aws/network/vpc-traffic-mirroring.png";
import vpcIcon from "../../../resources/aws/network/vpc.png";
import vpn_connectionIcon from "../../../resources/aws/network/vpn-connection.png";
import vpn_gatewayIcon from "../../../resources/aws/network/vpn-gateway.png";

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "network";
  return node;
}

export function APIGatewayEndpoint(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "APIGatewayEndpoint", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIGatewayEndpoint";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_gateway_endpointIcon;
  return node;
}

export function APIGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "APIGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_gatewayIcon;
  return node;
}

export function AppMesh(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "AppMesh", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppMesh";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_meshIcon;
  return node;
}

export function ClientVpn(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ClientVpn", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ClientVpn";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = client_vpnIcon;
  return node;
}

export function CloudMap(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CloudMap", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CloudMap";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_mapIcon;
  return node;
}

export function CloudFrontDownloadDistribution(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CloudFrontDownloadDistribution", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CloudFrontDownloadDistribution";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    cloudfront_download_distributionIcon;
  return node;
}

export function CloudFrontEdgeLocation(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CloudFrontEdgeLocation", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CloudFrontEdgeLocation";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudfront_edge_locationIcon;
  return node;
}

export function CloudFrontStreamingDistribution(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CloudFrontStreamingDistribution", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CloudFrontStreamingDistribution";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    cloudfront_streaming_distributionIcon;
  return node;
}

export function CloudFront(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CloudFront", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CloudFront";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudfrontIcon;
  return node;
}

export function DirectConnect(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "DirectConnect", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DirectConnect";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = direct_connectIcon;
  return node;
}

export function ElasticLoadBalancing(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ElasticLoadBalancing", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ElasticLoadBalancing";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_load_balancingIcon;
  return node;
}

export function ElbApplicationLoadBalancer(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ElbApplicationLoadBalancer", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ElbApplicationLoadBalancer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elb_application_load_balancerIcon;
  return node;
}

export function ElbClassicLoadBalancer(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ElbClassicLoadBalancer", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ElbClassicLoadBalancer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elb_classic_load_balancerIcon;
  return node;
}

export function ElbNetworkLoadBalancer(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ElbNetworkLoadBalancer", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ElbNetworkLoadBalancer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elb_network_load_balancerIcon;
  return node;
}

export function Endpoint(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Endpoint", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Endpoint";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = endpointIcon;
  return node;
}

export function GlobalAccelerator(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "GlobalAccelerator", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "GlobalAccelerator";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = global_acceleratorIcon;
  return node;
}

export function InternetGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "InternetGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "InternetGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = internet_gatewayIcon;
  return node;
}

export function Nacl(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Nacl", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Nacl";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = naclIcon;
  return node;
}

export function NATGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NATGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "NATGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nat_gatewayIcon;
  return node;
}

export function NetworkFirewall(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkFirewall", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "NetworkFirewall";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_firewallIcon;
  return node;
}

export function NetworkingAndContentDelivery(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkingAndContentDelivery", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "NetworkingAndContentDelivery";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    networking_and_content_deliveryIcon;
  return node;
}

export function PrivateSubnet(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "PrivateSubnet", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PrivateSubnet";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = private_subnetIcon;
  return node;
}

export function Privatelink(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Privatelink", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Privatelink";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = privatelinkIcon;
  return node;
}

export function PublicSubnet(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "PublicSubnet", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PublicSubnet";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = public_subnetIcon;
  return node;
}

export function Route53HostedZone(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Route53HostedZone", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Route53HostedZone";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = route_53_hosted_zoneIcon;
  return node;
}

export function Route53(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Route53", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Route53";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = route_53Icon;
  return node;
}

export function RouteTable(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "RouteTable", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RouteTable";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = route_tableIcon;
  return node;
}

export function SiteToSiteVpn(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "SiteToSiteVpn", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SiteToSiteVpn";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = site_to_site_vpnIcon;
  return node;
}

export function TransitGatewayAttachment(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "TransitGatewayAttachment", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "TransitGatewayAttachment";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = transit_gateway_attachmentIcon;
  return node;
}

export function TransitGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "TransitGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "TransitGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = transit_gatewayIcon;
  return node;
}

export function VPCCustomerGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPCCustomerGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VPCCustomerGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpc_customer_gatewayIcon;
  return node;
}

export function VPCElasticNetworkAdapter(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPCElasticNetworkAdapter", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VPCElasticNetworkAdapter";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpc_elastic_network_adapterIcon;
  return node;
}

export function VPCElasticNetworkInterface(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPCElasticNetworkInterface", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VPCElasticNetworkInterface";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpc_elastic_network_interfaceIcon;
  return node;
}

export function VPCFlowLogs(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPCFlowLogs", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VPCFlowLogs";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpc_flow_logsIcon;
  return node;
}

export function VPCPeering(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPCPeering", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VPCPeering";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpc_peeringIcon;
  return node;
}

export function VPCRouter(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPCRouter", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VPCRouter";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpc_routerIcon;
  return node;
}

export function VPCTrafficMirroring(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPCTrafficMirroring", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VPCTrafficMirroring";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpc_traffic_mirroringIcon;
  return node;
}

export function VPC(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPC", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VPC";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpcIcon;
  return node;
}

export function VpnConnection(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VpnConnection", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VpnConnection";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpn_connectionIcon;
  return node;
}

export function VpnGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VpnGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VpnGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpn_gatewayIcon;
  return node;
}

// Aliases
export const CF = CloudFront;
export const ELB = ElasticLoadBalancing;
export const ALB = ElbApplicationLoadBalancer;
export const CLB = ElbClassicLoadBalancer;
export const NLB = ElbNetworkLoadBalancer;
export const GAX = GlobalAccelerator;
export const IGW = InternetGateway;
export const TGW = TransitGateway;
export const TGWAttach = TransitGatewayAttachment;
