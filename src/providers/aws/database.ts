import { _Aws } from "./index.js";
import aurora_instanceIcon from "../../../resources/aws/database/aurora-instance.png";
import auroraIcon from "../../../resources/aws/database/aurora.png";
import database_migration_service_database_migration_workflowIcon from "../../../resources/aws/database/database-migration-service-database-migration-workflow.png";
import database_migration_serviceIcon from "../../../resources/aws/database/database-migration-service.png";
import databaseIcon from "../../../resources/aws/database/database.png";
import documentdb_mongodb_compatibilityIcon from "../../../resources/aws/database/documentdb-mongodb-compatibility.png";
import dynamodb_attributeIcon from "../../../resources/aws/database/dynamodb-attribute.png";
import dynamodb_attributesIcon from "../../../resources/aws/database/dynamodb-attributes.png";
import dynamodb_daxIcon from "../../../resources/aws/database/dynamodb-dax.png";
import dynamodb_global_secondary_indexIcon from "../../../resources/aws/database/dynamodb-global-secondary-index.png";
import dynamodb_itemIcon from "../../../resources/aws/database/dynamodb-item.png";
import dynamodb_itemsIcon from "../../../resources/aws/database/dynamodb-items.png";
import dynamodb_streamsIcon from "../../../resources/aws/database/dynamodb-streams.png";
import dynamodb_tableIcon from "../../../resources/aws/database/dynamodb-table.png";
import dynamodbIcon from "../../../resources/aws/database/dynamodb.png";
import elasticache_cache_nodeIcon from "../../../resources/aws/database/elasticache-cache-node.png";
import elasticache_for_memcachedIcon from "../../../resources/aws/database/elasticache-for-memcached.png";
import elasticache_for_redisIcon from "../../../resources/aws/database/elasticache-for-redis.png";
import elasticacheIcon from "../../../resources/aws/database/elasticache.png";
import keyspaces_managed_apache_cassandra_serviceIcon from "../../../resources/aws/database/keyspaces-managed-apache-cassandra-service.png";
import neptuneIcon from "../../../resources/aws/database/neptune.png";
import quantum_ledger_database_qldbIcon from "../../../resources/aws/database/quantum-ledger-database-qldb.png";
import rds_instanceIcon from "../../../resources/aws/database/rds-instance.png";
import rds_mariadb_instanceIcon from "../../../resources/aws/database/rds-mariadb-instance.png";
import rds_mysql_instanceIcon from "../../../resources/aws/database/rds-mysql-instance.png";
import rds_on_vmwareIcon from "../../../resources/aws/database/rds-on-vmware.png";
import rds_oracle_instanceIcon from "../../../resources/aws/database/rds-oracle-instance.png";
import rds_postgresql_instanceIcon from "../../../resources/aws/database/rds-postgresql-instance.png";
import rds_sql_server_instanceIcon from "../../../resources/aws/database/rds-sql-server-instance.png";
import rdsIcon from "../../../resources/aws/database/rds.png";
import redshift_dense_compute_nodeIcon from "../../../resources/aws/database/redshift-dense-compute-node.png";
import redshift_dense_storage_nodeIcon from "../../../resources/aws/database/redshift-dense-storage-node.png";
import redshiftIcon from "../../../resources/aws/database/redshift.png";
import timestreamIcon from "../../../resources/aws/database/timestream.png";

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "database";
  return node;
}

export function AuroraInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "AuroraInstance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = aurora_instanceIcon;
  return node;
}

export function Aurora(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Aurora", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = auroraIcon;
  return node;
}

export function DatabaseMigrationServiceDatabaseMigrationWorkflow(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Database(label ?? "DatabaseMigrationServiceDatabaseMigrationWorkflow", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    database_migration_service_database_migration_workflowIcon;
  return node;
}

export function DatabaseMigrationService(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DatabaseMigrationService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = database_migration_serviceIcon;
  return node;
}

export function Database(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Database", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = databaseIcon;
  return node;
}

export function DocumentdbMongodbCompatibility(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DocumentdbMongodbCompatibility", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    documentdb_mongodb_compatibilityIcon;
  return node;
}

export function DynamodbAttribute(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DynamodbAttribute", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynamodb_attributeIcon;
  return node;
}

export function DynamodbAttributes(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DynamodbAttributes", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynamodb_attributesIcon;
  return node;
}

export function DynamodbDax(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DynamodbDax", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynamodb_daxIcon;
  return node;
}

export function DynamodbGlobalSecondaryIndex(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DynamodbGlobalSecondaryIndex", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    dynamodb_global_secondary_indexIcon;
  return node;
}

export function DynamodbItem(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DynamodbItem", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynamodb_itemIcon;
  return node;
}

export function DynamodbItems(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DynamodbItems", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynamodb_itemsIcon;
  return node;
}

export function DynamodbStreams(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DynamodbStreams", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynamodb_streamsIcon;
  return node;
}

export function DynamodbTable(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DynamodbTable", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynamodb_tableIcon;
  return node;
}

export function Dynamodb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Dynamodb", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynamodbIcon;
  return node;
}

export function ElasticacheCacheNode(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ElasticacheCacheNode", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elasticache_cache_nodeIcon;
  return node;
}

export function ElasticacheForMemcached(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ElasticacheForMemcached", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elasticache_for_memcachedIcon;
  return node;
}

export function ElasticacheForRedis(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ElasticacheForRedis", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elasticache_for_redisIcon;
  return node;
}

export function Elasticache(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Elasticache", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elasticacheIcon;
  return node;
}

export function KeyspacesManagedApacheCassandraService(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Database(label ?? "KeyspacesManagedApacheCassandraService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    keyspaces_managed_apache_cassandra_serviceIcon;
  return node;
}

export function Neptune(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Neptune", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = neptuneIcon;
  return node;
}

export function QuantumLedgerDatabaseQldb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "QuantumLedgerDatabaseQldb", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = quantum_ledger_database_qldbIcon;
  return node;
}

export function RDSInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RDSInstance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rds_instanceIcon;
  return node;
}

export function RDSMariadbInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RDSMariadbInstance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rds_mariadb_instanceIcon;
  return node;
}

export function RDSMysqlInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RDSMysqlInstance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rds_mysql_instanceIcon;
  return node;
}

export function RDSOnVmware(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RDSOnVmware", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rds_on_vmwareIcon;
  return node;
}

export function RDSOracleInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RDSOracleInstance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rds_oracle_instanceIcon;
  return node;
}

export function RDSPostgresqlInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RDSPostgresqlInstance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rds_postgresql_instanceIcon;
  return node;
}

export function RDSSqlServerInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RDSSqlServerInstance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rds_sql_server_instanceIcon;
  return node;
}

export function RDS(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RDS", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rdsIcon;
  return node;
}

export function RedshiftDenseComputeNode(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RedshiftDenseComputeNode", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = redshift_dense_compute_nodeIcon;
  return node;
}

export function RedshiftDenseStorageNode(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RedshiftDenseStorageNode", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = redshift_dense_storage_nodeIcon;
  return node;
}

export function Redshift(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Redshift", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = redshiftIcon;
  return node;
}

export function Timestream(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Timestream", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = timestreamIcon;
  return node;
}

// Aliases
export const DMS = DatabaseMigrationService;
export const DocumentDB = DocumentdbMongodbCompatibility;
export const DAX = DynamodbDax;
export const DynamodbGSI = DynamodbGlobalSecondaryIndex;
export const DB = Database;
export const DDB = Dynamodb;
export const ElastiCache = Elasticache;
export const QLDB = QuantumLedgerDatabaseQldb;
