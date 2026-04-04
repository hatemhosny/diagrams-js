import { _Gis } from "./index.js";
import geotoolsIcon from "../../../resources/gis/java/geotools.png";

class _Java extends _Gis {
  protected static override _type = "java";
}

export class Geotools extends _Java {
  protected static _iconDataUrl = geotoolsIcon;
}
