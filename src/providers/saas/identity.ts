import { _Saas } from "./index.js";
import auth0Icon from "../../../resources/saas/identity/auth0.png";
import oktaIcon from "../../../resources/saas/identity/okta.png";

class _Identity extends _Saas {
  protected static override _type = "identity";
}

export class Auth0 extends _Identity {
  protected static override _iconDataUrl = auth0Icon;
}

export class Okta extends _Identity {
  protected static override _iconDataUrl = oktaIcon;
}
