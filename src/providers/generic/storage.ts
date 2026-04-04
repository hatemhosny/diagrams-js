import { _Generic } from "./index.js";
import storageIcon from "../../../resources/generic/storage/storage.png";

class _Storage extends _Generic {
  protected static override _type = "storage";
}

export class Storage extends _Storage {
  protected static _iconDataUrl = storageIcon;
}
