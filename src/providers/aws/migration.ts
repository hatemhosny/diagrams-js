import { _Aws } from "./index.js";
import application_discovery_serviceIcon from "../../../resources/aws/migration/application-discovery-service.png";
import cloudendure_migrationIcon from "../../../resources/aws/migration/cloudendure-migration.png";
import database_migration_serviceIcon from "../../../resources/aws/migration/database-migration-service.png";
import datasync_agentIcon from "../../../resources/aws/migration/datasync-agent.png";
import datasyncIcon from "../../../resources/aws/migration/datasync.png";
import migration_and_transferIcon from "../../../resources/aws/migration/migration-and-transfer.png";
import migration_hubIcon from "../../../resources/aws/migration/migration-hub.png";
import server_migration_serviceIcon from "../../../resources/aws/migration/server-migration-service.png";
import snowball_edgeIcon from "../../../resources/aws/migration/snowball-edge.png";
import snowballIcon from "../../../resources/aws/migration/snowball.png";
import snowmobileIcon from "../../../resources/aws/migration/snowmobile.png";
import transfer_for_sftpIcon from "../../../resources/aws/migration/transfer-for-sftp.png";

function _Migration(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "migration";
  return node;
}

export function ApplicationDiscoveryService(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "ApplicationDiscoveryService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = application_discovery_serviceIcon;
  return node;
}

export function CloudendureMigration(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "CloudendureMigration", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudendure_migrationIcon;
  return node;
}

export function DatabaseMigrationService(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "DatabaseMigrationService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = database_migration_serviceIcon;
  return node;
}

export function DatasyncAgent(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "DatasyncAgent", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = datasync_agentIcon;
  return node;
}

export function Datasync(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "Datasync", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = datasyncIcon;
  return node;
}

export function MigrationAndTransfer(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "MigrationAndTransfer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = migration_and_transferIcon;
  return node;
}

export function MigrationHub(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "MigrationHub", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = migration_hubIcon;
  return node;
}

export function ServerMigrationService(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "ServerMigrationService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = server_migration_serviceIcon;
  return node;
}

export function SnowballEdge(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "SnowballEdge", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = snowball_edgeIcon;
  return node;
}

export function Snowball(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "Snowball", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = snowballIcon;
  return node;
}

export function Snowmobile(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "Snowmobile", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = snowmobileIcon;
  return node;
}

export function TransferForSftp(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "TransferForSftp", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = transfer_for_sftpIcon;
  return node;
}

// Aliases
export const ADS = ApplicationDiscoveryService;
export const CEM = CloudendureMigration;
export const DMS = DatabaseMigrationService;
export const MAT = MigrationAndTransfer;
export const SMS = ServerMigrationService;
