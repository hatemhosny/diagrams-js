import { _Generic } from "./index.js";
import datacenterIcon from "../../../resources/generic/place/datacenter.png";

function _Place(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label, options);
  (node as unknown as Record<string, unknown>)._type = "place";
  return node;
}

export function Datacenter(label?: string, options?: Record<string, unknown>) {
  const node = _Place(label ?? "Datacenter", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = datacenterIcon;
  return node;
}
