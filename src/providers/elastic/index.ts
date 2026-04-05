import { Node } from "../../Node.js";

export function _Elastic(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Elastic", options);
  (node as unknown as Record<string, unknown>)._provider = "elastic";
  (node as unknown as Record<string, unknown>)._iconDir = "elastic";
  return node;
}

export function Elastic(label?: string, options?: Record<string, unknown>) {
  const node = _Elastic(label ?? "Elastic", options);
  (node as unknown as Record<string, unknown>)._icon = "elastic.png";
  return node;
}
