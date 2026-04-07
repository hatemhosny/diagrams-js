import { Node } from "../../Node.js";

export function _Gcp(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Gcp", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "gcp";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "gcp";
  return node;
}

export function Gcp(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label ?? "Gcp", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "gcp.png";
  return node;
}
