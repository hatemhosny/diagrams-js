import { _Elastic } from "./index.js";
import endpointIcon from "../../../resources/elastic/security/endpoint.png";
import securityIcon from "../../../resources/elastic/security/security.png";
import siemIcon from "../../../resources/elastic/security/siem.png";
import xdrIcon from "../../../resources/elastic/security/xdr.png";

class _Security extends _Elastic {
  protected static override _type = "security";
}

export class Endpoint extends _Security {
  protected static override _iconDataUrl = endpointIcon;
}

export class Security extends _Security {
  protected static override _iconDataUrl = securityIcon;
}

export class SIEM extends _Security {
  protected static override _iconDataUrl = siemIcon;
}

export class Xdr extends _Security {
  protected static override _iconDataUrl = xdrIcon;
}
