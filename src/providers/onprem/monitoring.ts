import { _Onprem } from "./index.js";
import cortexIcon from "../../../resources/onprem/monitoring/cortex.png";
import datadogIcon from "../../../resources/onprem/monitoring/datadog.png";
import dynatraceIcon from "../../../resources/onprem/monitoring/dynatrace.png";
import grafanaIcon from "../../../resources/onprem/monitoring/grafana.png";
import humioIcon from "../../../resources/onprem/monitoring/humio.png";
import mimirIcon from "../../../resources/onprem/monitoring/mimir.png";
import nagiosIcon from "../../../resources/onprem/monitoring/nagios.png";
import newrelicIcon from "../../../resources/onprem/monitoring/newrelic.png";
import prometheus_operatorIcon from "../../../resources/onprem/monitoring/prometheus-operator.png";
import prometheusIcon from "../../../resources/onprem/monitoring/prometheus.png";
import sentryIcon from "../../../resources/onprem/monitoring/sentry.png";
import splunkIcon from "../../../resources/onprem/monitoring/splunk.png";
import thanosIcon from "../../../resources/onprem/monitoring/thanos.png";
import zabbixIcon from "../../../resources/onprem/monitoring/zabbix.png";

function _Monitoring(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "monitoring";
  return node;
}

export function Cortex(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Cortex", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cortexIcon;
  return node;
}

export function Datadog(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Datadog", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = datadogIcon;
  return node;
}

export function Dynatrace(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Dynatrace", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = dynatraceIcon;
  return node;
}

export function Grafana(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Grafana", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = grafanaIcon;
  return node;
}

export function Humio(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Humio", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = humioIcon;
  return node;
}

export function Mimir(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Mimir", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mimirIcon;
  return node;
}

export function Nagios(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Nagios", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = nagiosIcon;
  return node;
}

export function Newrelic(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Newrelic", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = newrelicIcon;
  return node;
}

export function PrometheusOperator(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "PrometheusOperator", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = prometheus_operatorIcon;
  return node;
}

export function Prometheus(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Prometheus", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = prometheusIcon;
  return node;
}

export function Sentry(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Sentry", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sentryIcon;
  return node;
}

export function Splunk(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Splunk", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = splunkIcon;
  return node;
}

export function Thanos(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Thanos", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = thanosIcon;
  return node;
}

export function Zabbix(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Zabbix", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = zabbixIcon;
  return node;
}
