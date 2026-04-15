import { _Openstack } from "./index.js";
import cloudkittyIcon from "../../../resources/openstack/billing/cloudkitty.png";

function _Billing(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "billing";
  return node;
}

export function Cloudkitty(label?: string, options?: Record<string, unknown>) {
  const node = _Billing(label ?? "Cloudkitty", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cloudkitty";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudkittyIcon;
  return node;
}

// Aliases
export const CloudKitty = Cloudkitty;
