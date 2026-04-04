import { _Generic } from "./index.js";
import blankIcon from "../../../resources/generic/blank/blank.png";

class _Blank extends _Generic {
  protected static override _type = "blank";
}

export class Blank extends _Blank {
  protected static _iconDataUrl = blankIcon;
}
