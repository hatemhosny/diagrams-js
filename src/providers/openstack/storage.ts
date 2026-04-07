import { _Openstack } from "./index.js";
import cinderIcon from "../../../resources/openstack/storage/cinder.png";
import manilaIcon from "../../../resources/openstack/storage/manila.png";
import swiftIcon from "../../../resources/openstack/storage/swift.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function Cinder(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Cinder", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cinderIcon;
  return node;
}

export function Manila(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Manila", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = manilaIcon;
  return node;
}

export function Swift(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Swift", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = swiftIcon;
  return node;
}
