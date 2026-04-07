import { _Saas } from "./index.js";
import twilioIcon from "../../../resources/saas/communication/twilio.png";

function _Communication(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "communication";
  return node;
}

export function Twilio(label?: string, options?: Record<string, unknown>) {
  const node = _Communication(label ?? "Twilio", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = twilioIcon;
  return node;
}
