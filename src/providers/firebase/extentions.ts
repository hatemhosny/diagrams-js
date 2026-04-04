import { _Firebase } from "./index.js";
import extensionsIcon from "../../../resources/firebase/extentions/extensions.png";

class _Extentions extends _Firebase {
  protected static override _type = "extentions";
}

export class Extensions extends _Extentions {
  protected static override _iconDataUrl = extensionsIcon;
}
