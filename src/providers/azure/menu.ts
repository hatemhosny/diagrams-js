import { _Azure } from "./index.js";
import keysIcon from "../../../resources/azure/menu/keys.png";

class _Menu extends _Azure {
  protected static override _type = "menu";
}

export class Keys extends _Menu {
  protected static override _iconDataUrl = keysIcon;
}
