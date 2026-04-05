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

function _Applications(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)._type = "applications";
  return node;
}

export function ActionableInsight(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "ActionableInsight", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = actionable_insightIcon;
  return node;
}

export function Annotate(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "Annotate", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = annotateIcon;
  return node;
}

export function ApiDeveloperPortal(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "ApiDeveloperPortal", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = api_developer_portalIcon;
  return node;
}

export function ApiPolyglotRuntimes(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "ApiPolyglotRuntimes", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = api_polyglot_runtimesIcon;
  return node;
}

export function AppServer(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "AppServer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = app_serverIcon;
  return node;
}

export function ApplicationLogic(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "ApplicationLogic", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = application_logicIcon;
  return node;
}

export function EnterpriseApplications(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "EnterpriseApplications", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = enterprise_applicationsIcon;
  return node;
}

export function Index(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "Index", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = indexIcon;
  return node;
}

export function IotApplication(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "IotApplication", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_applicationIcon;
  return node;
}

export function Microservice(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "Microservice", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = microserviceIcon;
  return node;
}

export function MobileApp(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "MobileApp", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mobile_appIcon;
  return node;
}

export function Ontology(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "Ontology", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ontologyIcon;
  return node;
}

export function OpenSourceTools(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "OpenSourceTools", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = open_source_toolsIcon;
  return node;
}

export function RuntimeServices(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "RuntimeServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = runtime_servicesIcon;
  return node;
}

export function SaasApplications(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "SaasApplications", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = saas_applicationsIcon;
  return node;
}

export function ServiceBroker(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "ServiceBroker", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = service_brokerIcon;
  return node;
}

export function SpeechToText(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "SpeechToText", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = speech_to_textIcon;
  return node;
}

export function VisualRecognition(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "VisualRecognition", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = visual_recognitionIcon;
  return node;
}

export function Visualization(label?: string, options?: Record<string, unknown>) {
  const node = _Applications(label ?? "Visualization", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = visualizationIcon;
  return node;
}
