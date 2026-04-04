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

class _Os extends _Generic {
  protected static override _type = "os";
}

export class Android extends _Os {
  protected static override _iconDataUrl = androidIcon;
}

export class Centos extends _Os {
  protected static override _iconDataUrl = centosIcon;
}

export class Debian extends _Os {
  protected static override _iconDataUrl = debianIcon;
}

export class IOS extends _Os {
  protected static override _iconDataUrl = iosIcon;
}

export class LinuxGeneral extends _Os {
  protected static override _iconDataUrl = linux_generalIcon;
}

export class Raspbian extends _Os {
  protected static override _iconDataUrl = raspbianIcon;
}

export class RedHat extends _Os {
  protected static override _iconDataUrl = red_hatIcon;
}

export class Suse extends _Os {
  protected static override _iconDataUrl = suseIcon;
}

export class Ubuntu extends _Os {
  protected static override _iconDataUrl = ubuntuIcon;
}

export class Windows extends _Os {
  protected static override _iconDataUrl = windowsIcon;
}
