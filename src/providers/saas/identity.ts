import { _Saas } from "./index.js";
import auth0Icon from "../../../resources/saas/identity/auth0.png";
import oktaIcon from "../../../resources/saas/identity/okta.png";

function _Identity(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "identity";
  return node;
}

export function Auth0(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "Auth0", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = auth0Icon;
  return node;
}

export function Okta(label?: string, options?: Record<string, unknown>) {
  const node = _Identity(label ?? "Okta", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = oktaIcon;
  return node;
}
