import { _Aws } from "./index.js";
import ad_connectorIcon from "../../../resources/aws/security/ad-connector.png";
import artifactIcon from "../../../resources/aws/security/artifact.png";
import certificate_authorityIcon from "../../../resources/aws/security/certificate-authority.png";
import certificate_managerIcon from "../../../resources/aws/security/certificate-manager.png";
import cloud_directoryIcon from "../../../resources/aws/security/cloud-directory.png";
import cloudhsmIcon from "../../../resources/aws/security/cloudhsm.png";
import cognitoIcon from "../../../resources/aws/security/cognito.png";
import detectiveIcon from "../../../resources/aws/security/detective.png";
import directory_serviceIcon from "../../../resources/aws/security/directory-service.png";
import firewall_managerIcon from "../../../resources/aws/security/firewall-manager.png";
import guarddutyIcon from "../../../resources/aws/security/guardduty.png";
import identity_and_access_management_iam_access_analyzerIcon from "../../../resources/aws/security/identity-and-access-management-iam-access-analyzer.png";
import identity_and_access_management_iam_add_onIcon from "../../../resources/aws/security/identity-and-access-management-iam-add-on.png";
import identity_and_access_management_iam_aws_sts_alternateIcon from "../../../resources/aws/security/identity-and-access-management-iam-aws-sts-alternate.png";
import identity_and_access_management_iam_aws_stsIcon from "../../../resources/aws/security/identity-and-access-management-iam-aws-sts.png";
import identity_and_access_management_iam_data_encryption_keyIcon from "../../../resources/aws/security/identity-and-access-management-iam-data-encryption-key.png";
import identity_and_access_management_iam_encrypted_dataIcon from "../../../resources/aws/security/identity-and-access-management-iam-encrypted-data.png";
import identity_and_access_management_iam_long_term_security_credentialIcon from "../../../resources/aws/security/identity-and-access-management-iam-long-term-security-credential.png";
import identity_and_access_management_iam_mfa_tokenIcon from "../../../resources/aws/security/identity-and-access-management-iam-mfa-token.png";
import identity_and_access_management_iam_permissionsIcon from "../../../resources/aws/security/identity-and-access-management-iam-permissions.png";
import identity_and_access_management_iam_roleIcon from "../../../resources/aws/security/identity-and-access-management-iam-role.png";
import identity_and_access_management_iam_temporary_security_credentialIcon from "../../../resources/aws/security/identity-and-access-management-iam-temporary-security-credential.png";
import identity_and_access_management_iamIcon from "../../../resources/aws/security/identity-and-access-management-iam.png";
import inspector_agentIcon from "../../../resources/aws/security/inspector-agent.png";
import inspectorIcon from "../../../resources/aws/security/inspector.png";
import key_management_serviceIcon from "../../../resources/aws/security/key-management-service.png";
import macieIcon from "../../../resources/aws/security/macie.png";
import managed_microsoft_adIcon from "../../../resources/aws/security/managed-microsoft-ad.png";
import resource_access_managerIcon from "../../../resources/aws/security/resource-access-manager.png";
import secrets_managerIcon from "../../../resources/aws/security/secrets-manager.png";
import security_hub_findingIcon from "../../../resources/aws/security/security-hub-finding.png";
import security_hubIcon from "../../../resources/aws/security/security-hub.png";
import security_identity_and_complianceIcon from "../../../resources/aws/security/security-identity-and-compliance.png";
import security_lakeIcon from "../../../resources/aws/security/security-lake.png";
import shield_advancedIcon from "../../../resources/aws/security/shield-advanced.png";
import shieldIcon from "../../../resources/aws/security/shield.png";
import simple_adIcon from "../../../resources/aws/security/simple-ad.png";
import single_sign_onIcon from "../../../resources/aws/security/single-sign-on.png";
import waf_filtering_ruleIcon from "../../../resources/aws/security/waf-filtering-rule.png";
import wafIcon from "../../../resources/aws/security/waf.png";

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "security";
  return node;
}

export function AdConnector(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "AdConnector", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AdConnector";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ad_connectorIcon;
  return node;
}

export function Artifact(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Artifact", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Artifact";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = artifactIcon;
  return node;
}

export function CertificateAuthority(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CertificateAuthority", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CertificateAuthority";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = certificate_authorityIcon;
  return node;
}

export function CertificateManager(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CertificateManager", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CertificateManager";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = certificate_managerIcon;
  return node;
}

export function CloudDirectory(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "CloudDirectory", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CloudDirectory";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_directoryIcon;
  return node;
}

export function Cloudhsm(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Cloudhsm", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cloudhsm";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudhsmIcon;
  return node;
}

export function Cognito(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Cognito", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cognito";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cognitoIcon;
  return node;
}

export function Detective(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Detective", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Detective";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = detectiveIcon;
  return node;
}

export function DirectoryService(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "DirectoryService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DirectoryService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = directory_serviceIcon;
  return node;
}

export function FirewallManager(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "FirewallManager", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "FirewallManager";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = firewall_managerIcon;
  return node;
}

export function Guardduty(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Guardduty", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Guardduty";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = guarddutyIcon;
  return node;
}

export function IdentityAndAccessManagementIamAccessAnalyzer(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "IdentityAndAccessManagementIamAccessAnalyzer", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "IdentityAndAccessManagementIamAccessAnalyzer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_access_analyzerIcon;
  return node;
}

export function IdentityAndAccessManagementIamAddOn(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "IdentityAndAccessManagementIamAddOn", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IdentityAndAccessManagementIamAddOn";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_add_onIcon;
  return node;
}

export function IdentityAndAccessManagementIamAWSStsAlternate(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "IdentityAndAccessManagementIamAWSStsAlternate", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "IdentityAndAccessManagementIamAWSStsAlternate";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_aws_sts_alternateIcon;
  return node;
}

export function IdentityAndAccessManagementIamAWSSts(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "IdentityAndAccessManagementIamAWSSts", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "IdentityAndAccessManagementIamAWSSts";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_aws_stsIcon;
  return node;
}

export function IdentityAndAccessManagementIamDataEncryptionKey(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "IdentityAndAccessManagementIamDataEncryptionKey", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "IdentityAndAccessManagementIamDataEncryptionKey";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_data_encryption_keyIcon;
  return node;
}

export function IdentityAndAccessManagementIamEncryptedData(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "IdentityAndAccessManagementIamEncryptedData", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "IdentityAndAccessManagementIamEncryptedData";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_encrypted_dataIcon;
  return node;
}

export function IdentityAndAccessManagementIamLongTermSecurityCredential(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(
    label ?? "IdentityAndAccessManagementIamLongTermSecurityCredential",
    options,
  );
  (node as unknown as Record<string, unknown>)["~resource"] =
    "IdentityAndAccessManagementIamLongTermSecurityCredential";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_long_term_security_credentialIcon;
  return node;
}

export function IdentityAndAccessManagementIamMfaToken(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "IdentityAndAccessManagementIamMfaToken", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "IdentityAndAccessManagementIamMfaToken";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_mfa_tokenIcon;
  return node;
}

export function IdentityAndAccessManagementIamPermissions(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "IdentityAndAccessManagementIamPermissions", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "IdentityAndAccessManagementIamPermissions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_permissionsIcon;
  return node;
}

export function IdentityAndAccessManagementIamRole(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(label ?? "IdentityAndAccessManagementIamRole", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IdentityAndAccessManagementIamRole";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_roleIcon;
  return node;
}

export function IdentityAndAccessManagementIamTemporarySecurityCredential(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Security(
    label ?? "IdentityAndAccessManagementIamTemporarySecurityCredential",
    options,
  );
  (node as unknown as Record<string, unknown>)["~resource"] =
    "IdentityAndAccessManagementIamTemporarySecurityCredential";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iam_temporary_security_credentialIcon;
  return node;
}

export function IdentityAndAccessManagementIam(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "IdentityAndAccessManagementIam", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IdentityAndAccessManagementIam";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    identity_and_access_management_iamIcon;
  return node;
}

export function InspectorAgent(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "InspectorAgent", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "InspectorAgent";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = inspector_agentIcon;
  return node;
}

export function Inspector(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Inspector", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Inspector";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = inspectorIcon;
  return node;
}

export function KeyManagementService(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "KeyManagementService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "KeyManagementService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = key_management_serviceIcon;
  return node;
}

export function Macie(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Macie", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Macie";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = macieIcon;
  return node;
}

export function ManagedMicrosoftAd(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ManagedMicrosoftAd", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ManagedMicrosoftAd";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managed_microsoft_adIcon;
  return node;
}

export function ResourceAccessManager(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ResourceAccessManager", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ResourceAccessManager";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = resource_access_managerIcon;
  return node;
}

export function SecretsManager(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecretsManager", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SecretsManager";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = secrets_managerIcon;
  return node;
}

export function SecurityHubFinding(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityHubFinding", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SecurityHubFinding";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = security_hub_findingIcon;
  return node;
}

export function SecurityHub(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityHub", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SecurityHub";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = security_hubIcon;
  return node;
}

export function SecurityIdentityAndCompliance(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityIdentityAndCompliance", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SecurityIdentityAndCompliance";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    security_identity_and_complianceIcon;
  return node;
}

export function SecurityLake(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityLake", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SecurityLake";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = security_lakeIcon;
  return node;
}

export function ShieldAdvanced(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ShieldAdvanced", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ShieldAdvanced";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = shield_advancedIcon;
  return node;
}

export function Shield(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Shield", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Shield";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = shieldIcon;
  return node;
}

export function SimpleAd(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SimpleAd", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SimpleAd";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = simple_adIcon;
  return node;
}

export function SingleSignOn(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SingleSignOn", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SingleSignOn";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = single_sign_onIcon;
  return node;
}

export function WAFFilteringRule(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "WAFFilteringRule", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "WAFFilteringRule";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = waf_filtering_ruleIcon;
  return node;
}

export function WAF(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "WAF", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "WAF";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = wafIcon;
  return node;
}

// Aliases
export const ACM = CertificateManager;
export const CloudHSM = Cloudhsm;
export const DS = DirectoryService;
export const FMS = FirewallManager;
export const IAMAccessAnalyzer = IdentityAndAccessManagementIamAccessAnalyzer;
export const IAMAWSSts = IdentityAndAccessManagementIamAWSSts;
export const IAMPermissions = IdentityAndAccessManagementIamPermissions;
export const IAMRole = IdentityAndAccessManagementIamRole;
export const IAM = IdentityAndAccessManagementIam;
export const KMS = KeyManagementService;
export const RAM = ResourceAccessManager;
