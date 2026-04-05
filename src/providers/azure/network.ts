import { _Azure } from "./index.js";
import application_gatewayIcon from "../../../resources/azure/network/application-gateway.png";
import application_security_groupsIcon from "../../../resources/azure/network/application-security-groups.png";
import cdn_profilesIcon from "../../../resources/azure/network/cdn-profiles.png";
import connectionsIcon from "../../../resources/azure/network/connections.png";
import ddos_protection_plansIcon from "../../../resources/azure/network/ddos-protection-plans.png";
import dns_private_zonesIcon from "../../../resources/azure/network/dns-private-zones.png";
import dns_zonesIcon from "../../../resources/azure/network/dns-zones.png";
import expressroute_circuitsIcon from "../../../resources/azure/network/expressroute-circuits.png";
import firewallIcon from "../../../resources/azure/network/firewall.png";
import front_doorsIcon from "../../../resources/azure/network/front-doors.png";
import load_balancersIcon from "../../../resources/azure/network/load-balancers.png";
import local_network_gatewaysIcon from "../../../resources/azure/network/local-network-gateways.png";
import network_interfacesIcon from "../../../resources/azure/network/network-interfaces.png";
import network_security_groups_classicIcon from "../../../resources/azure/network/network-security-groups-classic.png";
import network_watcherIcon from "../../../resources/azure/network/network-watcher.png";
import on_premises_data_gatewaysIcon from "../../../resources/azure/network/on-premises-data-gateways.png";
import private_endpointIcon from "../../../resources/azure/network/private-endpoint.png";
import public_ip_addressesIcon from "../../../resources/azure/network/public-ip-addresses.png";
import reserved_ip_addresses_classicIcon from "../../../resources/azure/network/reserved-ip-addresses-classic.png";
import route_filtersIcon from "../../../resources/azure/network/route-filters.png";
import route_tablesIcon from "../../../resources/azure/network/route-tables.png";
import service_endpoint_policiesIcon from "../../../resources/azure/network/service-endpoint-policies.png";
import subnetsIcon from "../../../resources/azure/network/subnets.png";
import traffic_manager_profilesIcon from "../../../resources/azure/network/traffic-manager-profiles.png";
import virtual_network_classicIcon from "../../../resources/azure/network/virtual-network-classic.png";
import virtual_network_gatewaysIcon from "../../../resources/azure/network/virtual-network-gateways.png";
import virtual_networksIcon from "../../../resources/azure/network/virtual-networks.png";
import virtual_wansIcon from "../../../resources/azure/network/virtual-wans.png";

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "network";
  return node;
}

export function ApplicationGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ApplicationGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = application_gatewayIcon;
  return node;
}

export function ApplicationSecurityGroups(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ApplicationSecurityGroups", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = application_security_groupsIcon;
  return node;
}

export function CDNProfiles(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CDNProfiles", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cdn_profilesIcon;
  return node;
}

export function Connections(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Connections", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = connectionsIcon;
  return node;
}

export function DDOSProtectionPlans(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "DDOSProtectionPlans", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ddos_protection_plansIcon;
  return node;
}

export function DNSPrivateZones(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "DNSPrivateZones", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = dns_private_zonesIcon;
  return node;
}

export function DNSZones(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "DNSZones", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = dns_zonesIcon;
  return node;
}

export function ExpressrouteCircuits(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ExpressrouteCircuits", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = expressroute_circuitsIcon;
  return node;
}

export function Firewall(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Firewall", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = firewallIcon;
  return node;
}

export function FrontDoors(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "FrontDoors", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = front_doorsIcon;
  return node;
}

export function LoadBalancers(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancers", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = load_balancersIcon;
  return node;
}

export function LocalNetworkGateways(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LocalNetworkGateways", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = local_network_gatewaysIcon;
  return node;
}

export function NetworkInterfaces(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkInterfaces", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = network_interfacesIcon;
  return node;
}

export function NetworkSecurityGroupsClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkSecurityGroupsClassic", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = network_security_groups_classicIcon;
  return node;
}

export function NetworkWatcher(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NetworkWatcher", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = network_watcherIcon;
  return node;
}

export function OnPremisesDataGateways(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "OnPremisesDataGateways", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = on_premises_data_gatewaysIcon;
  return node;
}

export function PrivateEndpoint(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "PrivateEndpoint", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = private_endpointIcon;
  return node;
}

export function PublicIpAddresses(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "PublicIpAddresses", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = public_ip_addressesIcon;
  return node;
}

export function ReservedIpAddressesClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ReservedIpAddressesClassic", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = reserved_ip_addresses_classicIcon;
  return node;
}

export function RouteFilters(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "RouteFilters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = route_filtersIcon;
  return node;
}

export function RouteTables(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "RouteTables", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = route_tablesIcon;
  return node;
}

export function ServiceEndpointPolicies(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ServiceEndpointPolicies", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = service_endpoint_policiesIcon;
  return node;
}

export function Subnets(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Subnets", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = subnetsIcon;
  return node;
}

export function TrafficManagerProfiles(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "TrafficManagerProfiles", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = traffic_manager_profilesIcon;
  return node;
}

export function VirtualNetworkClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VirtualNetworkClassic", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = virtual_network_classicIcon;
  return node;
}

export function VirtualNetworkGateways(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VirtualNetworkGateways", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = virtual_network_gatewaysIcon;
  return node;
}

export function VirtualNetworks(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VirtualNetworks", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = virtual_networksIcon;
  return node;
}

export function VirtualWans(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VirtualWans", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = virtual_wansIcon;
  return node;
}
