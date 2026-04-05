import { _Alibabacloud } from "./index.js";
import iot_internet_device_idIcon from "../../../resources/alibabacloud/iot/iot-internet-device-id.png";
import iot_link_wanIcon from "../../../resources/alibabacloud/iot/iot-link-wan.png";
import iot_mobile_connection_packageIcon from "../../../resources/alibabacloud/iot/iot-mobile-connection-package.png";
import iot_platformIcon from "../../../resources/alibabacloud/iot/iot-platform.png";

function _Iot(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)._type = "iot";
  return node;
}

export function IotInternetDeviceId(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotInternetDeviceId", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_internet_device_idIcon;
  return node;
}

export function IotLinkWan(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotLinkWan", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_link_wanIcon;
  return node;
}

export function IotMobileConnectionPackage(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotMobileConnectionPackage", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_mobile_connection_packageIcon;
  return node;
}

export function IotPlatform(label?: string, options?: Record<string, unknown>) {
  const node = _Iot(label ?? "IotPlatform", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iot_platformIcon;
  return node;
}
