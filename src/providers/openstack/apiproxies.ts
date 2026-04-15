import { _Openstack } from "./index.js";
import ec2apiIcon from "../../../resources/openstack/apiproxies/ec2api.png";

function _Apiproxies(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "apiproxies";
  return node;
}

export function EC2API(label?: string, options?: Record<string, unknown>) {
  const node = _Apiproxies(label ?? "EC2API", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EC2API";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ec2apiIcon;
  return node;
}
