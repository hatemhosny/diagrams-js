import { _Gcp } from "./index.js";
import access_context_managerIcon from "../../../resources/gcp/security/access-context-manager.png";
import assured_workloadsIcon from "../../../resources/gcp/security/assured-workloads.png";
import certificate_authority_serviceIcon from "../../../resources/gcp/security/certificate-authority-service.png";
import certificate_managerIcon from "../../../resources/gcp/security/certificate-manager.png";
import cloud_asset_inventoryIcon from "../../../resources/gcp/security/cloud-asset-inventory.png";
import iamIcon from "../../../resources/gcp/security/iam.png";
import iapIcon from "../../../resources/gcp/security/iap.png";
import key_management_serviceIcon from "../../../resources/gcp/security/key-management-service.png";
import resource_managerIcon from "../../../resources/gcp/security/resource-manager.png";
import secret_managerIcon from "../../../resources/gcp/security/secret-manager.png";
import security_command_centerIcon from "../../../resources/gcp/security/security-command-center.png";
import security_health_advisorIcon from "../../../resources/gcp/security/security-health-advisor.png";
import security_scannerIcon from "../../../resources/gcp/security/security-scanner.png";

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "security";
  return node;
}

export function AccessContextManager(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AccessContextManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = access_context_managerIcon;
  return node;
}

export function AssuredWorkloads(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AssuredWorkloads", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = assured_workloadsIcon;
  return node;
}

export function CertificateAuthorityService(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CertificateAuthorityService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = certificate_authority_serviceIcon;
  return node;
}

export function CertificateManager(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CertificateManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = certificate_managerIcon;
  return node;
}

export function CloudAssetInventory(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CloudAssetInventory", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_asset_inventoryIcon;
  return node;
}

export function Iam(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Iam", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iamIcon;
  return node;
}

export function IAP(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "IAP", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iapIcon;
  return node;
}

export function KeyManagementService(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "KeyManagementService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = key_management_serviceIcon;
  return node;
}

export function ResourceManager(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ResourceManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = resource_managerIcon;
  return node;
}

export function SecretManager(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecretManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = secret_managerIcon;
  return node;
}

export function SecurityCommandCenter(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityCommandCenter", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = security_command_centerIcon;
  return node;
}

export function SecurityHealthAdvisor(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityHealthAdvisor", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = security_health_advisorIcon;
  return node;
}

export function SecurityScanner(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityScanner", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = security_scannerIcon;
  return node;
}

// Aliases
export const ACM = AccessContextManager;
export const KMS = KeyManagementService;
export const SCC = SecurityCommandCenter;
