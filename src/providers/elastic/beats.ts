import { _Elastic } from "./index.js";
import apmIcon from "../../../resources/elastic/beats/apm.png";
import auditbeatIcon from "../../../resources/elastic/beats/auditbeat.png";
import filebeatIcon from "../../../resources/elastic/beats/filebeat.png";
import functionbeatIcon from "../../../resources/elastic/beats/functionbeat.png";
import heartbeatIcon from "../../../resources/elastic/beats/heartbeat.png";
import metricbeatIcon from "../../../resources/elastic/beats/metricbeat.png";
import packetbeatIcon from "../../../resources/elastic/beats/packetbeat.png";
import winlogbeatIcon from "../../../resources/elastic/beats/winlogbeat.png";

function _Beats(label?: string, options?: Record<string, unknown>) {
  const node = _Elastic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "beats";
  return node;
}

export function APM(label?: string, options?: Record<string, unknown>) {
  const node = _Beats(label ?? "APM", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = apmIcon;
  return node;
}

export function Auditbeat(label?: string, options?: Record<string, unknown>) {
  const node = _Beats(label ?? "Auditbeat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = auditbeatIcon;
  return node;
}

export function Filebeat(label?: string, options?: Record<string, unknown>) {
  const node = _Beats(label ?? "Filebeat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = filebeatIcon;
  return node;
}

export function Functionbeat(label?: string, options?: Record<string, unknown>) {
  const node = _Beats(label ?? "Functionbeat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = functionbeatIcon;
  return node;
}

export function Heartbeat(label?: string, options?: Record<string, unknown>) {
  const node = _Beats(label ?? "Heartbeat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = heartbeatIcon;
  return node;
}

export function Metricbeat(label?: string, options?: Record<string, unknown>) {
  const node = _Beats(label ?? "Metricbeat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = metricbeatIcon;
  return node;
}

export function Packetbeat(label?: string, options?: Record<string, unknown>) {
  const node = _Beats(label ?? "Packetbeat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = packetbeatIcon;
  return node;
}

export function Winlogbeat(label?: string, options?: Record<string, unknown>) {
  const node = _Beats(label ?? "Winlogbeat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = winlogbeatIcon;
  return node;
}
