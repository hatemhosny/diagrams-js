import { _Saas } from "./index.js";
import cloudinaryIcon from "../../../resources/saas/media/cloudinary.png";

function _Media(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "media";
  return node;
}

export function Cloudinary(label?: string, options?: Record<string, unknown>) {
  const node = _Media(label ?? "Cloudinary", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cloudinary";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudinaryIcon;
  return node;
}
