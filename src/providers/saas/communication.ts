import { _Saas } from "./index.js";
import twilioIcon from "../../../resources/saas/communication/twilio.png";

class _Communication extends _Saas {
  protected static override _type = "communication";
}

export class Twilio extends _Communication {
  protected static override _iconDataUrl = twilioIcon;
}
