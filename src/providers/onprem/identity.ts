import { _Onprem } from "./index.js";
import dexIcon from "../../../resources/onprem/identity/dex.png";

class _Identity extends _Onprem {
  protected static override _type = "identity";
}

export class Dex extends _Identity {
  protected static override _iconDataUrl = dexIcon;
}
