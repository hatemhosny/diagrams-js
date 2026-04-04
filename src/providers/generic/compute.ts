import { _Generic } from "./index.js";
import rackIcon from "../../../resources/generic/compute/rack.png";

class _Compute extends _Generic {
  protected static override _type = "compute";
}

export class Rack extends _Compute {
  protected static override _iconDataUrl = rackIcon;
}
