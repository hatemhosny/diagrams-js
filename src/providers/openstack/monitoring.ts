import { _Openstack } from "./index.js";
import monascaIcon from "../../../resources/openstack/monitoring/monasca.png";
import telemetryIcon from "../../../resources/openstack/monitoring/telemetry.png";

function _Monitoring(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)._type = "monitoring";
  return node;
}

export function Monasca(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Monasca", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = monascaIcon;
  return node;
}

export function Telemetry(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Telemetry", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = telemetryIcon;
  return node;
}
