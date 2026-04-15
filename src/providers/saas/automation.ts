import { _Saas } from "./index.js";
import n8nIcon from "../../../resources/saas/automation/n8n.png";

function _Automation(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "automation";
  return node;
}

export function N8n(label?: string, options?: Record<string, unknown>) {
  const node = _Automation(label ?? "N8n", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "N8n";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = n8nIcon;
  return node;
}
