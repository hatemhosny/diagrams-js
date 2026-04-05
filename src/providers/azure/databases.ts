import { _Azure } from "./index.js";
import azure_cosmos_dbIcon from "../../../resources/azure/databases/azure-cosmos-db.png";
import azure_data_explorer_clustersIcon from "../../../resources/azure/databases/azure-data-explorer-clusters.png";
import azure_database_mariadb_serverIcon from "../../../resources/azure/databases/azure-database-mariadb-server.png";
import azure_database_migration_servicesIcon from "../../../resources/azure/databases/azure-database-migration-services.png";
import azure_database_mysql_serverIcon from "../../../resources/azure/databases/azure-database-mysql-server.png";
import azure_database_postgresql_server_groupIcon from "../../../resources/azure/databases/azure-database-postgresql-server-group.png";
import azure_database_postgresql_serverIcon from "../../../resources/azure/databases/azure-database-postgresql-server.png";
import azure_purview_accountsIcon from "../../../resources/azure/databases/azure-purview-accounts.png";
import azure_sql_edgeIcon from "../../../resources/azure/databases/azure-sql-edge.png";
import azure_sql_server_stretch_databasesIcon from "../../../resources/azure/databases/azure-sql-server-stretch-databases.png";
import azure_sql_vmIcon from "../../../resources/azure/databases/azure-sql-vm.png";
import azure_sqlIcon from "../../../resources/azure/databases/azure-sql.png";
import azure_synapse_analyticsIcon from "../../../resources/azure/databases/azure-synapse-analytics.png";
import cache_redisIcon from "../../../resources/azure/databases/cache-redis.png";
import data_factoriesIcon from "../../../resources/azure/databases/data-factories.png";
import elastic_job_agentsIcon from "../../../resources/azure/databases/elastic-job-agents.png";
import instance_poolsIcon from "../../../resources/azure/databases/instance-pools.png";
import managed_databaseIcon from "../../../resources/azure/databases/managed-database.png";
import oracle_databaseIcon from "../../../resources/azure/databases/oracle-database.png";
import sql_data_warehousesIcon from "../../../resources/azure/databases/sql-data-warehouses.png";
import sql_databaseIcon from "../../../resources/azure/databases/sql-database.png";
import sql_elastic_poolsIcon from "../../../resources/azure/databases/sql-elastic-pools.png";
import sql_managed_instanceIcon from "../../../resources/azure/databases/sql-managed-instance.png";
import sql_server_registriesIcon from "../../../resources/azure/databases/sql-server-registries.png";
import sql_serverIcon from "../../../resources/azure/databases/sql-server.png";
import ssis_lift_and_shift_irIcon from "../../../resources/azure/databases/ssis-lift-and-shift-ir.png";
import virtual_clustersIcon from "../../../resources/azure/databases/virtual-clusters.png";

function _Databases(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "databases";
  return node;
}

export function AzureCosmosDb(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureCosmosDb", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_cosmos_dbIcon;
  return node;
}

export function AzureDataExplorerClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureDataExplorerClusters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_data_explorer_clustersIcon;
  return node;
}

export function AzureDatabaseMariadbServer(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureDatabaseMariadbServer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_database_mariadb_serverIcon;
  return node;
}

export function AzureDatabaseMigrationServices(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureDatabaseMigrationServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_database_migration_servicesIcon;
  return node;
}

export function AzureDatabaseMysqlServer(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureDatabaseMysqlServer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_database_mysql_serverIcon;
  return node;
}

export function AzureDatabasePostgresqlServerGroup(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Databases(label ?? "AzureDatabasePostgresqlServerGroup", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    azure_database_postgresql_server_groupIcon;
  return node;
}

export function AzureDatabasePostgresqlServer(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureDatabasePostgresqlServer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_database_postgresql_serverIcon;
  return node;
}

export function AzurePurviewAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzurePurviewAccounts", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_purview_accountsIcon;
  return node;
}

export function AzureSQLEdge(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureSQLEdge", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_sql_edgeIcon;
  return node;
}

export function AzureSQLServerStretchDatabases(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureSQLServerStretchDatabases", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    azure_sql_server_stretch_databasesIcon;
  return node;
}

export function AzureSQLVM(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureSQLVM", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_sql_vmIcon;
  return node;
}

export function AzureSQL(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureSQL", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_sqlIcon;
  return node;
}

export function AzureSynapseAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "AzureSynapseAnalytics", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_synapse_analyticsIcon;
  return node;
}

export function CacheRedis(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "CacheRedis", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cache_redisIcon;
  return node;
}

export function DataFactories(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "DataFactories", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_factoriesIcon;
  return node;
}

export function ElasticJobAgents(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "ElasticJobAgents", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = elastic_job_agentsIcon;
  return node;
}

export function InstancePools(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "InstancePools", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = instance_poolsIcon;
  return node;
}

export function ManagedDatabase(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "ManagedDatabase", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = managed_databaseIcon;
  return node;
}

export function OracleDatabase(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "OracleDatabase", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = oracle_databaseIcon;
  return node;
}

export function SQLDataWarehouses(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "SQLDataWarehouses", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_data_warehousesIcon;
  return node;
}

export function SQLDatabase(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "SQLDatabase", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_databaseIcon;
  return node;
}

export function SQLElasticPools(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "SQLElasticPools", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_elastic_poolsIcon;
  return node;
}

export function SQLManagedInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "SQLManagedInstance", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_managed_instanceIcon;
  return node;
}

export function SQLServerRegistries(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "SQLServerRegistries", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_server_registriesIcon;
  return node;
}

export function SQLServer(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "SQLServer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_serverIcon;
  return node;
}

export function SsisLiftAndShiftIr(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "SsisLiftAndShiftIr", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ssis_lift_and_shift_irIcon;
  return node;
}

export function VirtualClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Databases(label ?? "VirtualClusters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = virtual_clustersIcon;
  return node;
}
