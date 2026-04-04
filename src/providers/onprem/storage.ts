import { _Onprem } from "./index.js";
import ceph_osdIcon from "../../../resources/onprem/storage/ceph-osd.png";
import cephIcon from "../../../resources/onprem/storage/ceph.png";
import glusterfsIcon from "../../../resources/onprem/storage/glusterfs.png";
import portworxIcon from "../../../resources/onprem/storage/portworx.png";

class _Storage extends _Onprem {
  protected static override _type = "storage";
}

export class CephOsd extends _Storage {
  protected static override _iconDataUrl = ceph_osdIcon;
}

export class Ceph extends _Storage {
  protected static override _iconDataUrl = cephIcon;
}

export class Glusterfs extends _Storage {
  protected static override _iconDataUrl = glusterfsIcon;
}

export class Portworx extends _Storage {
  protected static override _iconDataUrl = portworxIcon;
}

// Aliases
export const CEPH = Ceph;
export const CEPH_OSD = CephOsd;
