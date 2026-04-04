import { Node } from "../../Node.js";

export class _Firebase extends Node {
  protected static override _provider = "firebase";
  protected static override _iconDir = "firebase";
}

export class Firebase extends _Firebase {
  protected static override _icon = "firebase.png";
}
