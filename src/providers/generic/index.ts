import { Node } from "../../Node.js";

export function _Generic(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Generic", options);
  (node as unknown as Record<string, unknown>)._provider = "generic";
  (node as unknown as Record<string, unknown>)._iconDir = "generic";
  return node;
}

export function Generic(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label ?? "Generic", options);
  (node as unknown as Record<string, unknown>)._icon = "generic.png";
  return node;
}
