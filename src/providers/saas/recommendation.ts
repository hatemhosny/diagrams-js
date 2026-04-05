import { _Saas } from "./index.js";
import recombeeIcon from "../../../resources/saas/recommendation/recombee.png";

function _Recommendation(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)._type = "recommendation";
  return node;
}

export function Recombee(label?: string, options?: Record<string, unknown>) {
  const node = _Recommendation(label ?? "Recombee", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = recombeeIcon;
  return node;
}
