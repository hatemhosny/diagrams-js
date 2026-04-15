import { _Azure } from "./index.js";
import api_centerIcon from "../../../resources/azure/web/api-center.png";
import api_connectionsIcon from "../../../resources/azure/web/api-connections.png";
import api_management_servicesIcon from "../../../resources/azure/web/api-management-services.png";
import app_service_certificatesIcon from "../../../resources/azure/web/app-service-certificates.png";
import app_service_domainsIcon from "../../../resources/azure/web/app-service-domains.png";
import app_service_environmentsIcon from "../../../resources/azure/web/app-service-environments.png";
import app_service_plansIcon from "../../../resources/azure/web/app-service-plans.png";
import app_servicesIcon from "../../../resources/azure/web/app-services.png";
import app_spaceIcon from "../../../resources/azure/web/app-space.png";
import azure_media_serviceIcon from "../../../resources/azure/web/azure-media-service.png";
import azure_spring_appsIcon from "../../../resources/azure/web/azure-spring-apps.png";
import cognitive_searchIcon from "../../../resources/azure/web/cognitive-search.png";
import cognitive_servicesIcon from "../../../resources/azure/web/cognitive-services.png";
import front_door_and_cdn_profilesIcon from "../../../resources/azure/web/front-door-and-cdn-profiles.png";
import media_servicesIcon from "../../../resources/azure/web/media-services.png";
import notification_hub_namespacesIcon from "../../../resources/azure/web/notification-hub-namespaces.png";
import power_platformIcon from "../../../resources/azure/web/power-platform.png";
import searchIcon from "../../../resources/azure/web/search.png";
import signalrIcon from "../../../resources/azure/web/signalr.png";
import static_appsIcon from "../../../resources/azure/web/static-apps.png";

function _Web(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "web";
  return node;
}

export function APICenter(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "APICenter", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APICenter";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_centerIcon;
  return node;
}

export function APIConnections(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "APIConnections", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIConnections";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_connectionsIcon;
  return node;
}

export function APIManagementServices(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "APIManagementServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIManagementServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_management_servicesIcon;
  return node;
}

export function AppServiceCertificates(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "AppServiceCertificates", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppServiceCertificates";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_service_certificatesIcon;
  return node;
}

export function AppServiceDomains(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "AppServiceDomains", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppServiceDomains";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_service_domainsIcon;
  return node;
}

export function AppServiceEnvironments(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "AppServiceEnvironments", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppServiceEnvironments";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_service_environmentsIcon;
  return node;
}

export function AppServicePlans(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "AppServicePlans", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppServicePlans";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_service_plansIcon;
  return node;
}

export function AppServices(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "AppServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_servicesIcon;
  return node;
}

export function AppSpace(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "AppSpace", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppSpace";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_spaceIcon;
  return node;
}

export function AzureMediaService(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "AzureMediaService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureMediaService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_media_serviceIcon;
  return node;
}

export function AzureSpringApps(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "AzureSpringApps", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureSpringApps";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_spring_appsIcon;
  return node;
}

export function CognitiveSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "CognitiveSearch", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CognitiveSearch";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cognitive_searchIcon;
  return node;
}

export function CognitiveServices(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "CognitiveServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CognitiveServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cognitive_servicesIcon;
  return node;
}

export function FrontDoorAndCDNProfiles(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "FrontDoorAndCDNProfiles", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "FrontDoorAndCDNProfiles";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = front_door_and_cdn_profilesIcon;
  return node;
}

export function MediaServices(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "MediaServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MediaServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = media_servicesIcon;
  return node;
}

export function NotificationHubNamespaces(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "NotificationHubNamespaces", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "NotificationHubNamespaces";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = notification_hub_namespacesIcon;
  return node;
}

export function PowerPlatform(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "PowerPlatform", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PowerPlatform";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = power_platformIcon;
  return node;
}

export function Search(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "Search", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Search";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = searchIcon;
  return node;
}

export function Signalr(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "Signalr", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Signalr";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = signalrIcon;
  return node;
}

export function StaticApps(label?: string, options?: Record<string, unknown>) {
  const node = _Web(label ?? "StaticApps", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "StaticApps";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = static_appsIcon;
  return node;
}
