import { _Gis } from "./index.js";
import banIcon from "../../../resources/gis/data/ban.png";
import hereIcon from "../../../resources/gis/data/here.png";
import ignIcon from "../../../resources/gis/data/ign.png";
import openstreetmapIcon from "../../../resources/gis/data/openstreetmap.png";
import overturemapsIcon from "../../../resources/gis/data/overturemaps.png";

class _Data extends _Gis {
  protected static override _type = "data";
}

export class BAN extends _Data {
  protected static override _iconDataUrl = banIcon;
}

export class Here extends _Data {
  protected static override _iconDataUrl = hereIcon;
}

export class IGN extends _Data {
  protected static override _iconDataUrl = ignIcon;
}

export class Openstreetmap extends _Data {
  protected static override _iconDataUrl = openstreetmapIcon;
}

export class Overturemaps extends _Data {
  protected static override _iconDataUrl = overturemapsIcon;
}
