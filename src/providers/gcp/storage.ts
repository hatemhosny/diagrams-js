import { _Gcp } from "./index.js";
import filestoreIcon from "../../../resources/gcp/storage/filestore.png";
import local_ssdIcon from "../../../resources/gcp/storage/local-ssd.png";
import persistent_diskIcon from "../../../resources/gcp/storage/persistent-disk.png";
import storageIcon from "../../../resources/gcp/storage/storage.png";

class _Storage extends _Gcp {
  protected static override _type = "storage";
}

export class Filestore extends _Storage {
  protected static override _iconDataUrl = filestoreIcon;
}

export class LocalSSD extends _Storage {
  protected static override _iconDataUrl = local_ssdIcon;
}

export class PersistentDisk extends _Storage {
  protected static override _iconDataUrl = persistent_diskIcon;
}

export class Storage extends _Storage {
  protected static override _iconDataUrl = storageIcon;
}

// Aliases
export const SSD = LocalSSD;
export const GCS = Storage;
