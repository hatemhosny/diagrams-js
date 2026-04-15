import { _Openstack } from "./index.js";
import designateIcon from "../../../resources/openstack/networking/designate.png";
import neutronIcon from "../../../resources/openstack/networking/neutron.png";
import octaviaIcon from "../../../resources/openstack/networking/octavia.png";

function _Networking(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "networking";
  return node;
}

export function Designate(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Designate", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Designate";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = designateIcon;
  return node;
}

export function Neutron(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Neutron", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Neutron";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = neutronIcon;
  return node;
}

export function Octavia(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Octavia", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Octavia";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = octaviaIcon;
  return node;
}
