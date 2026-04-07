import { _Azure } from "./index.js";
import azure_database_migration_servicesIcon from "../../../resources/azure/migration/azure-database-migration-services.png";
import data_box_edgeIcon from "../../../resources/azure/migration/data-box-edge.png";
import data_boxIcon from "../../../resources/azure/migration/data-box.png";
import database_migration_servicesIcon from "../../../resources/azure/migration/database-migration-services.png";
import migration_projectsIcon from "../../../resources/azure/migration/migration-projects.png";
import recovery_services_vaultsIcon from "../../../resources/azure/migration/recovery-services-vaults.png";

function _Migration(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "migration";
  return node;
}

export function AzureDatabaseMigrationServices(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "AzureDatabaseMigrationServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    azure_database_migration_servicesIcon;
  return node;
}

export function DataBoxEdge(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "DataBoxEdge", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_box_edgeIcon;
  return node;
}

export function DataBox(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "DataBox", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_boxIcon;
  return node;
}

export function DatabaseMigrationServices(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "DatabaseMigrationServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = database_migration_servicesIcon;
  return node;
}

export function MigrationProjects(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "MigrationProjects", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = migration_projectsIcon;
  return node;
}

export function RecoveryServicesVaults(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "RecoveryServicesVaults", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = recovery_services_vaultsIcon;
  return node;
}
