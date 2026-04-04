import { _Azure } from "./index.js";
import azure_operator_5g_coreIcon from "../../../resources/azure/hybridmulticloud/azure-operator-5g-core.png";
import azure_operator_insightsIcon from "../../../resources/azure/hybridmulticloud/azure-operator-insights.png";
import azure_operator_nexusIcon from "../../../resources/azure/hybridmulticloud/azure-operator-nexus.png";
import azure_operator_service_managerIcon from "../../../resources/azure/hybridmulticloud/azure-operator-service-manager.png";
import azure_programmable_connectivityIcon from "../../../resources/azure/hybridmulticloud/azure-programmable-connectivity.png";

class _Hybridmulticloud extends _Azure {
  protected static override _type = "hybridmulticloud";
}

export class AzureOperator5gCore extends _Hybridmulticloud {
  protected static _iconDataUrl = azure_operator_5g_coreIcon;
}

export class AzureOperatorInsights extends _Hybridmulticloud {
  protected static _iconDataUrl = azure_operator_insightsIcon;
}

export class AzureOperatorNexus extends _Hybridmulticloud {
  protected static _iconDataUrl = azure_operator_nexusIcon;
}

export class AzureOperatorServiceManager extends _Hybridmulticloud {
  protected static _iconDataUrl = azure_operator_service_managerIcon;
}

export class AzureProgrammableConnectivity extends _Hybridmulticloud {
  protected static _iconDataUrl = azure_programmable_connectivityIcon;
}
