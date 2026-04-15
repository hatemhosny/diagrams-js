import { _Azure } from "./index.js";
import abs_memberIcon from "../../../resources/azure/blockchain/abs-member.png";
import azure_blockchain_serviceIcon from "../../../resources/azure/blockchain/azure-blockchain-service.png";
import azure_token_serviceIcon from "../../../resources/azure/blockchain/azure-token-service.png";
import blockchain_applicationsIcon from "../../../resources/azure/blockchain/blockchain-applications.png";
import consortiumIcon from "../../../resources/azure/blockchain/consortium.png";
import outbound_connectionIcon from "../../../resources/azure/blockchain/outbound-connection.png";

function _Blockchain(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "blockchain";
  return node;
}

export function AbsMember(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "AbsMember", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AbsMember";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = abs_memberIcon;
  return node;
}

export function AzureBlockchainService(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "AzureBlockchainService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureBlockchainService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_blockchain_serviceIcon;
  return node;
}

export function AzureTokenService(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "AzureTokenService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureTokenService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_token_serviceIcon;
  return node;
}

export function BlockchainApplications(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "BlockchainApplications", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BlockchainApplications";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = blockchain_applicationsIcon;
  return node;
}

export function Consortium(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "Consortium", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Consortium";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = consortiumIcon;
  return node;
}

export function OutboundConnection(label?: string, options?: Record<string, unknown>) {
  const node = _Blockchain(label ?? "OutboundConnection", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "OutboundConnection";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = outbound_connectionIcon;
  return node;
}
