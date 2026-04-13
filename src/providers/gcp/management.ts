import { _Gcp } from "./index.js";
import billingIcon from "../../../resources/gcp/management/billing.png";
import projectIcon from "../../../resources/gcp/management/project.png";
import quotasIcon from "../../../resources/gcp/management/quotas.png";
import supportIcon from "../../../resources/gcp/management/support.png";

function _Management(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "management";
  return node;
}

export function Billing(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Billing", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Billing";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = billingIcon;
  return node;
}

export function Project(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Project", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Project";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = projectIcon;
  return node;
}

export function Quotas(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Quotas", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Quotas";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = quotasIcon;
  return node;
}

export function Support(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Support", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Support";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = supportIcon;
  return node;
}
