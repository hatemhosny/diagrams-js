import { _Onprem } from "./index.js";
import boundaryIcon from "../../../resources/onprem/auth/boundary.png";
import buzzfeed_ssoIcon from "../../../resources/onprem/auth/buzzfeed-sso.png";
import oauth2_proxyIcon from "../../../resources/onprem/auth/oauth2-proxy.png";

function _Auth(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "auth";
  return node;
}

export function Boundary(label?: string, options?: Record<string, unknown>) {
  const node = _Auth(label ?? "Boundary", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = boundaryIcon;
  return node;
}

export function BuzzfeedSso(label?: string, options?: Record<string, unknown>) {
  const node = _Auth(label ?? "BuzzfeedSso", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = buzzfeed_ssoIcon;
  return node;
}

export function Oauth2Proxy(label?: string, options?: Record<string, unknown>) {
  const node = _Auth(label ?? "Oauth2Proxy", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = oauth2_proxyIcon;
  return node;
}
