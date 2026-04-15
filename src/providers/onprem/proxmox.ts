import { _Onprem } from "./index.js";
import pveIcon from "../../../resources/onprem/proxmox/pve.png";

function _Proxmox(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "proxmox";
  return node;
}

export function Pve(label?: string, options?: Record<string, unknown>) {
  const node = _Proxmox(label ?? "Pve", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Pve";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pveIcon;
  return node;
}

// Aliases
export const ProxmoxVE = Pve;
