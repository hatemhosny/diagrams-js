import { _Openstack } from "./index.js";
import designateIcon from "../../../resources/openstack/networking/designate.png";
import neutronIcon from "../../../resources/openstack/networking/neutron.png";
import octaviaIcon from "../../../resources/openstack/networking/octavia.png";

function _Networking(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)._type = "networking";
  return node;
}

export function Designate(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Designate", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = designateIcon;
  return node;
}

export function Neutron(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Neutron", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = neutronIcon;
  return node;
}

export function Octavia(label?: string, options?: Record<string, unknown>) {
  const node = _Networking(label ?? "Octavia", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = octaviaIcon;
  return node;
}
