import { _Ibm } from "./index.js";
import actionable_insightIcon from "../../../resources/ibm/applications/actionable-insight.png";
import annotateIcon from "../../../resources/ibm/applications/annotate.png";
import api_developer_portalIcon from "../../../resources/ibm/applications/api-developer-portal.png";
import api_polyglot_runtimesIcon from "../../../resources/ibm/applications/api-polyglot-runtimes.png";
import app_serverIcon from "../../../resources/ibm/applications/app-server.png";
import application_logicIcon from "../../../resources/ibm/applications/application-logic.png";
import enterprise_applicationsIcon from "../../../resources/ibm/applications/enterprise-applications.png";
import indexIcon from "../../../resources/ibm/applications/index.png";
import iot_applicationIcon from "../../../resources/ibm/applications/iot-application.png";
import microserviceIcon from "../../../resources/ibm/applications/microservice.png";
import mobile_appIcon from "../../../resources/ibm/applications/mobile-app.png";
import ontologyIcon from "../../../resources/ibm/applications/ontology.png";
import open_source_toolsIcon from "../../../resources/ibm/applications/open-source-tools.png";
import runtime_servicesIcon from "../../../resources/ibm/applications/runtime-services.png";
import saas_applicationsIcon from "../../../resources/ibm/applications/saas-applications.png";
import service_brokerIcon from "../../../resources/ibm/applications/service-broker.png";
import speech_to_textIcon from "../../../resources/ibm/applications/speech-to-text.png";
import visual_recognitionIcon from "../../../resources/ibm/applications/visual-recognition.png";
import visualizationIcon from "../../../resources/ibm/applications/visualization.png";

class _Applications extends _Ibm {
  protected static override _type = "applications";
}

export class ActionableInsight extends _Applications {
  protected static _iconDataUrl = actionable_insightIcon;
}

export class Annotate extends _Applications {
  protected static _iconDataUrl = annotateIcon;
}

export class ApiDeveloperPortal extends _Applications {
  protected static _iconDataUrl = api_developer_portalIcon;
}

export class ApiPolyglotRuntimes extends _Applications {
  protected static _iconDataUrl = api_polyglot_runtimesIcon;
}

export class AppServer extends _Applications {
  protected static _iconDataUrl = app_serverIcon;
}

export class ApplicationLogic extends _Applications {
  protected static _iconDataUrl = application_logicIcon;
}

export class EnterpriseApplications extends _Applications {
  protected static _iconDataUrl = enterprise_applicationsIcon;
}

export class Index extends _Applications {
  protected static _iconDataUrl = indexIcon;
}

export class IotApplication extends _Applications {
  protected static _iconDataUrl = iot_applicationIcon;
}

export class Microservice extends _Applications {
  protected static _iconDataUrl = microserviceIcon;
}

export class MobileApp extends _Applications {
  protected static _iconDataUrl = mobile_appIcon;
}

export class Ontology extends _Applications {
  protected static _iconDataUrl = ontologyIcon;
}

export class OpenSourceTools extends _Applications {
  protected static _iconDataUrl = open_source_toolsIcon;
}

export class RuntimeServices extends _Applications {
  protected static _iconDataUrl = runtime_servicesIcon;
}

export class SaasApplications extends _Applications {
  protected static _iconDataUrl = saas_applicationsIcon;
}

export class ServiceBroker extends _Applications {
  protected static _iconDataUrl = service_brokerIcon;
}

export class SpeechToText extends _Applications {
  protected static _iconDataUrl = speech_to_textIcon;
}

export class VisualRecognition extends _Applications {
  protected static _iconDataUrl = visual_recognitionIcon;
}

export class Visualization extends _Applications {
  protected static _iconDataUrl = visualizationIcon;
}
