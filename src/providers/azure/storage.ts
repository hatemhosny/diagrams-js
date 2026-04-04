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

class _Storage extends _Azure {
  protected static override _type = "storage";
}

export class ArchiveStorage extends _Storage {
  protected static _iconDataUrl = archive_storageIcon;
}

export class AzureDataboxGateway extends _Storage {
  protected static _iconDataUrl = azure_databox_gatewayIcon;
}

export class AzureFileshares extends _Storage {
  protected static _iconDataUrl = azure_filesharesIcon;
}

export class AzureHcpCache extends _Storage {
  protected static _iconDataUrl = azure_hcp_cacheIcon;
}

export class AzureNetappFiles extends _Storage {
  protected static _iconDataUrl = azure_netapp_filesIcon;
}

export class AzureStackEdge extends _Storage {
  protected static _iconDataUrl = azure_stack_edgeIcon;
}

export class Azurefxtedgefiler extends _Storage {
  protected static _iconDataUrl = azurefxtedgefilerIcon;
}

export class BlobStorage extends _Storage {
  protected static _iconDataUrl = blob_storageIcon;
}

export class DataBoxEdgeDataBoxGateway extends _Storage {
  protected static _iconDataUrl = data_box_edge_data_box_gatewayIcon;
}

export class DataBox extends _Storage {
  protected static _iconDataUrl = data_boxIcon;
}

export class DataLakeStorageGen1 extends _Storage {
  protected static _iconDataUrl = data_lake_storage_gen1Icon;
}

export class DataLakeStorage extends _Storage {
  protected static _iconDataUrl = data_lake_storageIcon;
}

export class DataShareInvitations extends _Storage {
  protected static _iconDataUrl = data_share_invitationsIcon;
}

export class DataShares extends _Storage {
  protected static _iconDataUrl = data_sharesIcon;
}

export class GeneralStorage extends _Storage {
  protected static _iconDataUrl = general_storageIcon;
}

export class ImportExportJobs extends _Storage {
  protected static _iconDataUrl = import_export_jobsIcon;
}

export class NetappFiles extends _Storage {
  protected static _iconDataUrl = netapp_filesIcon;
}

export class QueuesStorage extends _Storage {
  protected static _iconDataUrl = queues_storageIcon;
}

export class RecoveryServicesVaults extends _Storage {
  protected static _iconDataUrl = recovery_services_vaultsIcon;
}

export class StorageAccountsClassic extends _Storage {
  protected static _iconDataUrl = storage_accounts_classicIcon;
}

export class StorageAccounts extends _Storage {
  protected static _iconDataUrl = storage_accountsIcon;
}

export class StorageExplorer extends _Storage {
  protected static _iconDataUrl = storage_explorerIcon;
}

export class StorageSyncServices extends _Storage {
  protected static _iconDataUrl = storage_sync_servicesIcon;
}

export class StorsimpleDataManagers extends _Storage {
  protected static _iconDataUrl = storsimple_data_managersIcon;
}

export class StorsimpleDeviceManagers extends _Storage {
  protected static _iconDataUrl = storsimple_device_managersIcon;
}

export class TableStorage extends _Storage {
  protected static _iconDataUrl = table_storageIcon;
}
