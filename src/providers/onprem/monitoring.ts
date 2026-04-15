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
  (node as unknown as Record<string, unknown>)["~type"] = "monitoring";
  return node;
}

export function Cortex(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Cortex", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cortex";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cortexIcon;
  return node;
}

export function Datadog(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Datadog", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Datadog";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = datadogIcon;
  return node;
}

export function Dynatrace(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Dynatrace", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Dynatrace";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynatraceIcon;
  return node;
}

export function Grafana(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Grafana", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Grafana";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = grafanaIcon;
  return node;
}

export function Humio(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Humio", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Humio";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = humioIcon;
  return node;
}

export function Mimir(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Mimir", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Mimir";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mimirIcon;
  return node;
}

export function Nagios(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Nagios", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Nagios";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nagiosIcon;
  return node;
}

export function Newrelic(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Newrelic", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Newrelic";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = newrelicIcon;
  return node;
}

export function PrometheusOperator(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "PrometheusOperator", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PrometheusOperator";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = prometheus_operatorIcon;
  return node;
}

export function Prometheus(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Prometheus", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Prometheus";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = prometheusIcon;
  return node;
}

export function Sentry(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Sentry", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Sentry";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sentryIcon;
  return node;
}

export function Splunk(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Splunk", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Splunk";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = splunkIcon;
  return node;
}

export function Thanos(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Thanos", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Thanos";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = thanosIcon;
  return node;
}

export function Zabbix(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Zabbix", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Zabbix";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = zabbixIcon;
  return node;
}
