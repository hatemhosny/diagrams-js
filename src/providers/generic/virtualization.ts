import { _Generic } from "./index.js";
import qemuIcon from "../../../resources/generic/virtualization/qemu.png";
import virtualboxIcon from "../../../resources/generic/virtualization/virtualbox.png";
import vmwareIcon from "../../../resources/generic/virtualization/vmware.png";
import xenIcon from "../../../resources/generic/virtualization/xen.png";

function _Virtualization(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "virtualization";
  return node;
}

export function Qemu(label?: string, options?: Record<string, unknown>) {
  const node = _Virtualization(label ?? "Qemu", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Qemu";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = qemuIcon;
  return node;
}

export function Virtualbox(label?: string, options?: Record<string, unknown>) {
  const node = _Virtualization(label ?? "Virtualbox", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Virtualbox";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtualboxIcon;
  return node;
}

export function Vmware(label?: string, options?: Record<string, unknown>) {
  const node = _Virtualization(label ?? "Vmware", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Vmware";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vmwareIcon;
  return node;
}

export function XEN(label?: string, options?: Record<string, unknown>) {
  const node = _Virtualization(label ?? "XEN", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "XEN";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = xenIcon;
  return node;
}
