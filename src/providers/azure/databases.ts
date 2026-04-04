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

class _Databases extends _Azure {
  protected static override _type = "databases";
}

export class AzureCosmosDb extends _Databases {
  protected static _iconDataUrl = azure_cosmos_dbIcon;
}

export class AzureDataExplorerClusters extends _Databases {
  protected static _iconDataUrl = azure_data_explorer_clustersIcon;
}

export class AzureDatabaseMariadbServer extends _Databases {
  protected static _iconDataUrl = azure_database_mariadb_serverIcon;
}

export class AzureDatabaseMigrationServices extends _Databases {
  protected static _iconDataUrl = azure_database_migration_servicesIcon;
}

export class AzureDatabaseMysqlServer extends _Databases {
  protected static _iconDataUrl = azure_database_mysql_serverIcon;
}

export class AzureDatabasePostgresqlServerGroup extends _Databases {
  protected static _iconDataUrl = azure_database_postgresql_server_groupIcon;
}

export class AzureDatabasePostgresqlServer extends _Databases {
  protected static _iconDataUrl = azure_database_postgresql_serverIcon;
}

export class AzurePurviewAccounts extends _Databases {
  protected static _iconDataUrl = azure_purview_accountsIcon;
}

export class AzureSQLEdge extends _Databases {
  protected static _iconDataUrl = azure_sql_edgeIcon;
}

export class AzureSQLServerStretchDatabases extends _Databases {
  protected static _iconDataUrl = azure_sql_server_stretch_databasesIcon;
}

export class AzureSQLVM extends _Databases {
  protected static _iconDataUrl = azure_sql_vmIcon;
}

export class AzureSQL extends _Databases {
  protected static _iconDataUrl = azure_sqlIcon;
}

export class AzureSynapseAnalytics extends _Databases {
  protected static _iconDataUrl = azure_synapse_analyticsIcon;
}

export class CacheRedis extends _Databases {
  protected static _iconDataUrl = cache_redisIcon;
}

export class DataFactories extends _Databases {
  protected static _iconDataUrl = data_factoriesIcon;
}

export class ElasticJobAgents extends _Databases {
  protected static _iconDataUrl = elastic_job_agentsIcon;
}

export class InstancePools extends _Databases {
  protected static _iconDataUrl = instance_poolsIcon;
}

export class ManagedDatabase extends _Databases {
  protected static _iconDataUrl = managed_databaseIcon;
}

export class OracleDatabase extends _Databases {
  protected static _iconDataUrl = oracle_databaseIcon;
}

export class SQLDataWarehouses extends _Databases {
  protected static _iconDataUrl = sql_data_warehousesIcon;
}

export class SQLDatabase extends _Databases {
  protected static _iconDataUrl = sql_databaseIcon;
}

export class SQLElasticPools extends _Databases {
  protected static _iconDataUrl = sql_elastic_poolsIcon;
}

export class SQLManagedInstance extends _Databases {
  protected static _iconDataUrl = sql_managed_instanceIcon;
}

export class SQLServerRegistries extends _Databases {
  protected static _iconDataUrl = sql_server_registriesIcon;
}

export class SQLServer extends _Databases {
  protected static _iconDataUrl = sql_serverIcon;
}

export class SsisLiftAndShiftIr extends _Databases {
  protected static _iconDataUrl = ssis_lift_and_shift_irIcon;
}

export class VirtualClusters extends _Databases {
  protected static _iconDataUrl = virtual_clustersIcon;
}
