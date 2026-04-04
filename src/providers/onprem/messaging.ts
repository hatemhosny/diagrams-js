import { _Onprem } from "./index.js";
import centrifugoIcon from "../../../resources/onprem/messaging/centrifugo.png";

class _Messaging extends _Onprem {
  protected static override _type = "messaging";
}

export class Centrifugo extends _Messaging {
  protected static override _iconDataUrl = centrifugoIcon;
}
