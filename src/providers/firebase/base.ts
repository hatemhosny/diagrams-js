import { _Firebase } from "./index.js";
import firebaseIcon from "../../../resources/firebase/base/firebase.png";

class _Base extends _Firebase {
  protected static override _type = "base";
}

export class Firebase extends _Base {
  protected static override _iconDataUrl = firebaseIcon;
}
