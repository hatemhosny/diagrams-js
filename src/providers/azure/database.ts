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

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "database";
  return node;
}

export function BlobStorage(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "BlobStorage", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = blob_storageIcon;
  return node;
}

export function CacheForRedis(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "CacheForRedis", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cache_for_redisIcon;
  return node;
}

export function CosmosDb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "CosmosDb", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cosmos_dbIcon;
  return node;
}

export function DataExplorerClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DataExplorerClusters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_explorer_clustersIcon;
  return node;
}

export function DataFactory(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DataFactory", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_factoryIcon;
  return node;
}

export function DataLake(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DataLake", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_lakeIcon;
  return node;
}

export function DatabaseForMariadbServers(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DatabaseForMariadbServers", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = database_for_mariadb_serversIcon;
  return node;
}

export function DatabaseForMysqlServers(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DatabaseForMysqlServers", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = database_for_mysql_serversIcon;
  return node;
}

export function DatabaseForPostgresqlServers(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DatabaseForPostgresqlServers", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = database_for_postgresql_serversIcon;
  return node;
}

export function ElasticDatabasePools(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ElasticDatabasePools", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = elastic_database_poolsIcon;
  return node;
}

export function ElasticJobAgents(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ElasticJobAgents", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = elastic_job_agentsIcon;
  return node;
}

export function InstancePools(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "InstancePools", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = instance_poolsIcon;
  return node;
}

export function ManagedDatabases(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ManagedDatabases", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = managed_databasesIcon;
  return node;
}

export function SQLDatabases(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQLDatabases", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_databasesIcon;
  return node;
}

export function SQLDatawarehouse(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQLDatawarehouse", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_datawarehouseIcon;
  return node;
}

export function SQLManagedInstances(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQLManagedInstances", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_managed_instancesIcon;
  return node;
}

export function SQLServerStretchDatabases(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQLServerStretchDatabases", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_server_stretch_databasesIcon;
  return node;
}

export function SQLServers(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQLServers", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_serversIcon;
  return node;
}

export function SQLVM(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQLVM", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sql_vmIcon;
  return node;
}

export function SQL(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQL", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sqlIcon;
  return node;
}

export function SsisLiftAndShiftIr(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SsisLiftAndShiftIr", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ssis_lift_and_shift_irIcon;
  return node;
}

export function SynapseAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SynapseAnalytics", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = synapse_analyticsIcon;
  return node;
}

export function VirtualClusters(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "VirtualClusters", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = virtual_clustersIcon;
  return node;
}

export function VirtualDatacenter(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "VirtualDatacenter", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = virtual_datacenterIcon;
  return node;
}
