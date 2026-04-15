import { _Elastic } from "./index.js";
import cloudIcon from "../../../resources/elastic/saas/cloud.png";
import elasticIcon from "../../../resources/elastic/saas/elastic.png";

function _Saas(label?: string, options?: Record<string, unknown>) {
  const node = _Elastic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "saas";
  return node;
}

export function Cloud(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label ?? "Cloud", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cloud";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudIcon;
  return node;
}

export function Elastic(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label ?? "Elastic", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Elastic";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elasticIcon;
  return node;
}
