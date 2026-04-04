import { _Gis } from "./index.js";
import osgeoIcon from "../../../resources/gis/organization/osgeo.png";

class _Organization extends _Gis {
  protected static override _type = "organization";
}

export class Osgeo extends _Organization {
  protected static _iconDataUrl = osgeoIcon;
}
