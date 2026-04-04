import { _Ibm } from "./index.js";
import api_securityIcon from "../../../resources/ibm/security/api-security.png";
import blockchain_security_serviceIcon from "../../../resources/ibm/security/blockchain-security-service.png";
import data_securityIcon from "../../../resources/ibm/security/data-security.png";
import firewallIcon from "../../../resources/ibm/security/firewall.png";
import gatewayIcon from "../../../resources/ibm/security/gateway.png";
import governance_risk_complianceIcon from "../../../resources/ibm/security/governance-risk-compliance.png";
import identity_access_managementIcon from "../../../resources/ibm/security/identity-access-management.png";
import identity_providerIcon from "../../../resources/ibm/security/identity-provider.png";
import infrastructure_securityIcon from "../../../resources/ibm/security/infrastructure-security.png";
import physical_securityIcon from "../../../resources/ibm/security/physical-security.png";
import security_monitoring_intelligenceIcon from "../../../resources/ibm/security/security-monitoring-intelligence.png";
import security_servicesIcon from "../../../resources/ibm/security/security-services.png";
import trustend_computingIcon from "../../../resources/ibm/security/trustend-computing.png";
import vpnIcon from "../../../resources/ibm/security/vpn.png";

class _Security extends _Ibm {
  protected static override _type = "security";
}

export class ApiSecurity extends _Security {
  protected static _iconDataUrl = api_securityIcon;
}

export class BlockchainSecurityService extends _Security {
  protected static _iconDataUrl = blockchain_security_serviceIcon;
}

export class DataSecurity extends _Security {
  protected static _iconDataUrl = data_securityIcon;
}

export class Firewall extends _Security {
  protected static _iconDataUrl = firewallIcon;
}

export class Gateway extends _Security {
  protected static _iconDataUrl = gatewayIcon;
}

export class GovernanceRiskCompliance extends _Security {
  protected static _iconDataUrl = governance_risk_complianceIcon;
}

export class IdentityAccessManagement extends _Security {
  protected static _iconDataUrl = identity_access_managementIcon;
}

export class IdentityProvider extends _Security {
  protected static _iconDataUrl = identity_providerIcon;
}

export class InfrastructureSecurity extends _Security {
  protected static _iconDataUrl = infrastructure_securityIcon;
}

export class PhysicalSecurity extends _Security {
  protected static _iconDataUrl = physical_securityIcon;
}

export class SecurityMonitoringIntelligence extends _Security {
  protected static _iconDataUrl = security_monitoring_intelligenceIcon;
}

export class SecurityServices extends _Security {
  protected static _iconDataUrl = security_servicesIcon;
}

export class TrustendComputing extends _Security {
  protected static _iconDataUrl = trustend_computingIcon;
}

export class Vpn extends _Security {
  protected static _iconDataUrl = vpnIcon;
}
