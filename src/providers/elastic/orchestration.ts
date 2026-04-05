import { _Elastic } from "./index.js";
import eceIcon from "../../../resources/elastic/orchestration/ece.png";
import eckIcon from "../../../resources/elastic/orchestration/eck.png";

function _Orchestration(label?: string, options?: Record<string, unknown>) {
  const node = _Elastic(label, options);
  (node as unknown as Record<string, unknown>)._type = "orchestration";
  return node;
}

export function ECE(label?: string, options?: Record<string, unknown>) {
  const node = _Orchestration(label ?? "ECE", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = eceIcon;
  return node;
}

export function ECK(label?: string, options?: Record<string, unknown>) {
  const node = _Orchestration(label ?? "ECK", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = eckIcon;
  return node;
}
