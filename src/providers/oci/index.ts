import { Node } from "../../Node.js";

export class _Oci extends Node {
  protected static override _provider = "oci";
  protected static override _iconDir = "oci";
}

export class Oci extends _Oci {
  protected static override _icon = "oci.png";
}
