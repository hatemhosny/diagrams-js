import { _Gcp } from "./index.js";
import advanced_solutions_labIcon from "../../../resources/gcp/ml/advanced-solutions-lab.png";
import ai_hubIcon from "../../../resources/gcp/ml/ai-hub.png";
import ai_platform_data_labeling_serviceIcon from "../../../resources/gcp/ml/ai-platform-data-labeling-service.png";
import ai_platformIcon from "../../../resources/gcp/ml/ai-platform.png";
import automl_natural_languageIcon from "../../../resources/gcp/ml/automl-natural-language.png";
import automl_tablesIcon from "../../../resources/gcp/ml/automl-tables.png";
import automl_translationIcon from "../../../resources/gcp/ml/automl-translation.png";
import automl_video_intelligenceIcon from "../../../resources/gcp/ml/automl-video-intelligence.png";
import automl_visionIcon from "../../../resources/gcp/ml/automl-vision.png";
import automlIcon from "../../../resources/gcp/ml/automl.png";
import dialog_flow_enterprise_editionIcon from "../../../resources/gcp/ml/dialog-flow-enterprise-edition.png";
import inference_apiIcon from "../../../resources/gcp/ml/inference-api.png";
import jobs_apiIcon from "../../../resources/gcp/ml/jobs-api.png";
import natural_language_apiIcon from "../../../resources/gcp/ml/natural-language-api.png";
import recommendations_aiIcon from "../../../resources/gcp/ml/recommendations-ai.png";
import speech_to_textIcon from "../../../resources/gcp/ml/speech-to-text.png";
import text_to_speechIcon from "../../../resources/gcp/ml/text-to-speech.png";
import tpuIcon from "../../../resources/gcp/ml/tpu.png";
import translation_apiIcon from "../../../resources/gcp/ml/translation-api.png";
import vertex_aiIcon from "../../../resources/gcp/ml/vertex-ai.png";
import video_intelligence_apiIcon from "../../../resources/gcp/ml/video-intelligence-api.png";
import vision_apiIcon from "../../../resources/gcp/ml/vision-api.png";

function _Ml(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)._type = "ml";
  return node;
}

export function AdvancedSolutionsLab(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AdvancedSolutionsLab", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = advanced_solutions_labIcon;
  return node;
}

export function AIHub(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AIHub", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ai_hubIcon;
  return node;
}

export function AIPlatformDataLabelingService(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AIPlatformDataLabelingService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ai_platform_data_labeling_serviceIcon;
  return node;
}

export function AIPlatform(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AIPlatform", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ai_platformIcon;
  return node;
}

export function AutomlNaturalLanguage(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AutomlNaturalLanguage", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = automl_natural_languageIcon;
  return node;
}

export function AutomlTables(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AutomlTables", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = automl_tablesIcon;
  return node;
}

export function AutomlTranslation(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AutomlTranslation", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = automl_translationIcon;
  return node;
}

export function AutomlVideoIntelligence(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AutomlVideoIntelligence", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = automl_video_intelligenceIcon;
  return node;
}

export function AutomlVision(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "AutomlVision", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = automl_visionIcon;
  return node;
}

export function Automl(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "Automl", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = automlIcon;
  return node;
}

export function DialogFlowEnterpriseEdition(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "DialogFlowEnterpriseEdition", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = dialog_flow_enterprise_editionIcon;
  return node;
}

export function InferenceAPI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "InferenceAPI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = inference_apiIcon;
  return node;
}

export function JobsAPI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "JobsAPI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = jobs_apiIcon;
  return node;
}

export function NaturalLanguageAPI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "NaturalLanguageAPI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = natural_language_apiIcon;
  return node;
}

export function RecommendationsAI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "RecommendationsAI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = recommendations_aiIcon;
  return node;
}

export function SpeechToText(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "SpeechToText", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = speech_to_textIcon;
  return node;
}

export function TextToSpeech(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "TextToSpeech", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = text_to_speechIcon;
  return node;
}

export function TPU(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "TPU", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = tpuIcon;
  return node;
}

export function TranslationAPI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "TranslationAPI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = translation_apiIcon;
  return node;
}

export function VertexAI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "VertexAI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vertex_aiIcon;
  return node;
}

export function VideoIntelligenceAPI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "VideoIntelligenceAPI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = video_intelligence_apiIcon;
  return node;
}

export function VisionAPI(label?: string, options?: Record<string, unknown>) {
  const node = _Ml(label ?? "VisionAPI", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vision_apiIcon;
  return node;
}

// Aliases
export const AutoML = Automl;
export const NLAPI = NaturalLanguageAPI;
export const STT = SpeechToText;
export const TTS = TextToSpeech;
