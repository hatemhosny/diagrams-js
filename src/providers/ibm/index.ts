import { Node } from "../../Node.js";

export class _Ibm extends Node {
  protected static override _provider = "ibm";
  protected static override _iconDir = "ibm";
}

export class Ibm extends _Ibm {
  protected static override _icon = "ibm.png";
}
