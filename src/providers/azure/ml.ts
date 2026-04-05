import { _Azure } from "./index.js";
import azure_open_aiIcon from "../../../resources/azure/ml/azure-open-ai.png";
import azure_speech_serviceIcon from "../../../resources/azure/ml/azure-speech-service.png";
import batch_aiIcon from "../../../resources/azure/ml/batch-ai.png";
import bot_servicesIcon from "../../../resources/azure/ml/bot-services.png";
import cognitive_servicesIcon from "../../../resources/azure/ml/cognitive-services.png";
import genomics_accountsIcon from "../../../resources/azure/ml/genomics-accounts.png";
import machine_learning_service_workspacesIcon from "../../../resources/azure/ml/machine-learning-service-workspaces.png";
import machine_learning_studio_web_service_plansIcon from "../../../resources/azure/ml/machine-learning-studio-web-service-plans.png";
import machine_learning_studio_web_servicesIcon from "../../../resources/azure/ml/machine-learning-studio-web-services.png";
import machine_learning_studio_workspacesIcon from "../../../resources/azure/ml/machine-learning-studio-workspaces.png";

function _Ml(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "ml";
  return node;
}

export function AzureOpenAI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AzureOpenAI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_open_aiIcon;
  return node;
}

export function AzureSpeechService(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AzureSpeechService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_speech_serviceIcon;
  return node;
}

export function BatchAI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "BatchAI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = batch_aiIcon;
  return node;
}

export function BotServices(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "BotServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = bot_servicesIcon;
  return node;
}

export function CognitiveServices(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "CognitiveServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cognitive_servicesIcon;
  return node;
}

export function GenomicsAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "GenomicsAccounts", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = genomics_accountsIcon;
  return node;
}

export function MachineLearningServiceWorkspaces(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Ml(label ?? "MachineLearningServiceWorkspaces", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    machine_learning_service_workspacesIcon;
  return node;
}

export function MachineLearningStudioWebServicePlans(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Ml(label ?? "MachineLearningStudioWebServicePlans", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    machine_learning_studio_web_service_plansIcon;
  return node;
}

export function MachineLearningStudioWebServices(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Ml(label ?? "MachineLearningStudioWebServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    machine_learning_studio_web_servicesIcon;
  return node;
}

export function MachineLearningStudioWorkspaces(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "MachineLearningStudioWorkspaces", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    machine_learning_studio_workspacesIcon;
  return node;
}
