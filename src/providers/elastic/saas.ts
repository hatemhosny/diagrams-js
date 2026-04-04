import { _Elastic } from "./index.js";
import cloudIcon from "../../../resources/elastic/saas/cloud.png";
import elasticIcon from "../../../resources/elastic/saas/elastic.png";

class _Saas extends _Elastic {
  protected static override _type = "saas";
}

export class Cloud extends _Saas {
  protected static override _iconDataUrl = cloudIcon;
}

export class Elastic extends _Saas {
  protected static override _iconDataUrl = elasticIcon;
}
