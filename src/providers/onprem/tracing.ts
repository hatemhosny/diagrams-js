import { _Onprem } from "./index.js";
import jaegerIcon from "../../../resources/onprem/tracing/jaeger.png";
import tempoIcon from "../../../resources/onprem/tracing/tempo.png";

function _Tracing(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "tracing";
  return node;
}

export function Jaeger(label?: string, options?: Record<string, unknown>) {
  const node = _Tracing(label ?? "Jaeger", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = jaegerIcon;
  return node;
}

export function Tempo(label?: string, options?: Record<string, unknown>) {
  const node = _Tracing(label ?? "Tempo", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tempoIcon;
  return node;
}
