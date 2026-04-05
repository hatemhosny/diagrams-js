import { _Oci } from "./index.js";
import cloud_guard_whiteIcon from "../../../resources/oci/security/cloud-guard-white.png";
import cloud_guardIcon from "../../../resources/oci/security/cloud-guard.png";
import ddos_whiteIcon from "../../../resources/oci/security/ddos-white.png";
import ddosIcon from "../../../resources/oci/security/ddos.png";
import encryption_whiteIcon from "../../../resources/oci/security/encryption-white.png";
import encryptionIcon from "../../../resources/oci/security/encryption.png";
import id_access_whiteIcon from "../../../resources/oci/security/id-access-white.png";
import id_accessIcon from "../../../resources/oci/security/id-access.png";
import key_management_whiteIcon from "../../../resources/oci/security/key-management-white.png";
import key_managementIcon from "../../../resources/oci/security/key-management.png";
import max_security_zone_whiteIcon from "../../../resources/oci/security/max-security-zone-white.png";
import max_security_zoneIcon from "../../../resources/oci/security/max-security-zone.png";
import vault_whiteIcon from "../../../resources/oci/security/vault-white.png";
import vaultIcon from "../../../resources/oci/security/vault.png";
import waf_whiteIcon from "../../../resources/oci/security/waf-white.png";
import wafIcon from "../../../resources/oci/security/waf.png";

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label, options);
  (node as unknown as Record<string, unknown>)._type = "security";
  return node;
}

export function CloudGuardWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CloudGuardWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cloud_guard_whiteIcon;
  return node;
}

export function CloudGuard(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CloudGuard", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cloud_guardIcon;
  return node;
}

export function DDOSWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "DDOSWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ddos_whiteIcon;
  return node;
}

export function DDOS(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "DDOS", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ddosIcon;
  return node;
}

export function EncryptionWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "EncryptionWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = encryption_whiteIcon;
  return node;
}

export function Encryption(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Encryption", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = encryptionIcon;
  return node;
}

export function IDAccessWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "IDAccessWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = id_access_whiteIcon;
  return node;
}

export function IDAccess(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "IDAccess", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = id_accessIcon;
  return node;
}

export function KeyManagementWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "KeyManagementWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = key_management_whiteIcon;
  return node;
}

export function KeyManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "KeyManagement", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = key_managementIcon;
  return node;
}

export function MaxSecurityZoneWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "MaxSecurityZoneWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = max_security_zone_whiteIcon;
  return node;
}

export function MaxSecurityZone(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "MaxSecurityZone", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = max_security_zoneIcon;
  return node;
}

export function VaultWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "VaultWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vault_whiteIcon;
  return node;
}

export function Vault(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Vault", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vaultIcon;
  return node;
}

export function WAFWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "WAFWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = waf_whiteIcon;
  return node;
}

export function WAF(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "WAF", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = wafIcon;
  return node;
}
