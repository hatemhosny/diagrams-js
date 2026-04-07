import { _Openstack } from "./index.js";
import kuryrIcon from "../../../resources/openstack/containerservices/kuryr.png";

function _Containerservices(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "containerservices";
  return node;
}

export function Kuryr(label?: string, options?: Record<string, unknown>) {
  const node = _Containerservices(label ?? "Kuryr", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kuryrIcon;
  return node;
}
