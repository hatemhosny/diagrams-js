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

class _Elasticsearch extends _Elastic {
  protected static override _type = "elasticsearch";
}

export class Alerting extends _Elasticsearch {
  protected static _iconDataUrl = alertingIcon;
}

export class Beats extends _Elasticsearch {
  protected static _iconDataUrl = beatsIcon;
}

export class Elasticsearch extends _Elasticsearch {
  protected static _iconDataUrl = elasticsearchIcon;
}

export class Kibana extends _Elasticsearch {
  protected static _iconDataUrl = kibanaIcon;
}

export class LogstashPipeline extends _Elasticsearch {
  protected static _iconDataUrl = logstash_pipelineIcon;
}

export class Logstash extends _Elasticsearch {
  protected static _iconDataUrl = logstashIcon;
}

export class MachineLearning extends _Elasticsearch {
  protected static _iconDataUrl = machine_learningIcon;
}

export class MapServices extends _Elasticsearch {
  protected static _iconDataUrl = map_servicesIcon;
}

export class Maps extends _Elasticsearch {
  protected static _iconDataUrl = mapsIcon;
}

export class Monitoring extends _Elasticsearch {
  protected static _iconDataUrl = monitoringIcon;
}

export class SearchableSnapshots extends _Elasticsearch {
  protected static _iconDataUrl = searchable_snapshotsIcon;
}

export class SecuritySettings extends _Elasticsearch {
  protected static _iconDataUrl = security_settingsIcon;
}

export class SQL extends _Elasticsearch {
  protected static _iconDataUrl = sqlIcon;
}

export class Stack extends _Elasticsearch {
  protected static _iconDataUrl = stackIcon;
}

// Aliases
export const ElasticSearch = Elasticsearch;
export const LogStash = Logstash;
export const ML = MachineLearning;
