import { Node } from "../../Node.js";

export function _Digitalocean(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Digitalocean", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "digitalocean";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "digitalocean";
  return node;
}

export function Digitalocean(label?: string, options?: Record<string, unknown>) {
  const node = _Digitalocean(label ?? "Digitalocean", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "digitalocean.png";
  return node;
}
