import { _Alibabacloud } from "./index.js";
import cloud_storage_gatewayIcon from "../../../resources/alibabacloud/storage/cloud-storage-gateway.png";
import file_storage_hdfsIcon from "../../../resources/alibabacloud/storage/file-storage-hdfs.png";
import file_storage_nasIcon from "../../../resources/alibabacloud/storage/file-storage-nas.png";
import hybrid_backup_recoveryIcon from "../../../resources/alibabacloud/storage/hybrid-backup-recovery.png";
import hybrid_cloud_disaster_recoveryIcon from "../../../resources/alibabacloud/storage/hybrid-cloud-disaster-recovery.png";
import immIcon from "../../../resources/alibabacloud/storage/imm.png";
import object_storage_serviceIcon from "../../../resources/alibabacloud/storage/object-storage-service.png";
import object_table_storeIcon from "../../../resources/alibabacloud/storage/object-table-store.png";

class _Storage extends _Alibabacloud {
  protected static override _type = "storage";
}

export class CloudStorageGateway extends _Storage {
  protected static override _iconDataUrl = cloud_storage_gatewayIcon;
}

export class FileStorageHdfs extends _Storage {
  protected static override _iconDataUrl = file_storage_hdfsIcon;
}

export class FileStorageNas extends _Storage {
  protected static override _iconDataUrl = file_storage_nasIcon;
}

export class HybridBackupRecovery extends _Storage {
  protected static override _iconDataUrl = hybrid_backup_recoveryIcon;
}

export class HybridCloudDisasterRecovery extends _Storage {
  protected static override _iconDataUrl = hybrid_cloud_disaster_recoveryIcon;
}

export class Imm extends _Storage {
  protected static override _iconDataUrl = immIcon;
}

export class ObjectStorageService extends _Storage {
  protected static override _iconDataUrl = object_storage_serviceIcon;
}

export class ObjectTableStore extends _Storage {
  protected static override _iconDataUrl = object_table_storeIcon;
}

// Aliases
export const HDFS = FileStorageHdfs;
export const NAS = FileStorageNas;
export const HBR = HybridBackupRecovery;
export const HDR = HybridCloudDisasterRecovery;
export const OSS = ObjectStorageService;
export const OTS = ObjectTableStore;
