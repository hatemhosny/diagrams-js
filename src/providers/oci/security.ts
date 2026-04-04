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

class _Security extends _Oci {
  protected static override _type = "security";
}

export class CloudGuardWhite extends _Security {
  protected static override _iconDataUrl = cloud_guard_whiteIcon;
}

export class CloudGuard extends _Security {
  protected static override _iconDataUrl = cloud_guardIcon;
}

export class DDOSWhite extends _Security {
  protected static override _iconDataUrl = ddos_whiteIcon;
}

export class DDOS extends _Security {
  protected static override _iconDataUrl = ddosIcon;
}

export class EncryptionWhite extends _Security {
  protected static override _iconDataUrl = encryption_whiteIcon;
}

export class Encryption extends _Security {
  protected static override _iconDataUrl = encryptionIcon;
}

export class IDAccessWhite extends _Security {
  protected static override _iconDataUrl = id_access_whiteIcon;
}

export class IDAccess extends _Security {
  protected static override _iconDataUrl = id_accessIcon;
}

export class KeyManagementWhite extends _Security {
  protected static override _iconDataUrl = key_management_whiteIcon;
}

export class KeyManagement extends _Security {
  protected static override _iconDataUrl = key_managementIcon;
}

export class MaxSecurityZoneWhite extends _Security {
  protected static override _iconDataUrl = max_security_zone_whiteIcon;
}

export class MaxSecurityZone extends _Security {
  protected static override _iconDataUrl = max_security_zoneIcon;
}

export class VaultWhite extends _Security {
  protected static override _iconDataUrl = vault_whiteIcon;
}

export class Vault extends _Security {
  protected static override _iconDataUrl = vaultIcon;
}

export class WAFWhite extends _Security {
  protected static override _iconDataUrl = waf_whiteIcon;
}

export class WAF extends _Security {
  protected static override _iconDataUrl = wafIcon;
}
