import { _Onprem } from "./index.js";
import fluentbitIcon from "../../../resources/onprem/logging/fluentbit.png";
import graylogIcon from "../../../resources/onprem/logging/graylog.png";
import lokiIcon from "../../../resources/onprem/logging/loki.png";
import rsyslogIcon from "../../../resources/onprem/logging/rsyslog.png";
import syslog_ngIcon from "../../../resources/onprem/logging/syslog-ng.png";

class _Logging extends _Onprem {
  protected static override _type = "logging";
}

export class Fluentbit extends _Logging {
  protected static _iconDataUrl = fluentbitIcon;
}

export class Graylog extends _Logging {
  protected static _iconDataUrl = graylogIcon;
}

export class Loki extends _Logging {
  protected static _iconDataUrl = lokiIcon;
}

export class Rsyslog extends _Logging {
  protected static _iconDataUrl = rsyslogIcon;
}

export class SyslogNg extends _Logging {
  protected static _iconDataUrl = syslog_ngIcon;
}

// Aliases
export const FluentBit = Fluentbit;
export const RSyslog = Rsyslog;
