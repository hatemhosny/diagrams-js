import { _K8s } from "./index.js";
import crdIcon from "../../../resources/k8s/others/crd.png";
import pspIcon from "../../../resources/k8s/others/psp.png";

class _Others extends _K8s {
  protected static override _type = "others";
}

export class CRD extends _Others {
  protected static override _iconDataUrl = crdIcon;
}

export class PSP extends _Others {
  protected static override _iconDataUrl = pspIcon;
}
