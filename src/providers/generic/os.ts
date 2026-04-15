import { _Generic } from "./index.js";
import androidIcon from "../../../resources/generic/os/android.png";
import centosIcon from "../../../resources/generic/os/centos.png";
import debianIcon from "../../../resources/generic/os/debian.png";
import iosIcon from "../../../resources/generic/os/ios.png";
import linux_generalIcon from "../../../resources/generic/os/linux-general.png";
import raspbianIcon from "../../../resources/generic/os/raspbian.png";
import red_hatIcon from "../../../resources/generic/os/red-hat.png";
import suseIcon from "../../../resources/generic/os/suse.png";
import ubuntuIcon from "../../../resources/generic/os/ubuntu.png";
import windowsIcon from "../../../resources/generic/os/windows.png";

function _Os(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "os";
  return node;
}

export function Android(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "Android", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Android";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = androidIcon;
  return node;
}

export function Centos(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "Centos", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Centos";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = centosIcon;
  return node;
}

export function Debian(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "Debian", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Debian";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = debianIcon;
  return node;
}

export function IOS(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "IOS", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IOS";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = iosIcon;
  return node;
}

export function LinuxGeneral(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "LinuxGeneral", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LinuxGeneral";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = linux_generalIcon;
  return node;
}

export function Raspbian(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "Raspbian", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Raspbian";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = raspbianIcon;
  return node;
}

export function RedHat(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "RedHat", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RedHat";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = red_hatIcon;
  return node;
}

export function Suse(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "Suse", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Suse";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = suseIcon;
  return node;
}

export function Ubuntu(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "Ubuntu", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Ubuntu";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ubuntuIcon;
  return node;
}

export function Windows(label?: string, options?: Record<string, unknown>) {
  const node = _Os(label ?? "Windows", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Windows";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = windowsIcon;
  return node;
}
