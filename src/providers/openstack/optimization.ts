import { _Openstack } from "./index.js";
import congressIcon from "../../../resources/openstack/optimization/congress.png";
import rallyIcon from "../../../resources/openstack/optimization/rally.png";
import vitrageIcon from "../../../resources/openstack/optimization/vitrage.png";
import watcherIcon from "../../../resources/openstack/optimization/watcher.png";

function _Optimization(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)._type = "optimization";
  return node;
}

export function Congress(label?: string, options?: Record<string, unknown>) {
  const node = _Optimization(label ?? "Congress", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = congressIcon;
  return node;
}

export function Rally(label?: string, options?: Record<string, unknown>) {
  const node = _Optimization(label ?? "Rally", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = rallyIcon;
  return node;
}

export function Vitrage(label?: string, options?: Record<string, unknown>) {
  const node = _Optimization(label ?? "Vitrage", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vitrageIcon;
  return node;
}

export function Watcher(label?: string, options?: Record<string, unknown>) {
  const node = _Optimization(label ?? "Watcher", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = watcherIcon;
  return node;
}
