import { _Aws } from "./index.js";
import backupIcon from "../../../resources/aws/storage/backup.png";
import cloudendure_disaster_recoveryIcon from "../../../resources/aws/storage/cloudendure-disaster-recovery.png";
import efs_infrequentaccess_primary_bgIcon from "../../../resources/aws/storage/efs-infrequentaccess-primary-bg.png";
import efs_standard_primary_bgIcon from "../../../resources/aws/storage/efs-standard-primary-bg.png";
import elastic_block_store_ebs_snapshotIcon from "../../../resources/aws/storage/elastic-block-store-ebs-snapshot.png";
import elastic_block_store_ebs_volumeIcon from "../../../resources/aws/storage/elastic-block-store-ebs-volume.png";
import elastic_block_store_ebsIcon from "../../../resources/aws/storage/elastic-block-store-ebs.png";
import elastic_file_system_efs_file_systemIcon from "../../../resources/aws/storage/elastic-file-system-efs-file-system.png";
import elastic_file_system_efsIcon from "../../../resources/aws/storage/elastic-file-system-efs.png";
import fsx_for_lustreIcon from "../../../resources/aws/storage/fsx-for-lustre.png";
import fsx_for_windows_file_serverIcon from "../../../resources/aws/storage/fsx-for-windows-file-server.png";
import fsxIcon from "../../../resources/aws/storage/fsx.png";
import multiple_volumes_resourceIcon from "../../../resources/aws/storage/multiple-volumes-resource.png";
import s3_access_pointsIcon from "../../../resources/aws/storage/s3-access-points.png";
import s3_glacier_archiveIcon from "../../../resources/aws/storage/s3-glacier-archive.png";
import s3_glacier_vaultIcon from "../../../resources/aws/storage/s3-glacier-vault.png";
import s3_glacierIcon from "../../../resources/aws/storage/s3-glacier.png";
import s3_object_lambda_access_pointsIcon from "../../../resources/aws/storage/s3-object-lambda-access-points.png";
import simple_storage_service_s3_bucket_with_objectsIcon from "../../../resources/aws/storage/simple-storage-service-s3-bucket-with-objects.png";
import simple_storage_service_s3_bucketIcon from "../../../resources/aws/storage/simple-storage-service-s3-bucket.png";
import simple_storage_service_s3_objectIcon from "../../../resources/aws/storage/simple-storage-service-s3-object.png";
import simple_storage_service_s3Icon from "../../../resources/aws/storage/simple-storage-service-s3.png";
import snow_family_snowball_import_exportIcon from "../../../resources/aws/storage/snow-family-snowball-import-export.png";
import snowball_edgeIcon from "../../../resources/aws/storage/snowball-edge.png";
import snowballIcon from "../../../resources/aws/storage/snowball.png";
import snowmobileIcon from "../../../resources/aws/storage/snowmobile.png";
import storage_gateway_cached_volumeIcon from "../../../resources/aws/storage/storage-gateway-cached-volume.png";
import storage_gateway_non_cached_volumeIcon from "../../../resources/aws/storage/storage-gateway-non-cached-volume.png";
import storage_gateway_virtual_tape_libraryIcon from "../../../resources/aws/storage/storage-gateway-virtual-tape-library.png";
import storage_gatewayIcon from "../../../resources/aws/storage/storage-gateway.png";
import storageIcon from "../../../resources/aws/storage/storage.png";

function _Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "storage";
  return node;
}

export function Backup(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Backup", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = backupIcon;
  return node;
}

export function CloudendureDisasterRecovery(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "CloudendureDisasterRecovery", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudendure_disaster_recoveryIcon;
  return node;
}

export function EFSInfrequentaccessPrimaryBg(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "EFSInfrequentaccessPrimaryBg", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    efs_infrequentaccess_primary_bgIcon;
  return node;
}

export function EFSStandardPrimaryBg(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "EFSStandardPrimaryBg", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = efs_standard_primary_bgIcon;
  return node;
}

export function ElasticBlockStoreEBSSnapshot(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ElasticBlockStoreEBSSnapshot", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    elastic_block_store_ebs_snapshotIcon;
  return node;
}

export function ElasticBlockStoreEBSVolume(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ElasticBlockStoreEBSVolume", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_block_store_ebs_volumeIcon;
  return node;
}

export function ElasticBlockStoreEBS(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ElasticBlockStoreEBS", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_block_store_ebsIcon;
  return node;
}

export function ElasticFileSystemEFSFileSystem(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ElasticFileSystemEFSFileSystem", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    elastic_file_system_efs_file_systemIcon;
  return node;
}

export function ElasticFileSystemEFS(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "ElasticFileSystemEFS", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elastic_file_system_efsIcon;
  return node;
}

export function FsxForLustre(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "FsxForLustre", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fsx_for_lustreIcon;
  return node;
}

export function FsxForWindowsFileServer(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "FsxForWindowsFileServer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fsx_for_windows_file_serverIcon;
  return node;
}

export function Fsx(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Fsx", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fsxIcon;
  return node;
}

export function MultipleVolumesResource(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "MultipleVolumesResource", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = multiple_volumes_resourceIcon;
  return node;
}

export function S3AccessPoints(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "S3AccessPoints", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = s3_access_pointsIcon;
  return node;
}

export function S3GlacierArchive(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "S3GlacierArchive", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = s3_glacier_archiveIcon;
  return node;
}

export function S3GlacierVault(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "S3GlacierVault", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = s3_glacier_vaultIcon;
  return node;
}

export function S3Glacier(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "S3Glacier", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = s3_glacierIcon;
  return node;
}

export function S3ObjectLambdaAccessPoints(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "S3ObjectLambdaAccessPoints", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = s3_object_lambda_access_pointsIcon;
  return node;
}

export function SimpleStorageServiceS3BucketWithObjects(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Storage(label ?? "SimpleStorageServiceS3BucketWithObjects", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    simple_storage_service_s3_bucket_with_objectsIcon;
  return node;
}

export function SimpleStorageServiceS3Bucket(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "SimpleStorageServiceS3Bucket", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    simple_storage_service_s3_bucketIcon;
  return node;
}

export function SimpleStorageServiceS3Object(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "SimpleStorageServiceS3Object", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    simple_storage_service_s3_objectIcon;
  return node;
}

export function SimpleStorageServiceS3(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "SimpleStorageServiceS3", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = simple_storage_service_s3Icon;
  return node;
}

export function SnowFamilySnowballImportExport(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "SnowFamilySnowballImportExport", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    snow_family_snowball_import_exportIcon;
  return node;
}

export function SnowballEdge(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "SnowballEdge", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = snowball_edgeIcon;
  return node;
}

export function Snowball(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Snowball", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = snowballIcon;
  return node;
}

export function Snowmobile(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Snowmobile", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = snowmobileIcon;
  return node;
}

export function StorageGatewayCachedVolume(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorageGatewayCachedVolume", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storage_gateway_cached_volumeIcon;
  return node;
}

export function StorageGatewayNonCachedVolume(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorageGatewayNonCachedVolume", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    storage_gateway_non_cached_volumeIcon;
  return node;
}

export function StorageGatewayVirtualTapeLibrary(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Storage(label ?? "StorageGatewayVirtualTapeLibrary", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    storage_gateway_virtual_tape_libraryIcon;
  return node;
}

export function StorageGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "StorageGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storage_gatewayIcon;
  return node;
}

export function Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Storage(label ?? "Storage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storageIcon;
  return node;
}

// Aliases
export const CDR = CloudendureDisasterRecovery;
export const EBS = ElasticBlockStoreEBS;
export const EFS = ElasticFileSystemEFS;
export const FSx = Fsx;
export const S3 = SimpleStorageServiceS3;
