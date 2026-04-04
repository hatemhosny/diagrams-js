import { _Aws } from "./index.js";
import appstream_2_0Icon from "../../../resources/aws/enduser/appstream-2-0.png";
import desktop_and_app_streamingIcon from "../../../resources/aws/enduser/desktop-and-app-streaming.png";
import workdocsIcon from "../../../resources/aws/enduser/workdocs.png";
import worklinkIcon from "../../../resources/aws/enduser/worklink.png";
import workspacesIcon from "../../../resources/aws/enduser/workspaces.png";

class _Enduser extends _Aws {
  protected static override _type = "enduser";
}

export class Appstream20 extends _Enduser {
  protected static override _iconDataUrl = appstream_2_0Icon;
}

export class DesktopAndAppStreaming extends _Enduser {
  protected static override _iconDataUrl = desktop_and_app_streamingIcon;
}

export class Workdocs extends _Enduser {
  protected static override _iconDataUrl = workdocsIcon;
}

export class Worklink extends _Enduser {
  protected static override _iconDataUrl = worklinkIcon;
}

export class Workspaces extends _Enduser {
  protected static override _iconDataUrl = workspacesIcon;
}
