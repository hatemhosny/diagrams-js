import { _Digitalocean } from "./index.js";
import folderIcon from "../../../resources/digitalocean/storage/folder.png";
import spaceIcon from "../../../resources/digitalocean/storage/space.png";
import volume_snapshotIcon from "../../../resources/digitalocean/storage/volume-snapshot.png";
import volumeIcon from "../../../resources/digitalocean/storage/volume.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Digitalocean(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function Folder(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Folder", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = folderIcon;
  return node;
}

export function Space(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Space", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = spaceIcon;
  return node;
}

export function VolumeSnapshot(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "VolumeSnapshot", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = volume_snapshotIcon;
  return node;
}

export function Volume(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Volume", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = volumeIcon;
  return node;
}
