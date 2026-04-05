import { _Openstack } from "./index.js";
import blazarIcon from "../../../resources/openstack/orchestration/blazar.png";
import heatIcon from "../../../resources/openstack/orchestration/heat.png";
import mistralIcon from "../../../resources/openstack/orchestration/mistral.png";
import senlinIcon from "../../../resources/openstack/orchestration/senlin.png";
import zaqarIcon from "../../../resources/openstack/orchestration/zaqar.png";

function _Orchestration(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)._type = "orchestration";
  return node;
}

export function Blazar(label?: string, options?: Record<string, unknown>) {
  const node = _Orchestration(label ?? "Blazar", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = blazarIcon;
  return node;
}

export function Heat(label?: string, options?: Record<string, unknown>) {
  const node = _Orchestration(label ?? "Heat", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = heatIcon;
  return node;
}

export function Mistral(label?: string, options?: Record<string, unknown>) {
  const node = _Orchestration(label ?? "Mistral", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mistralIcon;
  return node;
}

export function Senlin(label?: string, options?: Record<string, unknown>) {
  const node = _Orchestration(label ?? "Senlin", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = senlinIcon;
  return node;
}

export function Zaqar(label?: string, options?: Record<string, unknown>) {
  const node = _Orchestration(label ?? "Zaqar", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = zaqarIcon;
  return node;
}
