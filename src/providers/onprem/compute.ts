import { _Onprem } from "./index.js";
import nomadIcon from "../../../resources/onprem/compute/nomad.png";
import serverIcon from "../../../resources/onprem/compute/server.png";

class _Compute extends _Onprem {
  protected static override _type = "compute";
}

export class Nomad extends _Compute {
  protected static _iconDataUrl = nomadIcon;
}

export class Server extends _Compute {
  protected static _iconDataUrl = serverIcon;
}
