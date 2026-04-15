import { _Generic } from "./index.js";
import mobileIcon from "../../../resources/generic/device/mobile.png";
import tabletIcon from "../../../resources/generic/device/tablet.png";

function _Device(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "device";
  return node;
}

export function Mobile(label?: string, options?: Record<string, unknown>) {
  const node = _Device(label ?? "Mobile", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Mobile";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mobileIcon;
  return node;
}

export function Tablet(label?: string, options?: Record<string, unknown>) {
  const node = _Device(label ?? "Tablet", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Tablet";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tabletIcon;
  return node;
}
