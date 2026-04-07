import { Node } from "../../Node.js";

export function _Ibm(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Ibm", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "ibm";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "ibm";
  return node;
}

export function Ibm(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label ?? "Ibm", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "ibm.png";
  return node;
}
