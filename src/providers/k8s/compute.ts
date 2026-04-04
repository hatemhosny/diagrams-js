import { _K8s } from "./index.js";
import cronjobIcon from "../../../resources/k8s/compute/cronjob.png";
import deployIcon from "../../../resources/k8s/compute/deploy.png";
import dsIcon from "../../../resources/k8s/compute/ds.png";
import jobIcon from "../../../resources/k8s/compute/job.png";
import podIcon from "../../../resources/k8s/compute/pod.png";
import rsIcon from "../../../resources/k8s/compute/rs.png";
import stsIcon from "../../../resources/k8s/compute/sts.png";

class _Compute extends _K8s {
  protected static override _type = "compute";
}

export class Cronjob extends _Compute {
  protected static override _iconDataUrl = cronjobIcon;
}

export class Deploy extends _Compute {
  protected static override _iconDataUrl = deployIcon;
}

export class DS extends _Compute {
  protected static override _iconDataUrl = dsIcon;
}

export class Job extends _Compute {
  protected static override _iconDataUrl = jobIcon;
}

export class Pod extends _Compute {
  protected static override _iconDataUrl = podIcon;
}

export class RS extends _Compute {
  protected static override _iconDataUrl = rsIcon;
}

export class STS extends _Compute {
  protected static override _iconDataUrl = stsIcon;
}

// Aliases
export const Deployment = Deploy;
export const DaemonSet = DS;
export const ReplicaSet = RS;
export const StatefulSet = STS;
