import { _Aws } from "./index.js";
import ground_stationIcon from "../../../resources/aws/satellite/ground-station.png";
import satelliteIcon from "../../../resources/aws/satellite/satellite.png";

function _Satellite(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "satellite";
  return node;
}

export function GroundStation(label?: string, options?: Record<string, unknown>) {
  const node = _Satellite(label ?? "GroundStation", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ground_stationIcon;
  return node;
}

export function Satellite(label?: string, options?: Record<string, unknown>) {
  const node = _Satellite(label ?? "Satellite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = satelliteIcon;
  return node;
}
