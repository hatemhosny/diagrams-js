import { _Ibm } from "./index.js";
import block_storageIcon from "../../../resources/ibm/storage/block-storage.png";
import object_storageIcon from "../../../resources/ibm/storage/object-storage.png";

class _Storage extends _Ibm {
  protected static override _type = "storage";
}

export class BlockStorage extends _Storage {
  protected static override _iconDataUrl = block_storageIcon;
}

export class ObjectStorage extends _Storage {
  protected static override _iconDataUrl = object_storageIcon;
}
