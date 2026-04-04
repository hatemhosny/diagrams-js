import { Node } from "../../Node.js";

export class _Digitalocean extends Node {
  protected static override _provider = "digitalocean";
  protected static override _iconDir = "digitalocean";
}

export class Digitalocean extends _Digitalocean {
  protected static override _icon = "digitalocean.png";
}
