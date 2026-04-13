import { _Onprem } from "./index.js";
import corednsIcon from "../../../resources/onprem/dns/coredns.png";
import powerdnsIcon from "../../../resources/onprem/dns/powerdns.png";

function _Dns(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "dns";
  return node;
}

export function Coredns(label?: string, options?: Record<string, unknown>) {
  const node = _Dns(label ?? "Coredns", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Coredns";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = corednsIcon;
  return node;
}

export function Powerdns(label?: string, options?: Record<string, unknown>) {
  const node = _Dns(label ?? "Powerdns", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Powerdns";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = powerdnsIcon;
  return node;
}
