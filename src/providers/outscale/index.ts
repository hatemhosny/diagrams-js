import { Node } from "../../Node.js";

export function _Outscale(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Outscale", options);
  (node as unknown as Record<string, unknown>)._provider = "outscale";
  (node as unknown as Record<string, unknown>)._iconDir = "outscale";
  return node;
}

export function Outscale(label?: string, options?: Record<string, unknown>) {
  const node = _Outscale(label ?? "Outscale", options);
  (node as unknown as Record<string, unknown>)._icon = "outscale.png";
  return node;
}
