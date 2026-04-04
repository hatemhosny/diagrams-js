import { _Azure } from "./index.js";
import azure_database_migration_servicesIcon from "../../../resources/azure/migration/azure-database-migration-services.png";
import data_box_edgeIcon from "../../../resources/azure/migration/data-box-edge.png";
import data_boxIcon from "../../../resources/azure/migration/data-box.png";
import database_migration_servicesIcon from "../../../resources/azure/migration/database-migration-services.png";
import migration_projectsIcon from "../../../resources/azure/migration/migration-projects.png";
import recovery_services_vaultsIcon from "../../../resources/azure/migration/recovery-services-vaults.png";

class _Migration extends _Azure {
  protected static override _type = "migration";
}

export class AzureDatabaseMigrationServices extends _Migration {
  protected static override _iconDataUrl = azure_database_migration_servicesIcon;
}

export class DataBoxEdge extends _Migration {
  protected static override _iconDataUrl = data_box_edgeIcon;
}

export class DataBox extends _Migration {
  protected static override _iconDataUrl = data_boxIcon;
}

export class DatabaseMigrationServices extends _Migration {
  protected static override _iconDataUrl = database_migration_servicesIcon;
}

export class MigrationProjects extends _Migration {
  protected static override _iconDataUrl = migration_projectsIcon;
}

export class RecoveryServicesVaults extends _Migration {
  protected static override _iconDataUrl = recovery_services_vaultsIcon;
}
