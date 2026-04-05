import { _K8s } from "./index.js";
import c_roleIcon from "../../../resources/k8s/rbac/c-role.png";
import crbIcon from "../../../resources/k8s/rbac/crb.png";
import groupIcon from "../../../resources/k8s/rbac/group.png";
import rbIcon from "../../../resources/k8s/rbac/rb.png";
import roleIcon from "../../../resources/k8s/rbac/role.png";
import saIcon from "../../../resources/k8s/rbac/sa.png";
import userIcon from "../../../resources/k8s/rbac/user.png";

function _Rbac(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)._type = "rbac";
  return node;
}

export function CRole(label?: string, options?: Record<string, unknown>) {
  const node = _Rbac(label ?? "CRole", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = c_roleIcon;
  return node;
}

export function CRB(label?: string, options?: Record<string, unknown>) {
  const node = _Rbac(label ?? "CRB", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = crbIcon;
  return node;
}

export function Group(label?: string, options?: Record<string, unknown>) {
  const node = _Rbac(label ?? "Group", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = groupIcon;
  return node;
}

export function RB(label?: string, options?: Record<string, unknown>) {
  const node = _Rbac(label ?? "RB", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = rbIcon;
  return node;
}

export function Role(label?: string, options?: Record<string, unknown>) {
  const node = _Rbac(label ?? "Role", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = roleIcon;
  return node;
}

export function SA(label?: string, options?: Record<string, unknown>) {
  const node = _Rbac(label ?? "SA", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = saIcon;
  return node;
}

export function User(label?: string, options?: Record<string, unknown>) {
  const node = _Rbac(label ?? "User", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = userIcon;
  return node;
}

// Aliases
export const ClusterRole = CRole;
export const ClusterRoleBinding = CRB;
export const RoleBinding = RB;
export const ServiceAccount = SA;
