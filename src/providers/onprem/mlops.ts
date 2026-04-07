import { _Onprem } from "./index.js";
import mlflowIcon from "../../../resources/onprem/mlops/mlflow.png";
import polyaxonIcon from "../../../resources/onprem/mlops/polyaxon.png";

function _Mlops(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "mlops";
  return node;
}

export function Mlflow(label?: string, options?: Record<string, unknown>) {
  const node = _Mlops(label ?? "Mlflow", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mlflowIcon;
  return node;
}

export function Polyaxon(label?: string, options?: Record<string, unknown>) {
  const node = _Mlops(label ?? "Polyaxon", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = polyaxonIcon;
  return node;
}
