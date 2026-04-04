import { _Saas } from "./index.js";
import akamaiIcon from "../../../resources/saas/cdn/akamai.png";
import cloudflareIcon from "../../../resources/saas/cdn/cloudflare.png";
import fastlyIcon from "../../../resources/saas/cdn/fastly.png";
import impervaIcon from "../../../resources/saas/cdn/imperva.png";

class _Cdn extends _Saas {
  protected static override _type = "cdn";
}

export class Akamai extends _Cdn {
  protected static _iconDataUrl = akamaiIcon;
}

export class Cloudflare extends _Cdn {
  protected static _iconDataUrl = cloudflareIcon;
}

export class Fastly extends _Cdn {
  protected static _iconDataUrl = fastlyIcon;
}

export class Imperva extends _Cdn {
  protected static _iconDataUrl = impervaIcon;
}
