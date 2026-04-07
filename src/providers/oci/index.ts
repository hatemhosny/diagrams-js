import { Node } from "../../Node.js";

export function _Oci(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Oci", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "oci";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "oci";
  return node;
}

export function Oci(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label ?? "Oci", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "oci.png";
  return node;
}
