import { _K8s } from "./index.js";
import hpaIcon from "../../../resources/k8s/clusterconfig/hpa.png";
import limitsIcon from "../../../resources/k8s/clusterconfig/limits.png";
import quotaIcon from "../../../resources/k8s/clusterconfig/quota.png";

class _Clusterconfig extends _K8s {
  protected static override _type = "clusterconfig";
}

export class HPA extends _Clusterconfig {
  protected static _iconDataUrl = hpaIcon;
}

export class Limits extends _Clusterconfig {
  protected static _iconDataUrl = limitsIcon;
}

export class Quota extends _Clusterconfig {
  protected static _iconDataUrl = quotaIcon;
}

// Aliases
export const LimitRange = Limits;
export const HorizontalPodAutoscaler = HPA;
