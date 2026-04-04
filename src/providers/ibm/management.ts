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

class _Management extends _Ibm {
  protected static override _type = "management";
}

export class AlertNotification extends _Management {
  protected static _iconDataUrl = alert_notificationIcon;
}

export class ApiManagement extends _Management {
  protected static _iconDataUrl = api_managementIcon;
}

export class CloudManagement extends _Management {
  protected static _iconDataUrl = cloud_managementIcon;
}

export class ClusterManagement extends _Management {
  protected static _iconDataUrl = cluster_managementIcon;
}

export class ContentManagement extends _Management {
  protected static _iconDataUrl = content_managementIcon;
}

export class DataServices extends _Management {
  protected static _iconDataUrl = data_servicesIcon;
}

export class DeviceManagement extends _Management {
  protected static _iconDataUrl = device_managementIcon;
}

export class InformationGovernance extends _Management {
  protected static _iconDataUrl = information_governanceIcon;
}

export class ItServiceManagement extends _Management {
  protected static _iconDataUrl = it_service_managementIcon;
}

export class Management extends _Management {
  protected static _iconDataUrl = managementIcon;
}

export class MonitoringMetrics extends _Management {
  protected static _iconDataUrl = monitoring_metricsIcon;
}

export class ProcessManagement extends _Management {
  protected static _iconDataUrl = process_managementIcon;
}

export class ProviderCloudPortalService extends _Management {
  protected static _iconDataUrl = provider_cloud_portal_serviceIcon;
}

export class PushNotifications extends _Management {
  protected static _iconDataUrl = push_notificationsIcon;
}

export class ServiceManagementTools extends _Management {
  protected static _iconDataUrl = service_management_toolsIcon;
}
