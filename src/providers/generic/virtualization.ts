import { _Generic } from "./index.js";
import qemuIcon from "../../../resources/generic/virtualization/qemu.png";
import virtualboxIcon from "../../../resources/generic/virtualization/virtualbox.png";
import vmwareIcon from "../../../resources/generic/virtualization/vmware.png";
import xenIcon from "../../../resources/generic/virtualization/xen.png";

class _Virtualization extends _Generic {
  protected static override _type = "virtualization";
}

export class Qemu extends _Virtualization {
  protected static override _iconDataUrl = qemuIcon;
}

export class Virtualbox extends _Virtualization {
  protected static override _iconDataUrl = virtualboxIcon;
}

export class Vmware extends _Virtualization {
  protected static override _iconDataUrl = vmwareIcon;
}

export class XEN extends _Virtualization {
  protected static override _iconDataUrl = xenIcon;
}
