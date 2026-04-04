import { Node } from "../../Node.js";

export class _Generic extends Node {
  protected static override _provider = "generic";
  protected static override _iconDir = "generic";
}

export class Generic extends _Generic {
  protected static override _icon = "generic.png";
}
