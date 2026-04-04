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

class _Security extends _Gcp {
  protected static override _type = "security";
}

export class AccessContextManager extends _Security {
  protected static override _iconDataUrl = access_context_managerIcon;
}

export class AssuredWorkloads extends _Security {
  protected static override _iconDataUrl = assured_workloadsIcon;
}

export class CertificateAuthorityService extends _Security {
  protected static override _iconDataUrl = certificate_authority_serviceIcon;
}

export class CertificateManager extends _Security {
  protected static override _iconDataUrl = certificate_managerIcon;
}

export class CloudAssetInventory extends _Security {
  protected static override _iconDataUrl = cloud_asset_inventoryIcon;
}

export class Iam extends _Security {
  protected static override _iconDataUrl = iamIcon;
}

export class IAP extends _Security {
  protected static override _iconDataUrl = iapIcon;
}

export class KeyManagementService extends _Security {
  protected static override _iconDataUrl = key_management_serviceIcon;
}

export class ResourceManager extends _Security {
  protected static override _iconDataUrl = resource_managerIcon;
}

export class SecretManager extends _Security {
  protected static override _iconDataUrl = secret_managerIcon;
}

export class SecurityCommandCenter extends _Security {
  protected static override _iconDataUrl = security_command_centerIcon;
}

export class SecurityHealthAdvisor extends _Security {
  protected static override _iconDataUrl = security_health_advisorIcon;
}

export class SecurityScanner extends _Security {
  protected static override _iconDataUrl = security_scannerIcon;
}

// Aliases
export const ACM = AccessContextManager;
export const KMS = KeyManagementService;
export const SCC = SecurityCommandCenter;
