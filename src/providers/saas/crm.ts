import { _Saas } from "./index.js";
import intercomIcon from "../../../resources/saas/crm/intercom.png";
import zendeskIcon from "../../../resources/saas/crm/zendesk.png";

function _Crm(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)._type = "crm";
  return node;
}

export function Intercom(label?: string, options?: Record<string, unknown>) {
  const node = _Crm(label ?? "Intercom", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = intercomIcon;
  return node;
}

export function Zendesk(label?: string, options?: Record<string, unknown>) {
  const node = _Crm(label ?? "Zendesk", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = zendeskIcon;
  return node;
}
