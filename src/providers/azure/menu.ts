import { _Azure } from "./index.js";
import keysIcon from "../../../resources/azure/menu/keys.png";

function _Menu(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "menu";
  return node;
}

export function Keys(label?: string, options?: Record<string, unknown>) {
  const node = _Menu(label ?? "Keys", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = keysIcon;
  return node;
}
