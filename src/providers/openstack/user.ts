import { _Openstack } from "./index.js";
import openstackclientIcon from "../../../resources/openstack/user/openstackclient.png";

function _User(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "user";
  return node;
}

export function Openstackclient(label?: string, options?: Record<string, unknown>) {
  const node = _User(label ?? "Openstackclient", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Openstackclient";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = openstackclientIcon;
  return node;
}

// Aliases
export const OpenStackClient = Openstackclient;
