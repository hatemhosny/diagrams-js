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

class _Monitoring extends _Onprem {
  protected static override _type = "monitoring";
}

export class Cortex extends _Monitoring {
  protected static _iconDataUrl = cortexIcon;
}

export class Datadog extends _Monitoring {
  protected static _iconDataUrl = datadogIcon;
}

export class Dynatrace extends _Monitoring {
  protected static _iconDataUrl = dynatraceIcon;
}

export class Grafana extends _Monitoring {
  protected static _iconDataUrl = grafanaIcon;
}

export class Humio extends _Monitoring {
  protected static _iconDataUrl = humioIcon;
}

export class Mimir extends _Monitoring {
  protected static _iconDataUrl = mimirIcon;
}

export class Nagios extends _Monitoring {
  protected static _iconDataUrl = nagiosIcon;
}

export class Newrelic extends _Monitoring {
  protected static _iconDataUrl = newrelicIcon;
}

export class PrometheusOperator extends _Monitoring {
  protected static _iconDataUrl = prometheus_operatorIcon;
}

export class Prometheus extends _Monitoring {
  protected static _iconDataUrl = prometheusIcon;
}

export class Sentry extends _Monitoring {
  protected static _iconDataUrl = sentryIcon;
}

export class Splunk extends _Monitoring {
  protected static _iconDataUrl = splunkIcon;
}

export class Thanos extends _Monitoring {
  protected static _iconDataUrl = thanosIcon;
}

export class Zabbix extends _Monitoring {
  protected static _iconDataUrl = zabbixIcon;
}
