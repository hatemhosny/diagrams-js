import { _Openstack } from "./index.js";
import freezerIcon from "../../../resources/openstack/applicationlifecycle/freezer.png";
import masakariIcon from "../../../resources/openstack/applicationlifecycle/masakari.png";
import muranoIcon from "../../../resources/openstack/applicationlifecycle/murano.png";
import solumIcon from "../../../resources/openstack/applicationlifecycle/solum.png";

function _Applicationlifecycle(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)._type = "applicationlifecycle";
  return node;
}

export function Freezer(label?: string, options?: Record<string, unknown>) {
  const node = _Applicationlifecycle(label ?? "Freezer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = freezerIcon;
  return node;
}

export function Masakari(label?: string, options?: Record<string, unknown>) {
  const node = _Applicationlifecycle(label ?? "Masakari", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = masakariIcon;
  return node;
}

export function Murano(label?: string, options?: Record<string, unknown>) {
  const node = _Applicationlifecycle(label ?? "Murano", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = muranoIcon;
  return node;
}

export function Solum(label?: string, options?: Record<string, unknown>) {
  const node = _Applicationlifecycle(label ?? "Solum", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = solumIcon;
  return node;
}
