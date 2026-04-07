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

function _General(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "general";
  return node;
}

export function CloudMessaging(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "CloudMessaging", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_messagingIcon;
  return node;
}

export function CloudServices(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "CloudServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_servicesIcon;
  return node;
}

export function Cloudant(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Cloudant", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudantIcon;
  return node;
}

export function CognitiveServices(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "CognitiveServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cognitive_servicesIcon;
  return node;
}

export function DataSecurity(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "DataSecurity", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_securityIcon;
  return node;
}

export function Enterprise(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Enterprise", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = enterpriseIcon;
  return node;
}

export function GovernanceRiskCompliance(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "GovernanceRiskCompliance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = governance_risk_complianceIcon;
  return node;
}

export function IBMContainers(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "IBMContainers", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ibm_containersIcon;
  return node;
}

export function IBMPublicCloud(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "IBMPublicCloud", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ibm_public_cloudIcon;
  return node;
}

export function IdentityAccessManagement(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "IdentityAccessManagement", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = identity_access_managementIcon;
  return node;
}

export function IdentityProvider(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "IdentityProvider", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = identity_providerIcon;
  return node;
}

export function InfrastructureSecurity(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "InfrastructureSecurity", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = infrastructure_securityIcon;
  return node;
}

export function Internet(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Internet", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = internetIcon;
  return node;
}

export function IotCloud(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "IotCloud", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iot_cloudIcon;
  return node;
}

export function MicroservicesApplication(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "MicroservicesApplication", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = microservices_applicationIcon;
  return node;
}

export function MicroservicesMesh(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "MicroservicesMesh", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = microservices_meshIcon;
  return node;
}

export function MonitoringLogging(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "MonitoringLogging", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = monitoring_loggingIcon;
  return node;
}

export function Monitoring(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Monitoring", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = monitoringIcon;
  return node;
}

export function ObjectStorage(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "ObjectStorage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = object_storageIcon;
  return node;
}

export function OfflineCapabilities(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "OfflineCapabilities", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = offline_capabilitiesIcon;
  return node;
}

export function Openwhisk(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Openwhisk", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = openwhiskIcon;
  return node;
}

export function PeerCloud(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "PeerCloud", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = peer_cloudIcon;
  return node;
}

export function RetrieveRank(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "RetrieveRank", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = retrieve_rankIcon;
  return node;
}

export function Scalable(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Scalable", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = scalableIcon;
  return node;
}

export function ServiceDiscoveryConfiguration(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "ServiceDiscoveryConfiguration", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    service_discovery_configurationIcon;
  return node;
}

export function TextToSpeech(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "TextToSpeech", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = text_to_speechIcon;
  return node;
}

export function TransformationConnectivity(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "TransformationConnectivity", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = transformation_connectivityIcon;
  return node;
}
