import { _Azure } from "./index.js";
import ai_studioIcon from "../../../resources/azure/aimachinelearning/ai-studio.png";
import anomaly_detectorIcon from "../../../resources/azure/aimachinelearning/anomaly-detector.png";
import azure_applied_ai_servicesIcon from "../../../resources/azure/aimachinelearning/azure-applied-ai-services.png";
import azure_experimentation_studioIcon from "../../../resources/azure/aimachinelearning/azure-experimentation-studio.png";
import azure_object_understandingIcon from "../../../resources/azure/aimachinelearning/azure-object-understanding.png";
import azure_openaiIcon from "../../../resources/azure/aimachinelearning/azure-openai.png";
import batch_aiIcon from "../../../resources/azure/aimachinelearning/batch-ai.png";
import bonsaiIcon from "../../../resources/azure/aimachinelearning/bonsai.png";
import bot_servicesIcon from "../../../resources/azure/aimachinelearning/bot-services.png";
import cognitive_searchIcon from "../../../resources/azure/aimachinelearning/cognitive-search.png";
import cognitive_services_decisionsIcon from "../../../resources/azure/aimachinelearning/cognitive-services-decisions.png";
import cognitive_servicesIcon from "../../../resources/azure/aimachinelearning/cognitive-services.png";
import computer_visionIcon from "../../../resources/azure/aimachinelearning/computer-vision.png";
import content_moderatorsIcon from "../../../resources/azure/aimachinelearning/content-moderators.png";
import custom_visionIcon from "../../../resources/azure/aimachinelearning/custom-vision.png";
import face_apisIcon from "../../../resources/azure/aimachinelearning/face-apis.png";
import form_recognizersIcon from "../../../resources/azure/aimachinelearning/form-recognizers.png";
import genomics_accountsIcon from "../../../resources/azure/aimachinelearning/genomics-accounts.png";
import genomicsIcon from "../../../resources/azure/aimachinelearning/genomics.png";
import immersive_readersIcon from "../../../resources/azure/aimachinelearning/immersive-readers.png";
import language_understandingIcon from "../../../resources/azure/aimachinelearning/language-understanding.png";
import languageIcon from "../../../resources/azure/aimachinelearning/language.png";
import machine_learning_studio_classic_web_servicesIcon from "../../../resources/azure/aimachinelearning/machine-learning-studio-classic-web-services.png";
import machine_learning_studio_web_service_plansIcon from "../../../resources/azure/aimachinelearning/machine-learning-studio-web-service-plans.png";
import machine_learning_studio_workspacesIcon from "../../../resources/azure/aimachinelearning/machine-learning-studio-workspaces.png";
import machine_learningIcon from "../../../resources/azure/aimachinelearning/machine-learning.png";
import metrics_advisorIcon from "../../../resources/azure/aimachinelearning/metrics-advisor.png";
import personalizersIcon from "../../../resources/azure/aimachinelearning/personalizers.png";
import qna_makersIcon from "../../../resources/azure/aimachinelearning/qna-makers.png";
import serverless_searchIcon from "../../../resources/azure/aimachinelearning/serverless-search.png";
import speech_servicesIcon from "../../../resources/azure/aimachinelearning/speech-services.png";
import translator_textIcon from "../../../resources/azure/aimachinelearning/translator-text.png";

function _Aimachinelearning(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "aimachinelearning";
  return node;
}

export function AIStudio(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "AIStudio", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AIStudio";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ai_studioIcon;
  return node;
}

export function AnomalyDetector(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "AnomalyDetector", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AnomalyDetector";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = anomaly_detectorIcon;
  return node;
}

export function AzureAppliedAIServices(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "AzureAppliedAIServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureAppliedAIServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_applied_ai_servicesIcon;
  return node;
}

export function AzureExperimentationStudio(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "AzureExperimentationStudio", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureExperimentationStudio";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_experimentation_studioIcon;
  return node;
}

export function AzureObjectUnderstanding(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "AzureObjectUnderstanding", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureObjectUnderstanding";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_object_understandingIcon;
  return node;
}

export function AzureOpenai(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "AzureOpenai", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureOpenai";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_openaiIcon;
  return node;
}

export function BatchAI(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "BatchAI", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BatchAI";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = batch_aiIcon;
  return node;
}

export function Bonsai(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "Bonsai", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Bonsai";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bonsaiIcon;
  return node;
}

export function BotServices(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "BotServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BotServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bot_servicesIcon;
  return node;
}

export function CognitiveSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "CognitiveSearch", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CognitiveSearch";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cognitive_searchIcon;
  return node;
}

export function CognitiveServicesDecisions(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "CognitiveServicesDecisions", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CognitiveServicesDecisions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cognitive_services_decisionsIcon;
  return node;
}

export function CognitiveServices(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "CognitiveServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CognitiveServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cognitive_servicesIcon;
  return node;
}

export function ComputerVision(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "ComputerVision", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ComputerVision";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = computer_visionIcon;
  return node;
}

export function ContentModerators(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "ContentModerators", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ContentModerators";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = content_moderatorsIcon;
  return node;
}

export function CustomVision(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "CustomVision", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CustomVision";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = custom_visionIcon;
  return node;
}

export function FaceApis(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "FaceApis", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "FaceApis";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = face_apisIcon;
  return node;
}

export function FormRecognizers(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "FormRecognizers", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "FormRecognizers";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = form_recognizersIcon;
  return node;
}

export function GenomicsAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "GenomicsAccounts", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "GenomicsAccounts";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = genomics_accountsIcon;
  return node;
}

export function Genomics(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "Genomics", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Genomics";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = genomicsIcon;
  return node;
}

export function ImmersiveReaders(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "ImmersiveReaders", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ImmersiveReaders";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = immersive_readersIcon;
  return node;
}

export function LanguageUnderstanding(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "LanguageUnderstanding", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LanguageUnderstanding";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = language_understandingIcon;
  return node;
}

export function Language(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "Language", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Language";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = languageIcon;
  return node;
}

export function MachineLearningStudioClassicWebServices(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Aimachinelearning(label ?? "MachineLearningStudioClassicWebServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "MachineLearningStudioClassicWebServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    machine_learning_studio_classic_web_servicesIcon;
  return node;
}

export function MachineLearningStudioWebServicePlans(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Aimachinelearning(label ?? "MachineLearningStudioWebServicePlans", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "MachineLearningStudioWebServicePlans";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    machine_learning_studio_web_service_plansIcon;
  return node;
}

export function MachineLearningStudioWorkspaces(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "MachineLearningStudioWorkspaces", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MachineLearningStudioWorkspaces";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    machine_learning_studio_workspacesIcon;
  return node;
}

export function MachineLearning(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "MachineLearning", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MachineLearning";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = machine_learningIcon;
  return node;
}

export function MetricsAdvisor(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "MetricsAdvisor", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MetricsAdvisor";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = metrics_advisorIcon;
  return node;
}

export function Personalizers(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "Personalizers", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Personalizers";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = personalizersIcon;
  return node;
}

export function QnaMakers(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "QnaMakers", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "QnaMakers";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = qna_makersIcon;
  return node;
}

export function ServerlessSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "ServerlessSearch", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ServerlessSearch";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = serverless_searchIcon;
  return node;
}

export function SpeechServices(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "SpeechServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SpeechServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = speech_servicesIcon;
  return node;
}

export function TranslatorText(label?: string, options?: Record<string, unknown>) {
  const node = _Aimachinelearning(label ?? "TranslatorText", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "TranslatorText";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = translator_textIcon;
  return node;
}
