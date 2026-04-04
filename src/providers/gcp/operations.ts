import { _Gcp } from "./index.js";
import loggingIcon from "../../../resources/gcp/operations/logging.png";
import monitoringIcon from "../../../resources/gcp/operations/monitoring.png";

class _Operations extends _Gcp {
  protected static override _type = "operations";
}

export class Logging extends _Operations {
  protected static override _iconDataUrl = loggingIcon;
}

export class Monitoring extends _Operations {
  protected static override _iconDataUrl = monitoringIcon;
}
