import { _Onprem } from "./index.js";
import argocdIcon from "../../../resources/onprem/gitops/argocd.png";
import flaggerIcon from "../../../resources/onprem/gitops/flagger.png";
import fluxIcon from "../../../resources/onprem/gitops/flux.png";

class _Gitops extends _Onprem {
  protected static override _type = "gitops";
}

export class Argocd extends _Gitops {
  protected static _iconDataUrl = argocdIcon;
}

export class Flagger extends _Gitops {
  protected static _iconDataUrl = flaggerIcon;
}

export class Flux extends _Gitops {
  protected static _iconDataUrl = fluxIcon;
}

// Aliases
export const ArgoCD = Argocd;
