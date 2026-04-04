import { _Onprem } from "./index.js";
import embulkIcon from "../../../resources/onprem/etl/embulk.png";

class _Etl extends _Onprem {
  protected static override _type = "etl";
}

export class Embulk extends _Etl {
  protected static override _iconDataUrl = embulkIcon;
}
