import { _Azure } from "./index.js";
import azure_operator_5g_coreIcon from "../../../resources/azure/hybridmulticloud/azure-operator-5g-core.png";
import azure_operator_insightsIcon from "../../../resources/azure/hybridmulticloud/azure-operator-insights.png";
import azure_operator_nexusIcon from "../../../resources/azure/hybridmulticloud/azure-operator-nexus.png";
import azure_operator_service_managerIcon from "../../../resources/azure/hybridmulticloud/azure-operator-service-manager.png";
import azure_programmable_connectivityIcon from "../../../resources/azure/hybridmulticloud/azure-programmable-connectivity.png";

function _Hybridmulticloud(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "hybridmulticloud";
  return node;
}

export function AzureOperator5gCore(label?: string, options?: Record<string, unknown>) {
  const node = _Hybridmulticloud(label ?? "AzureOperator5gCore", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_operator_5g_coreIcon;
  return node;
}

export function AzureOperatorInsights(label?: string, options?: Record<string, unknown>) {
  const node = _Hybridmulticloud(label ?? "AzureOperatorInsights", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_operator_insightsIcon;
  return node;
}

export function AzureOperatorNexus(label?: string, options?: Record<string, unknown>) {
  const node = _Hybridmulticloud(label ?? "AzureOperatorNexus", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_operator_nexusIcon;
  return node;
}

export function AzureOperatorServiceManager(label?: string, options?: Record<string, unknown>) {
  const node = _Hybridmulticloud(label ?? "AzureOperatorServiceManager", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_operator_service_managerIcon;
  return node;
}

export function AzureProgrammableConnectivity(label?: string, options?: Record<string, unknown>) {
  const node = _Hybridmulticloud(label ?? "AzureProgrammableConnectivity", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_programmable_connectivityIcon;
  return node;
}
