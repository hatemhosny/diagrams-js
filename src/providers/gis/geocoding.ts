import { _Gis } from "./index.js";
import addokIcon from "../../../resources/gis/geocoding/addok.png";
import gisgraphyIcon from "../../../resources/gis/geocoding/gisgraphy.png";
import nominatimIcon from "../../../resources/gis/geocoding/nominatim.png";
import peliasIcon from "../../../resources/gis/geocoding/pelias.png";

class _Geocoding extends _Gis {
  protected static override _type = "geocoding";
}

export class Addok extends _Geocoding {
  protected static override _iconDataUrl = addokIcon;
}

export class Gisgraphy extends _Geocoding {
  protected static override _iconDataUrl = gisgraphyIcon;
}

export class Nominatim extends _Geocoding {
  protected static override _iconDataUrl = nominatimIcon;
}

export class Pelias extends _Geocoding {
  protected static override _iconDataUrl = peliasIcon;
}
