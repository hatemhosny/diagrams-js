import { _Saas } from "./index.js";
import newrelicIcon from "../../../resources/saas/alerting/newrelic.png";
import opsgenieIcon from "../../../resources/saas/alerting/opsgenie.png";
import pagerdutyIcon from "../../../resources/saas/alerting/pagerduty.png";
import pushoverIcon from "../../../resources/saas/alerting/pushover.png";
import xmattersIcon from "../../../resources/saas/alerting/xmatters.png";

class _Alerting extends _Saas {
  protected static override _type = "alerting";
}

export class Newrelic extends _Alerting {
  protected static _iconDataUrl = newrelicIcon;
}

export class Opsgenie extends _Alerting {
  protected static _iconDataUrl = opsgenieIcon;
}

export class Pagerduty extends _Alerting {
  protected static _iconDataUrl = pagerdutyIcon;
}

export class Pushover extends _Alerting {
  protected static _iconDataUrl = pushoverIcon;
}

export class Xmatters extends _Alerting {
  protected static _iconDataUrl = xmattersIcon;
}
