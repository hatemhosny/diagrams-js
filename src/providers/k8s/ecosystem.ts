import { _K8s } from "./index.js";
import external_dnsIcon from "../../../resources/k8s/ecosystem/external-dns.png";
import helmIcon from "../../../resources/k8s/ecosystem/helm.png";
import krewIcon from "../../../resources/k8s/ecosystem/krew.png";
import kustomizeIcon from "../../../resources/k8s/ecosystem/kustomize.png";

class _Ecosystem extends _K8s {
  protected static override _type = "ecosystem";
}

export class ExternalDns extends _Ecosystem {
  protected static override _iconDataUrl = external_dnsIcon;
}

export class Helm extends _Ecosystem {
  protected static override _iconDataUrl = helmIcon;
}

export class Krew extends _Ecosystem {
  protected static override _iconDataUrl = krewIcon;
}

export class Kustomize extends _Ecosystem {
  protected static override _iconDataUrl = kustomizeIcon;
}
