import { _Gis } from "./index.js";
import maptunikIcon from "../../../resources/gis/desktop/maptunik.png";
import qgisIcon from "../../../resources/gis/desktop/qgis.png";

class _Desktop extends _Gis {
  protected static override _type = "desktop";
}

export class Maptunik extends _Desktop {
  protected static override _iconDataUrl = maptunikIcon;
}

export class QGIS extends _Desktop {
  protected static override _iconDataUrl = qgisIcon;
}
