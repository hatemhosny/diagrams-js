import { _Azure } from "./index.js";
import activity_logIcon from "../../../resources/azure/monitor/activity-log.png";
import application_insightsIcon from "../../../resources/azure/monitor/application-insights.png";
import auto_scaleIcon from "../../../resources/azure/monitor/auto-scale.png";
import azure_monitors_for_sap_solutionsIcon from "../../../resources/azure/monitor/azure-monitors-for-sap-solutions.png";
import azure_workbooksIcon from "../../../resources/azure/monitor/azure-workbooks.png";
import change_analysisIcon from "../../../resources/azure/monitor/change-analysis.png";
import diagnostics_settingsIcon from "../../../resources/azure/monitor/diagnostics-settings.png";
import log_analytics_workspacesIcon from "../../../resources/azure/monitor/log-analytics-workspaces.png";
import logsIcon from "../../../resources/azure/monitor/logs.png";
import metricsIcon from "../../../resources/azure/monitor/metrics.png";
import monitorIcon from "../../../resources/azure/monitor/monitor.png";
import network_watcherIcon from "../../../resources/azure/monitor/network-watcher.png";

function _Monitor(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "monitor";
  return node;
}

export function ActivityLog(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "ActivityLog", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ActivityLog";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = activity_logIcon;
  return node;
}

export function ApplicationInsights(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "ApplicationInsights", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ApplicationInsights";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = application_insightsIcon;
  return node;
}

export function AutoScale(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "AutoScale", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AutoScale";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = auto_scaleIcon;
  return node;
}

export function AzureMonitorsForSAPSolutions(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "AzureMonitorsForSAPSolutions", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureMonitorsForSAPSolutions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    azure_monitors_for_sap_solutionsIcon;
  return node;
}

export function AzureWorkbooks(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "AzureWorkbooks", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureWorkbooks";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_workbooksIcon;
  return node;
}

export function ChangeAnalysis(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "ChangeAnalysis", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ChangeAnalysis";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = change_analysisIcon;
  return node;
}

export function DiagnosticsSettings(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "DiagnosticsSettings", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DiagnosticsSettings";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = diagnostics_settingsIcon;
  return node;
}

export function LogAnalyticsWorkspaces(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "LogAnalyticsWorkspaces", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LogAnalyticsWorkspaces";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = log_analytics_workspacesIcon;
  return node;
}

export function Logs(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "Logs", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Logs";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = logsIcon;
  return node;
}

export function Metrics(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "Metrics", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Metrics";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = metricsIcon;
  return node;
}

export function Monitor(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "Monitor", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Monitor";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = monitorIcon;
  return node;
}

export function NetworkWatcher(label?: string, options?: Record<string, unknown>) {
  const node = _Monitor(label ?? "NetworkWatcher", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "NetworkWatcher";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = network_watcherIcon;
  return node;
}
