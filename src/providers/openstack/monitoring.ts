import { _Openstack } from "./index.js";
import monascaIcon from "../../../resources/openstack/monitoring/monasca.png";
import telemetryIcon from "../../../resources/openstack/monitoring/telemetry.png";

class _Monitoring extends _Openstack {
  protected static override _type = "monitoring";
}

export class Monasca extends _Monitoring {
  protected static _iconDataUrl = monascaIcon;
}

export class Telemetry extends _Monitoring {
  protected static _iconDataUrl = telemetryIcon;
}
