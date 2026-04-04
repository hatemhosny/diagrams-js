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

class _Network extends _Alibabacloud {
  protected static override _type = "network";
}

export class Cdn extends _Network {
  protected static _iconDataUrl = cdnIcon;
}

export class CloudEnterpriseNetwork extends _Network {
  protected static _iconDataUrl = cloud_enterprise_networkIcon;
}

export class ElasticIpAddress extends _Network {
  protected static _iconDataUrl = elastic_ip_addressIcon;
}

export class ExpressConnect extends _Network {
  protected static _iconDataUrl = express_connectIcon;
}

export class NatGateway extends _Network {
  protected static _iconDataUrl = nat_gatewayIcon;
}

export class ServerLoadBalancer extends _Network {
  protected static _iconDataUrl = server_load_balancerIcon;
}

export class SmartAccessGateway extends _Network {
  protected static _iconDataUrl = smart_access_gatewayIcon;
}

export class VirtualPrivateCloud extends _Network {
  protected static _iconDataUrl = virtual_private_cloudIcon;
}

export class VpnGateway extends _Network {
  protected static _iconDataUrl = vpn_gatewayIcon;
}

// Aliases
export const CEN = CloudEnterpriseNetwork;
export const EIP = ElasticIpAddress;
export const SLB = ServerLoadBalancer;
export const VPC = VirtualPrivateCloud;
