import { _Gis } from "./index.js";
import merginIcon from "../../../resources/gis/mobile/mergin.png";
import qfieldIcon from "../../../resources/gis/mobile/qfield.png";
import smashIcon from "../../../resources/gis/mobile/smash.png";

function _Mobile(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "mobile";
  return node;
}

export function Mergin(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "Mergin", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Mergin";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = merginIcon;
  return node;
}

export function Qfield(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "Qfield", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Qfield";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = qfieldIcon;
  return node;
}

export function Smash(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "Smash", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Smash";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = smashIcon;
  return node;
}
