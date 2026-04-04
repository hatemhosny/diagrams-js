import { _Onprem } from "./index.js";
import corednsIcon from "../../../resources/onprem/dns/coredns.png";
import powerdnsIcon from "../../../resources/onprem/dns/powerdns.png";

class _Dns extends _Onprem {
  protected static override _type = "dns";
}

export class Coredns extends _Dns {
  protected static _iconDataUrl = corednsIcon;
}

export class Powerdns extends _Dns {
  protected static _iconDataUrl = powerdnsIcon;
}
