import { _Saas } from "./index.js";
import recombeeIcon from "../../../resources/saas/recommendation/recombee.png";

class _Recommendation extends _Saas {
  protected static override _type = "recommendation";
}

export class Recombee extends _Recommendation {
  protected static _iconDataUrl = recombeeIcon;
}
