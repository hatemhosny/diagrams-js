import { _Saas } from "./index.js";
import newrelicIcon from "../../../resources/saas/alerting/newrelic.png";
import opsgenieIcon from "../../../resources/saas/alerting/opsgenie.png";
import pagerdutyIcon from "../../../resources/saas/alerting/pagerduty.png";
import pushoverIcon from "../../../resources/saas/alerting/pushover.png";
import xmattersIcon from "../../../resources/saas/alerting/xmatters.png";

function _Alerting(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)._type = "alerting";
  return node;
}

export function Newrelic(label?: string, options?: Record<string, unknown>) {
  const node = _Alerting(label ?? "Newrelic", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = newrelicIcon;
  return node;
}

export function Opsgenie(label?: string, options?: Record<string, unknown>) {
  const node = _Alerting(label ?? "Opsgenie", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = opsgenieIcon;
  return node;
}

export function Pagerduty(label?: string, options?: Record<string, unknown>) {
  const node = _Alerting(label ?? "Pagerduty", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = pagerdutyIcon;
  return node;
}

export function Pushover(label?: string, options?: Record<string, unknown>) {
  const node = _Alerting(label ?? "Pushover", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = pushoverIcon;
  return node;
}

export function Xmatters(label?: string, options?: Record<string, unknown>) {
  const node = _Alerting(label ?? "Xmatters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = xmattersIcon;
  return node;
}
