import { _Gis } from "./index.js";
import merginIcon from "../../../resources/gis/mobile/mergin.png";
import qfieldIcon from "../../../resources/gis/mobile/qfield.png";
import smashIcon from "../../../resources/gis/mobile/smash.png";

class _Mobile extends _Gis {
  protected static override _type = "mobile";
}

export class Mergin extends _Mobile {
  protected static override _iconDataUrl = merginIcon;
}

export class Qfield extends _Mobile {
  protected static override _iconDataUrl = qfieldIcon;
}

export class Smash extends _Mobile {
  protected static override _iconDataUrl = smashIcon;
}
