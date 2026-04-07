import { _Saas } from "./index.js";
import akamaiIcon from "../../../resources/saas/cdn/akamai.png";
import cloudflareIcon from "../../../resources/saas/cdn/cloudflare.png";
import fastlyIcon from "../../../resources/saas/cdn/fastly.png";
import impervaIcon from "../../../resources/saas/cdn/imperva.png";

function _Cdn(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "cdn";
  return node;
}

export function Akamai(label?: string, options?: Record<string, unknown>) {
  const node = _Cdn(label ?? "Akamai", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = akamaiIcon;
  return node;
}

export function Cloudflare(label?: string, options?: Record<string, unknown>) {
  const node = _Cdn(label ?? "Cloudflare", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudflareIcon;
  return node;
}

export function Fastly(label?: string, options?: Record<string, unknown>) {
  const node = _Cdn(label ?? "Fastly", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fastlyIcon;
  return node;
}

export function Imperva(label?: string, options?: Record<string, unknown>) {
  const node = _Cdn(label ?? "Imperva", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = impervaIcon;
  return node;
}
