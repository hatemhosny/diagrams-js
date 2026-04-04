import { _Alibabacloud } from "./index.js";
import dnsIcon from "../../../resources/alibabacloud/web/dns.png";
import domainIcon from "../../../resources/alibabacloud/web/domain.png";

class _Web extends _Alibabacloud {
  protected static override _type = "web";
}

export class Dns extends _Web {
  protected static _iconDataUrl = dnsIcon;
}

export class Domain extends _Web {
  protected static _iconDataUrl = domainIcon;
}
