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

class _Ml extends _Gcp {
  protected static override _type = "ml";
}

export class AdvancedSolutionsLab extends _Ml {
  protected static _iconDataUrl = advanced_solutions_labIcon;
}

export class AIHub extends _Ml {
  protected static _iconDataUrl = ai_hubIcon;
}

export class AIPlatformDataLabelingService extends _Ml {
  protected static _iconDataUrl = ai_platform_data_labeling_serviceIcon;
}

export class AIPlatform extends _Ml {
  protected static _iconDataUrl = ai_platformIcon;
}

export class AutomlNaturalLanguage extends _Ml {
  protected static _iconDataUrl = automl_natural_languageIcon;
}

export class AutomlTables extends _Ml {
  protected static _iconDataUrl = automl_tablesIcon;
}

export class AutomlTranslation extends _Ml {
  protected static _iconDataUrl = automl_translationIcon;
}

export class AutomlVideoIntelligence extends _Ml {
  protected static _iconDataUrl = automl_video_intelligenceIcon;
}

export class AutomlVision extends _Ml {
  protected static _iconDataUrl = automl_visionIcon;
}

export class Automl extends _Ml {
  protected static _iconDataUrl = automlIcon;
}

export class DialogFlowEnterpriseEdition extends _Ml {
  protected static _iconDataUrl = dialog_flow_enterprise_editionIcon;
}

export class InferenceAPI extends _Ml {
  protected static _iconDataUrl = inference_apiIcon;
}

export class JobsAPI extends _Ml {
  protected static _iconDataUrl = jobs_apiIcon;
}

export class NaturalLanguageAPI extends _Ml {
  protected static _iconDataUrl = natural_language_apiIcon;
}

export class RecommendationsAI extends _Ml {
  protected static _iconDataUrl = recommendations_aiIcon;
}

export class SpeechToText extends _Ml {
  protected static _iconDataUrl = speech_to_textIcon;
}

export class TextToSpeech extends _Ml {
  protected static _iconDataUrl = text_to_speechIcon;
}

export class TPU extends _Ml {
  protected static _iconDataUrl = tpuIcon;
}

export class TranslationAPI extends _Ml {
  protected static _iconDataUrl = translation_apiIcon;
}

export class VertexAI extends _Ml {
  protected static _iconDataUrl = vertex_aiIcon;
}

export class VideoIntelligenceAPI extends _Ml {
  protected static _iconDataUrl = video_intelligence_apiIcon;
}

export class VisionAPI extends _Ml {
  protected static _iconDataUrl = vision_apiIcon;
}

// Aliases
export const AutoML = Automl;
export const NLAPI = NaturalLanguageAPI;
export const STT = SpeechToText;
export const TTS = TextToSpeech;
