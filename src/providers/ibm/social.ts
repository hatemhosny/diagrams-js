import { _Ibm } from "./index.js";
import communitiesIcon from "../../../resources/ibm/social/communities.png";
import file_syncIcon from "../../../resources/ibm/social/file-sync.png";
import live_collaborationIcon from "../../../resources/ibm/social/live-collaboration.png";
import messagingIcon from "../../../resources/ibm/social/messaging.png";
import networkingIcon from "../../../resources/ibm/social/networking.png";

class _Social extends _Ibm {
  protected static override _type = "social";
}

export class Communities extends _Social {
  protected static override _iconDataUrl = communitiesIcon;
}

export class FileSync extends _Social {
  protected static override _iconDataUrl = file_syncIcon;
}

export class LiveCollaboration extends _Social {
  protected static override _iconDataUrl = live_collaborationIcon;
}

export class Messaging extends _Social {
  protected static override _iconDataUrl = messagingIcon;
}

export class Networking extends _Social {
  protected static override _iconDataUrl = networkingIcon;
}
