import { Node } from "../../Node.js";

export function _Onprem(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Onprem", options);
  (node as unknown as Record<string, unknown>)._provider = "onprem";
  (node as unknown as Record<string, unknown>)._iconDir = "onprem";
  return node;
}

export function Onprem(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label ?? "Onprem", options);
  (node as unknown as Record<string, unknown>)._icon = "onprem.png";
  return node;
}
