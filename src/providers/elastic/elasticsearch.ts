import { _Elastic } from "./index.js";
import alertingIcon from "../../../resources/elastic/elasticsearch/alerting.png";
import beatsIcon from "../../../resources/elastic/elasticsearch/beats.png";
import elasticsearchIcon from "../../../resources/elastic/elasticsearch/elasticsearch.png";
import kibanaIcon from "../../../resources/elastic/elasticsearch/kibana.png";
import logstash_pipelineIcon from "../../../resources/elastic/elasticsearch/logstash-pipeline.png";
import logstashIcon from "../../../resources/elastic/elasticsearch/logstash.png";
import machine_learningIcon from "../../../resources/elastic/elasticsearch/machine-learning.png";
import map_servicesIcon from "../../../resources/elastic/elasticsearch/map-services.png";
import mapsIcon from "../../../resources/elastic/elasticsearch/maps.png";
import monitoringIcon from "../../../resources/elastic/elasticsearch/monitoring.png";
import searchable_snapshotsIcon from "../../../resources/elastic/elasticsearch/searchable-snapshots.png";
import security_settingsIcon from "../../../resources/elastic/elasticsearch/security-settings.png";
import sqlIcon from "../../../resources/elastic/elasticsearch/sql.png";
import stackIcon from "../../../resources/elastic/elasticsearch/stack.png";

function _Elasticsearch(label?: string, options?: Record<string, unknown>) {
  const node = _Elastic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "elasticsearch";
  return node;
}

export function Alerting(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "Alerting", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Alerting";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = alertingIcon;
  return node;
}

export function Beats(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "Beats", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Beats";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = beatsIcon;
  return node;
}

export function Elasticsearch(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "Elasticsearch", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Elasticsearch";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elasticsearchIcon;
  return node;
}

export function Kibana(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "Kibana", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Kibana";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kibanaIcon;
  return node;
}

export function LogstashPipeline(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "LogstashPipeline", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LogstashPipeline";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = logstash_pipelineIcon;
  return node;
}

export function Logstash(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "Logstash", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Logstash";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = logstashIcon;
  return node;
}

export function MachineLearning(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "MachineLearning", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MachineLearning";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = machine_learningIcon;
  return node;
}

export function MapServices(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "MapServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MapServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = map_servicesIcon;
  return node;
}

export function Maps(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "Maps", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Maps";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mapsIcon;
  return node;
}

export function Monitoring(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "Monitoring", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Monitoring";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = monitoringIcon;
  return node;
}

export function SearchableSnapshots(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "SearchableSnapshots", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SearchableSnapshots";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = searchable_snapshotsIcon;
  return node;
}

export function SecuritySettings(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "SecuritySettings", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SecuritySettings";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = security_settingsIcon;
  return node;
}

export function SQL(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "SQL", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SQL";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sqlIcon;
  return node;
}

export function Stack(label?: string, options?: Record<string, unknown>) {
  const node = _Elasticsearch(label ?? "Stack", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Stack";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = stackIcon;
  return node;
}

// Aliases
export const ElasticSearch = Elasticsearch;
export const LogStash = Logstash;
export const ML = MachineLearning;
