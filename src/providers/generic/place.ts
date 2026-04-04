import { _Generic } from "./index.js";
import datacenterIcon from "../../../resources/generic/place/datacenter.png";

class _Place extends _Generic {
  protected static override _type = "place";
}

export class Datacenter extends _Place {
  protected static override _iconDataUrl = datacenterIcon;
}
