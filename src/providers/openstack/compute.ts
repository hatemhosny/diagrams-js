import { _Openstack } from "./index.js";
import novaIcon from "../../../resources/openstack/compute/nova.png";
import qinlingIcon from "../../../resources/openstack/compute/qinling.png";
import zunIcon from "../../../resources/openstack/compute/zun.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)._type = "compute";
  return node;
}

export function Nova(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Nova", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = novaIcon;
  return node;
}

export function Qinling(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Qinling", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = qinlingIcon;
  return node;
}

export function Zun(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Zun", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = zunIcon;
  return node;
}
