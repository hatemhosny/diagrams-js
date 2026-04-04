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

class _Migration extends _Aws {
  protected static override _type = "migration";
}

export class ApplicationDiscoveryService extends _Migration {
  protected static _iconDataUrl = application_discovery_serviceIcon;
}

export class CloudendureMigration extends _Migration {
  protected static _iconDataUrl = cloudendure_migrationIcon;
}

export class DatabaseMigrationService extends _Migration {
  protected static _iconDataUrl = database_migration_serviceIcon;
}

export class DatasyncAgent extends _Migration {
  protected static _iconDataUrl = datasync_agentIcon;
}

export class Datasync extends _Migration {
  protected static _iconDataUrl = datasyncIcon;
}

export class MigrationAndTransfer extends _Migration {
  protected static _iconDataUrl = migration_and_transferIcon;
}

export class MigrationHub extends _Migration {
  protected static _iconDataUrl = migration_hubIcon;
}

export class ServerMigrationService extends _Migration {
  protected static _iconDataUrl = server_migration_serviceIcon;
}

export class SnowballEdge extends _Migration {
  protected static _iconDataUrl = snowball_edgeIcon;
}

export class Snowball extends _Migration {
  protected static _iconDataUrl = snowballIcon;
}

export class Snowmobile extends _Migration {
  protected static _iconDataUrl = snowmobileIcon;
}

export class TransferForSftp extends _Migration {
  protected static _iconDataUrl = transfer_for_sftpIcon;
}

// Aliases
export const ADS = ApplicationDiscoveryService;
export const CEM = CloudendureMigration;
export const DMS = DatabaseMigrationService;
export const MAT = MigrationAndTransfer;
export const SMS = ServerMigrationService;
