import { _Saas } from "./index.js";
import nextcloudIcon from "../../../resources/saas/filesharing/nextcloud.png";

class _Filesharing extends _Saas {
  protected static override _type = "filesharing";
}

export class Nextcloud extends _Filesharing {
  protected static override _iconDataUrl = nextcloudIcon;
}
