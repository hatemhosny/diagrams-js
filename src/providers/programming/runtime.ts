import { _Programming } from "./index.js";
import daprIcon from "../../../resources/programming/runtime/dapr.png";

class _Runtime extends _Programming {
  protected static override _type = "runtime";
}

export class Dapr extends _Runtime {
  protected static override _iconDataUrl = daprIcon;
}
