import { _Onprem } from "./index.js";
import dexIcon from "../../../resources/onprem/identity/dex.png";

function _Identity(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "identity";
  return node;
}

export function Dex(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "Dex", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = dexIcon;
  return node;
}
