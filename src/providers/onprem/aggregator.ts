import { _Onprem } from "./index.js";
import fluentdIcon from "../../../resources/onprem/aggregator/fluentd.png";
import vectorIcon from "../../../resources/onprem/aggregator/vector.png";

function _Aggregator(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "aggregator";
  return node;
}

export function Fluentd(label?: string, options?: Record<string, unknown>) {
  const node = _Aggregator(label ?? "Fluentd", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Fluentd";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fluentdIcon;
  return node;
}

export function Vector(label?: string, options?: Record<string, unknown>) {
  const node = _Aggregator(label ?? "Vector", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Vector";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vectorIcon;
  return node;
}
