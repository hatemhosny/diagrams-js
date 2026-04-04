import { _Oci } from "./index.js";
import backup_restore_whiteIcon from "../../../resources/oci/storage/backup-restore-white.png";
import backup_restoreIcon from "../../../resources/oci/storage/backup-restore.png";
import block_storage_clone_whiteIcon from "../../../resources/oci/storage/block-storage-clone-white.png";
import block_storage_cloneIcon from "../../../resources/oci/storage/block-storage-clone.png";
import block_storage_whiteIcon from "../../../resources/oci/storage/block-storage-white.png";
import block_storageIcon from "../../../resources/oci/storage/block-storage.png";
import buckets_whiteIcon from "../../../resources/oci/storage/buckets-white.png";
import bucketsIcon from "../../../resources/oci/storage/buckets.png";
import data_transfer_whiteIcon from "../../../resources/oci/storage/data-transfer-white.png";
import data_transferIcon from "../../../resources/oci/storage/data-transfer.png";
import elastic_performance_whiteIcon from "../../../resources/oci/storage/elastic-performance-white.png";
import elastic_performanceIcon from "../../../resources/oci/storage/elastic-performance.png";
import file_storage_whiteIcon from "../../../resources/oci/storage/file-storage-white.png";
import file_storageIcon from "../../../resources/oci/storage/file-storage.png";
import object_storage_whiteIcon from "../../../resources/oci/storage/object-storage-white.png";
import object_storageIcon from "../../../resources/oci/storage/object-storage.png";
import storage_gateway_whiteIcon from "../../../resources/oci/storage/storage-gateway-white.png";
import storage_gatewayIcon from "../../../resources/oci/storage/storage-gateway.png";

class _Storage extends _Oci {
  protected static override _type = "storage";
}

export class BackupRestoreWhite extends _Storage {
  protected static _iconDataUrl = backup_restore_whiteIcon;
}

export class BackupRestore extends _Storage {
  protected static _iconDataUrl = backup_restoreIcon;
}

export class BlockStorageCloneWhite extends _Storage {
  protected static _iconDataUrl = block_storage_clone_whiteIcon;
}

export class BlockStorageClone extends _Storage {
  protected static _iconDataUrl = block_storage_cloneIcon;
}

export class BlockStorageWhite extends _Storage {
  protected static _iconDataUrl = block_storage_whiteIcon;
}

export class BlockStorage extends _Storage {
  protected static _iconDataUrl = block_storageIcon;
}

export class BucketsWhite extends _Storage {
  protected static _iconDataUrl = buckets_whiteIcon;
}

export class Buckets extends _Storage {
  protected static _iconDataUrl = bucketsIcon;
}

export class DataTransferWhite extends _Storage {
  protected static _iconDataUrl = data_transfer_whiteIcon;
}

export class DataTransfer extends _Storage {
  protected static _iconDataUrl = data_transferIcon;
}

export class ElasticPerformanceWhite extends _Storage {
  protected static _iconDataUrl = elastic_performance_whiteIcon;
}

export class ElasticPerformance extends _Storage {
  protected static _iconDataUrl = elastic_performanceIcon;
}

export class FileStorageWhite extends _Storage {
  protected static _iconDataUrl = file_storage_whiteIcon;
}

export class FileStorage extends _Storage {
  protected static _iconDataUrl = file_storageIcon;
}

export class ObjectStorageWhite extends _Storage {
  protected static _iconDataUrl = object_storage_whiteIcon;
}

export class ObjectStorage extends _Storage {
  protected static _iconDataUrl = object_storageIcon;
}

export class StorageGatewayWhite extends _Storage {
  protected static _iconDataUrl = storage_gateway_whiteIcon;
}

export class StorageGateway extends _Storage {
  protected static _iconDataUrl = storage_gatewayIcon;
}
