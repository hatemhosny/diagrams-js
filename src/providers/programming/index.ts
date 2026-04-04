import { Node } from "../../Node.js";

export class _Programming extends Node {
  protected static override _provider = "programming";
  protected static override _iconDir = "programming";
}

export class Programming extends _Programming {
  protected static override _icon = "programming.png";
}
