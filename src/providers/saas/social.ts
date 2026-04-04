import { _Saas } from "./index.js";
import facebookIcon from "../../../resources/saas/social/facebook.png";
import twitterIcon from "../../../resources/saas/social/twitter.png";

class _Social extends _Saas {
  protected static override _type = "social";
}

export class Facebook extends _Social {
  protected static override _iconDataUrl = facebookIcon;
}

export class Twitter extends _Social {
  protected static override _iconDataUrl = twitterIcon;
}
