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

function _Analytics(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "analytics";
  return node;
}

export function AnalysisServices(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "AnalysisServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = analysis_servicesIcon;
  return node;
}

export function AzureDataExplorerClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "AzureDataExplorerClusters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_data_explorer_clustersIcon;
  return node;
}

export function AzureDatabricks(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "AzureDatabricks", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_databricksIcon;
  return node;
}

export function AzureSynapseAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "AzureSynapseAnalytics", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_synapse_analyticsIcon;
  return node;
}

export function AzureWorkbooks(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "AzureWorkbooks", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_workbooksIcon;
  return node;
}

export function DataExplorerClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataExplorerClusters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_explorer_clustersIcon;
  return node;
}

export function DataFactories(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataFactories", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_factoriesIcon;
  return node;
}

export function DataLakeAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataLakeAnalytics", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_lake_analyticsIcon;
  return node;
}

export function DataLakeStoreGen1(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataLakeStoreGen1", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_lake_store_gen1Icon;
  return node;
}

export function Databricks(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Databricks", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = databricksIcon;
  return node;
}

export function EndpointAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EndpointAnalytics", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = endpoint_analyticsIcon;
  return node;
}

export function EventHubClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EventHubClusters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = event_hub_clustersIcon;
  return node;
}

export function EventHubs(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EventHubs", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = event_hubsIcon;
  return node;
}

export function HDInsightClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "HDInsightClusters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = hd_insight_clustersIcon;
  return node;
}

export function LogAnalyticsWorkspaces(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "LogAnalyticsWorkspaces", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = log_analytics_workspacesIcon;
  return node;
}

export function PowerBiEmbedded(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "PowerBiEmbedded", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = power_bi_embeddedIcon;
  return node;
}

export function PowerPlatform(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "PowerPlatform", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = power_platformIcon;
  return node;
}

export function PrivateLinkServices(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "PrivateLinkServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = private_link_servicesIcon;
  return node;
}

export function StreamAnalyticsJobs(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "StreamAnalyticsJobs", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = stream_analytics_jobsIcon;
  return node;
}

export function SynapseAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "SynapseAnalytics", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = synapse_analyticsIcon;
  return node;
}
