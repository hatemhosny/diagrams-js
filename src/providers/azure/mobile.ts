import { _Azure } from "./index.js";
import app_service_mobileIcon from "../../../resources/azure/mobile/app-service-mobile.png";
import app_servicesIcon from "../../../resources/azure/mobile/app-services.png";
import mobile_engagementIcon from "../../../resources/azure/mobile/mobile-engagement.png";
import notification_hubsIcon from "../../../resources/azure/mobile/notification-hubs.png";
import power_platformIcon from "../../../resources/azure/mobile/power-platform.png";

function _Mobile(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "mobile";
  return node;
}

export function AppServiceMobile(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "AppServiceMobile", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_service_mobileIcon;
  return node;
}

export function AppServices(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "AppServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_servicesIcon;
  return node;
}

export function MobileEngagement(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "MobileEngagement", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mobile_engagementIcon;
  return node;
}

export function NotificationHubs(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "NotificationHubs", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = notification_hubsIcon;
  return node;
}

export function PowerPlatform(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "PowerPlatform", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = power_platformIcon;
  return node;
}
