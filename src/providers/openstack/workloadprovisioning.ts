import { _Openstack } from "./index.js";
import magnumIcon from "../../../resources/openstack/workloadprovisioning/magnum.png";
import saharaIcon from "../../../resources/openstack/workloadprovisioning/sahara.png";
import troveIcon from "../../../resources/openstack/workloadprovisioning/trove.png";

function _Workloadprovisioning(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "workloadprovisioning";
  return node;
}

export function Magnum(label?: string, options?: Record<string, unknown>) {
  const node = _Workloadprovisioning(label ?? "Magnum", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Magnum";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = magnumIcon;
  return node;
}

export function Sahara(label?: string, options?: Record<string, unknown>) {
  const node = _Workloadprovisioning(label ?? "Sahara", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Sahara";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = saharaIcon;
  return node;
}

export function Trove(label?: string, options?: Record<string, unknown>) {
  const node = _Workloadprovisioning(label ?? "Trove", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Trove";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = troveIcon;
  return node;
}
