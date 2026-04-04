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

class _Storage extends _Aws {
  protected static override _type = "storage";
}

export class Backup extends _Storage {
  protected static _iconDataUrl = backupIcon;
}

export class CloudendureDisasterRecovery extends _Storage {
  protected static _iconDataUrl = cloudendure_disaster_recoveryIcon;
}

export class EFSInfrequentaccessPrimaryBg extends _Storage {
  protected static _iconDataUrl = efs_infrequentaccess_primary_bgIcon;
}

export class EFSStandardPrimaryBg extends _Storage {
  protected static _iconDataUrl = efs_standard_primary_bgIcon;
}

export class ElasticBlockStoreEBSSnapshot extends _Storage {
  protected static _iconDataUrl = elastic_block_store_ebs_snapshotIcon;
}

export class ElasticBlockStoreEBSVolume extends _Storage {
  protected static _iconDataUrl = elastic_block_store_ebs_volumeIcon;
}

export class ElasticBlockStoreEBS extends _Storage {
  protected static _iconDataUrl = elastic_block_store_ebsIcon;
}

export class ElasticFileSystemEFSFileSystem extends _Storage {
  protected static _iconDataUrl = elastic_file_system_efs_file_systemIcon;
}

export class ElasticFileSystemEFS extends _Storage {
  protected static _iconDataUrl = elastic_file_system_efsIcon;
}

export class FsxForLustre extends _Storage {
  protected static _iconDataUrl = fsx_for_lustreIcon;
}

export class FsxForWindowsFileServer extends _Storage {
  protected static _iconDataUrl = fsx_for_windows_file_serverIcon;
}

export class Fsx extends _Storage {
  protected static _iconDataUrl = fsxIcon;
}

export class MultipleVolumesResource extends _Storage {
  protected static _iconDataUrl = multiple_volumes_resourceIcon;
}

export class S3AccessPoints extends _Storage {
  protected static _iconDataUrl = s3_access_pointsIcon;
}

export class S3GlacierArchive extends _Storage {
  protected static _iconDataUrl = s3_glacier_archiveIcon;
}

export class S3GlacierVault extends _Storage {
  protected static _iconDataUrl = s3_glacier_vaultIcon;
}

export class S3Glacier extends _Storage {
  protected static _iconDataUrl = s3_glacierIcon;
}

export class S3ObjectLambdaAccessPoints extends _Storage {
  protected static _iconDataUrl = s3_object_lambda_access_pointsIcon;
}

export class SimpleStorageServiceS3BucketWithObjects extends _Storage {
  protected static _iconDataUrl = simple_storage_service_s3_bucket_with_objectsIcon;
}

export class SimpleStorageServiceS3Bucket extends _Storage {
  protected static _iconDataUrl = simple_storage_service_s3_bucketIcon;
}

export class SimpleStorageServiceS3Object extends _Storage {
  protected static _iconDataUrl = simple_storage_service_s3_objectIcon;
}

export class SimpleStorageServiceS3 extends _Storage {
  protected static _iconDataUrl = simple_storage_service_s3Icon;
}

export class SnowFamilySnowballImportExport extends _Storage {
  protected static _iconDataUrl = snow_family_snowball_import_exportIcon;
}

export class SnowballEdge extends _Storage {
  protected static _iconDataUrl = snowball_edgeIcon;
}

export class Snowball extends _Storage {
  protected static _iconDataUrl = snowballIcon;
}

export class Snowmobile extends _Storage {
  protected static _iconDataUrl = snowmobileIcon;
}

export class StorageGatewayCachedVolume extends _Storage {
  protected static _iconDataUrl = storage_gateway_cached_volumeIcon;
}

export class StorageGatewayNonCachedVolume extends _Storage {
  protected static _iconDataUrl = storage_gateway_non_cached_volumeIcon;
}

export class StorageGatewayVirtualTapeLibrary extends _Storage {
  protected static _iconDataUrl = storage_gateway_virtual_tape_libraryIcon;
}

export class StorageGateway extends _Storage {
  protected static _iconDataUrl = storage_gatewayIcon;
}

export class Storage extends _Storage {
  protected static _iconDataUrl = storageIcon;
}

// Aliases
export const CDR = CloudendureDisasterRecovery;
export const EBS = ElasticBlockStoreEBS;
export const EFS = ElasticFileSystemEFS;
export const FSx = Fsx;
export const S3 = SimpleStorageServiceS3;
