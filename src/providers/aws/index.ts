import { Node } from "../../Node.js";

export class _Aws extends Node {
  protected static override _provider = "aws";
  protected static override _iconDir = "aws";
}

export class Aws extends _Aws {
  protected static override _icon = "aws.png";
}
