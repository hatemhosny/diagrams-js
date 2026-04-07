import { _Gcp } from "./index.js";
import filestoreIcon from "../../../resources/gcp/storage/filestore.png";
import local_ssdIcon from "../../../resources/gcp/storage/local-ssd.png";
import persistent_diskIcon from "../../../resources/gcp/storage/persistent-disk.png";
import storageIcon from "../../../resources/gcp/storage/storage.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function Filestore(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Filestore", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = filestoreIcon;
  return node;
}

export function LocalSSD(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "LocalSSD", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = local_ssdIcon;
  return node;
}

export function PersistentDisk(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "PersistentDisk", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = persistent_diskIcon;
  return node;
}

export function Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Storage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storageIcon;
  return node;
}

// Aliases
export const SSD = LocalSSD;
export const GCS = Storage;
