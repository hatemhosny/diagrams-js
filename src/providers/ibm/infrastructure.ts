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

class _Infrastructure extends _Ibm {
  protected static override _type = "infrastructure";
}

export class Channels extends _Infrastructure {
  protected static _iconDataUrl = channelsIcon;
}

export class CloudMessaging extends _Infrastructure {
  protected static _iconDataUrl = cloud_messagingIcon;
}

export class Dashboard extends _Infrastructure {
  protected static _iconDataUrl = dashboardIcon;
}

export class Diagnostics extends _Infrastructure {
  protected static _iconDataUrl = diagnosticsIcon;
}

export class EdgeServices extends _Infrastructure {
  protected static _iconDataUrl = edge_servicesIcon;
}

export class EnterpriseMessaging extends _Infrastructure {
  protected static _iconDataUrl = enterprise_messagingIcon;
}

export class EventFeed extends _Infrastructure {
  protected static _iconDataUrl = event_feedIcon;
}

export class InfrastructureServices extends _Infrastructure {
  protected static _iconDataUrl = infrastructure_servicesIcon;
}

export class InterserviceCommunication extends _Infrastructure {
  protected static _iconDataUrl = interservice_communicationIcon;
}

export class LoadBalancingRouting extends _Infrastructure {
  protected static _iconDataUrl = load_balancing_routingIcon;
}

export class MicroservicesMesh extends _Infrastructure {
  protected static _iconDataUrl = microservices_meshIcon;
}

export class MobileBackend extends _Infrastructure {
  protected static _iconDataUrl = mobile_backendIcon;
}

export class MobileProviderNetwork extends _Infrastructure {
  protected static _iconDataUrl = mobile_provider_networkIcon;
}

export class MonitoringLogging extends _Infrastructure {
  protected static _iconDataUrl = monitoring_loggingIcon;
}

export class Monitoring extends _Infrastructure {
  protected static _iconDataUrl = monitoringIcon;
}

export class PeerServices extends _Infrastructure {
  protected static _iconDataUrl = peer_servicesIcon;
}

export class ServiceDiscoveryConfiguration extends _Infrastructure {
  protected static _iconDataUrl = service_discovery_configurationIcon;
}

export class TransformationConnectivity extends _Infrastructure {
  protected static _iconDataUrl = transformation_connectivityIcon;
}
