import { Node } from "../../Node.js";

export function _Openstack(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Openstack", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "openstack";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "openstack";
  return node;
}

export function Openstack(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label ?? "Openstack", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "openstack.png";
  return node;
}
