import { Node } from "../../Node.js";

export function _Firebase(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Firebase", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "firebase";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "firebase";
  return node;
}

export function Firebase(label?: string, options?: Record<string, unknown>) {
  const node = _Firebase(label ?? "Firebase", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "firebase.png";
  return node;
}
