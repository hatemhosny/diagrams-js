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

class _Network extends _Azure {
  protected static override _type = "network";
}

export class ApplicationGateway extends _Network {
  protected static override _iconDataUrl = application_gatewayIcon;
}

export class ApplicationSecurityGroups extends _Network {
  protected static override _iconDataUrl = application_security_groupsIcon;
}

export class CDNProfiles extends _Network {
  protected static override _iconDataUrl = cdn_profilesIcon;
}

export class Connections extends _Network {
  protected static override _iconDataUrl = connectionsIcon;
}

export class DDOSProtectionPlans extends _Network {
  protected static override _iconDataUrl = ddos_protection_plansIcon;
}

export class DNSPrivateZones extends _Network {
  protected static override _iconDataUrl = dns_private_zonesIcon;
}

export class DNSZones extends _Network {
  protected static override _iconDataUrl = dns_zonesIcon;
}

export class ExpressrouteCircuits extends _Network {
  protected static override _iconDataUrl = expressroute_circuitsIcon;
}

export class Firewall extends _Network {
  protected static override _iconDataUrl = firewallIcon;
}

export class FrontDoors extends _Network {
  protected static override _iconDataUrl = front_doorsIcon;
}

export class LoadBalancers extends _Network {
  protected static override _iconDataUrl = load_balancersIcon;
}

export class LocalNetworkGateways extends _Network {
  protected static override _iconDataUrl = local_network_gatewaysIcon;
}

export class NetworkInterfaces extends _Network {
  protected static override _iconDataUrl = network_interfacesIcon;
}

export class NetworkSecurityGroupsClassic extends _Network {
  protected static override _iconDataUrl = network_security_groups_classicIcon;
}

export class NetworkWatcher extends _Network {
  protected static override _iconDataUrl = network_watcherIcon;
}

export class OnPremisesDataGateways extends _Network {
  protected static override _iconDataUrl = on_premises_data_gatewaysIcon;
}

export class PrivateEndpoint extends _Network {
  protected static override _iconDataUrl = private_endpointIcon;
}

export class PublicIpAddresses extends _Network {
  protected static override _iconDataUrl = public_ip_addressesIcon;
}

export class ReservedIpAddressesClassic extends _Network {
  protected static override _iconDataUrl = reserved_ip_addresses_classicIcon;
}

export class RouteFilters extends _Network {
  protected static override _iconDataUrl = route_filtersIcon;
}

export class RouteTables extends _Network {
  protected static override _iconDataUrl = route_tablesIcon;
}

export class ServiceEndpointPolicies extends _Network {
  protected static override _iconDataUrl = service_endpoint_policiesIcon;
}

export class Subnets extends _Network {
  protected static override _iconDataUrl = subnetsIcon;
}

export class TrafficManagerProfiles extends _Network {
  protected static override _iconDataUrl = traffic_manager_profilesIcon;
}

export class VirtualNetworkClassic extends _Network {
  protected static override _iconDataUrl = virtual_network_classicIcon;
}

export class VirtualNetworkGateways extends _Network {
  protected static override _iconDataUrl = virtual_network_gatewaysIcon;
}

export class VirtualNetworks extends _Network {
  protected static override _iconDataUrl = virtual_networksIcon;
}

export class VirtualWans extends _Network {
  protected static override _iconDataUrl = virtual_wansIcon;
}
