import { _Openstack } from "./index.js";
import barbicanIcon from "../../../resources/openstack/sharedservices/barbican.png";
import glanceIcon from "../../../resources/openstack/sharedservices/glance.png";
import karborIcon from "../../../resources/openstack/sharedservices/karbor.png";
import keystoneIcon from "../../../resources/openstack/sharedservices/keystone.png";
import searchlightIcon from "../../../resources/openstack/sharedservices/searchlight.png";

function _Sharedservices(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "sharedservices";
  return node;
}

export function Barbican(label?: string, options?: Record<string, unknown>) {
  const node = _Sharedservices(label ?? "Barbican", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = barbicanIcon;
  return node;
}

export function Glance(label?: string, options?: Record<string, unknown>) {
  const node = _Sharedservices(label ?? "Glance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = glanceIcon;
  return node;
}

export function Karbor(label?: string, options?: Record<string, unknown>) {
  const node = _Sharedservices(label ?? "Karbor", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = karborIcon;
  return node;
}

export function Keystone(label?: string, options?: Record<string, unknown>) {
  const node = _Sharedservices(label ?? "Keystone", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = keystoneIcon;
  return node;
}

export function Searchlight(label?: string, options?: Record<string, unknown>) {
  const node = _Sharedservices(label ?? "Searchlight", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = searchlightIcon;
  return node;
}
