import { _Saas } from "./index.js";
import cloudinaryIcon from "../../../resources/saas/media/cloudinary.png";

class _Media extends _Saas {
  protected static override _type = "media";
}

export class Cloudinary extends _Media {
  protected static override _iconDataUrl = cloudinaryIcon;
}
