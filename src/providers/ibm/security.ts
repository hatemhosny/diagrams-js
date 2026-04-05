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

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)._type = "security";
  return node;
}

export function ApiSecurity(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "ApiSecurity", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = api_securityIcon;
  return node;
}

export function BlockchainSecurityService(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "BlockchainSecurityService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = blockchain_security_serviceIcon;
  return node;
}

export function DataSecurity(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "DataSecurity", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_securityIcon;
  return node;
}

export function Firewall(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Firewall", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = firewallIcon;
  return node;
}

export function Gateway(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Gateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = gatewayIcon;
  return node;
}

export function GovernanceRiskCompliance(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "GovernanceRiskCompliance", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = governance_risk_complianceIcon;
  return node;
}

export function IdentityAccessManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "IdentityAccessManagement", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = identity_access_managementIcon;
  return node;
}

export function IdentityProvider(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "IdentityProvider", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = identity_providerIcon;
  return node;
}

export function InfrastructureSecurity(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "InfrastructureSecurity", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = infrastructure_securityIcon;
  return node;
}

export function PhysicalSecurity(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "PhysicalSecurity", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = physical_securityIcon;
  return node;
}

export function SecurityMonitoringIntelligence(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityMonitoringIntelligence", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = security_monitoring_intelligenceIcon;
  return node;
}

export function SecurityServices(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SecurityServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = security_servicesIcon;
  return node;
}

export function TrustendComputing(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "TrustendComputing", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = trustend_computingIcon;
  return node;
}

export function Vpn(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Vpn", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vpnIcon;
  return node;
}
