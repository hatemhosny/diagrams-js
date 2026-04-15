import { _Firebase } from "./index.js";
import extensionsIcon from "../../../resources/firebase/extentions/extensions.png";

function _Extentions(label?: string, options?: Record<string, unknown>) {
  const node = _Firebase(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "extentions";
  return node;
}

export function Extensions(label?: string, options?: Record<string, unknown>) {
  const node = _Extentions(label ?? "Extensions", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Extensions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = extensionsIcon;
  return node;
}
