import { _Elastic } from "./index.js";
import apmIcon from "../../../resources/elastic/observability/apm.png";
import logsIcon from "../../../resources/elastic/observability/logs.png";
import metricsIcon from "../../../resources/elastic/observability/metrics.png";
import observabilityIcon from "../../../resources/elastic/observability/observability.png";
import uptimeIcon from "../../../resources/elastic/observability/uptime.png";

class _Observability extends _Elastic {
  protected static override _type = "observability";
}

export class APM extends _Observability {
  protected static override _iconDataUrl = apmIcon;
}

export class Logs extends _Observability {
  protected static override _iconDataUrl = logsIcon;
}

export class Metrics extends _Observability {
  protected static override _iconDataUrl = metricsIcon;
}

export class Observability extends _Observability {
  protected static override _iconDataUrl = observabilityIcon;
}

export class Uptime extends _Observability {
  protected static override _iconDataUrl = uptimeIcon;
}
