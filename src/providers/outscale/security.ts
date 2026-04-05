import { _Outscale } from "./index.js";
import firewallIcon from "../../../resources/outscale/security/firewall.png";
import identity_and_access_managementIcon from "../../../resources/outscale/security/identity-and-access-management.png";

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Outscale(label, options);
  (node as unknown as Record<string, unknown>)._type = "security";
  return node;
}

export function Firewall(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Firewall", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = firewallIcon;
  return node;
}

export function IdentityAndAccessManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "IdentityAndAccessManagement", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = identity_and_access_managementIcon;
  return node;
}
