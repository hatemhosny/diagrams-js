import { _Alibabacloud } from "./index.js";
import cloud_storage_gatewayIcon from "../../../resources/alibabacloud/storage/cloud-storage-gateway.png";
import file_storage_hdfsIcon from "../../../resources/alibabacloud/storage/file-storage-hdfs.png";
import file_storage_nasIcon from "../../../resources/alibabacloud/storage/file-storage-nas.png";
import hybrid_backup_recoveryIcon from "../../../resources/alibabacloud/storage/hybrid-backup-recovery.png";
import hybrid_cloud_disaster_recoveryIcon from "../../../resources/alibabacloud/storage/hybrid-cloud-disaster-recovery.png";
import immIcon from "../../../resources/alibabacloud/storage/imm.png";
import object_storage_serviceIcon from "../../../resources/alibabacloud/storage/object-storage-service.png";
import object_table_storeIcon from "../../../resources/alibabacloud/storage/object-table-store.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function CloudStorageGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "CloudStorageGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_storage_gatewayIcon;
  return node;
}

export function FileStorageHdfs(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "FileStorageHdfs", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = file_storage_hdfsIcon;
  return node;
}

export function FileStorageNas(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "FileStorageNas", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = file_storage_nasIcon;
  return node;
}

export function HybridBackupRecovery(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "HybridBackupRecovery", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hybrid_backup_recoveryIcon;
  return node;
}

export function HybridCloudDisasterRecovery(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "HybridCloudDisasterRecovery", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hybrid_cloud_disaster_recoveryIcon;
  return node;
}

export function Imm(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Imm", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = immIcon;
  return node;
}

export function ObjectStorageService(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ObjectStorageService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = object_storage_serviceIcon;
  return node;
}

export function ObjectTableStore(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ObjectTableStore", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = object_table_storeIcon;
  return node;
}

// Aliases
export const HDFS = FileStorageHdfs;
export const NAS = FileStorageNas;
export const HBR = HybridBackupRecovery;
export const HDR = HybridCloudDisasterRecovery;
export const OSS = ObjectStorageService;
export const OTS = ObjectTableStore;
