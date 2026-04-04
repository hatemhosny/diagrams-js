import { _Azure } from "./index.js";
import app_service_mobileIcon from "../../../resources/azure/mobile/app-service-mobile.png";
import app_servicesIcon from "../../../resources/azure/mobile/app-services.png";
import mobile_engagementIcon from "../../../resources/azure/mobile/mobile-engagement.png";
import notification_hubsIcon from "../../../resources/azure/mobile/notification-hubs.png";
import power_platformIcon from "../../../resources/azure/mobile/power-platform.png";

class _Mobile extends _Azure {
  protected static override _type = "mobile";
}

export class AppServiceMobile extends _Mobile {
  protected static override _iconDataUrl = app_service_mobileIcon;
}

export class AppServices extends _Mobile {
  protected static override _iconDataUrl = app_servicesIcon;
}

export class MobileEngagement extends _Mobile {
  protected static override _iconDataUrl = mobile_engagementIcon;
}

export class NotificationHubs extends _Mobile {
  protected static override _iconDataUrl = notification_hubsIcon;
}

export class PowerPlatform extends _Mobile {
  protected static override _iconDataUrl = power_platformIcon;
}
