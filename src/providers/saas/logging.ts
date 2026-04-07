import { _Saas } from "./index.js";
import datadogIcon from "../../../resources/saas/logging/datadog.png";
import newrelicIcon from "../../../resources/saas/logging/newrelic.png";
import papertrailIcon from "../../../resources/saas/logging/papertrail.png";

function _Logging(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "logging";
  return node;
}

export function Datadog(label?: string, options?: Record<string, unknown>) {
  const node = _Logging(label ?? "Datadog", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = datadogIcon;
  return node;
}

export function Newrelic(label?: string, options?: Record<string, unknown>) {
  const node = _Logging(label ?? "Newrelic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = newrelicIcon;
  return node;
}

export function Papertrail(label?: string, options?: Record<string, unknown>) {
  const node = _Logging(label ?? "Papertrail", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = papertrailIcon;
  return node;
}

// Aliases
export const DataDog = Datadog;
export const NewRelic = Newrelic;
