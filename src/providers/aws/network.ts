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

class _Network extends _Aws {
  protected static override _type = "network";
}

export class APIGatewayEndpoint extends _Network {
  protected static _iconDataUrl = api_gateway_endpointIcon;
}

export class APIGateway extends _Network {
  protected static _iconDataUrl = api_gatewayIcon;
}

export class AppMesh extends _Network {
  protected static _iconDataUrl = app_meshIcon;
}

export class ClientVpn extends _Network {
  protected static _iconDataUrl = client_vpnIcon;
}

export class CloudMap extends _Network {
  protected static _iconDataUrl = cloud_mapIcon;
}

export class CloudFrontDownloadDistribution extends _Network {
  protected static _iconDataUrl = cloudfront_download_distributionIcon;
}

export class CloudFrontEdgeLocation extends _Network {
  protected static _iconDataUrl = cloudfront_edge_locationIcon;
}

export class CloudFrontStreamingDistribution extends _Network {
  protected static _iconDataUrl = cloudfront_streaming_distributionIcon;
}

export class CloudFront extends _Network {
  protected static _iconDataUrl = cloudfrontIcon;
}

export class DirectConnect extends _Network {
  protected static _iconDataUrl = direct_connectIcon;
}

export class ElasticLoadBalancing extends _Network {
  protected static _iconDataUrl = elastic_load_balancingIcon;
}

export class ElbApplicationLoadBalancer extends _Network {
  protected static _iconDataUrl = elb_application_load_balancerIcon;
}

export class ElbClassicLoadBalancer extends _Network {
  protected static _iconDataUrl = elb_classic_load_balancerIcon;
}

export class ElbNetworkLoadBalancer extends _Network {
  protected static _iconDataUrl = elb_network_load_balancerIcon;
}

export class Endpoint extends _Network {
  protected static _iconDataUrl = endpointIcon;
}

export class GlobalAccelerator extends _Network {
  protected static _iconDataUrl = global_acceleratorIcon;
}

export class InternetGateway extends _Network {
  protected static _iconDataUrl = internet_gatewayIcon;
}

export class Nacl extends _Network {
  protected static _iconDataUrl = naclIcon;
}

export class NATGateway extends _Network {
  protected static _iconDataUrl = nat_gatewayIcon;
}

export class NetworkFirewall extends _Network {
  protected static _iconDataUrl = network_firewallIcon;
}

export class NetworkingAndContentDelivery extends _Network {
  protected static _iconDataUrl = networking_and_content_deliveryIcon;
}

export class PrivateSubnet extends _Network {
  protected static _iconDataUrl = private_subnetIcon;
}

export class Privatelink extends _Network {
  protected static _iconDataUrl = privatelinkIcon;
}

export class PublicSubnet extends _Network {
  protected static _iconDataUrl = public_subnetIcon;
}

export class Route53HostedZone extends _Network {
  protected static _iconDataUrl = route_53_hosted_zoneIcon;
}

export class Route53 extends _Network {
  protected static _iconDataUrl = route_53Icon;
}

export class RouteTable extends _Network {
  protected static _iconDataUrl = route_tableIcon;
}

export class SiteToSiteVpn extends _Network {
  protected static _iconDataUrl = site_to_site_vpnIcon;
}

export class TransitGatewayAttachment extends _Network {
  protected static _iconDataUrl = transit_gateway_attachmentIcon;
}

export class TransitGateway extends _Network {
  protected static _iconDataUrl = transit_gatewayIcon;
}

export class VPCCustomerGateway extends _Network {
  protected static _iconDataUrl = vpc_customer_gatewayIcon;
}

export class VPCElasticNetworkAdapter extends _Network {
  protected static _iconDataUrl = vpc_elastic_network_adapterIcon;
}

export class VPCElasticNetworkInterface extends _Network {
  protected static _iconDataUrl = vpc_elastic_network_interfaceIcon;
}

export class VPCFlowLogs extends _Network {
  protected static _iconDataUrl = vpc_flow_logsIcon;
}

export class VPCPeering extends _Network {
  protected static _iconDataUrl = vpc_peeringIcon;
}

export class VPCRouter extends _Network {
  protected static _iconDataUrl = vpc_routerIcon;
}

export class VPCTrafficMirroring extends _Network {
  protected static _iconDataUrl = vpc_traffic_mirroringIcon;
}

export class VPC extends _Network {
  protected static _iconDataUrl = vpcIcon;
}

export class VpnConnection extends _Network {
  protected static _iconDataUrl = vpn_connectionIcon;
}

export class VpnGateway extends _Network {
  protected static _iconDataUrl = vpn_gatewayIcon;
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
