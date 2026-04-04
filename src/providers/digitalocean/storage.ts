import { _Digitalocean } from "./index.js";
import folderIcon from "../../../resources/digitalocean/storage/folder.png";
import spaceIcon from "../../../resources/digitalocean/storage/space.png";
import volume_snapshotIcon from "../../../resources/digitalocean/storage/volume-snapshot.png";
import volumeIcon from "../../../resources/digitalocean/storage/volume.png";

class _Storage extends _Digitalocean {
  protected static override _type = "storage";
}

export class Folder extends _Storage {
  protected static override _iconDataUrl = folderIcon;
}

export class Space extends _Storage {
  protected static override _iconDataUrl = spaceIcon;
}

export class VolumeSnapshot extends _Storage {
  protected static override _iconDataUrl = volume_snapshotIcon;
}

export class Volume extends _Storage {
  protected static override _iconDataUrl = volumeIcon;
}
