import { _Alibabacloud } from "./index.js";
import direct_mailIcon from "../../../resources/alibabacloud/communication/direct-mail.png";
import mobile_pushIcon from "../../../resources/alibabacloud/communication/mobile-push.png";

function _Communication(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "communication";
  return node;
}

export function DirectMail(label?: string, options?: Record<string, unknown>) {
  const node = _Communication(label ?? "DirectMail", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DirectMail";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = direct_mailIcon;
  return node;
}

export function MobilePush(label?: string, options?: Record<string, unknown>) {
  const node = _Communication(label ?? "MobilePush", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MobilePush";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mobile_pushIcon;
  return node;
}
