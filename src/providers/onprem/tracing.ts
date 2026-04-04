import { _Onprem } from "./index.js";
import jaegerIcon from "../../../resources/onprem/tracing/jaeger.png";
import tempoIcon from "../../../resources/onprem/tracing/tempo.png";

class _Tracing extends _Onprem {
  protected static override _type = "tracing";
}

export class Jaeger extends _Tracing {
  protected static override _iconDataUrl = jaegerIcon;
}

export class Tempo extends _Tracing {
  protected static override _iconDataUrl = tempoIcon;
}
