import { _Azure } from "./index.js";
import applensIcon from "../../../resources/azure/azureecosystem/applens.png";
import azure_hybrid_centerIcon from "../../../resources/azure/azureecosystem/azure-hybrid-center.png";
import collaborative_serviceIcon from "../../../resources/azure/azureecosystem/collaborative-service.png";

class _Azureecosystem extends _Azure {
  protected static override _type = "azureecosystem";
}

export class Applens extends _Azureecosystem {
  protected static _iconDataUrl = applensIcon;
}

export class AzureHybridCenter extends _Azureecosystem {
  protected static _iconDataUrl = azure_hybrid_centerIcon;
}

export class CollaborativeService extends _Azureecosystem {
  protected static _iconDataUrl = collaborative_serviceIcon;
}
