import { Node } from "../../Node.js";

export function _Azure(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Azure", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "azure";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "azure";
  return node;
}

export function Azure(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label ?? "Azure", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "azure.png";
  return node;
}
