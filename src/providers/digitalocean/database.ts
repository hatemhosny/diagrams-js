import { _Digitalocean } from "./index.js";
import dbaas_primary_standby_moreIcon from "../../../resources/digitalocean/database/dbaas-primary-standby-more.png";
import dbaas_primaryIcon from "../../../resources/digitalocean/database/dbaas-primary.png";
import dbaas_read_onlyIcon from "../../../resources/digitalocean/database/dbaas-read-only.png";
import dbaas_standbyIcon from "../../../resources/digitalocean/database/dbaas-standby.png";

class _Database extends _Digitalocean {
  protected static override _type = "database";
}

export class DbaasPrimaryStandbyMore extends _Database {
  protected static override _iconDataUrl = dbaas_primary_standby_moreIcon;
}

export class DbaasPrimary extends _Database {
  protected static override _iconDataUrl = dbaas_primaryIcon;
}

export class DbaasReadOnly extends _Database {
  protected static override _iconDataUrl = dbaas_read_onlyIcon;
}

export class DbaasStandby extends _Database {
  protected static override _iconDataUrl = dbaas_standbyIcon;
}
