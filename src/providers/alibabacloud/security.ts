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

class _Security extends _Alibabacloud {
  protected static override _type = "security";
}

export class AntiBotService extends _Security {
  protected static override _iconDataUrl = anti_bot_serviceIcon;
}

export class AntiDdosBasic extends _Security {
  protected static override _iconDataUrl = anti_ddos_basicIcon;
}

export class AntiDdosPro extends _Security {
  protected static override _iconDataUrl = anti_ddos_proIcon;
}

export class AntifraudService extends _Security {
  protected static override _iconDataUrl = antifraud_serviceIcon;
}

export class BastionHost extends _Security {
  protected static override _iconDataUrl = bastion_hostIcon;
}

export class CloudFirewall extends _Security {
  protected static override _iconDataUrl = cloud_firewallIcon;
}

export class CloudSecurityScanner extends _Security {
  protected static override _iconDataUrl = cloud_security_scannerIcon;
}

export class ContentModeration extends _Security {
  protected static override _iconDataUrl = content_moderationIcon;
}

export class CrowdsourcedSecurityTesting extends _Security {
  protected static override _iconDataUrl = crowdsourced_security_testingIcon;
}

export class DataEncryptionService extends _Security {
  protected static override _iconDataUrl = data_encryption_serviceIcon;
}

export class DbAudit extends _Security {
  protected static override _iconDataUrl = db_auditIcon;
}

export class GameShield extends _Security {
  protected static override _iconDataUrl = game_shieldIcon;
}

export class IdVerification extends _Security {
  protected static override _iconDataUrl = id_verificationIcon;
}

export class ManagedSecurityService extends _Security {
  protected static override _iconDataUrl = managed_security_serviceIcon;
}

export class SecurityCenter extends _Security {
  protected static override _iconDataUrl = security_centerIcon;
}

export class ServerGuard extends _Security {
  protected static override _iconDataUrl = server_guardIcon;
}

export class SslCertificates extends _Security {
  protected static override _iconDataUrl = ssl_certificatesIcon;
}

export class WebApplicationFirewall extends _Security {
  protected static override _iconDataUrl = web_application_firewallIcon;
}

// Aliases
export const ABS = AntiBotService;
export const AS = AntifraudService;
export const CFW = CloudFirewall;
export const CM = ContentModeration;
export const DES = DataEncryptionService;
export const WAF = WebApplicationFirewall;
