import { _Azure } from "./index.js";
import app_service_certificatesIcon from "../../../resources/azure/appservices/app-service-certificates.png";
import app_service_domainsIcon from "../../../resources/azure/appservices/app-service-domains.png";
import app_service_environmentsIcon from "../../../resources/azure/appservices/app-service-environments.png";
import app_service_plansIcon from "../../../resources/azure/appservices/app-service-plans.png";
import app_servicesIcon from "../../../resources/azure/appservices/app-services.png";
import cdn_profilesIcon from "../../../resources/azure/appservices/cdn-profiles.png";
import cognitive_searchIcon from "../../../resources/azure/appservices/cognitive-search.png";
import notification_hubsIcon from "../../../resources/azure/appservices/notification-hubs.png";

function _Appservices(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "appservices";
  return node;
}

export function AppServiceCertificates(label?: string, options?: Record<string, unknown>) {
  const node = _Appservices(label ?? "AppServiceCertificates", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_service_certificatesIcon;
  return node;
}

export function AppServiceDomains(label?: string, options?: Record<string, unknown>) {
  const node = _Appservices(label ?? "AppServiceDomains", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_service_domainsIcon;
  return node;
}

export function AppServiceEnvironments(label?: string, options?: Record<string, unknown>) {
  const node = _Appservices(label ?? "AppServiceEnvironments", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_service_environmentsIcon;
  return node;
}

export function AppServicePlans(label?: string, options?: Record<string, unknown>) {
  const node = _Appservices(label ?? "AppServicePlans", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_service_plansIcon;
  return node;
}

export function AppServices(label?: string, options?: Record<string, unknown>) {
  const node = _Appservices(label ?? "AppServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_servicesIcon;
  return node;
}

export function CDNProfiles(label?: string, options?: Record<string, unknown>) {
  const node = _Appservices(label ?? "CDNProfiles", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cdn_profilesIcon;
  return node;
}

export function CognitiveSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Appservices(label ?? "CognitiveSearch", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cognitive_searchIcon;
  return node;
}

export function NotificationHubs(label?: string, options?: Record<string, unknown>) {
  const node = _Appservices(label ?? "NotificationHubs", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = notification_hubsIcon;
  return node;
}
