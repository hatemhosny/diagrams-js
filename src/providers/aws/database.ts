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

class _Database extends _Aws {
  protected static override _type = "database";
}

export class AuroraInstance extends _Database {
  protected static override _iconDataUrl = aurora_instanceIcon;
}

export class Aurora extends _Database {
  protected static override _iconDataUrl = auroraIcon;
}

export class DatabaseMigrationServiceDatabaseMigrationWorkflow extends _Database {
  protected static override _iconDataUrl =
    database_migration_service_database_migration_workflowIcon;
}

export class DatabaseMigrationService extends _Database {
  protected static override _iconDataUrl = database_migration_serviceIcon;
}

export class Database extends _Database {
  protected static override _iconDataUrl = databaseIcon;
}

export class DocumentdbMongodbCompatibility extends _Database {
  protected static override _iconDataUrl = documentdb_mongodb_compatibilityIcon;
}

export class DynamodbAttribute extends _Database {
  protected static override _iconDataUrl = dynamodb_attributeIcon;
}

export class DynamodbAttributes extends _Database {
  protected static override _iconDataUrl = dynamodb_attributesIcon;
}

export class DynamodbDax extends _Database {
  protected static override _iconDataUrl = dynamodb_daxIcon;
}

export class DynamodbGlobalSecondaryIndex extends _Database {
  protected static override _iconDataUrl = dynamodb_global_secondary_indexIcon;
}

export class DynamodbItem extends _Database {
  protected static override _iconDataUrl = dynamodb_itemIcon;
}

export class DynamodbItems extends _Database {
  protected static override _iconDataUrl = dynamodb_itemsIcon;
}

export class DynamodbStreams extends _Database {
  protected static override _iconDataUrl = dynamodb_streamsIcon;
}

export class DynamodbTable extends _Database {
  protected static override _iconDataUrl = dynamodb_tableIcon;
}

export class Dynamodb extends _Database {
  protected static override _iconDataUrl = dynamodbIcon;
}

export class ElasticacheCacheNode extends _Database {
  protected static override _iconDataUrl = elasticache_cache_nodeIcon;
}

export class ElasticacheForMemcached extends _Database {
  protected static override _iconDataUrl = elasticache_for_memcachedIcon;
}

export class ElasticacheForRedis extends _Database {
  protected static override _iconDataUrl = elasticache_for_redisIcon;
}

export class Elasticache extends _Database {
  protected static override _iconDataUrl = elasticacheIcon;
}

export class KeyspacesManagedApacheCassandraService extends _Database {
  protected static override _iconDataUrl = keyspaces_managed_apache_cassandra_serviceIcon;
}

export class Neptune extends _Database {
  protected static override _iconDataUrl = neptuneIcon;
}

export class QuantumLedgerDatabaseQldb extends _Database {
  protected static override _iconDataUrl = quantum_ledger_database_qldbIcon;
}

export class RDSInstance extends _Database {
  protected static override _iconDataUrl = rds_instanceIcon;
}

export class RDSMariadbInstance extends _Database {
  protected static override _iconDataUrl = rds_mariadb_instanceIcon;
}

export class RDSMysqlInstance extends _Database {
  protected static override _iconDataUrl = rds_mysql_instanceIcon;
}

export class RDSOnVmware extends _Database {
  protected static override _iconDataUrl = rds_on_vmwareIcon;
}

export class RDSOracleInstance extends _Database {
  protected static override _iconDataUrl = rds_oracle_instanceIcon;
}

export class RDSPostgresqlInstance extends _Database {
  protected static override _iconDataUrl = rds_postgresql_instanceIcon;
}

export class RDSSqlServerInstance extends _Database {
  protected static override _iconDataUrl = rds_sql_server_instanceIcon;
}

export class RDS extends _Database {
  protected static override _iconDataUrl = rdsIcon;
}

export class RedshiftDenseComputeNode extends _Database {
  protected static override _iconDataUrl = redshift_dense_compute_nodeIcon;
}

export class RedshiftDenseStorageNode extends _Database {
  protected static override _iconDataUrl = redshift_dense_storage_nodeIcon;
}

export class Redshift extends _Database {
  protected static override _iconDataUrl = redshiftIcon;
}

export class Timestream extends _Database {
  protected static override _iconDataUrl = timestreamIcon;
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
