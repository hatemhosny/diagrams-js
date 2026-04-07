import { _Onprem } from "./index.js";
import fluentbitIcon from "../../../resources/onprem/logging/fluentbit.png";
import graylogIcon from "../../../resources/onprem/logging/graylog.png";
import lokiIcon from "../../../resources/onprem/logging/loki.png";
import rsyslogIcon from "../../../resources/onprem/logging/rsyslog.png";
import syslog_ngIcon from "../../../resources/onprem/logging/syslog-ng.png";

function _Logging(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "logging";
  return node;
}

export function Fluentbit(label?: string, options?: Record<string, unknown>) {
  const node = _Logging(label ?? "Fluentbit", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fluentbitIcon;
  return node;
}

export function Graylog(label?: string, options?: Record<string, unknown>) {
  const node = _Logging(label ?? "Graylog", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = graylogIcon;
  return node;
}

export function Loki(label?: string, options?: Record<string, unknown>) {
  const node = _Logging(label ?? "Loki", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lokiIcon;
  return node;
}

export function Rsyslog(label?: string, options?: Record<string, unknown>) {
  const node = _Logging(label ?? "Rsyslog", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rsyslogIcon;
  return node;
}

export function SyslogNg(label?: string, options?: Record<string, unknown>) {
  const node = _Logging(label ?? "SyslogNg", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = syslog_ngIcon;
  return node;
}

// Aliases
export const FluentBit = Fluentbit;
export const RSyslog = Rsyslog;
