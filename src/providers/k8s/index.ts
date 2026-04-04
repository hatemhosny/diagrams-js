import { Node } from "../../Node.js";

export class _K8s extends Node {
  protected static override _provider = "k8s";
  protected static override _iconDir = "k8s";
}

export class K8s extends _K8s {
  protected static override _icon = "k8s.png";
}
