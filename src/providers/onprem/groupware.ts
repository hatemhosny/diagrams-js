import { _Onprem } from "./index.js";
import nextcloudIcon from "../../../resources/onprem/groupware/nextcloud.png";

function _Groupware(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "groupware";
  return node;
}

export function Nextcloud(label?: string, options?: Record<string, unknown>) {
  const node = _Groupware(label ?? "Nextcloud", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = nextcloudIcon;
  return node;
}
