import { _Azure } from "./index.js";
import app_service_certificatesIcon from "../../../resources/azure/appservices/app-service-certificates.png";
import app_service_domainsIcon from "../../../resources/azure/appservices/app-service-domains.png";
import app_service_environmentsIcon from "../../../resources/azure/appservices/app-service-environments.png";
import app_service_plansIcon from "../../../resources/azure/appservices/app-service-plans.png";
import app_servicesIcon from "../../../resources/azure/appservices/app-services.png";
import cdn_profilesIcon from "../../../resources/azure/appservices/cdn-profiles.png";
import cognitive_searchIcon from "../../../resources/azure/appservices/cognitive-search.png";
import notification_hubsIcon from "../../../resources/azure/appservices/notification-hubs.png";

class _Appservices extends _Azure {
  protected static override _type = "appservices";
}

export class AppServiceCertificates extends _Appservices {
  protected static _iconDataUrl = app_service_certificatesIcon;
}

export class AppServiceDomains extends _Appservices {
  protected static _iconDataUrl = app_service_domainsIcon;
}

export class AppServiceEnvironments extends _Appservices {
  protected static _iconDataUrl = app_service_environmentsIcon;
}

export class AppServicePlans extends _Appservices {
  protected static _iconDataUrl = app_service_plansIcon;
}

export class AppServices extends _Appservices {
  protected static _iconDataUrl = app_servicesIcon;
}

export class CDNProfiles extends _Appservices {
  protected static _iconDataUrl = cdn_profilesIcon;
}

export class CognitiveSearch extends _Appservices {
  protected static _iconDataUrl = cognitive_searchIcon;
}

export class NotificationHubs extends _Appservices {
  protected static _iconDataUrl = notification_hubsIcon;
}
