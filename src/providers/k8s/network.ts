import { _K8s } from "./index.js";
import epIcon from "../../../resources/k8s/network/ep.png";
import ingIcon from "../../../resources/k8s/network/ing.png";
import netpolIcon from "../../../resources/k8s/network/netpol.png";
import svcIcon from "../../../resources/k8s/network/svc.png";

class _Network extends _K8s {
  protected static override _type = "network";
}

export class Ep extends _Network {
  protected static override _iconDataUrl = epIcon;
}

export class Ing extends _Network {
  protected static override _iconDataUrl = ingIcon;
}

export class Netpol extends _Network {
  protected static override _iconDataUrl = netpolIcon;
}

export class SVC extends _Network {
  protected static override _iconDataUrl = svcIcon;
}

// Aliases
export const Endpoint = Ep;
export const Ingress = Ing;
export const NetworkPolicy = Netpol;
export const Service = SVC;
