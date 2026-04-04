import { _Alibabacloud } from "./index.js";
import iot_internet_device_idIcon from "../../../resources/alibabacloud/iot/iot-internet-device-id.png";
import iot_link_wanIcon from "../../../resources/alibabacloud/iot/iot-link-wan.png";
import iot_mobile_connection_packageIcon from "../../../resources/alibabacloud/iot/iot-mobile-connection-package.png";
import iot_platformIcon from "../../../resources/alibabacloud/iot/iot-platform.png";

class _Iot extends _Alibabacloud {
  protected static override _type = "iot";
}

export class IotInternetDeviceId extends _Iot {
  protected static _iconDataUrl = iot_internet_device_idIcon;
}

export class IotLinkWan extends _Iot {
  protected static _iconDataUrl = iot_link_wanIcon;
}

export class IotMobileConnectionPackage extends _Iot {
  protected static _iconDataUrl = iot_mobile_connection_packageIcon;
}

export class IotPlatform extends _Iot {
  protected static _iconDataUrl = iot_platformIcon;
}
