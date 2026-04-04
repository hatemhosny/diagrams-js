import { _Ibm } from "./index.js";
import bare_metal_serverIcon from "../../../resources/ibm/compute/bare-metal-server.png";
import image_serviceIcon from "../../../resources/ibm/compute/image-service.png";
import instanceIcon from "../../../resources/ibm/compute/instance.png";
import keyIcon from "../../../resources/ibm/compute/key.png";
import power_instanceIcon from "../../../resources/ibm/compute/power-instance.png";

class _Compute extends _Ibm {
  protected static override _type = "compute";
}

export class BareMetalServer extends _Compute {
  protected static override _iconDataUrl = bare_metal_serverIcon;
}

export class ImageService extends _Compute {
  protected static override _iconDataUrl = image_serviceIcon;
}

export class Instance extends _Compute {
  protected static override _iconDataUrl = instanceIcon;
}

export class Key extends _Compute {
  protected static override _iconDataUrl = keyIcon;
}

export class PowerInstance extends _Compute {
  protected static override _iconDataUrl = power_instanceIcon;
}
