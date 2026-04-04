import { _Azure } from "./index.js";
import analysis_servicesIcon from "../../../resources/azure/analytics/analysis-services.png";
import azure_data_explorer_clustersIcon from "../../../resources/azure/analytics/azure-data-explorer-clusters.png";
import azure_databricksIcon from "../../../resources/azure/analytics/azure-databricks.png";
import azure_synapse_analyticsIcon from "../../../resources/azure/analytics/azure-synapse-analytics.png";
import azure_workbooksIcon from "../../../resources/azure/analytics/azure-workbooks.png";
import data_explorer_clustersIcon from "../../../resources/azure/analytics/data-explorer-clusters.png";
import data_factoriesIcon from "../../../resources/azure/analytics/data-factories.png";
import data_lake_analyticsIcon from "../../../resources/azure/analytics/data-lake-analytics.png";
import data_lake_store_gen1Icon from "../../../resources/azure/analytics/data-lake-store-gen1.png";
import databricksIcon from "../../../resources/azure/analytics/databricks.png";
import endpoint_analyticsIcon from "../../../resources/azure/analytics/endpoint-analytics.png";
import event_hub_clustersIcon from "../../../resources/azure/analytics/event-hub-clusters.png";
import event_hubsIcon from "../../../resources/azure/analytics/event-hubs.png";
import hd_insight_clustersIcon from "../../../resources/azure/analytics/hd-insight-clusters.png";
import log_analytics_workspacesIcon from "../../../resources/azure/analytics/log-analytics-workspaces.png";
import power_bi_embeddedIcon from "../../../resources/azure/analytics/power-bi-embedded.png";
import power_platformIcon from "../../../resources/azure/analytics/power-platform.png";
import private_link_servicesIcon from "../../../resources/azure/analytics/private-link-services.png";
import stream_analytics_jobsIcon from "../../../resources/azure/analytics/stream-analytics-jobs.png";
import synapse_analyticsIcon from "../../../resources/azure/analytics/synapse-analytics.png";

class _Analytics extends _Azure {
  protected static override _type = "analytics";
}

export class AnalysisServices extends _Analytics {
  protected static _iconDataUrl = analysis_servicesIcon;
}

export class AzureDataExplorerClusters extends _Analytics {
  protected static _iconDataUrl = azure_data_explorer_clustersIcon;
}

export class AzureDatabricks extends _Analytics {
  protected static _iconDataUrl = azure_databricksIcon;
}

export class AzureSynapseAnalytics extends _Analytics {
  protected static _iconDataUrl = azure_synapse_analyticsIcon;
}

export class AzureWorkbooks extends _Analytics {
  protected static _iconDataUrl = azure_workbooksIcon;
}

export class DataExplorerClusters extends _Analytics {
  protected static _iconDataUrl = data_explorer_clustersIcon;
}

export class DataFactories extends _Analytics {
  protected static _iconDataUrl = data_factoriesIcon;
}

export class DataLakeAnalytics extends _Analytics {
  protected static _iconDataUrl = data_lake_analyticsIcon;
}

export class DataLakeStoreGen1 extends _Analytics {
  protected static _iconDataUrl = data_lake_store_gen1Icon;
}

export class Databricks extends _Analytics {
  protected static _iconDataUrl = databricksIcon;
}

export class EndpointAnalytics extends _Analytics {
  protected static _iconDataUrl = endpoint_analyticsIcon;
}

export class EventHubClusters extends _Analytics {
  protected static _iconDataUrl = event_hub_clustersIcon;
}

export class EventHubs extends _Analytics {
  protected static _iconDataUrl = event_hubsIcon;
}

export class HDInsightClusters extends _Analytics {
  protected static _iconDataUrl = hd_insight_clustersIcon;
}

export class LogAnalyticsWorkspaces extends _Analytics {
  protected static _iconDataUrl = log_analytics_workspacesIcon;
}

export class PowerBiEmbedded extends _Analytics {
  protected static _iconDataUrl = power_bi_embeddedIcon;
}

export class PowerPlatform extends _Analytics {
  protected static _iconDataUrl = power_platformIcon;
}

export class PrivateLinkServices extends _Analytics {
  protected static _iconDataUrl = private_link_servicesIcon;
}

export class StreamAnalyticsJobs extends _Analytics {
  protected static _iconDataUrl = stream_analytics_jobsIcon;
}

export class SynapseAnalytics extends _Analytics {
  protected static _iconDataUrl = synapse_analyticsIcon;
}
