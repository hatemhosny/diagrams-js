import { _Saas } from "./index.js";
import n8nIcon from "../../../resources/saas/automation/n8n.png";

class _Automation extends _Saas {
  protected static override _type = "automation";
}

export class N8n extends _Automation {
  protected static override _iconDataUrl = n8nIcon;
}
