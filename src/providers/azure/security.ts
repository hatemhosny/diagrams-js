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

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "security";
  return node;
}

export function ApplicationSecurityGroups(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ApplicationSecurityGroups", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = application_security_groupsIcon;
  return node;
}

export function AzureADAuthenticationMethods(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AzureADAuthenticationMethods", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    azure_ad_authentication_methodsIcon;
  return node;
}

export function AzureADIdentityProtection(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AzureADIdentityProtection", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_ad_identity_protectionIcon;
  return node;
}

export function AzureADPrivlegedIdentityManagement(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "AzureADPrivlegedIdentityManagement", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    azure_ad_privleged_identity_managementIcon;
  return node;
}

export function AzureADRiskySignins(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AzureADRiskySignins", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_ad_risky_signinsIcon;
  return node;
}

export function AzureADRiskyUsers(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AzureADRiskyUsers", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_ad_risky_usersIcon;
  return node;
}

export function AzureInformationProtection(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AzureInformationProtection", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_information_protectionIcon;
  return node;
}

export function AzureSentinel(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AzureSentinel", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_sentinelIcon;
  return node;
}

export function ConditionalAccess(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ConditionalAccess", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = conditional_accessIcon;
  return node;
}

export function Defender(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Defender", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = defenderIcon;
  return node;
}

export function Detonation(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Detonation", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = detonationIcon;
  return node;
}

export function ExtendedSecurityUpdates(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ExtendedSecurityUpdates", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = extended_security_updatesIcon;
  return node;
}

export function Extendedsecurityupdates(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Extendedsecurityupdates", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = extendedsecurityupdatesIcon;
  return node;
}

export function IdentitySecureScore(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "IdentitySecureScore", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = identity_secure_scoreIcon;
  return node;
}

export function KeyVaults(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "KeyVaults", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = key_vaultsIcon;
  return node;
}

export function MicrosoftDefenderEasm(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "MicrosoftDefenderEasm", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = microsoft_defender_easmIcon;
  return node;
}

export function MicrosoftDefenderForCloud(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "MicrosoftDefenderForCloud", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = microsoft_defender_for_cloudIcon;
  return node;
}

export function MicrosoftDefenderForIot(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "MicrosoftDefenderForIot", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = microsoft_defender_for_iotIcon;
  return node;
}

export function MultifactorAuthentication(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "MultifactorAuthentication", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = multifactor_authenticationIcon;
  return node;
}

export function SecurityCenter(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityCenter", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = security_centerIcon;
  return node;
}

export function Sentinel(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Sentinel", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sentinelIcon;
  return node;
}

export function UserSettings(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "UserSettings", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = user_settingsIcon;
  return node;
}
