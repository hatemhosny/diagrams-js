import { _Ibm } from "./index.js";
import block_storageIcon from "../../../resources/ibm/storage/block-storage.png";
import object_storageIcon from "../../../resources/ibm/storage/object-storage.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)._type = "storage";
  return node;
}

export function BlockStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "BlockStorage", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = block_storageIcon;
  return node;
}

export function ObjectStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ObjectStorage", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = object_storageIcon;
  return node;
}
