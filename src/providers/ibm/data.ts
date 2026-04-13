import { _Ibm } from "./index.js";
import cachesIcon from "../../../resources/ibm/data/caches.png";
import cloudIcon from "../../../resources/ibm/data/cloud.png";
import conversation_trained_deployedIcon from "../../../resources/ibm/data/conversation-trained-deployed.png";
import data_servicesIcon from "../../../resources/ibm/data/data-services.png";
import data_sourcesIcon from "../../../resources/ibm/data/data-sources.png";
import device_identity_serviceIcon from "../../../resources/ibm/data/device-identity-service.png";
import device_registryIcon from "../../../resources/ibm/data/device-registry.png";
import enterprise_dataIcon from "../../../resources/ibm/data/enterprise-data.png";
import enterprise_user_directoryIcon from "../../../resources/ibm/data/enterprise-user-directory.png";
import file_repositoryIcon from "../../../resources/ibm/data/file-repository.png";
import ground_truthIcon from "../../../resources/ibm/data/ground-truth.png";
import modelIcon from "../../../resources/ibm/data/model.png";
import tms_data_interfaceIcon from "../../../resources/ibm/data/tms-data-interface.png";

function _Data(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "data";
  return node;
}

export function Caches(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "Caches", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Caches";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cachesIcon;
  return node;
}

export function Cloud(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "Cloud", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cloud";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudIcon;
  return node;
}

export function ConversationTrainedDeployed(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "ConversationTrainedDeployed", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ConversationTrainedDeployed";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = conversation_trained_deployedIcon;
  return node;
}

export function DataServices(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "DataServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_servicesIcon;
  return node;
}

export function DataSources(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "DataSources", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataSources";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_sourcesIcon;
  return node;
}

export function DeviceIdentityService(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "DeviceIdentityService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DeviceIdentityService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_identity_serviceIcon;
  return node;
}

export function DeviceRegistry(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "DeviceRegistry", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DeviceRegistry";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_registryIcon;
  return node;
}

export function EnterpriseData(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "EnterpriseData", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EnterpriseData";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = enterprise_dataIcon;
  return node;
}

export function EnterpriseUserDirectory(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "EnterpriseUserDirectory", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EnterpriseUserDirectory";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = enterprise_user_directoryIcon;
  return node;
}

export function FileRepository(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "FileRepository", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "FileRepository";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = file_repositoryIcon;
  return node;
}

export function GroundTruth(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "GroundTruth", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "GroundTruth";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ground_truthIcon;
  return node;
}

export function Model(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "Model", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Model";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = modelIcon;
  return node;
}

export function TmsDataInterface(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "TmsDataInterface", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "TmsDataInterface";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tms_data_interfaceIcon;
  return node;
}
