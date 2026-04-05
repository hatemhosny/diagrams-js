import { _Outscale } from "./index.js";
import computeIcon from "../../../resources/outscale/compute/compute.png";
import direct_connectIcon from "../../../resources/outscale/compute/direct-connect.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Outscale(label, options);
  (node as unknown as Record<string, unknown>)._type = "compute";
  return node;
}

export function Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Compute", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = computeIcon;
  return node;
}

export function DirectConnect(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "DirectConnect", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = direct_connectIcon;
  return node;
}

// Aliases
export const OSC = Compute;
