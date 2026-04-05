import { _Azure } from "./index.js";
import azure_cosmos_dbIcon from "../../../resources/azure/iot/azure-cosmos-db.png";
import azure_databox_gatewayIcon from "../../../resources/azure/iot/azure-databox-gateway.png";
import azure_iot_operationsIcon from "../../../resources/azure/iot/azure-iot-operations.png";
import azure_maps_accountsIcon from "../../../resources/azure/iot/azure-maps-accounts.png";
import azure_stackIcon from "../../../resources/azure/iot/azure-stack.png";
import device_provisioning_servicesIcon from "../../../resources/azure/iot/device-provisioning-services.png";
import digital_twinsIcon from "../../../resources/azure/iot/digital-twins.png";
import event_grid_subscriptionsIcon from "../../../resources/azure/iot/event-grid-subscriptions.png";
import event_hub_clustersIcon from "../../../resources/azure/iot/event-hub-clusters.png";
import event_hubsIcon from "../../../resources/azure/iot/event-hubs.png";
import function_appsIcon from "../../../resources/azure/iot/function-apps.png";
import industrial_iotIcon from "../../../resources/azure/iot/industrial-iot.png";
import iot_central_applicationsIcon from "../../../resources/azure/iot/iot-central-applications.png";
import iot_edgeIcon from "../../../resources/azure/iot/iot-edge.png";
import iot_hub_securityIcon from "../../../resources/azure/iot/iot-hub-security.png";
import iot_hubIcon from "../../../resources/azure/iot/iot-hub.png";
import logic_appsIcon from "../../../resources/azure/iot/logic-apps.png";
import machine_learning_studio_classic_web_servicesIcon from "../../../resources/azure/iot/machine-learning-studio-classic-web-services.png";
import machine_learning_studio_web_service_plansIcon from "../../../resources/azure/iot/machine-learning-studio-web-service-plans.png";
import machine_learning_studio_workspacesIcon from "../../../resources/azure/iot/machine-learning-studio-workspaces.png";
import mapsIcon from "../../../resources/azure/iot/maps.png";
import notification_hub_namespacesIcon from "../../../resources/azure/iot/notification-hub-namespaces.png";
import notification_hubsIcon from "../../../resources/azure/iot/notification-hubs.png";
import sphereIcon from "../../../resources/azure/iot/sphere.png";
import stack_hci_premiumIcon from "../../../resources/azure/iot/stack-hci-premium.png";
import stream_analytics_jobsIcon from "../../../resources/azure/iot/stream-analytics-jobs.png";
import time_series_data_setsIcon from "../../../resources/azure/iot/time-series-data-sets.png";
import time_series_insights_access_policiesIcon from "../../../resources/azure/iot/time-series-insights-access-policies.png";
import time_series_insights_environmentsIcon from "../../../resources/azure/iot/time-series-insights-environments.png";
import time_series_insights_event_sourcesIcon from "../../../resources/azure/iot/time-series-insights-event-sources.png";
import time_series_insights_events_sourcesIcon from "../../../resources/azure/iot/time-series-insights-events-sources.png";
import windows_10_iot_core_servicesIcon from "../../../resources/azure/iot/windows-10-iot-core-services.png";
import windows10_core_servicesIcon from "../../../resources/azure/iot/windows10-core-services.png";

function _Iot(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "iot";
  return node;
}

export function AzureCosmosDb(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "AzureCosmosDb", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_cosmos_dbIcon;
  return node;
}

export function AzureDataboxGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "AzureDataboxGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_databox_gatewayIcon;
  return node;
}

export function AzureIotOperations(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "AzureIotOperations", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_iot_operationsIcon;
  return node;
}

export function AzureMapsAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "AzureMapsAccounts", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_maps_accountsIcon;
  return node;
}

export function AzureStack(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "AzureStack", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_stackIcon;
  return node;
}

export function DeviceProvisioningServices(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "DeviceProvisioningServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = device_provisioning_servicesIcon;
  return node;
}

export function DigitalTwins(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "DigitalTwins", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = digital_twinsIcon;
  return node;
}

export function EventGridSubscriptions(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "EventGridSubscriptions", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = event_grid_subscriptionsIcon;
  return node;
}

export function EventHubClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "EventHubClusters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = event_hub_clustersIcon;
  return node;
}

export function EventHubs(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "EventHubs", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = event_hubsIcon;
  return node;
}

export function FunctionApps(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "FunctionApps", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = function_appsIcon;
  return node;
}

export function IndustrialIot(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IndustrialIot", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = industrial_iotIcon;
  return node;
}

export function IotCentralApplications(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotCentralApplications", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_central_applicationsIcon;
  return node;
}

export function IotEdge(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotEdge", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_edgeIcon;
  return node;
}

export function IotHubSecurity(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotHubSecurity", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_hub_securityIcon;
  return node;
}

export function IotHub(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotHub", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_hubIcon;
  return node;
}

export function LogicApps(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "LogicApps", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = logic_appsIcon;
  return node;
}

export function MachineLearningStudioClassicWebServices(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Iot(label ?? "MachineLearningStudioClassicWebServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    machine_learning_studio_classic_web_servicesIcon;
  return node;
}

export function MachineLearningStudioWebServicePlans(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Iot(label ?? "MachineLearningStudioWebServicePlans", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    machine_learning_studio_web_service_plansIcon;
  return node;
}

export function MachineLearningStudioWorkspaces(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "MachineLearningStudioWorkspaces", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    machine_learning_studio_workspacesIcon;
  return node;
}

export function Maps(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "Maps", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mapsIcon;
  return node;
}

export function NotificationHubNamespaces(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "NotificationHubNamespaces", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = notification_hub_namespacesIcon;
  return node;
}

export function NotificationHubs(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "NotificationHubs", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = notification_hubsIcon;
  return node;
}

export function Sphere(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "Sphere", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sphereIcon;
  return node;
}

export function StackHciPremium(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "StackHciPremium", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = stack_hci_premiumIcon;
  return node;
}

export function StreamAnalyticsJobs(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "StreamAnalyticsJobs", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = stream_analytics_jobsIcon;
  return node;
}

export function TimeSeriesDataSets(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "TimeSeriesDataSets", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = time_series_data_setsIcon;
  return node;
}

export function TimeSeriesInsightsAccessPolicies(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Iot(label ?? "TimeSeriesInsightsAccessPolicies", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    time_series_insights_access_policiesIcon;
  return node;
}

export function TimeSeriesInsightsEnvironments(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "TimeSeriesInsightsEnvironments", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = time_series_insights_environmentsIcon;
  return node;
}

export function TimeSeriesInsightsEventSources(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "TimeSeriesInsightsEventSources", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    time_series_insights_event_sourcesIcon;
  return node;
}

export function TimeSeriesInsightsEventsSources(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "TimeSeriesInsightsEventsSources", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    time_series_insights_events_sourcesIcon;
  return node;
}

export function Windows10IotCoreServices(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "Windows10IotCoreServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = windows_10_iot_core_servicesIcon;
  return node;
}

export function Windows10CoreServices(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "Windows10CoreServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = windows10_core_servicesIcon;
  return node;
}
