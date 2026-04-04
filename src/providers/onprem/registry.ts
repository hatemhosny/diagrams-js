import { _Onprem } from "./index.js";
import harborIcon from "../../../resources/onprem/registry/harbor.png";
import jfrogIcon from "../../../resources/onprem/registry/jfrog.png";

class _Registry extends _Onprem {
  protected static override _type = "registry";
}

export class Harbor extends _Registry {
  protected static _iconDataUrl = harborIcon;
}

export class Jfrog extends _Registry {
  protected static _iconDataUrl = jfrogIcon;
}
