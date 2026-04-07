import { _Ibm } from "./index.js";
import channelsIcon from "../../../resources/ibm/infrastructure/channels.png";
import cloud_messagingIcon from "../../../resources/ibm/infrastructure/cloud-messaging.png";
import dashboardIcon from "../../../resources/ibm/infrastructure/dashboard.png";
import diagnosticsIcon from "../../../resources/ibm/infrastructure/diagnostics.png";
import edge_servicesIcon from "../../../resources/ibm/infrastructure/edge-services.png";
import enterprise_messagingIcon from "../../../resources/ibm/infrastructure/enterprise-messaging.png";
import event_feedIcon from "../../../resources/ibm/infrastructure/event-feed.png";
import infrastructure_servicesIcon from "../../../resources/ibm/infrastructure/infrastructure-services.png";
import interservice_communicationIcon from "../../../resources/ibm/infrastructure/interservice-communication.png";
import load_balancing_routingIcon from "../../../resources/ibm/infrastructure/load-balancing-routing.png";
import microservices_meshIcon from "../../../resources/ibm/infrastructure/microservices-mesh.png";
import mobile_backendIcon from "../../../resources/ibm/infrastructure/mobile-backend.png";
import mobile_provider_networkIcon from "../../../resources/ibm/infrastructure/mobile-provider-network.png";
import monitoring_loggingIcon from "../../../resources/ibm/infrastructure/monitoring-logging.png";
import monitoringIcon from "../../../resources/ibm/infrastructure/monitoring.png";
import peer_servicesIcon from "../../../resources/ibm/infrastructure/peer-services.png";
import service_discovery_configurationIcon from "../../../resources/ibm/infrastructure/service-discovery-configuration.png";
import transformation_connectivityIcon from "../../../resources/ibm/infrastructure/transformation-connectivity.png";

function _Infrastructure(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "infrastructure";
  return node;
}

export function Channels(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "Channels", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = channelsIcon;
  return node;
}

export function CloudMessaging(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "CloudMessaging", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_messagingIcon;
  return node;
}

export function Dashboard(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "Dashboard", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dashboardIcon;
  return node;
}

export function Diagnostics(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "Diagnostics", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = diagnosticsIcon;
  return node;
}

export function EdgeServices(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "EdgeServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = edge_servicesIcon;
  return node;
}

export function EnterpriseMessaging(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "EnterpriseMessaging", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = enterprise_messagingIcon;
  return node;
}

export function EventFeed(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "EventFeed", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = event_feedIcon;
  return node;
}

export function InfrastructureServices(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "InfrastructureServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = infrastructure_servicesIcon;
  return node;
}

export function InterserviceCommunication(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "InterserviceCommunication", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = interservice_communicationIcon;
  return node;
}

export function LoadBalancingRouting(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "LoadBalancingRouting", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = load_balancing_routingIcon;
  return node;
}

export function MicroservicesMesh(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "MicroservicesMesh", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = microservices_meshIcon;
  return node;
}

export function MobileBackend(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "MobileBackend", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mobile_backendIcon;
  return node;
}

export function MobileProviderNetwork(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "MobileProviderNetwork", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mobile_provider_networkIcon;
  return node;
}

export function MonitoringLogging(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "MonitoringLogging", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = monitoring_loggingIcon;
  return node;
}

export function Monitoring(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "Monitoring", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = monitoringIcon;
  return node;
}

export function PeerServices(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "PeerServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = peer_servicesIcon;
  return node;
}

export function ServiceDiscoveryConfiguration(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "ServiceDiscoveryConfiguration", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    service_discovery_configurationIcon;
  return node;
}

export function TransformationConnectivity(label?: string, options?: Record<string, unknown>) {
  const node = _Infrastructure(label ?? "TransformationConnectivity", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = transformation_connectivityIcon;
  return node;
}
