import { _Generic } from "./index.js";
import sqlIcon from "../../../resources/generic/database/sql.png";

class _Database extends _Generic {
  protected static override _type = "database";
}

export class SQL extends _Database {
  protected static override _iconDataUrl = sqlIcon;
}
