import { _Gis } from "./index.js";
import gdalIcon from "../../../resources/gis/cli/gdal.png";
import imposmIcon from "../../../resources/gis/cli/imposm.png";
import lastoolsIcon from "../../../resources/gis/cli/lastools.png";
import mapnikIcon from "../../../resources/gis/cli/mapnik.png";
import mdalIcon from "../../../resources/gis/cli/mdal.png";
import pdalIcon from "../../../resources/gis/cli/pdal.png";

class _Cli extends _Gis {
  protected static override _type = "cli";
}

export class Gdal extends _Cli {
  protected static _iconDataUrl = gdalIcon;
}

export class Imposm extends _Cli {
  protected static _iconDataUrl = imposmIcon;
}

export class Lastools extends _Cli {
  protected static _iconDataUrl = lastoolsIcon;
}

export class Mapnik extends _Cli {
  protected static _iconDataUrl = mapnikIcon;
}

export class Mdal extends _Cli {
  protected static _iconDataUrl = mdalIcon;
}

export class Pdal extends _Cli {
  protected static _iconDataUrl = pdalIcon;
}
