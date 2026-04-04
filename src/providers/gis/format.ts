import { _Gis } from "./index.js";
import geopackageIcon from "../../../resources/gis/format/geopackage.png";
import geoparquetIcon from "../../../resources/gis/format/geoparquet.png";

class _Format extends _Gis {
  protected static override _type = "format";
}

export class Geopackage extends _Format {
  protected static _iconDataUrl = geopackageIcon;
}

export class Geoparquet extends _Format {
  protected static _iconDataUrl = geoparquetIcon;
}
