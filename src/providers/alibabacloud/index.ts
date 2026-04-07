import { Node } from "../../Node.js";

export function _Alibabacloud(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Alibabacloud", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "alibabacloud";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "alibabacloud";
  return node;
}

export function Alibabacloud(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label ?? "Alibabacloud", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "alibabacloud.png";
  return node;
}
