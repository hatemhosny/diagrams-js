import { _Oci } from "./index.js";
import audit_whiteIcon from "../../../resources/oci/governance/audit-white.png";
import auditIcon from "../../../resources/oci/governance/audit.png";
import compartments_whiteIcon from "../../../resources/oci/governance/compartments-white.png";
import compartmentsIcon from "../../../resources/oci/governance/compartments.png";
import groups_whiteIcon from "../../../resources/oci/governance/groups-white.png";
import groupsIcon from "../../../resources/oci/governance/groups.png";
import logging_whiteIcon from "../../../resources/oci/governance/logging-white.png";
import loggingIcon from "../../../resources/oci/governance/logging.png";
import ocid_whiteIcon from "../../../resources/oci/governance/ocid-white.png";
import ocidIcon from "../../../resources/oci/governance/ocid.png";
import policies_whiteIcon from "../../../resources/oci/governance/policies-white.png";
import policiesIcon from "../../../resources/oci/governance/policies.png";
import tagging_whiteIcon from "../../../resources/oci/governance/tagging-white.png";
import taggingIcon from "../../../resources/oci/governance/tagging.png";

function _Governance(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label, options);
  (node as unknown as Record<string, unknown>)._type = "governance";
  return node;
}

export function AuditWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "AuditWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = audit_whiteIcon;
  return node;
}

export function Audit(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "Audit", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = auditIcon;
  return node;
}

export function CompartmentsWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "CompartmentsWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = compartments_whiteIcon;
  return node;
}

export function Compartments(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "Compartments", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = compartmentsIcon;
  return node;
}

export function GroupsWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "GroupsWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = groups_whiteIcon;
  return node;
}

export function Groups(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "Groups", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = groupsIcon;
  return node;
}

export function LoggingWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "LoggingWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = logging_whiteIcon;
  return node;
}

export function Logging(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "Logging", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = loggingIcon;
  return node;
}

export function OCIDWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "OCIDWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ocid_whiteIcon;
  return node;
}

export function OCID(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "OCID", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ocidIcon;
  return node;
}

export function PoliciesWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "PoliciesWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = policies_whiteIcon;
  return node;
}

export function Policies(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "Policies", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = policiesIcon;
  return node;
}

export function TaggingWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "TaggingWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = tagging_whiteIcon;
  return node;
}

export function Tagging(label?: string, options?: Record<string, unknown>) {
  const node = _Governance(label ?? "Tagging", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = taggingIcon;
  return node;
}
