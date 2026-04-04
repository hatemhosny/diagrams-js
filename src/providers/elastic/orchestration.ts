import { _Elastic } from "./index.js";
import eceIcon from "../../../resources/elastic/orchestration/ece.png";
import eckIcon from "../../../resources/elastic/orchestration/eck.png";

class _Orchestration extends _Elastic {
  protected static override _type = "orchestration";
}

export class ECE extends _Orchestration {
  protected static override _iconDataUrl = eceIcon;
}

export class ECK extends _Orchestration {
  protected static override _iconDataUrl = eckIcon;
}
