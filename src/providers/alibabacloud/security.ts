import { _Alibabacloud } from "./index.js";
import anti_bot_serviceIcon from "../../../resources/alibabacloud/security/anti-bot-service.png";
import anti_ddos_basicIcon from "../../../resources/alibabacloud/security/anti-ddos-basic.png";
import anti_ddos_proIcon from "../../../resources/alibabacloud/security/anti-ddos-pro.png";
import antifraud_serviceIcon from "../../../resources/alibabacloud/security/antifraud-service.png";
import bastion_hostIcon from "../../../resources/alibabacloud/security/bastion-host.png";
import cloud_firewallIcon from "../../../resources/alibabacloud/security/cloud-firewall.png";
import cloud_security_scannerIcon from "../../../resources/alibabacloud/security/cloud-security-scanner.png";
import content_moderationIcon from "../../../resources/alibabacloud/security/content-moderation.png";
import crowdsourced_security_testingIcon from "../../../resources/alibabacloud/security/crowdsourced-security-testing.png";
import data_encryption_serviceIcon from "../../../resources/alibabacloud/security/data-encryption-service.png";
import db_auditIcon from "../../../resources/alibabacloud/security/db-audit.png";
import game_shieldIcon from "../../../resources/alibabacloud/security/game-shield.png";
import id_verificationIcon from "../../../resources/alibabacloud/security/id-verification.png";
import managed_security_serviceIcon from "../../../resources/alibabacloud/security/managed-security-service.png";
import security_centerIcon from "../../../resources/alibabacloud/security/security-center.png";
import server_guardIcon from "../../../resources/alibabacloud/security/server-guard.png";
import ssl_certificatesIcon from "../../../resources/alibabacloud/security/ssl-certificates.png";
import web_application_firewallIcon from "../../../resources/alibabacloud/security/web-application-firewall.png";

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)._type = "security";
  return node;
}

export function AntiBotService(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AntiBotService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = anti_bot_serviceIcon;
  return node;
}

export function AntiDdosBasic(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AntiDdosBasic", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = anti_ddos_basicIcon;
  return node;
}

export function AntiDdosPro(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AntiDdosPro", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = anti_ddos_proIcon;
  return node;
}

export function AntifraudService(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AntifraudService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = antifraud_serviceIcon;
  return node;
}

export function BastionHost(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "BastionHost", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = bastion_hostIcon;
  return node;
}

export function CloudFirewall(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CloudFirewall", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cloud_firewallIcon;
  return node;
}

export function CloudSecurityScanner(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CloudSecurityScanner", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cloud_security_scannerIcon;
  return node;
}

export function ContentModeration(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ContentModeration", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = content_moderationIcon;
  return node;
}

export function CrowdsourcedSecurityTesting(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CrowdsourcedSecurityTesting", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = crowdsourced_security_testingIcon;
  return node;
}

export function DataEncryptionService(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "DataEncryptionService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_encryption_serviceIcon;
  return node;
}

export function DbAudit(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "DbAudit", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = db_auditIcon;
  return node;
}

export function GameShield(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "GameShield", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = game_shieldIcon;
  return node;
}

export function IdVerification(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "IdVerification", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = id_verificationIcon;
  return node;
}

export function ManagedSecurityService(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ManagedSecurityService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = managed_security_serviceIcon;
  return node;
}

export function SecurityCenter(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityCenter", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = security_centerIcon;
  return node;
}

export function ServerGuard(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ServerGuard", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = server_guardIcon;
  return node;
}

export function SslCertificates(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SslCertificates", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ssl_certificatesIcon;
  return node;
}

export function WebApplicationFirewall(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "WebApplicationFirewall", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = web_application_firewallIcon;
  return node;
}

// Aliases
export const ABS = AntiBotService;
export const AS = AntifraudService;
export const CFW = CloudFirewall;
export const CM = ContentModeration;
export const DES = DataEncryptionService;
export const WAF = WebApplicationFirewall;
