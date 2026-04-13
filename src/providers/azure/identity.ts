import { _Azure } from "./index.js";
import aad_licensesIcon from "../../../resources/azure/identity/aad-licenses.png";
import access_reviewIcon from "../../../resources/azure/identity/access-review.png";
import active_directory_connect_healthIcon from "../../../resources/azure/identity/active-directory-connect-health.png";
import active_directoryIcon from "../../../resources/azure/identity/active-directory.png";
import ad_b2cIcon from "../../../resources/azure/identity/ad-b2c.png";
import ad_domain_servicesIcon from "../../../resources/azure/identity/ad-domain-services.png";
import ad_identity_protectionIcon from "../../../resources/azure/identity/ad-identity-protection.png";
import ad_privileged_identity_managementIcon from "../../../resources/azure/identity/ad-privileged-identity-management.png";
import administrative_unitsIcon from "../../../resources/azure/identity/administrative-units.png";
import api_proxyIcon from "../../../resources/azure/identity/api-proxy.png";
import app_registrationsIcon from "../../../resources/azure/identity/app-registrations.png";
import azure_active_directoryIcon from "../../../resources/azure/identity/azure-active-directory.png";
import azure_ad_b2cIcon from "../../../resources/azure/identity/azure-ad-b2c.png";
import azure_ad_domain_servicesIcon from "../../../resources/azure/identity/azure-ad-domain-services.png";
import azure_ad_identity_protectionIcon from "../../../resources/azure/identity/azure-ad-identity-protection.png";
import azure_ad_privilege_identity_managementIcon from "../../../resources/azure/identity/azure-ad-privilege-identity-management.png";
import azure_ad_privleged_identity_managementIcon from "../../../resources/azure/identity/azure-ad-privleged-identity-management.png";
import azure_ad_roles_and_administratorsIcon from "../../../resources/azure/identity/azure-ad-roles-and-administrators.png";
import azure_information_protectionIcon from "../../../resources/azure/identity/azure-information-protection.png";
import conditional_accessIcon from "../../../resources/azure/identity/conditional-access.png";
import custom_azure_ad_rolesIcon from "../../../resources/azure/identity/custom-azure-ad-roles.png";
import enterprise_applicationsIcon from "../../../resources/azure/identity/enterprise-applications.png";
import entra_connectIcon from "../../../resources/azure/identity/entra-connect.png";
import entra_domain_servicesIcon from "../../../resources/azure/identity/entra-domain-services.png";
import entra_id_protectionIcon from "../../../resources/azure/identity/entra-id-protection.png";
import entra_managed_identitiesIcon from "../../../resources/azure/identity/entra-managed-identities.png";
import entra_privleged_identity_managementIcon from "../../../resources/azure/identity/entra-privleged-identity-management.png";
import entra_verified_idIcon from "../../../resources/azure/identity/entra-verified-id.png";
import external_identitiesIcon from "../../../resources/azure/identity/external-identities.png";
import global_secure_accessIcon from "../../../resources/azure/identity/global-secure-access.png";
import groupsIcon from "../../../resources/azure/identity/groups.png";
import identity_governanceIcon from "../../../resources/azure/identity/identity-governance.png";
import information_protectionIcon from "../../../resources/azure/identity/information-protection.png";
import internet_accessIcon from "../../../resources/azure/identity/internet-access.png";
import managed_identitiesIcon from "../../../resources/azure/identity/managed-identities.png";
import private_accessIcon from "../../../resources/azure/identity/private-access.png";
import securityIcon from "../../../resources/azure/identity/security.png";
import tenant_propertiesIcon from "../../../resources/azure/identity/tenant-properties.png";
import user_settingsIcon from "../../../resources/azure/identity/user-settings.png";
import usersIcon from "../../../resources/azure/identity/users.png";
import verifiable_credentialsIcon from "../../../resources/azure/identity/verifiable-credentials.png";

function _Identity(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "identity";
  return node;
}

export function AadLicenses(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AadLicenses", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AadLicenses";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = aad_licensesIcon;
  return node;
}

export function AccessReview(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AccessReview", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AccessReview";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = access_reviewIcon;
  return node;
}

export function ActiveDirectoryConnectHealth(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "ActiveDirectoryConnectHealth", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ActiveDirectoryConnectHealth";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    active_directory_connect_healthIcon;
  return node;
}

export function ActiveDirectory(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "ActiveDirectory", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ActiveDirectory";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = active_directoryIcon;
  return node;
}

export function ADB2C(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "ADB2C", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ADB2C";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ad_b2cIcon;
  return node;
}

export function ADDomainServices(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "ADDomainServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ADDomainServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ad_domain_servicesIcon;
  return node;
}

export function ADIdentityProtection(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "ADIdentityProtection", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ADIdentityProtection";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ad_identity_protectionIcon;
  return node;
}

export function ADPrivilegedIdentityManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "ADPrivilegedIdentityManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ADPrivilegedIdentityManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    ad_privileged_identity_managementIcon;
  return node;
}

export function AdministrativeUnits(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AdministrativeUnits", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AdministrativeUnits";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = administrative_unitsIcon;
  return node;
}

export function APIProxy(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "APIProxy", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIProxy";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_proxyIcon;
  return node;
}

export function AppRegistrations(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AppRegistrations", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppRegistrations";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_registrationsIcon;
  return node;
}

export function AzureActiveDirectory(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AzureActiveDirectory", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureActiveDirectory";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_active_directoryIcon;
  return node;
}

export function AzureADB2C(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AzureADB2C", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureADB2C";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_ad_b2cIcon;
  return node;
}

export function AzureADDomainServices(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AzureADDomainServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureADDomainServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_ad_domain_servicesIcon;
  return node;
}

export function AzureADIdentityProtection(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AzureADIdentityProtection", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureADIdentityProtection";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_ad_identity_protectionIcon;
  return node;
}

export function AzureADPrivilegeIdentityManagement(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Identity(label ?? "AzureADPrivilegeIdentityManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureADPrivilegeIdentityManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    azure_ad_privilege_identity_managementIcon;
  return node;
}

export function AzureADPrivlegedIdentityManagement(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Identity(label ?? "AzureADPrivlegedIdentityManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureADPrivlegedIdentityManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    azure_ad_privleged_identity_managementIcon;
  return node;
}

export function AzureADRolesAndAdministrators(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AzureADRolesAndAdministrators", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureADRolesAndAdministrators";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    azure_ad_roles_and_administratorsIcon;
  return node;
}

export function AzureInformationProtection(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "AzureInformationProtection", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureInformationProtection";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_information_protectionIcon;
  return node;
}

export function ConditionalAccess(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "ConditionalAccess", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ConditionalAccess";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = conditional_accessIcon;
  return node;
}

export function CustomAzureADRoles(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "CustomAzureADRoles", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CustomAzureADRoles";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = custom_azure_ad_rolesIcon;
  return node;
}

export function EnterpriseApplications(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "EnterpriseApplications", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EnterpriseApplications";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = enterprise_applicationsIcon;
  return node;
}

export function EntraConnect(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "EntraConnect", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EntraConnect";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = entra_connectIcon;
  return node;
}

export function EntraDomainServices(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "EntraDomainServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EntraDomainServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = entra_domain_servicesIcon;
  return node;
}

export function EntraIDProtection(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "EntraIDProtection", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EntraIDProtection";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = entra_id_protectionIcon;
  return node;
}

export function EntraManagedIdentities(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "EntraManagedIdentities", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EntraManagedIdentities";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = entra_managed_identitiesIcon;
  return node;
}

export function EntraPrivlegedIdentityManagement(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Identity(label ?? "EntraPrivlegedIdentityManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EntraPrivlegedIdentityManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    entra_privleged_identity_managementIcon;
  return node;
}

export function EntraVerifiedID(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "EntraVerifiedID", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EntraVerifiedID";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = entra_verified_idIcon;
  return node;
}

export function ExternalIdentities(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "ExternalIdentities", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ExternalIdentities";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = external_identitiesIcon;
  return node;
}

export function GlobalSecureAccess(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "GlobalSecureAccess", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "GlobalSecureAccess";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = global_secure_accessIcon;
  return node;
}

export function Groups(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "Groups", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Groups";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = groupsIcon;
  return node;
}

export function IdentityGovernance(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "IdentityGovernance", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IdentityGovernance";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = identity_governanceIcon;
  return node;
}

export function InformationProtection(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "InformationProtection", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "InformationProtection";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = information_protectionIcon;
  return node;
}

export function InternetAccess(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "InternetAccess", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "InternetAccess";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = internet_accessIcon;
  return node;
}

export function ManagedIdentities(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "ManagedIdentities", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ManagedIdentities";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managed_identitiesIcon;
  return node;
}

export function PrivateAccess(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "PrivateAccess", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PrivateAccess";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = private_accessIcon;
  return node;
}

export function Security(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "Security", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Security";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = securityIcon;
  return node;
}

export function TenantProperties(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "TenantProperties", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "TenantProperties";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tenant_propertiesIcon;
  return node;
}

export function UserSettings(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "UserSettings", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "UserSettings";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = user_settingsIcon;
  return node;
}

export function Users(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "Users", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Users";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = usersIcon;
  return node;
}

export function VerifiableCredentials(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "VerifiableCredentials", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "VerifiableCredentials";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = verifiable_credentialsIcon;
  return node;
}
