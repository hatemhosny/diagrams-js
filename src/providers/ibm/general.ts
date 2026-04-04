import { _Ibm } from "./index.js";
import cloud_messagingIcon from "../../../resources/ibm/general/cloud-messaging.png";
import cloud_servicesIcon from "../../../resources/ibm/general/cloud-services.png";
import cloudantIcon from "../../../resources/ibm/general/cloudant.png";
import cognitive_servicesIcon from "../../../resources/ibm/general/cognitive-services.png";
import data_securityIcon from "../../../resources/ibm/general/data-security.png";
import enterpriseIcon from "../../../resources/ibm/general/enterprise.png";
import governance_risk_complianceIcon from "../../../resources/ibm/general/governance-risk-compliance.png";
import ibm_containersIcon from "../../../resources/ibm/general/ibm-containers.png";
import ibm_public_cloudIcon from "../../../resources/ibm/general/ibm-public-cloud.png";
import identity_access_managementIcon from "../../../resources/ibm/general/identity-access-management.png";
import identity_providerIcon from "../../../resources/ibm/general/identity-provider.png";
import infrastructure_securityIcon from "../../../resources/ibm/general/infrastructure-security.png";
import internetIcon from "../../../resources/ibm/general/internet.png";
import iot_cloudIcon from "../../../resources/ibm/general/iot-cloud.png";
import microservices_applicationIcon from "../../../resources/ibm/general/microservices-application.png";
import microservices_meshIcon from "../../../resources/ibm/general/microservices-mesh.png";
import monitoring_loggingIcon from "../../../resources/ibm/general/monitoring-logging.png";
import monitoringIcon from "../../../resources/ibm/general/monitoring.png";
import object_storageIcon from "../../../resources/ibm/general/object-storage.png";
import offline_capabilitiesIcon from "../../../resources/ibm/general/offline-capabilities.png";
import openwhiskIcon from "../../../resources/ibm/general/openwhisk.png";
import peer_cloudIcon from "../../../resources/ibm/general/peer-cloud.png";
import retrieve_rankIcon from "../../../resources/ibm/general/retrieve-rank.png";
import scalableIcon from "../../../resources/ibm/general/scalable.png";
import service_discovery_configurationIcon from "../../../resources/ibm/general/service-discovery-configuration.png";
import text_to_speechIcon from "../../../resources/ibm/general/text-to-speech.png";
import transformation_connectivityIcon from "../../../resources/ibm/general/transformation-connectivity.png";

class _General extends _Ibm {
  protected static override _type = "general";
}

export class CloudMessaging extends _General {
  protected static override _iconDataUrl = cloud_messagingIcon;
}

export class CloudServices extends _General {
  protected static override _iconDataUrl = cloud_servicesIcon;
}

export class Cloudant extends _General {
  protected static override _iconDataUrl = cloudantIcon;
}

export class CognitiveServices extends _General {
  protected static override _iconDataUrl = cognitive_servicesIcon;
}

export class DataSecurity extends _General {
  protected static override _iconDataUrl = data_securityIcon;
}

export class Enterprise extends _General {
  protected static override _iconDataUrl = enterpriseIcon;
}

export class GovernanceRiskCompliance extends _General {
  protected static override _iconDataUrl = governance_risk_complianceIcon;
}

export class IBMContainers extends _General {
  protected static override _iconDataUrl = ibm_containersIcon;
}

export class IBMPublicCloud extends _General {
  protected static override _iconDataUrl = ibm_public_cloudIcon;
}

export class IdentityAccessManagement extends _General {
  protected static override _iconDataUrl = identity_access_managementIcon;
}

export class IdentityProvider extends _General {
  protected static override _iconDataUrl = identity_providerIcon;
}

export class InfrastructureSecurity extends _General {
  protected static override _iconDataUrl = infrastructure_securityIcon;
}

export class Internet extends _General {
  protected static override _iconDataUrl = internetIcon;
}

export class IotCloud extends _General {
  protected static override _iconDataUrl = iot_cloudIcon;
}

export class MicroservicesApplication extends _General {
  protected static override _iconDataUrl = microservices_applicationIcon;
}

export class MicroservicesMesh extends _General {
  protected static override _iconDataUrl = microservices_meshIcon;
}

export class MonitoringLogging extends _General {
  protected static override _iconDataUrl = monitoring_loggingIcon;
}

export class Monitoring extends _General {
  protected static override _iconDataUrl = monitoringIcon;
}

export class ObjectStorage extends _General {
  protected static override _iconDataUrl = object_storageIcon;
}

export class OfflineCapabilities extends _General {
  protected static override _iconDataUrl = offline_capabilitiesIcon;
}

export class Openwhisk extends _General {
  protected static override _iconDataUrl = openwhiskIcon;
}

export class PeerCloud extends _General {
  protected static override _iconDataUrl = peer_cloudIcon;
}

export class RetrieveRank extends _General {
  protected static override _iconDataUrl = retrieve_rankIcon;
}

export class Scalable extends _General {
  protected static override _iconDataUrl = scalableIcon;
}

export class ServiceDiscoveryConfiguration extends _General {
  protected static override _iconDataUrl = service_discovery_configurationIcon;
}

export class TextToSpeech extends _General {
  protected static override _iconDataUrl = text_to_speechIcon;
}

export class TransformationConnectivity extends _General {
  protected static override _iconDataUrl = transformation_connectivityIcon;
}
