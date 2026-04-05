import { _Onprem } from "./index.js";
import containerdIcon from "../../../resources/onprem/container/containerd.png";
import crioIcon from "../../../resources/onprem/container/crio.png";
import dockerIcon from "../../../resources/onprem/container/docker.png";
import firecrackerIcon from "../../../resources/onprem/container/firecracker.png";
import gvisorIcon from "../../../resources/onprem/container/gvisor.png";
import k3sIcon from "../../../resources/onprem/container/k3s.png";
import lxcIcon from "../../../resources/onprem/container/lxc.png";
import rktIcon from "../../../resources/onprem/container/rkt.png";

function _Container(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "container";
  return node;
}

export function Containerd(label?: string, options?: Record<string, unknown>) {
  const node = _Container(label ?? "Containerd", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = containerdIcon;
  return node;
}

export function Crio(label?: string, options?: Record<string, unknown>) {
  const node = _Container(label ?? "Crio", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = crioIcon;
  return node;
}

export function Docker(label?: string, options?: Record<string, unknown>) {
  const node = _Container(label ?? "Docker", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = dockerIcon;
  return node;
}

export function Firecracker(label?: string, options?: Record<string, unknown>) {
  const node = _Container(label ?? "Firecracker", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = firecrackerIcon;
  return node;
}

export function Gvisor(label?: string, options?: Record<string, unknown>) {
  const node = _Container(label ?? "Gvisor", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = gvisorIcon;
  return node;
}

export function K3s(label?: string, options?: Record<string, unknown>) {
  const node = _Container(label ?? "K3s", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = k3sIcon;
  return node;
}

export function Lxc(label?: string, options?: Record<string, unknown>) {
  const node = _Container(label ?? "Lxc", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = lxcIcon;
  return node;
}

export function Rkt(label?: string, options?: Record<string, unknown>) {
  const node = _Container(label ?? "Rkt", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = rktIcon;
  return node;
}

// Aliases
export const LXC = Lxc;
export const RKT = Rkt;
