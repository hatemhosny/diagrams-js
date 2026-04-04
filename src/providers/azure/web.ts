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

class _Web extends _Azure {
  protected static override _type = "web";
}

export class APICenter extends _Web {
  protected static override _iconDataUrl = api_centerIcon;
}

export class APIConnections extends _Web {
  protected static override _iconDataUrl = api_connectionsIcon;
}

export class APIManagementServices extends _Web {
  protected static override _iconDataUrl = api_management_servicesIcon;
}

export class AppServiceCertificates extends _Web {
  protected static override _iconDataUrl = app_service_certificatesIcon;
}

export class AppServiceDomains extends _Web {
  protected static override _iconDataUrl = app_service_domainsIcon;
}

export class AppServiceEnvironments extends _Web {
  protected static override _iconDataUrl = app_service_environmentsIcon;
}

export class AppServicePlans extends _Web {
  protected static override _iconDataUrl = app_service_plansIcon;
}

export class AppServices extends _Web {
  protected static override _iconDataUrl = app_servicesIcon;
}

export class AppSpace extends _Web {
  protected static override _iconDataUrl = app_spaceIcon;
}

export class AzureMediaService extends _Web {
  protected static override _iconDataUrl = azure_media_serviceIcon;
}

export class AzureSpringApps extends _Web {
  protected static override _iconDataUrl = azure_spring_appsIcon;
}

export class CognitiveSearch extends _Web {
  protected static override _iconDataUrl = cognitive_searchIcon;
}

export class CognitiveServices extends _Web {
  protected static override _iconDataUrl = cognitive_servicesIcon;
}

export class FrontDoorAndCDNProfiles extends _Web {
  protected static override _iconDataUrl = front_door_and_cdn_profilesIcon;
}

export class MediaServices extends _Web {
  protected static override _iconDataUrl = media_servicesIcon;
}

export class NotificationHubNamespaces extends _Web {
  protected static override _iconDataUrl = notification_hub_namespacesIcon;
}

export class PowerPlatform extends _Web {
  protected static override _iconDataUrl = power_platformIcon;
}

export class Search extends _Web {
  protected static override _iconDataUrl = searchIcon;
}

export class Signalr extends _Web {
  protected static override _iconDataUrl = signalrIcon;
}

export class StaticApps extends _Web {
  protected static override _iconDataUrl = static_appsIcon;
}
