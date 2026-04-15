import { _Onprem } from "./index.js";
import airflowIcon from "../../../resources/onprem/workflow/airflow.png";
import digdagIcon from "../../../resources/onprem/workflow/digdag.png";
import kubeflowIcon from "../../../resources/onprem/workflow/kubeflow.png";
import nifiIcon from "../../../resources/onprem/workflow/nifi.png";

function _Workflow(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "workflow";
  return node;
}

export function Airflow(label?: string, options?: Record<string, unknown>) {
  const node = _Workflow(label ?? "Airflow", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Airflow";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = airflowIcon;
  return node;
}

export function Digdag(label?: string, options?: Record<string, unknown>) {
  const node = _Workflow(label ?? "Digdag", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Digdag";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = digdagIcon;
  return node;
}

export function Kubeflow(label?: string, options?: Record<string, unknown>) {
  const node = _Workflow(label ?? "Kubeflow", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Kubeflow";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kubeflowIcon;
  return node;
}

export function Nifi(label?: string, options?: Record<string, unknown>) {
  const node = _Workflow(label ?? "Nifi", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Nifi";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nifiIcon;
  return node;
}

// Aliases
export const KubeFlow = Kubeflow;
export const NiFi = Nifi;
