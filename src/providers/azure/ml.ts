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

class _Ml extends _Azure {
  protected static override _type = "ml";
}

export class AzureOpenAI extends _Ml {
  protected static _iconDataUrl = azure_open_aiIcon;
}

export class AzureSpeechService extends _Ml {
  protected static _iconDataUrl = azure_speech_serviceIcon;
}

export class BatchAI extends _Ml {
  protected static _iconDataUrl = batch_aiIcon;
}

export class BotServices extends _Ml {
  protected static _iconDataUrl = bot_servicesIcon;
}

export class CognitiveServices extends _Ml {
  protected static _iconDataUrl = cognitive_servicesIcon;
}

export class GenomicsAccounts extends _Ml {
  protected static _iconDataUrl = genomics_accountsIcon;
}

export class MachineLearningServiceWorkspaces extends _Ml {
  protected static _iconDataUrl = machine_learning_service_workspacesIcon;
}

export class MachineLearningStudioWebServicePlans extends _Ml {
  protected static _iconDataUrl = machine_learning_studio_web_service_plansIcon;
}

export class MachineLearningStudioWebServices extends _Ml {
  protected static _iconDataUrl = machine_learning_studio_web_servicesIcon;
}

export class MachineLearningStudioWorkspaces extends _Ml {
  protected static _iconDataUrl = machine_learning_studio_workspacesIcon;
}
