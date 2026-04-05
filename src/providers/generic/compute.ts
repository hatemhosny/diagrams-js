import { _Generic } from "./index.js";
import rackIcon from "../../../resources/generic/compute/rack.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label, options);
  (node as unknown as Record<string, unknown>)._type = "compute";
  return node;
}

export function Rack(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Rack", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = rackIcon;
  return node;
}
