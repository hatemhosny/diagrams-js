import { _Azure } from "./index.js";
import application_gatewaysIcon from "../../../resources/azure/networking/application-gateways.png";
import atm_multistackIcon from "../../../resources/azure/networking/atm-multistack.png";
import azure_communications_gatewayIcon from "../../../resources/azure/networking/azure-communications-gateway.png";
import azure_firewall_managerIcon from "../../../resources/azure/networking/azure-firewall-manager.png";
import azure_firewall_policyIcon from "../../../resources/azure/networking/azure-firewall-policy.png";
import bastionsIcon from "../../../resources/azure/networking/bastions.png";
import cdn_profilesIcon from "../../../resources/azure/networking/cdn-profiles.png";
import connected_cacheIcon from "../../../resources/azure/networking/connected-cache.png";
import connectionsIcon from "../../../resources/azure/networking/connections.png";
import ddos_protection_plansIcon from "../../../resources/azure/networking/ddos-protection-plans.png";
import dns_multistackIcon from "../../../resources/azure/networking/dns-multistack.png";
import dns_private_resolverIcon from "../../../resources/azure/networking/dns-private-resolver.png";
import dns_security_policyIcon from "../../../resources/azure/networking/dns-security-policy.png";
import dns_zonesIcon from "../../../resources/azure/networking/dns-zones.png";
import expressroute_circuitsIcon from "../../../resources/azure/networking/expressroute-circuits.png";
import firewallsIcon from "../../../resources/azure/networking/firewalls.png";
import front_door_and_cdn_profilesIcon from "../../../resources/azure/networking/front-door-and-cdn-profiles.png";
import ip_address_managerIcon from "../../../resources/azure/networking/ip-address-manager.png";
import ip_groupsIcon from "../../../resources/azure/networking/ip-groups.png";
import load_balancer_hubIcon from "../../../resources/azure/networking/load-balancer-hub.png";
import load_balancersIcon from "../../../resources/azure/networking/load-balancers.png";
import local_network_gatewaysIcon from "../../../resources/azure/networking/local-network-gateways.png";
import natIcon from "../../../resources/azure/networking/nat.png";
import network_interfacesIcon from "../../../resources/azure/networking/network-interfaces.png";
import network_security_groupsIcon from "../../../resources/azure/networking/network-security-groups.png";
import network_watcherIcon from "../../../resources/azure/networking/network-watcher.png";
import on_premises_data_gatewaysIcon from "../../../resources/azure/networking/on-premises-data-gateways.png";
import private_link_serviceIcon from "../../../resources/azure/networking/private-link-service.png";
import private_link_servicesIcon from "../../../resources/azure/networking/private-link-services.png";
import private_linkIcon from "../../../resources/azure/networking/private-link.png";
import proximity_placement_groupsIcon from "../../../resources/azure/networking/proximity-placement-groups.png";
import public_ip_addresses_classicIcon from "../../../resources/azure/networking/public-ip-addresses-classic.png";
import public_ip_addressesIcon from "../../../resources/azure/networking/public-ip-addresses.png";
import public_ip_prefixesIcon from "../../../resources/azure/networking/public-ip-prefixes.png";
import reserved_ip_addresses_classicIcon from "../../../resources/azure/networking/reserved-ip-addresses-classic.png";
import resource_management_private_linkIcon from "../../../resources/azure/networking/resource-management-private-link.png";
import route_filtersIcon from "../../../resources/azure/networking/route-filters.png";
import route_tablesIcon from "../../../resources/azure/networking/route-tables.png";
import service_endpoint_policiesIcon from "../../../resources/azure/networking/service-endpoint-policies.png";
import spot_vmIcon from "../../../resources/azure/networking/spot-vm.png";
import spot_vmssIcon from "../../../resources/azure/networking/spot-vmss.png";
import subnetIcon from "../../../resources/azure/networking/subnet.png";
import traffic_controllerIcon from "../../../resources/azure/networking/traffic-controller.png";
import traffic_manager_profilesIcon from "../../../resources/azure/networking/traffic-manager-profiles.png";
import virtual_network_gatewaysIcon from "../../../resources/azure/networking/virtual-network-gateways.png";
import virtual_networks_classicIcon from "../../../resources/azure/networking/virtual-networks-classic.png";
import virtual_networksIcon from "../../../resources/azure/networking/virtual-networks.png";
import virtual_routerIcon from "../../../resources/azure/networking/virtual-router.png";
import virtual_wan_hubIcon from "../../../resources/azure/networking/virtual-wan-hub.png";
import virtual_wansIcon from "../../../resources/azure/networking/virtual-wans.png";
import web_application_firewall_policieswafIcon from "../../../resources/azure/networking/web-application-firewall-policieswaf.png";

class _Networking extends _Azure {
  protected static override _type = "networking";
}

export class ApplicationGateways extends _Networking {
  protected static override _iconDataUrl = application_gatewaysIcon;
}

export class AtmMultistack extends _Networking {
  protected static override _iconDataUrl = atm_multistackIcon;
}

export class AzureCommunicationsGateway extends _Networking {
  protected static override _iconDataUrl = azure_communications_gatewayIcon;
}

export class AzureFirewallManager extends _Networking {
  protected static override _iconDataUrl = azure_firewall_managerIcon;
}

export class AzureFirewallPolicy extends _Networking {
  protected static override _iconDataUrl = azure_firewall_policyIcon;
}

export class Bastions extends _Networking {
  protected static override _iconDataUrl = bastionsIcon;
}

export class CDNProfiles extends _Networking {
  protected static override _iconDataUrl = cdn_profilesIcon;
}

export class ConnectedCache extends _Networking {
  protected static override _iconDataUrl = connected_cacheIcon;
}

export class Connections extends _Networking {
  protected static override _iconDataUrl = connectionsIcon;
}

export class DDOSProtectionPlans extends _Networking {
  protected static override _iconDataUrl = ddos_protection_plansIcon;
}

export class DNSMultistack extends _Networking {
  protected static override _iconDataUrl = dns_multistackIcon;
}

export class DNSPrivateResolver extends _Networking {
  protected static override _iconDataUrl = dns_private_resolverIcon;
}

export class DNSSecurityPolicy extends _Networking {
  protected static override _iconDataUrl = dns_security_policyIcon;
}

export class DNSZones extends _Networking {
  protected static override _iconDataUrl = dns_zonesIcon;
}

export class ExpressrouteCircuits extends _Networking {
  protected static override _iconDataUrl = expressroute_circuitsIcon;
}

export class Firewalls extends _Networking {
  protected static override _iconDataUrl = firewallsIcon;
}

export class FrontDoorAndCDNProfiles extends _Networking {
  protected static override _iconDataUrl = front_door_and_cdn_profilesIcon;
}

export class IpAddressManager extends _Networking {
  protected static override _iconDataUrl = ip_address_managerIcon;
}

export class IpGroups extends _Networking {
  protected static override _iconDataUrl = ip_groupsIcon;
}

export class LoadBalancerHub extends _Networking {
  protected static override _iconDataUrl = load_balancer_hubIcon;
}

export class LoadBalancers extends _Networking {
  protected static override _iconDataUrl = load_balancersIcon;
}

export class LocalNetworkGateways extends _Networking {
  protected static override _iconDataUrl = local_network_gatewaysIcon;
}

export class Nat extends _Networking {
  protected static override _iconDataUrl = natIcon;
}

export class NetworkInterfaces extends _Networking {
  protected static override _iconDataUrl = network_interfacesIcon;
}

export class NetworkSecurityGroups extends _Networking {
  protected static override _iconDataUrl = network_security_groupsIcon;
}

export class NetworkWatcher extends _Networking {
  protected static override _iconDataUrl = network_watcherIcon;
}

export class OnPremisesDataGateways extends _Networking {
  protected static override _iconDataUrl = on_premises_data_gatewaysIcon;
}

export class PrivateLinkService extends _Networking {
  protected static override _iconDataUrl = private_link_serviceIcon;
}

export class PrivateLinkServices extends _Networking {
  protected static override _iconDataUrl = private_link_servicesIcon;
}

export class PrivateLink extends _Networking {
  protected static override _iconDataUrl = private_linkIcon;
}

export class ProximityPlacementGroups extends _Networking {
  protected static override _iconDataUrl = proximity_placement_groupsIcon;
}

export class PublicIpAddressesClassic extends _Networking {
  protected static override _iconDataUrl = public_ip_addresses_classicIcon;
}

export class PublicIpAddresses extends _Networking {
  protected static override _iconDataUrl = public_ip_addressesIcon;
}

export class PublicIpPrefixes extends _Networking {
  protected static override _iconDataUrl = public_ip_prefixesIcon;
}

export class ReservedIpAddressesClassic extends _Networking {
  protected static override _iconDataUrl = reserved_ip_addresses_classicIcon;
}

export class ResourceManagementPrivateLink extends _Networking {
  protected static override _iconDataUrl = resource_management_private_linkIcon;
}

export class RouteFilters extends _Networking {
  protected static override _iconDataUrl = route_filtersIcon;
}

export class RouteTables extends _Networking {
  protected static override _iconDataUrl = route_tablesIcon;
}

export class ServiceEndpointPolicies extends _Networking {
  protected static override _iconDataUrl = service_endpoint_policiesIcon;
}

export class SpotVM extends _Networking {
  protected static override _iconDataUrl = spot_vmIcon;
}

export class SpotVmss extends _Networking {
  protected static override _iconDataUrl = spot_vmssIcon;
}

export class Subnet extends _Networking {
  protected static override _iconDataUrl = subnetIcon;
}

export class TrafficController extends _Networking {
  protected static override _iconDataUrl = traffic_controllerIcon;
}

export class TrafficManagerProfiles extends _Networking {
  protected static override _iconDataUrl = traffic_manager_profilesIcon;
}

export class VirtualNetworkGateways extends _Networking {
  protected static override _iconDataUrl = virtual_network_gatewaysIcon;
}

export class VirtualNetworksClassic extends _Networking {
  protected static override _iconDataUrl = virtual_networks_classicIcon;
}

export class VirtualNetworks extends _Networking {
  protected static override _iconDataUrl = virtual_networksIcon;
}

export class VirtualRouter extends _Networking {
  protected static override _iconDataUrl = virtual_routerIcon;
}

export class VirtualWanHub extends _Networking {
  protected static override _iconDataUrl = virtual_wan_hubIcon;
}

export class VirtualWans extends _Networking {
  protected static override _iconDataUrl = virtual_wansIcon;
}

export class WebApplicationFirewallPolicieswaf extends _Networking {
  protected static override _iconDataUrl = web_application_firewall_policieswafIcon;
}
