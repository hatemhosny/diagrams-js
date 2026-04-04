import { Node } from "../../Node.js";

export class _Alibabacloud extends Node {
  protected static override _provider = "alibabacloud";
  protected static override _iconDir = "alibabacloud";
}

export class Alibabacloud extends _Alibabacloud {
  protected static override _icon = "alibabacloud.png";
}
