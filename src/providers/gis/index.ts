import { Node } from "../../Node.js";

export function _Gis(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Gis", options);
  (node as unknown as Record<string, unknown>)._provider = "gis";
  (node as unknown as Record<string, unknown>)._iconDir = "gis";
  return node;
}

export function Gis(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label ?? "Gis", options);
  (node as unknown as Record<string, unknown>)._icon = "gis.png";
  return node;
}
