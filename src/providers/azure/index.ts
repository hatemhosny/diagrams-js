import { Node } from "../../Node.js";

export class _Azure extends Node {
  protected static override _provider = "azure";
  protected static override _iconDir = "azure";
}

export class Azure extends _Azure {
  protected static override _icon = "azure.png";
}
