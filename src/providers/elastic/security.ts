import { _Elastic } from "./index.js";
import endpointIcon from "../../../resources/elastic/security/endpoint.png";
import securityIcon from "../../../resources/elastic/security/security.png";
import siemIcon from "../../../resources/elastic/security/siem.png";
import xdrIcon from "../../../resources/elastic/security/xdr.png";

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Elastic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "security";
  return node;
}

export function Endpoint(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Endpoint", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Endpoint";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = endpointIcon;
  return node;
}

export function Security(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Security", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Security";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = securityIcon;
  return node;
}

export function SIEM(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "SIEM", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SIEM";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = siemIcon;
  return node;
}

export function Xdr(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Xdr", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Xdr";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = xdrIcon;
  return node;
}
