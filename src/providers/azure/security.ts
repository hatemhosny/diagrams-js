import { _Azure } from "./index.js";
import application_security_groupsIcon from "../../../resources/azure/security/application-security-groups.png";
import azure_ad_authentication_methodsIcon from "../../../resources/azure/security/azure-ad-authentication-methods.png";
import azure_ad_identity_protectionIcon from "../../../resources/azure/security/azure-ad-identity-protection.png";
import azure_ad_privleged_identity_managementIcon from "../../../resources/azure/security/azure-ad-privleged-identity-management.png";
import azure_ad_risky_signinsIcon from "../../../resources/azure/security/azure-ad-risky-signins.png";
import azure_ad_risky_usersIcon from "../../../resources/azure/security/azure-ad-risky-users.png";
import azure_information_protectionIcon from "../../../resources/azure/security/azure-information-protection.png";
import azure_sentinelIcon from "../../../resources/azure/security/azure-sentinel.png";
import conditional_accessIcon from "../../../resources/azure/security/conditional-access.png";
import defenderIcon from "../../../resources/azure/security/defender.png";
import detonationIcon from "../../../resources/azure/security/detonation.png";
import extended_security_updatesIcon from "../../../resources/azure/security/extended-security-updates.png";
import extendedsecurityupdatesIcon from "../../../resources/azure/security/extendedsecurityupdates.png";
import identity_secure_scoreIcon from "../../../resources/azure/security/identity-secure-score.png";
import key_vaultsIcon from "../../../resources/azure/security/key-vaults.png";
import microsoft_defender_easmIcon from "../../../resources/azure/security/microsoft-defender-easm.png";
import microsoft_defender_for_cloudIcon from "../../../resources/azure/security/microsoft-defender-for-cloud.png";
import microsoft_defender_for_iotIcon from "../../../resources/azure/security/microsoft-defender-for-iot.png";
import multifactor_authenticationIcon from "../../../resources/azure/security/multifactor-authentication.png";
import security_centerIcon from "../../../resources/azure/security/security-center.png";
import sentinelIcon from "../../../resources/azure/security/sentinel.png";
import user_settingsIcon from "../../../resources/azure/security/user-settings.png";

class _Security extends _Azure {
  protected static override _type = "security";
}

export class ApplicationSecurityGroups extends _Security {
  protected static override _iconDataUrl = application_security_groupsIcon;
}

export class AzureADAuthenticationMethods extends _Security {
  protected static override _iconDataUrl = azure_ad_authentication_methodsIcon;
}

export class AzureADIdentityProtection extends _Security {
  protected static override _iconDataUrl = azure_ad_identity_protectionIcon;
}

export class AzureADPrivlegedIdentityManagement extends _Security {
  protected static override _iconDataUrl = azure_ad_privleged_identity_managementIcon;
}

export class AzureADRiskySignins extends _Security {
  protected static override _iconDataUrl = azure_ad_risky_signinsIcon;
}

export class AzureADRiskyUsers extends _Security {
  protected static override _iconDataUrl = azure_ad_risky_usersIcon;
}

export class AzureInformationProtection extends _Security {
  protected static override _iconDataUrl = azure_information_protectionIcon;
}

export class AzureSentinel extends _Security {
  protected static override _iconDataUrl = azure_sentinelIcon;
}

export class ConditionalAccess extends _Security {
  protected static override _iconDataUrl = conditional_accessIcon;
}

export class Defender extends _Security {
  protected static override _iconDataUrl = defenderIcon;
}

export class Detonation extends _Security {
  protected static override _iconDataUrl = detonationIcon;
}

export class ExtendedSecurityUpdates extends _Security {
  protected static override _iconDataUrl = extended_security_updatesIcon;
}

export class Extendedsecurityupdates extends _Security {
  protected static override _iconDataUrl = extendedsecurityupdatesIcon;
}

export class IdentitySecureScore extends _Security {
  protected static override _iconDataUrl = identity_secure_scoreIcon;
}

export class KeyVaults extends _Security {
  protected static override _iconDataUrl = key_vaultsIcon;
}

export class MicrosoftDefenderEasm extends _Security {
  protected static override _iconDataUrl = microsoft_defender_easmIcon;
}

export class MicrosoftDefenderForCloud extends _Security {
  protected static override _iconDataUrl = microsoft_defender_for_cloudIcon;
}

export class MicrosoftDefenderForIot extends _Security {
  protected static override _iconDataUrl = microsoft_defender_for_iotIcon;
}

export class MultifactorAuthentication extends _Security {
  protected static override _iconDataUrl = multifactor_authenticationIcon;
}

export class SecurityCenter extends _Security {
  protected static override _iconDataUrl = security_centerIcon;
}

export class Sentinel extends _Security {
  protected static override _iconDataUrl = sentinelIcon;
}

export class UserSettings extends _Security {
  protected static override _iconDataUrl = user_settingsIcon;
}
