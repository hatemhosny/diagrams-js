import { _Onprem } from "./index.js";
import fluentdIcon from "../../../resources/onprem/aggregator/fluentd.png";
import vectorIcon from "../../../resources/onprem/aggregator/vector.png";

class _Aggregator extends _Onprem {
  protected static override _type = "aggregator";
}

export class Fluentd extends _Aggregator {
  protected static override _iconDataUrl = fluentdIcon;
}

export class Vector extends _Aggregator {
  protected static override _iconDataUrl = vectorIcon;
}
