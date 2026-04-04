import { _Elastic } from "./index.js";
import apmIcon from "../../../resources/elastic/beats/apm.png";
import auditbeatIcon from "../../../resources/elastic/beats/auditbeat.png";
import filebeatIcon from "../../../resources/elastic/beats/filebeat.png";
import functionbeatIcon from "../../../resources/elastic/beats/functionbeat.png";
import heartbeatIcon from "../../../resources/elastic/beats/heartbeat.png";
import metricbeatIcon from "../../../resources/elastic/beats/metricbeat.png";
import packetbeatIcon from "../../../resources/elastic/beats/packetbeat.png";
import winlogbeatIcon from "../../../resources/elastic/beats/winlogbeat.png";

class _Beats extends _Elastic {
  protected static override _type = "beats";
}

export class APM extends _Beats {
  protected static _iconDataUrl = apmIcon;
}

export class Auditbeat extends _Beats {
  protected static _iconDataUrl = auditbeatIcon;
}

export class Filebeat extends _Beats {
  protected static _iconDataUrl = filebeatIcon;
}

export class Functionbeat extends _Beats {
  protected static _iconDataUrl = functionbeatIcon;
}

export class Heartbeat extends _Beats {
  protected static _iconDataUrl = heartbeatIcon;
}

export class Metricbeat extends _Beats {
  protected static _iconDataUrl = metricbeatIcon;
}

export class Packetbeat extends _Beats {
  protected static _iconDataUrl = packetbeatIcon;
}

export class Winlogbeat extends _Beats {
  protected static _iconDataUrl = winlogbeatIcon;
}
