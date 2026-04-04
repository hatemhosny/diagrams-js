import { _Gis } from "./index.js";
import graphhopperIcon from "../../../resources/gis/routing/graphhopper.png";
import osrmIcon from "../../../resources/gis/routing/osrm.png";
import pgroutingIcon from "../../../resources/gis/routing/pgrouting.png";
import valhallaIcon from "../../../resources/gis/routing/valhalla.png";

class _Routing extends _Gis {
  protected static override _type = "routing";
}

export class Graphhopper extends _Routing {
  protected static _iconDataUrl = graphhopperIcon;
}

export class Osrm extends _Routing {
  protected static _iconDataUrl = osrmIcon;
}

export class Pgrouting extends _Routing {
  protected static _iconDataUrl = pgroutingIcon;
}

export class Valhalla extends _Routing {
  protected static _iconDataUrl = valhallaIcon;
}
