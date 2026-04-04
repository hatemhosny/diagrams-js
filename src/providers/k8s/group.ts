import { _K8s } from "./index.js";
import nsIcon from "../../../resources/k8s/group/ns.png";

class _Group extends _K8s {
  protected static override _type = "group";
}

export class NS extends _Group {
  protected static _iconDataUrl = nsIcon;
}

// Aliases
export const Namespace = NS;
