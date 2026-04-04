import { _Saas } from "./index.js";
import crowdstrikeIcon from "../../../resources/saas/security/crowdstrike.png";
import sonarqubeIcon from "../../../resources/saas/security/sonarqube.png";

class _Security extends _Saas {
  protected static override _type = "security";
}

export class Crowdstrike extends _Security {
  protected static _iconDataUrl = crowdstrikeIcon;
}

export class Sonarqube extends _Security {
  protected static _iconDataUrl = sonarqubeIcon;
}
