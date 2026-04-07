import { _Openstack } from "./index.js";
import tricircleIcon from "../../../resources/openstack/multiregion/tricircle.png";

function _Multiregion(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "multiregion";
  return node;
}

export function Tricircle(label?: string, options?: Record<string, unknown>) {
  const node = _Multiregion(label ?? "Tricircle", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tricircleIcon;
  return node;
}
