import { Node } from "../../Node.js";

export class _Outscale extends Node {
  protected static override _provider = "outscale";
  protected static override _iconDir = "outscale";
}

export class Outscale extends _Outscale {
  protected static override _icon = "outscale.png";
}
