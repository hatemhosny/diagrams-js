import { _Openstack } from "./index.js";
import freezerIcon from "../../../resources/openstack/applicationlifecycle/freezer.png";
import masakariIcon from "../../../resources/openstack/applicationlifecycle/masakari.png";
import muranoIcon from "../../../resources/openstack/applicationlifecycle/murano.png";
import solumIcon from "../../../resources/openstack/applicationlifecycle/solum.png";

function _Applicationlifecycle(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "applicationlifecycle";
  return node;
}

export function Freezer(label?: string, options?: Record<string, unknown>) {
  const node = _Applicationlifecycle(label ?? "Freezer", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Freezer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = freezerIcon;
  return node;
}

export function Masakari(label?: string, options?: Record<string, unknown>) {
  const node = _Applicationlifecycle(label ?? "Masakari", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Masakari";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = masakariIcon;
  return node;
}

export function Murano(label?: string, options?: Record<string, unknown>) {
  const node = _Applicationlifecycle(label ?? "Murano", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Murano";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = muranoIcon;
  return node;
}

export function Solum(label?: string, options?: Record<string, unknown>) {
  const node = _Applicationlifecycle(label ?? "Solum", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Solum";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = solumIcon;
  return node;
}
