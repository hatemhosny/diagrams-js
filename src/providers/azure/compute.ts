import { _Azure } from "./index.js";
import app_servicesIcon from "../../../resources/azure/compute/app-services.png";
import application_groupIcon from "../../../resources/azure/compute/application-group.png";
import automanaged_vmIcon from "../../../resources/azure/compute/automanaged-vm.png";
import availability_setsIcon from "../../../resources/azure/compute/availability-sets.png";
import azure_compute_galleriesIcon from "../../../resources/azure/compute/azure-compute-galleries.png";
import azure_spring_appsIcon from "../../../resources/azure/compute/azure-spring-apps.png";
import batch_accountsIcon from "../../../resources/azure/compute/batch-accounts.png";
import citrix_virtual_desktops_essentialsIcon from "../../../resources/azure/compute/citrix-virtual-desktops-essentials.png";
import cloud_services_classicIcon from "../../../resources/azure/compute/cloud-services-classic.png";
import cloud_servicesIcon from "../../../resources/azure/compute/cloud-services.png";
import cloudsimple_virtual_machinesIcon from "../../../resources/azure/compute/cloudsimple-virtual-machines.png";
import container_appsIcon from "../../../resources/azure/compute/container-apps.png";
import container_instancesIcon from "../../../resources/azure/compute/container-instances.png";
import container_registriesIcon from "../../../resources/azure/compute/container-registries.png";
import container_services_deprecatedIcon from "../../../resources/azure/compute/container-services-deprecated.png";
import disk_encryption_setsIcon from "../../../resources/azure/compute/disk-encryption-sets.png";
import disk_snapshotsIcon from "../../../resources/azure/compute/disk-snapshots.png";
import disks_classicIcon from "../../../resources/azure/compute/disks-classic.png";
import disks_snapshotsIcon from "../../../resources/azure/compute/disks-snapshots.png";
import disksIcon from "../../../resources/azure/compute/disks.png";
import function_appsIcon from "../../../resources/azure/compute/function-apps.png";
import host_groupsIcon from "../../../resources/azure/compute/host-groups.png";
import host_poolsIcon from "../../../resources/azure/compute/host-pools.png";
import hostsIcon from "../../../resources/azure/compute/hosts.png";
import image_definitionsIcon from "../../../resources/azure/compute/image-definitions.png";
import image_templatesIcon from "../../../resources/azure/compute/image-templates.png";
import image_versionsIcon from "../../../resources/azure/compute/image-versions.png";
import imagesIcon from "../../../resources/azure/compute/images.png";
import kubernetes_servicesIcon from "../../../resources/azure/compute/kubernetes-services.png";
import maintenance_configurationIcon from "../../../resources/azure/compute/maintenance-configuration.png";
import managed_service_fabricIcon from "../../../resources/azure/compute/managed-service-fabric.png";
import mesh_applicationsIcon from "../../../resources/azure/compute/mesh-applications.png";
import metrics_advisorIcon from "../../../resources/azure/compute/metrics-advisor.png";
import os_images_classicIcon from "../../../resources/azure/compute/os-images-classic.png";
import os_imagesIcon from "../../../resources/azure/compute/os-images.png";
import restore_points_collectionsIcon from "../../../resources/azure/compute/restore-points-collections.png";
import restore_pointsIcon from "../../../resources/azure/compute/restore-points.png";
import sap_hana_on_azureIcon from "../../../resources/azure/compute/sap-hana-on-azure.png";
import service_fabric_clustersIcon from "../../../resources/azure/compute/service-fabric-clusters.png";
import shared_image_galleriesIcon from "../../../resources/azure/compute/shared-image-galleries.png";
import spring_cloudIcon from "../../../resources/azure/compute/spring-cloud.png";
import virtual_machineIcon from "../../../resources/azure/compute/virtual-machine.png";
import virtual_machines_classicIcon from "../../../resources/azure/compute/virtual-machines-classic.png";
import vm_classicIcon from "../../../resources/azure/compute/vm-classic.png";
import vm_images_classicIcon from "../../../resources/azure/compute/vm-images-classic.png";
import vm_imagesIcon from "../../../resources/azure/compute/vm-images.png";
import vm_linuxIcon from "../../../resources/azure/compute/vm-linux.png";
import vm_scale_setIcon from "../../../resources/azure/compute/vm-scale-set.png";
import vm_scale_setsIcon from "../../../resources/azure/compute/vm-scale-sets.png";
import vm_windowsIcon from "../../../resources/azure/compute/vm-windows.png";
import vmIcon from "../../../resources/azure/compute/vm.png";
import workspaces_2Icon from "../../../resources/azure/compute/workspaces-2.png";
import workspacesIcon from "../../../resources/azure/compute/workspaces.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "compute";
  return node;
}

export function AppServices(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "AppServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_servicesIcon;
  return node;
}

export function ApplicationGroup(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ApplicationGroup", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = application_groupIcon;
  return node;
}

export function AutomanagedVM(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "AutomanagedVM", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = automanaged_vmIcon;
  return node;
}

export function AvailabilitySets(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "AvailabilitySets", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = availability_setsIcon;
  return node;
}

export function AzureComputeGalleries(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "AzureComputeGalleries", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_compute_galleriesIcon;
  return node;
}

export function AzureSpringApps(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "AzureSpringApps", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_spring_appsIcon;
  return node;
}

export function BatchAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "BatchAccounts", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = batch_accountsIcon;
  return node;
}

export function CitrixVirtualDesktopsEssentials(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "CitrixVirtualDesktopsEssentials", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    citrix_virtual_desktops_essentialsIcon;
  return node;
}

export function CloudServicesClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "CloudServicesClassic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_services_classicIcon;
  return node;
}

export function CloudServices(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "CloudServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_servicesIcon;
  return node;
}

export function CloudsimpleVirtualMachines(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "CloudsimpleVirtualMachines", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudsimple_virtual_machinesIcon;
  return node;
}

export function ContainerApps(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ContainerApps", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_appsIcon;
  return node;
}

export function ContainerInstances(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ContainerInstances", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_instancesIcon;
  return node;
}

export function ContainerRegistries(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ContainerRegistries", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_registriesIcon;
  return node;
}

export function ContainerServicesDeprecated(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ContainerServicesDeprecated", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_services_deprecatedIcon;
  return node;
}

export function DiskEncryptionSets(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "DiskEncryptionSets", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = disk_encryption_setsIcon;
  return node;
}

export function DiskSnapshots(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "DiskSnapshots", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = disk_snapshotsIcon;
  return node;
}

export function DisksClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "DisksClassic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = disks_classicIcon;
  return node;
}

export function DisksSnapshots(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "DisksSnapshots", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = disks_snapshotsIcon;
  return node;
}

export function Disks(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Disks", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = disksIcon;
  return node;
}

export function FunctionApps(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "FunctionApps", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = function_appsIcon;
  return node;
}

export function HostGroups(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "HostGroups", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = host_groupsIcon;
  return node;
}

export function HostPools(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "HostPools", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = host_poolsIcon;
  return node;
}

export function Hosts(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Hosts", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hostsIcon;
  return node;
}

export function ImageDefinitions(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ImageDefinitions", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = image_definitionsIcon;
  return node;
}

export function ImageTemplates(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ImageTemplates", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = image_templatesIcon;
  return node;
}

export function ImageVersions(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ImageVersions", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = image_versionsIcon;
  return node;
}

export function Images(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Images", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = imagesIcon;
  return node;
}

export function KubernetesServices(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "KubernetesServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kubernetes_servicesIcon;
  return node;
}

export function MaintenanceConfiguration(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "MaintenanceConfiguration", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = maintenance_configurationIcon;
  return node;
}

export function ManagedServiceFabric(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ManagedServiceFabric", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managed_service_fabricIcon;
  return node;
}

export function MeshApplications(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "MeshApplications", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mesh_applicationsIcon;
  return node;
}

export function MetricsAdvisor(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "MetricsAdvisor", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = metrics_advisorIcon;
  return node;
}

export function OsImagesClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OsImagesClassic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = os_images_classicIcon;
  return node;
}

export function OsImages(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "OsImages", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = os_imagesIcon;
  return node;
}

export function RestorePointsCollections(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "RestorePointsCollections", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = restore_points_collectionsIcon;
  return node;
}

export function RestorePoints(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "RestorePoints", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = restore_pointsIcon;
  return node;
}

export function SAPHANAOnAzure(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "SAPHANAOnAzure", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sap_hana_on_azureIcon;
  return node;
}

export function ServiceFabricClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ServiceFabricClusters", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_fabric_clustersIcon;
  return node;
}

export function SharedImageGalleries(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "SharedImageGalleries", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = shared_image_galleriesIcon;
  return node;
}

export function SpringCloud(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "SpringCloud", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = spring_cloudIcon;
  return node;
}

export function VirtualMachine(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VirtualMachine", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtual_machineIcon;
  return node;
}

export function VirtualMachinesClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VirtualMachinesClassic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = virtual_machines_classicIcon;
  return node;
}

export function VMClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VMClassic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vm_classicIcon;
  return node;
}

export function VMImagesClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VMImagesClassic", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vm_images_classicIcon;
  return node;
}

export function VMImages(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VMImages", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vm_imagesIcon;
  return node;
}

export function VMLinux(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VMLinux", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vm_linuxIcon;
  return node;
}

export function VMScaleSet(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VMScaleSet", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vm_scale_setIcon;
  return node;
}

export function VMScaleSets(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VMScaleSets", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vm_scale_setsIcon;
  return node;
}

export function VMWindows(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VMWindows", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vm_windowsIcon;
  return node;
}

export function VM(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "VM", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vmIcon;
  return node;
}

export function Workspaces2(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Workspaces2", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = workspaces_2Icon;
  return node;
}

export function Workspaces(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Workspaces", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = workspacesIcon;
  return node;
}

// Aliases
export const ACR = ContainerRegistries;
export const AKS = KubernetesServices;
export const VMSS = VMScaleSet;
