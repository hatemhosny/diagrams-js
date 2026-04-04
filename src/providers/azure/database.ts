import { _Azure } from "./index.js";
import blob_storageIcon from "../../../resources/azure/database/blob-storage.png";
import cache_for_redisIcon from "../../../resources/azure/database/cache-for-redis.png";
import cosmos_dbIcon from "../../../resources/azure/database/cosmos-db.png";
import data_explorer_clustersIcon from "../../../resources/azure/database/data-explorer-clusters.png";
import data_factoryIcon from "../../../resources/azure/database/data-factory.png";
import data_lakeIcon from "../../../resources/azure/database/data-lake.png";
import database_for_mariadb_serversIcon from "../../../resources/azure/database/database-for-mariadb-servers.png";
import database_for_mysql_serversIcon from "../../../resources/azure/database/database-for-mysql-servers.png";
import database_for_postgresql_serversIcon from "../../../resources/azure/database/database-for-postgresql-servers.png";
import elastic_database_poolsIcon from "../../../resources/azure/database/elastic-database-pools.png";
import elastic_job_agentsIcon from "../../../resources/azure/database/elastic-job-agents.png";
import instance_poolsIcon from "../../../resources/azure/database/instance-pools.png";
import managed_databasesIcon from "../../../resources/azure/database/managed-databases.png";
import sql_databasesIcon from "../../../resources/azure/database/sql-databases.png";
import sql_datawarehouseIcon from "../../../resources/azure/database/sql-datawarehouse.png";
import sql_managed_instancesIcon from "../../../resources/azure/database/sql-managed-instances.png";
import sql_server_stretch_databasesIcon from "../../../resources/azure/database/sql-server-stretch-databases.png";
import sql_serversIcon from "../../../resources/azure/database/sql-servers.png";
import sql_vmIcon from "../../../resources/azure/database/sql-vm.png";
import sqlIcon from "../../../resources/azure/database/sql.png";
import ssis_lift_and_shift_irIcon from "../../../resources/azure/database/ssis-lift-and-shift-ir.png";
import synapse_analyticsIcon from "../../../resources/azure/database/synapse-analytics.png";
import virtual_clustersIcon from "../../../resources/azure/database/virtual-clusters.png";
import virtual_datacenterIcon from "../../../resources/azure/database/virtual-datacenter.png";

class _Database extends _Azure {
  protected static override _type = "database";
}

export class BlobStorage extends _Database {
  protected static _iconDataUrl = blob_storageIcon;
}

export class CacheForRedis extends _Database {
  protected static _iconDataUrl = cache_for_redisIcon;
}

export class CosmosDb extends _Database {
  protected static _iconDataUrl = cosmos_dbIcon;
}

export class DataExplorerClusters extends _Database {
  protected static _iconDataUrl = data_explorer_clustersIcon;
}

export class DataFactory extends _Database {
  protected static _iconDataUrl = data_factoryIcon;
}

export class DataLake extends _Database {
  protected static _iconDataUrl = data_lakeIcon;
}

export class DatabaseForMariadbServers extends _Database {
  protected static _iconDataUrl = database_for_mariadb_serversIcon;
}

export class DatabaseForMysqlServers extends _Database {
  protected static _iconDataUrl = database_for_mysql_serversIcon;
}

export class DatabaseForPostgresqlServers extends _Database {
  protected static _iconDataUrl = database_for_postgresql_serversIcon;
}

export class ElasticDatabasePools extends _Database {
  protected static _iconDataUrl = elastic_database_poolsIcon;
}

export class ElasticJobAgents extends _Database {
  protected static _iconDataUrl = elastic_job_agentsIcon;
}

export class InstancePools extends _Database {
  protected static _iconDataUrl = instance_poolsIcon;
}

export class ManagedDatabases extends _Database {
  protected static _iconDataUrl = managed_databasesIcon;
}

export class SQLDatabases extends _Database {
  protected static _iconDataUrl = sql_databasesIcon;
}

export class SQLDatawarehouse extends _Database {
  protected static _iconDataUrl = sql_datawarehouseIcon;
}

export class SQLManagedInstances extends _Database {
  protected static _iconDataUrl = sql_managed_instancesIcon;
}

export class SQLServerStretchDatabases extends _Database {
  protected static _iconDataUrl = sql_server_stretch_databasesIcon;
}

export class SQLServers extends _Database {
  protected static _iconDataUrl = sql_serversIcon;
}

export class SQLVM extends _Database {
  protected static _iconDataUrl = sql_vmIcon;
}

export class SQL extends _Database {
  protected static _iconDataUrl = sqlIcon;
}

export class SsisLiftAndShiftIr extends _Database {
  protected static _iconDataUrl = ssis_lift_and_shift_irIcon;
}

export class SynapseAnalytics extends _Database {
  protected static _iconDataUrl = synapse_analyticsIcon;
}

export class VirtualClusters extends _Database {
  protected static _iconDataUrl = virtual_clustersIcon;
}

export class VirtualDatacenter extends _Database {
  protected static _iconDataUrl = virtual_datacenterIcon;
}
