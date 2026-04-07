import { Node } from "../../Node.js";

export function _Aws(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Aws", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "aws";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "aws";
  return node;
}

export function Aws(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label ?? "Aws", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "aws.png";
  return node;
}
