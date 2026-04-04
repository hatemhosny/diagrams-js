import { _Saas } from "./index.js";
import intercomIcon from "../../../resources/saas/crm/intercom.png";
import zendeskIcon from "../../../resources/saas/crm/zendesk.png";

class _Crm extends _Saas {
  protected static override _type = "crm";
}

export class Intercom extends _Crm {
  protected static _iconDataUrl = intercomIcon;
}

export class Zendesk extends _Crm {
  protected static _iconDataUrl = zendeskIcon;
}
