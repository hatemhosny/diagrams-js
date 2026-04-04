import { _Aws } from "./index.js";
import ground_stationIcon from "../../../resources/aws/satellite/ground-station.png";
import satelliteIcon from "../../../resources/aws/satellite/satellite.png";

class _Satellite extends _Aws {
  protected static override _type = "satellite";
}

export class GroundStation extends _Satellite {
  protected static override _iconDataUrl = ground_stationIcon;
}

export class Satellite extends _Satellite {
  protected static override _iconDataUrl = satelliteIcon;
}
