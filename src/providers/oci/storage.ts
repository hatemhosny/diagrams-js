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

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function BackupRestoreWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "BackupRestoreWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = backup_restore_whiteIcon;
  return node;
}

export function BackupRestore(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "BackupRestore", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = backup_restoreIcon;
  return node;
}

export function BlockStorageCloneWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "BlockStorageCloneWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = block_storage_clone_whiteIcon;
  return node;
}

export function BlockStorageClone(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "BlockStorageClone", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = block_storage_cloneIcon;
  return node;
}

export function BlockStorageWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "BlockStorageWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = block_storage_whiteIcon;
  return node;
}

export function BlockStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "BlockStorage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = block_storageIcon;
  return node;
}

export function BucketsWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "BucketsWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = buckets_whiteIcon;
  return node;
}

export function Buckets(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Buckets", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bucketsIcon;
  return node;
}

export function DataTransferWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "DataTransferWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_transfer_whiteIcon;
  return node;
}

export function DataTransfer(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "DataTransfer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_transferIcon;
  return node;
}

export function ElasticPerformanceWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ElasticPerformanceWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_performance_whiteIcon;
  return node;
}

export function ElasticPerformance(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ElasticPerformance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_performanceIcon;
  return node;
}

export function FileStorageWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "FileStorageWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = file_storage_whiteIcon;
  return node;
}

export function FileStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "FileStorage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = file_storageIcon;
  return node;
}

export function ObjectStorageWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ObjectStorageWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = object_storage_whiteIcon;
  return node;
}

export function ObjectStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ObjectStorage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = object_storageIcon;
  return node;
}

export function StorageGatewayWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorageGatewayWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storage_gateway_whiteIcon;
  return node;
}

export function StorageGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorageGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storage_gatewayIcon;
  return node;
}
