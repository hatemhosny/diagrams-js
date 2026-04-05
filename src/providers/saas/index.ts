import { Node } from "../../Node.js";

export function _Saas(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Saas", options);
  (node as unknown as Record<string, unknown>)._provider = "saas";
  (node as unknown as Record<string, unknown>)._iconDir = "saas";
  return node;
}

export function Saas(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label ?? "Saas", options);
  (node as unknown as Record<string, unknown>)._icon = "saas.png";
  return node;
}
