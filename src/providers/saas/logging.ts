import { _Saas } from "./index.js";
import datadogIcon from "../../../resources/saas/logging/datadog.png";
import newrelicIcon from "../../../resources/saas/logging/newrelic.png";
import papertrailIcon from "../../../resources/saas/logging/papertrail.png";

class _Logging extends _Saas {
  protected static override _type = "logging";
}

export class Datadog extends _Logging {
  protected static override _iconDataUrl = datadogIcon;
}

export class Newrelic extends _Logging {
  protected static override _iconDataUrl = newrelicIcon;
}

export class Papertrail extends _Logging {
  protected static override _iconDataUrl = papertrailIcon;
}

// Aliases
export const DataDog = Datadog;
export const NewRelic = Newrelic;
