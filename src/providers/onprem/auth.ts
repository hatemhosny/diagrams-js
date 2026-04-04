import { _Onprem } from "./index.js";
import boundaryIcon from "../../../resources/onprem/auth/boundary.png";
import buzzfeed_ssoIcon from "../../../resources/onprem/auth/buzzfeed-sso.png";
import oauth2_proxyIcon from "../../../resources/onprem/auth/oauth2-proxy.png";

class _Auth extends _Onprem {
  protected static override _type = "auth";
}

export class Boundary extends _Auth {
  protected static override _iconDataUrl = boundaryIcon;
}

export class BuzzfeedSso extends _Auth {
  protected static override _iconDataUrl = buzzfeed_ssoIcon;
}

export class Oauth2Proxy extends _Auth {
  protected static override _iconDataUrl = oauth2_proxyIcon;
}
