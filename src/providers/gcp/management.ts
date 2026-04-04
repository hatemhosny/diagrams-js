import { _Gcp } from "./index.js";
import billingIcon from "../../../resources/gcp/management/billing.png";
import projectIcon from "../../../resources/gcp/management/project.png";
import quotasIcon from "../../../resources/gcp/management/quotas.png";
import supportIcon from "../../../resources/gcp/management/support.png";

class _Management extends _Gcp {
  protected static override _type = "management";
}

export class Billing extends _Management {
  protected static _iconDataUrl = billingIcon;
}

export class Project extends _Management {
  protected static _iconDataUrl = projectIcon;
}

export class Quotas extends _Management {
  protected static _iconDataUrl = quotasIcon;
}

export class Support extends _Management {
  protected static _iconDataUrl = supportIcon;
}
