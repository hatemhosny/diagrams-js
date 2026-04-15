import { _Saas } from "./index.js";
import recombeeIcon from "../../../resources/saas/recommendation/recombee.png";

function _Recommendation(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "recommendation";
  return node;
}

export function Recombee(label?: string, options?: Record<string, unknown>) {
  const node = _Recommendation(label ?? "Recombee", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Recombee";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = recombeeIcon;
  return node;
}
