import { _Azure } from "./index.js";
import archive_storageIcon from "../../../resources/azure/storage/archive-storage.png";
import azure_databox_gatewayIcon from "../../../resources/azure/storage/azure-databox-gateway.png";
import azure_filesharesIcon from "../../../resources/azure/storage/azure-fileshares.png";
import azure_hcp_cacheIcon from "../../../resources/azure/storage/azure-hcp-cache.png";
import azure_netapp_filesIcon from "../../../resources/azure/storage/azure-netapp-files.png";
import azure_stack_edgeIcon from "../../../resources/azure/storage/azure-stack-edge.png";
import azurefxtedgefilerIcon from "../../../resources/azure/storage/azurefxtedgefiler.png";
import blob_storageIcon from "../../../resources/azure/storage/blob-storage.png";
import data_box_edge_data_box_gatewayIcon from "../../../resources/azure/storage/data-box-edge-data-box-gateway.png";
import data_boxIcon from "../../../resources/azure/storage/data-box.png";
import data_lake_storage_gen1Icon from "../../../resources/azure/storage/data-lake-storage-gen1.png";
import data_lake_storageIcon from "../../../resources/azure/storage/data-lake-storage.png";
import data_share_invitationsIcon from "../../../resources/azure/storage/data-share-invitations.png";
import data_sharesIcon from "../../../resources/azure/storage/data-shares.png";
import general_storageIcon from "../../../resources/azure/storage/general-storage.png";
import import_export_jobsIcon from "../../../resources/azure/storage/import-export-jobs.png";
import netapp_filesIcon from "../../../resources/azure/storage/netapp-files.png";
import queues_storageIcon from "../../../resources/azure/storage/queues-storage.png";
import recovery_services_vaultsIcon from "../../../resources/azure/storage/recovery-services-vaults.png";
import storage_accounts_classicIcon from "../../../resources/azure/storage/storage-accounts-classic.png";
import storage_accountsIcon from "../../../resources/azure/storage/storage-accounts.png";
import storage_explorerIcon from "../../../resources/azure/storage/storage-explorer.png";
import storage_sync_servicesIcon from "../../../resources/azure/storage/storage-sync-services.png";
import storsimple_data_managersIcon from "../../../resources/azure/storage/storsimple-data-managers.png";
import storsimple_device_managersIcon from "../../../resources/azure/storage/storsimple-device-managers.png";
import table_storageIcon from "../../../resources/azure/storage/table-storage.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function ArchiveStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ArchiveStorage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ArchiveStorage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = archive_storageIcon;
  return node;
}

export function AzureDataboxGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "AzureDataboxGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureDataboxGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_databox_gatewayIcon;
  return node;
}

export function AzureFileshares(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "AzureFileshares", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureFileshares";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_filesharesIcon;
  return node;
}

export function AzureHcpCache(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "AzureHcpCache", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureHcpCache";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_hcp_cacheIcon;
  return node;
}

export function AzureNetappFiles(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "AzureNetappFiles", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureNetappFiles";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_netapp_filesIcon;
  return node;
}

export function AzureStackEdge(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "AzureStackEdge", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureStackEdge";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_stack_edgeIcon;
  return node;
}

export function Azurefxtedgefiler(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Azurefxtedgefiler", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Azurefxtedgefiler";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azurefxtedgefilerIcon;
  return node;
}

export function BlobStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "BlobStorage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BlobStorage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = blob_storageIcon;
  return node;
}

export function DataBoxEdgeDataBoxGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "DataBoxEdgeDataBoxGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataBoxEdgeDataBoxGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_box_edge_data_box_gatewayIcon;
  return node;
}

export function DataBox(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "DataBox", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataBox";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_boxIcon;
  return node;
}

export function DataLakeStorageGen1(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "DataLakeStorageGen1", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataLakeStorageGen1";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_lake_storage_gen1Icon;
  return node;
}

export function DataLakeStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "DataLakeStorage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataLakeStorage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_lake_storageIcon;
  return node;
}

export function DataShareInvitations(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "DataShareInvitations", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataShareInvitations";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_share_invitationsIcon;
  return node;
}

export function DataShares(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "DataShares", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataShares";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_sharesIcon;
  return node;
}

export function GeneralStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "GeneralStorage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "GeneralStorage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = general_storageIcon;
  return node;
}

export function ImportExportJobs(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ImportExportJobs", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ImportExportJobs";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = import_export_jobsIcon;
  return node;
}

export function NetappFiles(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "NetappFiles", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "NetappFiles";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = netapp_filesIcon;
  return node;
}

export function QueuesStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "QueuesStorage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "QueuesStorage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = queues_storageIcon;
  return node;
}

export function RecoveryServicesVaults(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "RecoveryServicesVaults", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RecoveryServicesVaults";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = recovery_services_vaultsIcon;
  return node;
}

export function StorageAccountsClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorageAccountsClassic", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "StorageAccountsClassic";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storage_accounts_classicIcon;
  return node;
}

export function StorageAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorageAccounts", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "StorageAccounts";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storage_accountsIcon;
  return node;
}

export function StorageExplorer(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorageExplorer", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "StorageExplorer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storage_explorerIcon;
  return node;
}

export function StorageSyncServices(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorageSyncServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "StorageSyncServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storage_sync_servicesIcon;
  return node;
}

export function StorsimpleDataManagers(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorsimpleDataManagers", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "StorsimpleDataManagers";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storsimple_data_managersIcon;
  return node;
}

export function StorsimpleDeviceManagers(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorsimpleDeviceManagers", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "StorsimpleDeviceManagers";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storsimple_device_managersIcon;
  return node;
}

export function TableStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "TableStorage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "TableStorage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = table_storageIcon;
  return node;
}
