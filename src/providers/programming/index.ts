import { Node } from "../../Node.js";

export function _Programming(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Programming", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "programming";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "programming";
  return node;
}

export function Programming(label?: string, options?: Record<string, unknown>) {
  const node = _Programming(label ?? "Programming", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "programming.png";
  return node;
}
