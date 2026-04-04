import { _K8s } from "./index.js";
import c_roleIcon from "../../../resources/k8s/rbac/c-role.png";
import crbIcon from "../../../resources/k8s/rbac/crb.png";
import groupIcon from "../../../resources/k8s/rbac/group.png";
import rbIcon from "../../../resources/k8s/rbac/rb.png";
import roleIcon from "../../../resources/k8s/rbac/role.png";
import saIcon from "../../../resources/k8s/rbac/sa.png";
import userIcon from "../../../resources/k8s/rbac/user.png";

class _Rbac extends _K8s {
  protected static override _type = "rbac";
}

export class CRole extends _Rbac {
  protected static _iconDataUrl = c_roleIcon;
}

export class CRB extends _Rbac {
  protected static _iconDataUrl = crbIcon;
}

export class Group extends _Rbac {
  protected static _iconDataUrl = groupIcon;
}

export class RB extends _Rbac {
  protected static _iconDataUrl = rbIcon;
}

export class Role extends _Rbac {
  protected static _iconDataUrl = roleIcon;
}

export class SA extends _Rbac {
  protected static _iconDataUrl = saIcon;
}

export class User extends _Rbac {
  protected static _iconDataUrl = userIcon;
}

// Aliases
export const ClusterRole = CRole;
export const ClusterRoleBinding = CRB;
export const RoleBinding = RB;
export const ServiceAccount = SA;
