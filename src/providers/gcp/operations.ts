import { _Gcp } from "./index.js";
import loggingIcon from "../../../resources/gcp/operations/logging.png";
import monitoringIcon from "../../../resources/gcp/operations/monitoring.png";

function _Operations(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "operations";
  return node;
}

export function Logging(label?: string, options?: Record<string, unknown>) {
  const node = _Operations(label ?? "Logging", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = loggingIcon;
  return node;
}

export function Monitoring(label?: string, options?: Record<string, unknown>) {
  const node = _Operations(label ?? "Monitoring", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = monitoringIcon;
  return node;
}
