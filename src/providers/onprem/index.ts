import { Node } from "../../Node.js";

export class _Onprem extends Node {
  protected static override _provider = "onprem";
  protected static override _iconDir = "onprem";
}

export class Onprem extends _Onprem {
  protected static override _icon = "onprem.png";
}
