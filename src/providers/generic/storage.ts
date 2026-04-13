import { _Generic } from "./index.js";
import storageIcon from "../../../resources/generic/storage/storage.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Storage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Storage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storageIcon;
  return node;
}
