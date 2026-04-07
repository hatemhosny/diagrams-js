import { _Ibm } from "./index.js";
import analyticsIcon from "../../../resources/ibm/analytics/analytics.png";
import data_integrationIcon from "../../../resources/ibm/analytics/data-integration.png";
import data_repositoriesIcon from "../../../resources/ibm/analytics/data-repositories.png";
import device_analyticsIcon from "../../../resources/ibm/analytics/device-analytics.png";
import streaming_computingIcon from "../../../resources/ibm/analytics/streaming-computing.png";

function _Analytics(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "analytics";
  return node;
}

export function Analytics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Analytics", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = analyticsIcon;
  return node;
}

export function DataIntegration(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataIntegration", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_integrationIcon;
  return node;
}

export function DataRepositories(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataRepositories", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_repositoriesIcon;
  return node;
}

export function DeviceAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DeviceAnalytics", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_analyticsIcon;
  return node;
}

export function StreamingComputing(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "StreamingComputing", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = streaming_computingIcon;
  return node;
}
