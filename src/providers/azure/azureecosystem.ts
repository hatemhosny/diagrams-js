import { _Azure } from "./index.js";
import applensIcon from "../../../resources/azure/azureecosystem/applens.png";
import azure_hybrid_centerIcon from "../../../resources/azure/azureecosystem/azure-hybrid-center.png";
import collaborative_serviceIcon from "../../../resources/azure/azureecosystem/collaborative-service.png";

function _Azureecosystem(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "azureecosystem";
  return node;
}

export function Applens(label?: string, options?: Record<string, unknown>) {
  const node = _Azureecosystem(label ?? "Applens", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Applens";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = applensIcon;
  return node;
}

export function AzureHybridCenter(label?: string, options?: Record<string, unknown>) {
  const node = _Azureecosystem(label ?? "AzureHybridCenter", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureHybridCenter";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_hybrid_centerIcon;
  return node;
}

export function CollaborativeService(label?: string, options?: Record<string, unknown>) {
  const node = _Azureecosystem(label ?? "CollaborativeService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CollaborativeService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = collaborative_serviceIcon;
  return node;
}
