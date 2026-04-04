import { _K8s } from "./index.js";
import chaos_meshIcon from "../../../resources/k8s/chaos/chaos-mesh.png";
import litmus_chaosIcon from "../../../resources/k8s/chaos/litmus-chaos.png";

class _Chaos extends _K8s {
  protected static override _type = "chaos";
}

export class ChaosMesh extends _Chaos {
  protected static override _iconDataUrl = chaos_meshIcon;
}

export class LitmusChaos extends _Chaos {
  protected static override _iconDataUrl = litmus_chaosIcon;
}
