import { _Gis } from "./index.js";
import geopandasIcon from "../../../resources/gis/python/geopandas.png";
import pysalIcon from "../../../resources/gis/python/pysal.png";

class _Python extends _Gis {
  protected static override _type = "python";
}

export class Geopandas extends _Python {
  protected static _iconDataUrl = geopandasIcon;
}

export class Pysal extends _Python {
  protected static _iconDataUrl = pysalIcon;
}
