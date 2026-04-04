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

class _Network extends _Gcp {
  protected static override _type = "network";
}

export class Armor extends _Network {
  protected static _iconDataUrl = armorIcon;
}

export class CDN extends _Network {
  protected static _iconDataUrl = cdnIcon;
}

export class CloudIDS extends _Network {
  protected static _iconDataUrl = cloud_idsIcon;
}

export class DedicatedInterconnect extends _Network {
  protected static _iconDataUrl = dedicated_interconnectIcon;
}

export class DNS extends _Network {
  protected static _iconDataUrl = dnsIcon;
}

export class ExternalIpAddresses extends _Network {
  protected static _iconDataUrl = external_ip_addressesIcon;
}

export class FirewallRules extends _Network {
  protected static _iconDataUrl = firewall_rulesIcon;
}

export class LoadBalancing extends _Network {
  protected static _iconDataUrl = load_balancingIcon;
}

export class NAT extends _Network {
  protected static _iconDataUrl = natIcon;
}

export class NetworkConnectivityCenter extends _Network {
  protected static _iconDataUrl = network_connectivity_centerIcon;
}

export class NetworkIntelligenceCenter extends _Network {
  protected static _iconDataUrl = network_intelligence_centerIcon;
}

export class NetworkSecurity extends _Network {
  protected static _iconDataUrl = network_securityIcon;
}

export class NetworkTiers extends _Network {
  protected static _iconDataUrl = network_tiersIcon;
}

export class NetworkTopology extends _Network {
  protected static _iconDataUrl = network_topologyIcon;
}

export class Network extends _Network {
  protected static _iconDataUrl = networkIcon;
}

export class PartnerInterconnect extends _Network {
  protected static _iconDataUrl = partner_interconnectIcon;
}

export class PremiumNetworkTier extends _Network {
  protected static _iconDataUrl = premium_network_tierIcon;
}

export class PrivateServiceConnect extends _Network {
  protected static _iconDataUrl = private_service_connectIcon;
}

export class Router extends _Network {
  protected static _iconDataUrl = routerIcon;
}

export class Routes extends _Network {
  protected static _iconDataUrl = routesIcon;
}

export class ServiceMesh extends _Network {
  protected static _iconDataUrl = service_meshIcon;
}

export class StandardNetworkTier extends _Network {
  protected static _iconDataUrl = standard_network_tierIcon;
}

export class TrafficDirector extends _Network {
  protected static _iconDataUrl = traffic_directorIcon;
}

export class VirtualPrivateCloud extends _Network {
  protected static _iconDataUrl = virtual_private_cloudIcon;
}

export class VPN extends _Network {
  protected static _iconDataUrl = vpnIcon;
}

// Aliases
export const IDS = CloudIDS;
export const PSC = PrivateServiceConnect;
export const VPC = VirtualPrivateCloud;
