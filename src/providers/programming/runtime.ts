import { _Programming } from "./index.js";
import daprIcon from "../../../resources/programming/runtime/dapr.png";

function _Runtime(label?: string, options?: Record<string, unknown>) {
  const node = _Programming(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "runtime";
  return node;
}

export function Dapr(label?: string, options?: Record<string, unknown>) {
  const node = _Runtime(label ?? "Dapr", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = daprIcon;
  return node;
}
