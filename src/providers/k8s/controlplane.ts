import { _K8s } from "./index.js";
import apiIcon from "../../../resources/k8s/controlplane/api.png";
import c_c_mIcon from "../../../resources/k8s/controlplane/c-c-m.png";
import c_mIcon from "../../../resources/k8s/controlplane/c-m.png";
import k_proxyIcon from "../../../resources/k8s/controlplane/k-proxy.png";
import kubeletIcon from "../../../resources/k8s/controlplane/kubelet.png";
import schedIcon from "../../../resources/k8s/controlplane/sched.png";

class _Controlplane extends _K8s {
  protected static override _type = "controlplane";
}

export class API extends _Controlplane {
  protected static override _iconDataUrl = apiIcon;
}

export class CCM extends _Controlplane {
  protected static override _iconDataUrl = c_c_mIcon;
}

export class CM extends _Controlplane {
  protected static override _iconDataUrl = c_mIcon;
}

export class KProxy extends _Controlplane {
  protected static override _iconDataUrl = k_proxyIcon;
}

export class Kubelet extends _Controlplane {
  protected static override _iconDataUrl = kubeletIcon;
}

export class Sched extends _Controlplane {
  protected static override _iconDataUrl = schedIcon;
}

// Aliases
export const APIServer = API;
export const ControllerManager = CM;
export const KubeProxy = KProxy;
export const Scheduler = Sched;
