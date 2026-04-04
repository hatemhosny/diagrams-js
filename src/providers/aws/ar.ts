import { _Aws } from "./index.js";
import ar_vrIcon from "../../../resources/aws/ar/ar-vr.png";
import sumerianIcon from "../../../resources/aws/ar/sumerian.png";

class _Ar extends _Aws {
  protected static override _type = "ar";
}

export class ArVr extends _Ar {
  protected static _iconDataUrl = ar_vrIcon;
}

export class Sumerian extends _Ar {
  protected static _iconDataUrl = sumerianIcon;
}
