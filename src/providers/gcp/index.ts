import { Node } from "../../Node.js";

export class _Gcp extends Node {
  protected static override _provider = "gcp";
  protected static override _iconDir = "gcp";
}

export class Gcp extends _Gcp {
  protected static override _icon = "gcp.png";
}
