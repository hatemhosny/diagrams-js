import { _K8s } from "./index.js";
import cmIcon from "../../../resources/k8s/podconfig/cm.png";
import secretIcon from "../../../resources/k8s/podconfig/secret.png";

class _Podconfig extends _K8s {
  protected static override _type = "podconfig";
}

export class CM extends _Podconfig {
  protected static _iconDataUrl = cmIcon;
}

export class Secret extends _Podconfig {
  protected static _iconDataUrl = secretIcon;
}

// Aliases
export const ConfigMap = CM;
