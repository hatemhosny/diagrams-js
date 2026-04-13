import { _Onprem } from "./index.js";
import centrifugoIcon from "../../../resources/onprem/messaging/centrifugo.png";

function _Messaging(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "messaging";
  return node;
}

export function Centrifugo(label?: string, options?: Record<string, unknown>) {
  const node = _Messaging(label ?? "Centrifugo", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Centrifugo";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = centrifugoIcon;
  return node;
}
