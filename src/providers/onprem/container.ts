import { _Onprem } from "./index.js";
import containerdIcon from "../../../resources/onprem/container/containerd.png";
import crioIcon from "../../../resources/onprem/container/crio.png";
import dockerIcon from "../../../resources/onprem/container/docker.png";
import firecrackerIcon from "../../../resources/onprem/container/firecracker.png";
import gvisorIcon from "../../../resources/onprem/container/gvisor.png";
import k3sIcon from "../../../resources/onprem/container/k3s.png";
import lxcIcon from "../../../resources/onprem/container/lxc.png";
import rktIcon from "../../../resources/onprem/container/rkt.png";

class _Container extends _Onprem {
  protected static override _type = "container";
}

export class Containerd extends _Container {
  protected static _iconDataUrl = containerdIcon;
}

export class Crio extends _Container {
  protected static _iconDataUrl = crioIcon;
}

export class Docker extends _Container {
  protected static _iconDataUrl = dockerIcon;
}

export class Firecracker extends _Container {
  protected static _iconDataUrl = firecrackerIcon;
}

export class Gvisor extends _Container {
  protected static _iconDataUrl = gvisorIcon;
}

export class K3s extends _Container {
  protected static _iconDataUrl = k3sIcon;
}

export class Lxc extends _Container {
  protected static _iconDataUrl = lxcIcon;
}

export class Rkt extends _Container {
  protected static _iconDataUrl = rktIcon;
}

// Aliases
export const LXC = Lxc;
export const RKT = Rkt;
