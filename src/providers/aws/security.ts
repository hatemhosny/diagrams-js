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

class _Security extends _Aws {
  protected static override _type = "security";
}

export class AdConnector extends _Security {
  protected static _iconDataUrl = ad_connectorIcon;
}

export class Artifact extends _Security {
  protected static _iconDataUrl = artifactIcon;
}

export class CertificateAuthority extends _Security {
  protected static _iconDataUrl = certificate_authorityIcon;
}

export class CertificateManager extends _Security {
  protected static _iconDataUrl = certificate_managerIcon;
}

export class CloudDirectory extends _Security {
  protected static _iconDataUrl = cloud_directoryIcon;
}

export class Cloudhsm extends _Security {
  protected static _iconDataUrl = cloudhsmIcon;
}

export class Cognito extends _Security {
  protected static _iconDataUrl = cognitoIcon;
}

export class Detective extends _Security {
  protected static _iconDataUrl = detectiveIcon;
}

export class DirectoryService extends _Security {
  protected static _iconDataUrl = directory_serviceIcon;
}

export class FirewallManager extends _Security {
  protected static _iconDataUrl = firewall_managerIcon;
}

export class Guardduty extends _Security {
  protected static _iconDataUrl = guarddutyIcon;
}

export class IdentityAndAccessManagementIamAccessAnalyzer extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iam_access_analyzerIcon;
}

export class IdentityAndAccessManagementIamAddOn extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iam_add_onIcon;
}

export class IdentityAndAccessManagementIamAWSStsAlternate extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iam_aws_sts_alternateIcon;
}

export class IdentityAndAccessManagementIamAWSSts extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iam_aws_stsIcon;
}

export class IdentityAndAccessManagementIamDataEncryptionKey extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iam_data_encryption_keyIcon;
}

export class IdentityAndAccessManagementIamEncryptedData extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iam_encrypted_dataIcon;
}

export class IdentityAndAccessManagementIamLongTermSecurityCredential extends _Security {
  protected static _iconDataUrl =
    identity_and_access_management_iam_long_term_security_credentialIcon;
}

export class IdentityAndAccessManagementIamMfaToken extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iam_mfa_tokenIcon;
}

export class IdentityAndAccessManagementIamPermissions extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iam_permissionsIcon;
}

export class IdentityAndAccessManagementIamRole extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iam_roleIcon;
}

export class IdentityAndAccessManagementIamTemporarySecurityCredential extends _Security {
  protected static _iconDataUrl =
    identity_and_access_management_iam_temporary_security_credentialIcon;
}

export class IdentityAndAccessManagementIam extends _Security {
  protected static _iconDataUrl = identity_and_access_management_iamIcon;
}

export class InspectorAgent extends _Security {
  protected static _iconDataUrl = inspector_agentIcon;
}

export class Inspector extends _Security {
  protected static _iconDataUrl = inspectorIcon;
}

export class KeyManagementService extends _Security {
  protected static _iconDataUrl = key_management_serviceIcon;
}

export class Macie extends _Security {
  protected static _iconDataUrl = macieIcon;
}

export class ManagedMicrosoftAd extends _Security {
  protected static _iconDataUrl = managed_microsoft_adIcon;
}

export class ResourceAccessManager extends _Security {
  protected static _iconDataUrl = resource_access_managerIcon;
}

export class SecretsManager extends _Security {
  protected static _iconDataUrl = secrets_managerIcon;
}

export class SecurityHubFinding extends _Security {
  protected static _iconDataUrl = security_hub_findingIcon;
}

export class SecurityHub extends _Security {
  protected static _iconDataUrl = security_hubIcon;
}

export class SecurityIdentityAndCompliance extends _Security {
  protected static _iconDataUrl = security_identity_and_complianceIcon;
}

export class SecurityLake extends _Security {
  protected static _iconDataUrl = security_lakeIcon;
}

export class ShieldAdvanced extends _Security {
  protected static _iconDataUrl = shield_advancedIcon;
}

export class Shield extends _Security {
  protected static _iconDataUrl = shieldIcon;
}

export class SimpleAd extends _Security {
  protected static _iconDataUrl = simple_adIcon;
}

export class SingleSignOn extends _Security {
  protected static _iconDataUrl = single_sign_onIcon;
}

export class WAFFilteringRule extends _Security {
  protected static _iconDataUrl = waf_filtering_ruleIcon;
}

export class WAF extends _Security {
  protected static _iconDataUrl = wafIcon;
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
