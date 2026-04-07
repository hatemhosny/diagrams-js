import { _Outscale } from "./index.js";
import simple_storage_serviceIcon from "../../../resources/outscale/storage/simple-storage-service.png";
import storageIcon from "../../../resources/outscale/storage/storage.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Outscale(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function SimpleStorageService(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "SimpleStorageService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = simple_storage_serviceIcon;
  return node;
}

export function Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Storage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storageIcon;
  return node;
}
