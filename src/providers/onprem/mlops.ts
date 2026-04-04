import { _Onprem } from "./index.js";
import mlflowIcon from "../../../resources/onprem/mlops/mlflow.png";
import polyaxonIcon from "../../../resources/onprem/mlops/polyaxon.png";

class _Mlops extends _Onprem {
  protected static override _type = "mlops";
}

export class Mlflow extends _Mlops {
  protected static _iconDataUrl = mlflowIcon;
}

export class Polyaxon extends _Mlops {
  protected static _iconDataUrl = polyaxonIcon;
}
