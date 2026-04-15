import { _Ibm } from "./index.js";
import alert_notificationIcon from "../../../resources/ibm/management/alert-notification.png";
import api_managementIcon from "../../../resources/ibm/management/api-management.png";
import cloud_managementIcon from "../../../resources/ibm/management/cloud-management.png";
import cluster_managementIcon from "../../../resources/ibm/management/cluster-management.png";
import content_managementIcon from "../../../resources/ibm/management/content-management.png";
import data_servicesIcon from "../../../resources/ibm/management/data-services.png";
import device_managementIcon from "../../../resources/ibm/management/device-management.png";
import information_governanceIcon from "../../../resources/ibm/management/information-governance.png";
import it_service_managementIcon from "../../../resources/ibm/management/it-service-management.png";
import managementIcon from "../../../resources/ibm/management/management.png";
import monitoring_metricsIcon from "../../../resources/ibm/management/monitoring-metrics.png";
import process_managementIcon from "../../../resources/ibm/management/process-management.png";
import provider_cloud_portal_serviceIcon from "../../../resources/ibm/management/provider-cloud-portal-service.png";
import push_notificationsIcon from "../../../resources/ibm/management/push-notifications.png";
import service_management_toolsIcon from "../../../resources/ibm/management/service-management-tools.png";

function _Management(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "management";
  return node;
}

export function AlertNotification(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "AlertNotification", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AlertNotification";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = alert_notificationIcon;
  return node;
}

export function ApiManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ApiManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ApiManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_managementIcon;
  return node;
}

export function CloudManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CloudManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CloudManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_managementIcon;
  return node;
}

export function ClusterManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ClusterManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ClusterManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cluster_managementIcon;
  return node;
}

export function ContentManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ContentManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ContentManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = content_managementIcon;
  return node;
}

export function DataServices(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "DataServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_servicesIcon;
  return node;
}

export function DeviceManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "DeviceManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DeviceManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_managementIcon;
  return node;
}

export function InformationGovernance(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "InformationGovernance", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "InformationGovernance";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = information_governanceIcon;
  return node;
}

export function ItServiceManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ItServiceManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ItServiceManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = it_service_managementIcon;
  return node;
}

export function Management(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Management", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Management";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managementIcon;
  return node;
}

export function MonitoringMetrics(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "MonitoringMetrics", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MonitoringMetrics";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = monitoring_metricsIcon;
  return node;
}

export function ProcessManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ProcessManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ProcessManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = process_managementIcon;
  return node;
}

export function ProviderCloudPortalService(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ProviderCloudPortalService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ProviderCloudPortalService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = provider_cloud_portal_serviceIcon;
  return node;
}

export function PushNotifications(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "PushNotifications", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PushNotifications";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = push_notificationsIcon;
  return node;
}

export function ServiceManagementTools(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ServiceManagementTools", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ServiceManagementTools";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_management_toolsIcon;
  return node;
}
