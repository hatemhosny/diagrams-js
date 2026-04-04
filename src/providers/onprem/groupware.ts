import { _Onprem } from "./index.js";
import nextcloudIcon from "../../../resources/onprem/groupware/nextcloud.png";

class _Groupware extends _Onprem {
  protected static override _type = "groupware";
}

export class Nextcloud extends _Groupware {
  protected static _iconDataUrl = nextcloudIcon;
}
