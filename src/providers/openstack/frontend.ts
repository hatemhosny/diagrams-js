import { _Openstack } from "./index.js";
import horizonIcon from "../../../resources/openstack/frontend/horizon.png";

function _Frontend(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)._type = "frontend";
  return node;
}

export function Horizon(label?: string, options?: Record<string, unknown>) {
  const node = _Frontend(label ?? "Horizon", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = horizonIcon;
  return node;
}
