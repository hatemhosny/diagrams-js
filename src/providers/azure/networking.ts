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

function _Networking(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "networking";
  return node;
}

export function ApplicationGateways(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "ApplicationGateways", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = application_gatewaysIcon;
  return node;
}

export function AtmMultistack(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "AtmMultistack", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = atm_multistackIcon;
  return node;
}

export function AzureCommunicationsGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "AzureCommunicationsGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_communications_gatewayIcon;
  return node;
}

export function AzureFirewallManager(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "AzureFirewallManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_firewall_managerIcon;
  return node;
}

export function AzureFirewallPolicy(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "AzureFirewallPolicy", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_firewall_policyIcon;
  return node;
}

export function Bastions(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Bastions", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bastionsIcon;
  return node;
}

export function CDNProfiles(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "CDNProfiles", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cdn_profilesIcon;
  return node;
}

export function ConnectedCache(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "ConnectedCache", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = connected_cacheIcon;
  return node;
}

export function Connections(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Connections", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = connectionsIcon;
  return node;
}

export function DDOSProtectionPlans(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "DDOSProtectionPlans", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ddos_protection_plansIcon;
  return node;
}

export function DNSMultistack(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "DNSMultistack", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dns_multistackIcon;
  return node;
}

export function DNSPrivateResolver(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "DNSPrivateResolver", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dns_private_resolverIcon;
  return node;
}

export function DNSSecurityPolicy(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "DNSSecurityPolicy", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dns_security_policyIcon;
  return node;
}

export function DNSZones(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "DNSZones", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dns_zonesIcon;
  return node;
}

export function ExpressrouteCircuits(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "ExpressrouteCircuits", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = expressroute_circuitsIcon;
  return node;
}

export function Firewalls(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Firewalls", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = firewallsIcon;
  return node;
}

export function FrontDoorAndCDNProfiles(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "FrontDoorAndCDNProfiles", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = front_door_and_cdn_profilesIcon;
  return node;
}

export function IpAddressManager(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "IpAddressManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ip_address_managerIcon;
  return node;
}

export function IpGroups(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "IpGroups", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ip_groupsIcon;
  return node;
}

export function LoadBalancerHub(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "LoadBalancerHub", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = load_balancer_hubIcon;
  return node;
}

export function LoadBalancers(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "LoadBalancers", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = load_balancersIcon;
  return node;
}

export function LocalNetworkGateways(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "LocalNetworkGateways", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = local_network_gatewaysIcon;
  return node;
}

export function Nat(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Nat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = natIcon;
  return node;
}

export function NetworkInterfaces(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "NetworkInterfaces", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_interfacesIcon;
  return node;
}

export function NetworkSecurityGroups(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "NetworkSecurityGroups", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_security_groupsIcon;
  return node;
}

export function NetworkWatcher(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "NetworkWatcher", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_watcherIcon;
  return node;
}

export function OnPremisesDataGateways(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "OnPremisesDataGateways", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = on_premises_data_gatewaysIcon;
  return node;
}

export function PrivateLinkService(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "PrivateLinkService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = private_link_serviceIcon;
  return node;
}

export function PrivateLinkServices(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "PrivateLinkServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = private_link_servicesIcon;
  return node;
}

export function PrivateLink(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "PrivateLink", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = private_linkIcon;
  return node;
}

export function ProximityPlacementGroups(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "ProximityPlacementGroups", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = proximity_placement_groupsIcon;
  return node;
}

export function PublicIpAddressesClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "PublicIpAddressesClassic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = public_ip_addresses_classicIcon;
  return node;
}

export function PublicIpAddresses(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "PublicIpAddresses", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = public_ip_addressesIcon;
  return node;
}

export function PublicIpPrefixes(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "PublicIpPrefixes", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = public_ip_prefixesIcon;
  return node;
}

export function ReservedIpAddressesClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "ReservedIpAddressesClassic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = reserved_ip_addresses_classicIcon;
  return node;
}

export function ResourceManagementPrivateLink(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "ResourceManagementPrivateLink", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    resource_management_private_linkIcon;
  return node;
}

export function RouteFilters(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "RouteFilters", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = route_filtersIcon;
  return node;
}

export function RouteTables(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "RouteTables", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = route_tablesIcon;
  return node;
}

export function ServiceEndpointPolicies(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "ServiceEndpointPolicies", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_endpoint_policiesIcon;
  return node;
}

export function SpotVM(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "SpotVM", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = spot_vmIcon;
  return node;
}

export function SpotVmss(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "SpotVmss", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = spot_vmssIcon;
  return node;
}

export function Subnet(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Subnet", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = subnetIcon;
  return node;
}

export function TrafficController(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "TrafficController", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = traffic_controllerIcon;
  return node;
}

export function TrafficManagerProfiles(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "TrafficManagerProfiles", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = traffic_manager_profilesIcon;
  return node;
}

export function VirtualNetworkGateways(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "VirtualNetworkGateways", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtual_network_gatewaysIcon;
  return node;
}

export function VirtualNetworksClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "VirtualNetworksClassic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtual_networks_classicIcon;
  return node;
}

export function VirtualNetworks(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "VirtualNetworks", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtual_networksIcon;
  return node;
}

export function VirtualRouter(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "VirtualRouter", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtual_routerIcon;
  return node;
}

export function VirtualWanHub(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "VirtualWanHub", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtual_wan_hubIcon;
  return node;
}

export function VirtualWans(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "VirtualWans", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtual_wansIcon;
  return node;
}

export function WebApplicationFirewallPolicieswaf(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Networking(label ?? "WebApplicationFirewallPolicieswaf", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    web_application_firewall_policieswafIcon;
  return node;
}
