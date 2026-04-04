import { _Outscale } from "./index.js";
import simple_storage_serviceIcon from "../../../resources/outscale/storage/simple-storage-service.png";
import storageIcon from "../../../resources/outscale/storage/storage.png";

class _Storage extends _Outscale {
  protected static override _type = "storage";
}

export class SimpleStorageService extends _Storage {
  protected static _iconDataUrl = simple_storage_serviceIcon;
}

export class Storage extends _Storage {
  protected static _iconDataUrl = storageIcon;
}
