import { _Onprem } from "./index.js";
import pveIcon from "../../../resources/onprem/proxmox/pve.png";

class _Proxmox extends _Onprem {
  protected static override _type = "proxmox";
}

export class Pve extends _Proxmox {
  protected static override _iconDataUrl = pveIcon;
}

// Aliases
export const ProxmoxVE = Pve;
