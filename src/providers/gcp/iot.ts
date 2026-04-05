import { _Gcp } from "./index.js";
import iot_coreIcon from "../../../resources/gcp/iot/iot-core.png";

function _Iot(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)._type = "iot";
  return node;
}

export function IotCore(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotCore", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_coreIcon;
  return node;
}
