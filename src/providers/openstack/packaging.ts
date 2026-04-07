import { _Openstack } from "./index.js";
import lociIcon from "../../../resources/openstack/packaging/loci.png";
import puppetIcon from "../../../resources/openstack/packaging/puppet.png";
import rpmIcon from "../../../resources/openstack/packaging/rpm.png";

function _Packaging(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "packaging";
  return node;
}

export function LOCI(label?: string, options?: Record<string, unknown>) {
  const node = _Packaging(label ?? "LOCI", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lociIcon;
  return node;
}

export function Puppet(label?: string, options?: Record<string, unknown>) {
  const node = _Packaging(label ?? "Puppet", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = puppetIcon;
  return node;
}

export function RPM(label?: string, options?: Record<string, unknown>) {
  const node = _Packaging(label ?? "RPM", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rpmIcon;
  return node;
}
