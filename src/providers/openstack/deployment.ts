import { _Openstack } from "./index.js";
import ansibleIcon from "../../../resources/openstack/deployment/ansible.png";
import charmsIcon from "../../../resources/openstack/deployment/charms.png";
import chefIcon from "../../../resources/openstack/deployment/chef.png";
import helmIcon from "../../../resources/openstack/deployment/helm.png";
import kollaIcon from "../../../resources/openstack/deployment/kolla.png";
import tripleoIcon from "../../../resources/openstack/deployment/tripleo.png";

function _Deployment(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)._type = "deployment";
  return node;
}

export function Ansible(label?: string, options?: Record<string, unknown>) {
  const node = _Deployment(label ?? "Ansible", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ansibleIcon;
  return node;
}

export function Charms(label?: string, options?: Record<string, unknown>) {
  const node = _Deployment(label ?? "Charms", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = charmsIcon;
  return node;
}

export function Chef(label?: string, options?: Record<string, unknown>) {
  const node = _Deployment(label ?? "Chef", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = chefIcon;
  return node;
}

export function Helm(label?: string, options?: Record<string, unknown>) {
  const node = _Deployment(label ?? "Helm", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = helmIcon;
  return node;
}

export function Kolla(label?: string, options?: Record<string, unknown>) {
  const node = _Deployment(label ?? "Kolla", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = kollaIcon;
  return node;
}

export function Tripleo(label?: string, options?: Record<string, unknown>) {
  const node = _Deployment(label ?? "Tripleo", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = tripleoIcon;
  return node;
}

// Aliases
export const KollaAnsible = Kolla;
export const TripleO = Tripleo;
