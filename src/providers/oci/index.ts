import { Node } from "../../Node.js";

export function _Oci(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Oci", options);
  (node as unknown as Record<string, unknown>)._provider = "oci";
  (node as unknown as Record<string, unknown>)._iconDir = "oci";
  return node;
}

export function Oci(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label ?? "Oci", options);
  (node as unknown as Record<string, unknown>)._icon = "oci.png";
  return node;
}
