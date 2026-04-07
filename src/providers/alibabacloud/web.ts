import { _Alibabacloud } from "./index.js";
import dnsIcon from "../../../resources/alibabacloud/web/dns.png";
import domainIcon from "../../../resources/alibabacloud/web/domain.png";

function _Web(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "web";
  return node;
}

export function Dns(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "Dns", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dnsIcon;
  return node;
}

export function Domain(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "Domain", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = domainIcon;
  return node;
}
