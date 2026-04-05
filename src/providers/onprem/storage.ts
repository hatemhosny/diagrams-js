import { _Onprem } from "./index.js";
import ceph_osdIcon from "../../../resources/onprem/storage/ceph-osd.png";
import cephIcon from "../../../resources/onprem/storage/ceph.png";
import glusterfsIcon from "../../../resources/onprem/storage/glusterfs.png";
import portworxIcon from "../../../resources/onprem/storage/portworx.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "storage";
  return node;
}

export function CephOsd(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "CephOsd", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ceph_osdIcon;
  return node;
}

export function Ceph(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Ceph", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cephIcon;
  return node;
}

export function Glusterfs(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Glusterfs", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = glusterfsIcon;
  return node;
}

export function Portworx(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Portworx", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = portworxIcon;
  return node;
}

// Aliases
export const CEPH = Ceph;
export const CEPH_OSD = CephOsd;
