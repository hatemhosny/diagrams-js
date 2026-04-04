import { _Gcp } from "./index.js";
import iot_coreIcon from "../../../resources/gcp/iot/iot-core.png";

class _Iot extends _Gcp {
  protected static override _type = "iot";
}

export class IotCore extends _Iot {
  protected static override _iconDataUrl = iot_coreIcon;
}
