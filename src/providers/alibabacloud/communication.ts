import { _Alibabacloud } from "./index.js";
import direct_mailIcon from "../../../resources/alibabacloud/communication/direct-mail.png";
import mobile_pushIcon from "../../../resources/alibabacloud/communication/mobile-push.png";

class _Communication extends _Alibabacloud {
  protected static override _type = "communication";
}

export class DirectMail extends _Communication {
  protected static _iconDataUrl = direct_mailIcon;
}

export class MobilePush extends _Communication {
  protected static _iconDataUrl = mobile_pushIcon;
}
