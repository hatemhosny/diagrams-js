import { _Saas } from "./index.js";
import nextcloudIcon from "../../../resources/saas/filesharing/nextcloud.png";

function _Filesharing(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)._type = "filesharing";
  return node;
}

export function Nextcloud(label?: string, options?: Record<string, unknown>) {
  const node = _Filesharing(label ?? "Nextcloud", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = nextcloudIcon;
  return node;
}
