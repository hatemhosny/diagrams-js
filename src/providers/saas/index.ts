import { Node } from "../../Node.js";

export class _Saas extends Node {
  protected static override _provider = "saas";
  protected static override _iconDir = "saas";
}

export class Saas extends _Saas {
  protected static override _icon = "saas.png";
}
