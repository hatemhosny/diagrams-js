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

class _Monitor extends _Azure {
  protected static override _type = "monitor";
}

export class ActivityLog extends _Monitor {
  protected static _iconDataUrl = activity_logIcon;
}

export class ApplicationInsights extends _Monitor {
  protected static _iconDataUrl = application_insightsIcon;
}

export class AutoScale extends _Monitor {
  protected static _iconDataUrl = auto_scaleIcon;
}

export class AzureMonitorsForSAPSolutions extends _Monitor {
  protected static _iconDataUrl = azure_monitors_for_sap_solutionsIcon;
}

export class AzureWorkbooks extends _Monitor {
  protected static _iconDataUrl = azure_workbooksIcon;
}

export class ChangeAnalysis extends _Monitor {
  protected static _iconDataUrl = change_analysisIcon;
}

export class DiagnosticsSettings extends _Monitor {
  protected static _iconDataUrl = diagnostics_settingsIcon;
}

export class LogAnalyticsWorkspaces extends _Monitor {
  protected static _iconDataUrl = log_analytics_workspacesIcon;
}

export class Logs extends _Monitor {
  protected static _iconDataUrl = logsIcon;
}

export class Metrics extends _Monitor {
  protected static _iconDataUrl = metricsIcon;
}

export class Monitor extends _Monitor {
  protected static _iconDataUrl = monitorIcon;
}

export class NetworkWatcher extends _Monitor {
  protected static _iconDataUrl = network_watcherIcon;
}
