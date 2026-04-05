import { _Saas } from "./index.js";
import facebookIcon from "../../../resources/saas/social/facebook.png";
import twitterIcon from "../../../resources/saas/social/twitter.png";

function _Social(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)._type = "social";
  return node;
}

export function Facebook(label?: string, options?: Record<string, unknown>) {
  const node = _Social(label ?? "Facebook", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = facebookIcon;
  return node;
}

export function Twitter(label?: string, options?: Record<string, unknown>) {
  const node = _Social(label ?? "Twitter", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = twitterIcon;
  return node;
}
