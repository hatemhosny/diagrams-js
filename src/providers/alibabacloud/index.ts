import { Node } from "../../Node.js";

export function _Alibabacloud(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Alibabacloud", options);
  (node as unknown as Record<string, unknown>)._provider = "alibabacloud";
  (node as unknown as Record<string, unknown>)._iconDir = "alibabacloud";
  return node;
}

export function Alibabacloud(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label ?? "Alibabacloud", options);
  (node as unknown as Record<string, unknown>)._icon = "alibabacloud.png";
  return node;
}
