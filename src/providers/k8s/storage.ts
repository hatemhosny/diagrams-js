import { _K8s } from "./index.js";
import pvIcon from "../../../resources/k8s/storage/pv.png";
import pvcIcon from "../../../resources/k8s/storage/pvc.png";
import scIcon from "../../../resources/k8s/storage/sc.png";
import volIcon from "../../../resources/k8s/storage/vol.png";

class _Storage extends _K8s {
  protected static override _type = "storage";
}

export class PV extends _Storage {
  protected static override _iconDataUrl = pvIcon;
}

export class PVC extends _Storage {
  protected static override _iconDataUrl = pvcIcon;
}

export class SC extends _Storage {
  protected static override _iconDataUrl = scIcon;
}

export class Vol extends _Storage {
  protected static override _iconDataUrl = volIcon;
}

// Aliases
export const PersistentVolume = PV;
export const PersistentVolumeClaim = PVC;
export const StorageClass = SC;
export const Volume = Vol;
