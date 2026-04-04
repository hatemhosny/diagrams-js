import { _Ibm } from "./index.js";
import analyticsIcon from "../../../resources/ibm/analytics/analytics.png";
import data_integrationIcon from "../../../resources/ibm/analytics/data-integration.png";
import data_repositoriesIcon from "../../../resources/ibm/analytics/data-repositories.png";
import device_analyticsIcon from "../../../resources/ibm/analytics/device-analytics.png";
import streaming_computingIcon from "../../../resources/ibm/analytics/streaming-computing.png";

class _Analytics extends _Ibm {
  protected static override _type = "analytics";
}

export class Analytics extends _Analytics {
  protected static override _iconDataUrl = analyticsIcon;
}

export class DataIntegration extends _Analytics {
  protected static override _iconDataUrl = data_integrationIcon;
}

export class DataRepositories extends _Analytics {
  protected static override _iconDataUrl = data_repositoriesIcon;
}

export class DeviceAnalytics extends _Analytics {
  protected static override _iconDataUrl = device_analyticsIcon;
}

export class StreamingComputing extends _Analytics {
  protected static override _iconDataUrl = streaming_computingIcon;
}
