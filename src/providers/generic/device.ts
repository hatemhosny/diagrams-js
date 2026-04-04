import { _Generic } from "./index.js";
import mobileIcon from "../../../resources/generic/device/mobile.png";
import tabletIcon from "../../../resources/generic/device/tablet.png";

class _Device extends _Generic {
  protected static override _type = "device";
}

export class Mobile extends _Device {
  protected static _iconDataUrl = mobileIcon;
}

export class Tablet extends _Device {
  protected static _iconDataUrl = tabletIcon;
}
