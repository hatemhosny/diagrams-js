import { _Aws } from "./index.js";
import ar_vrIcon from "../../../resources/aws/ar/ar-vr.png";
import sumerianIcon from "../../../resources/aws/ar/sumerian.png";

function _Ar(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)._type = "ar";
  return node;
}

export function ArVr(label?: string, options?: Record<string, unknown>) {
  const node = _Ar(label ?? "ArVr", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ar_vrIcon;
  return node;
}

export function Sumerian(label?: string, options?: Record<string, unknown>) {
  const node = _Ar(label ?? "Sumerian", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sumerianIcon;
  return node;
}
