import { Node } from "../../Node.js";

export class _Elastic extends Node {
  protected static override _provider = "elastic";
  protected static override _iconDir = "elastic";
}

export class Elastic extends _Elastic {
  protected static override _icon = "elastic.png";
}
