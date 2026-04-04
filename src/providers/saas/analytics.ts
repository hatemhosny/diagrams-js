import { _Saas } from "./index.js";
import dataformIcon from "../../../resources/saas/analytics/dataform.png";
import snowflakeIcon from "../../../resources/saas/analytics/snowflake.png";
import stitchIcon from "../../../resources/saas/analytics/stitch.png";

class _Analytics extends _Saas {
  protected static override _type = "analytics";
}

export class Dataform extends _Analytics {
  protected static _iconDataUrl = dataformIcon;
}

export class Snowflake extends _Analytics {
  protected static _iconDataUrl = snowflakeIcon;
}

export class Stitch extends _Analytics {
  protected static _iconDataUrl = stitchIcon;
}
