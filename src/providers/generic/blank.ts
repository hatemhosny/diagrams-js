import { _Generic } from "./index.js";
import blankIcon from "../../../resources/generic/blank/blank.png";

function _Blank(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label, options);
  (node as unknown as Record<string, unknown>)._type = "blank";
  return node;
}

export function Blank(label?: string, options?: Record<string, unknown>) {
  const node = _Blank(label ?? "Blank", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = blankIcon;
  return node;
}
