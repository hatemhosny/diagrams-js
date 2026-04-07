import { _Azure } from "./index.js";
import app_servicesIcon from "../../../resources/azure/containers/app-services.png";
import azure_red_hat_openshiftIcon from "../../../resources/azure/containers/azure-red-hat-openshift.png";
import batch_accountsIcon from "../../../resources/azure/containers/batch-accounts.png";
import container_instancesIcon from "../../../resources/azure/containers/container-instances.png";
import container_registriesIcon from "../../../resources/azure/containers/container-registries.png";
import kubernetes_servicesIcon from "../../../resources/azure/containers/kubernetes-services.png";
import service_fabric_clustersIcon from "../../../resources/azure/containers/service-fabric-clusters.png";

function _Containers(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "containers";
  return node;
}

export function AppServices(label?: string, options?: Record<string, unknown>) {
  const node = _Containers(label ?? "AppServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_servicesIcon;
  return node;
}

export function AzureRedHatOpenshift(label?: string, options?: Record<string, unknown>) {
  const node = _Containers(label ?? "AzureRedHatOpenshift", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_red_hat_openshiftIcon;
  return node;
}

export function BatchAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Containers(label ?? "BatchAccounts", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = batch_accountsIcon;
  return node;
}

export function ContainerInstances(label?: string, options?: Record<string, unknown>) {
  const node = _Containers(label ?? "ContainerInstances", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_instancesIcon;
  return node;
}

export function ContainerRegistries(label?: string, options?: Record<string, unknown>) {
  const node = _Containers(label ?? "ContainerRegistries", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_registriesIcon;
  return node;
}

export function KubernetesServices(label?: string, options?: Record<string, unknown>) {
  const node = _Containers(label ?? "KubernetesServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kubernetes_servicesIcon;
  return node;
}

export function ServiceFabricClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Containers(label ?? "ServiceFabricClusters", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_fabric_clustersIcon;
  return node;
}
