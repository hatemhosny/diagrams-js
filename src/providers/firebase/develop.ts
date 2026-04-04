import { _Firebase } from "./index.js";
import authenticationIcon from "../../../resources/firebase/develop/authentication.png";
import firestoreIcon from "../../../resources/firebase/develop/firestore.png";
import functionsIcon from "../../../resources/firebase/develop/functions.png";
import hostingIcon from "../../../resources/firebase/develop/hosting.png";
import ml_kitIcon from "../../../resources/firebase/develop/ml-kit.png";
import realtime_databaseIcon from "../../../resources/firebase/develop/realtime-database.png";
import storageIcon from "../../../resources/firebase/develop/storage.png";

class _Develop extends _Firebase {
  protected static override _type = "develop";
}

export class Authentication extends _Develop {
  protected static override _iconDataUrl = authenticationIcon;
}

export class Firestore extends _Develop {
  protected static override _iconDataUrl = firestoreIcon;
}

export class Functions extends _Develop {
  protected static override _iconDataUrl = functionsIcon;
}

export class Hosting extends _Develop {
  protected static override _iconDataUrl = hostingIcon;
}

export class MLKit extends _Develop {
  protected static override _iconDataUrl = ml_kitIcon;
}

export class RealtimeDatabase extends _Develop {
  protected static override _iconDataUrl = realtime_databaseIcon;
}

export class Storage extends _Develop {
  protected static override _iconDataUrl = storageIcon;
}
