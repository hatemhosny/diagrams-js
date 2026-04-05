import { _Elastic } from "./index.js";
import apmIcon from "../../../resources/elastic/observability/apm.png";
import logsIcon from "../../../resources/elastic/observability/logs.png";
import metricsIcon from "../../../resources/elastic/observability/metrics.png";
import observabilityIcon from "../../../resources/elastic/observability/observability.png";
import uptimeIcon from "../../../resources/elastic/observability/uptime.png";

function _Observability(label?: string, options?: Record<string, unknown>) {
  const node = _Elastic(label, options);
  (node as unknown as Record<string, unknown>)._type = "observability";
  return node;
}

export function APM(label?: string, options?: Record<string, unknown>) {
  const node = _Observability(label ?? "APM", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apmIcon;
  return node;
}

export function Logs(label?: string, options?: Record<string, unknown>) {
  const node = _Observability(label ?? "Logs", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = logsIcon;
  return node;
}

export function Metrics(label?: string, options?: Record<string, unknown>) {
  const node = _Observability(label ?? "Metrics", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = metricsIcon;
  return node;
}

export function Observability(label?: string, options?: Record<string, unknown>) {
  const node = _Observability(label ?? "Observability", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = observabilityIcon;
  return node;
}

export function Uptime(label?: string, options?: Record<string, unknown>) {
  const node = _Observability(label ?? "Uptime", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = uptimeIcon;
  return node;
}
