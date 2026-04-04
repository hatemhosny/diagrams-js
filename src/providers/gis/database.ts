import { _Gis } from "./index.js";
import postgisIcon from "../../../resources/gis/database/postgis.png";

class _Database extends _Gis {
  protected static override _type = "database";
}

export class Postgis extends _Database {
  protected static override _iconDataUrl = postgisIcon;
}
