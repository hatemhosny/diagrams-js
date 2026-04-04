import { _Firebase } from "./index.js";
import ab_testingIcon from "../../../resources/firebase/grow/ab-testing.png";
import app_indexingIcon from "../../../resources/firebase/grow/app-indexing.png";
import dynamic_linksIcon from "../../../resources/firebase/grow/dynamic-links.png";
import in_app_messagingIcon from "../../../resources/firebase/grow/in-app-messaging.png";
import invitesIcon from "../../../resources/firebase/grow/invites.png";
import messagingIcon from "../../../resources/firebase/grow/messaging.png";
import predictionsIcon from "../../../resources/firebase/grow/predictions.png";
import remote_configIcon from "../../../resources/firebase/grow/remote-config.png";

class _Grow extends _Firebase {
  protected static override _type = "grow";
}

export class ABTesting extends _Grow {
  protected static override _iconDataUrl = ab_testingIcon;
}

export class AppIndexing extends _Grow {
  protected static override _iconDataUrl = app_indexingIcon;
}

export class DynamicLinks extends _Grow {
  protected static override _iconDataUrl = dynamic_linksIcon;
}

export class InAppMessaging extends _Grow {
  protected static override _iconDataUrl = in_app_messagingIcon;
}

export class Invites extends _Grow {
  protected static override _iconDataUrl = invitesIcon;
}

export class Messaging extends _Grow {
  protected static override _iconDataUrl = messagingIcon;
}

export class Predictions extends _Grow {
  protected static override _iconDataUrl = predictionsIcon;
}

export class RemoteConfig extends _Grow {
  protected static override _iconDataUrl = remote_configIcon;
}

// Aliases
export const FCM = Messaging;
