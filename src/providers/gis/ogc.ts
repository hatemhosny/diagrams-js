import { _Gis } from "./index.js";
import ogcIcon from "../../../resources/gis/ogc/ogc.png";
import wfsIcon from "../../../resources/gis/ogc/wfs.png";
import wmsIcon from "../../../resources/gis/ogc/wms.png";

class _Ogc extends _Gis {
  protected static override _type = "ogc";
}

export class OGC extends _Ogc {
  protected static override _iconDataUrl = ogcIcon;
}

export class WFS extends _Ogc {
  protected static override _iconDataUrl = wfsIcon;
}

export class WMS extends _Ogc {
  protected static override _iconDataUrl = wmsIcon;
}
