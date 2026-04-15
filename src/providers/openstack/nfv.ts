import { _Openstack } from "./index.js";
import tackerIcon from "../../../resources/openstack/nfv/tacker.png";

function _Nfv(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "nfv";
  return node;
}

export function Tacker(label?: string, options?: Record<string, unknown>) {
  const node = _Nfv(label ?? "Tacker", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Tacker";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tackerIcon;
  return node;
}
