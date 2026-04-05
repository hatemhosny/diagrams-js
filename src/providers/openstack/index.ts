import { Node } from "../../Node.js";

export function _Openstack(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "Openstack", options);
  (node as unknown as Record<string, unknown>)._provider = "openstack";
  (node as unknown as Record<string, unknown>)._iconDir = "openstack";
  return node;
}

export function Openstack(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label ?? "Openstack", options);
  (node as unknown as Record<string, unknown>)._icon = "openstack.png";
  return node;
}
