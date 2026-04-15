import { _Openstack } from "./index.js";
import congressIcon from "../../../resources/openstack/optimization/congress.png";
import rallyIcon from "../../../resources/openstack/optimization/rally.png";
import vitrageIcon from "../../../resources/openstack/optimization/vitrage.png";
import watcherIcon from "../../../resources/openstack/optimization/watcher.png";

function _Optimization(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "optimization";
  return node;
}

export function Congress(label?: string, options?: Record<string, unknown>) {
  const node = _Optimization(label ?? "Congress", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Congress";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = congressIcon;
  return node;
}

export function Rally(label?: string, options?: Record<string, unknown>) {
  const node = _Optimization(label ?? "Rally", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Rally";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rallyIcon;
  return node;
}

export function Vitrage(label?: string, options?: Record<string, unknown>) {
  const node = _Optimization(label ?? "Vitrage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Vitrage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vitrageIcon;
  return node;
}

export function Watcher(label?: string, options?: Record<string, unknown>) {
  const node = _Optimization(label ?? "Watcher", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Watcher";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = watcherIcon;
  return node;
}
