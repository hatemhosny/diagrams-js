import { _Azure } from "./index.js";
import app_servicesIcon from "../../../resources/azure/containers/app-services.png";
import azure_red_hat_openshiftIcon from "../../../resources/azure/containers/azure-red-hat-openshift.png";
import batch_accountsIcon from "../../../resources/azure/containers/batch-accounts.png";
import container_instancesIcon from "../../../resources/azure/containers/container-instances.png";
import container_registriesIcon from "../../../resources/azure/containers/container-registries.png";
import kubernetes_servicesIcon from "../../../resources/azure/containers/kubernetes-services.png";
import service_fabric_clustersIcon from "../../../resources/azure/containers/service-fabric-clusters.png";

class _Containers extends _Azure {
  protected static override _type = "containers";
}

export class AppServices extends _Containers {
  protected static _iconDataUrl = app_servicesIcon;
}

export class AzureRedHatOpenshift extends _Containers {
  protected static _iconDataUrl = azure_red_hat_openshiftIcon;
}

export class BatchAccounts extends _Containers {
  protected static _iconDataUrl = batch_accountsIcon;
}

export class ContainerInstances extends _Containers {
  protected static _iconDataUrl = container_instancesIcon;
}

export class ContainerRegistries extends _Containers {
  protected static _iconDataUrl = container_registriesIcon;
}

export class KubernetesServices extends _Containers {
  protected static _iconDataUrl = kubernetes_servicesIcon;
}

export class ServiceFabricClusters extends _Containers {
  protected static _iconDataUrl = service_fabric_clustersIcon;
}
