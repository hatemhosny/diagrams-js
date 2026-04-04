import { _Gis } from "./index.js";
import cesiumIcon from "../../../resources/gis/javascript/cesium.png";
import geostylerIcon from "../../../resources/gis/javascript/geostyler.png";
import keplerjsIcon from "../../../resources/gis/javascript/keplerjs.png";
import leafletIcon from "../../../resources/gis/javascript/leaflet.png";
import maplibreIcon from "../../../resources/gis/javascript/maplibre.png";
import ol_extIcon from "../../../resources/gis/javascript/ol-ext.png";
import openlayersIcon from "../../../resources/gis/javascript/openlayers.png";
import turfjsIcon from "../../../resources/gis/javascript/turfjs.png";

class _Javascript extends _Gis {
  protected static override _type = "javascript";
}

export class Cesium extends _Javascript {
  protected static override _iconDataUrl = cesiumIcon;
}

export class Geostyler extends _Javascript {
  protected static override _iconDataUrl = geostylerIcon;
}

export class Keplerjs extends _Javascript {
  protected static override _iconDataUrl = keplerjsIcon;
}

export class Leaflet extends _Javascript {
  protected static override _iconDataUrl = leafletIcon;
}

export class Maplibre extends _Javascript {
  protected static override _iconDataUrl = maplibreIcon;
}

export class OlExt extends _Javascript {
  protected static override _iconDataUrl = ol_extIcon;
}

export class Openlayers extends _Javascript {
  protected static override _iconDataUrl = openlayersIcon;
}

export class Turfjs extends _Javascript {
  protected static override _iconDataUrl = turfjsIcon;
}
