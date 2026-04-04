import { _Onprem } from "./index.js";
import airflowIcon from "../../../resources/onprem/workflow/airflow.png";
import digdagIcon from "../../../resources/onprem/workflow/digdag.png";
import kubeflowIcon from "../../../resources/onprem/workflow/kubeflow.png";
import nifiIcon from "../../../resources/onprem/workflow/nifi.png";

class _Workflow extends _Onprem {
  protected static override _type = "workflow";
}

export class Airflow extends _Workflow {
  protected static override _iconDataUrl = airflowIcon;
}

export class Digdag extends _Workflow {
  protected static override _iconDataUrl = digdagIcon;
}

export class Kubeflow extends _Workflow {
  protected static override _iconDataUrl = kubeflowIcon;
}

export class Nifi extends _Workflow {
  protected static override _iconDataUrl = nifiIcon;
}

// Aliases
export const KubeFlow = Kubeflow;
export const NiFi = Nifi;
