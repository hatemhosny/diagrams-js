import { Node } from "../../Node.js";

export class _Gis extends Node {
  protected static override _provider = "gis";
  protected static override _iconDir = "gis";
}

export class Gis extends _Gis {
  protected static override _icon = "gis.png";
}
