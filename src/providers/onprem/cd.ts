import { _Onprem } from "./index.js";
import spinnakerIcon from "../../../resources/onprem/cd/spinnaker.png";
import tekton_cliIcon from "../../../resources/onprem/cd/tekton-cli.png";
import tektonIcon from "../../../resources/onprem/cd/tekton.png";

class _Cd extends _Onprem {
  protected static override _type = "cd";
}

export class Spinnaker extends _Cd {
  protected static override _iconDataUrl = spinnakerIcon;
}

export class TektonCli extends _Cd {
  protected static override _iconDataUrl = tekton_cliIcon;
}

export class Tekton extends _Cd {
  protected static override _iconDataUrl = tektonIcon;
}
