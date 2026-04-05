import { _Alibabacloud } from "./index.js";
import apsaradb_cassandraIcon from "../../../resources/alibabacloud/database/apsaradb-cassandra.png";
import apsaradb_hbaseIcon from "../../../resources/alibabacloud/database/apsaradb-hbase.png";
import apsaradb_memcacheIcon from "../../../resources/alibabacloud/database/apsaradb-memcache.png";
import apsaradb_mongodbIcon from "../../../resources/alibabacloud/database/apsaradb-mongodb.png";
import apsaradb_oceanbaseIcon from "../../../resources/alibabacloud/database/apsaradb-oceanbase.png";
import apsaradb_polardbIcon from "../../../resources/alibabacloud/database/apsaradb-polardb.png";
import apsaradb_postgresqlIcon from "../../../resources/alibabacloud/database/apsaradb-postgresql.png";
import apsaradb_ppasIcon from "../../../resources/alibabacloud/database/apsaradb-ppas.png";
import apsaradb_redisIcon from "../../../resources/alibabacloud/database/apsaradb-redis.png";
import apsaradb_sqlserverIcon from "../../../resources/alibabacloud/database/apsaradb-sqlserver.png";
import data_management_serviceIcon from "../../../resources/alibabacloud/database/data-management-service.png";
import data_transmission_serviceIcon from "../../../resources/alibabacloud/database/data-transmission-service.png";
import database_backup_serviceIcon from "../../../resources/alibabacloud/database/database-backup-service.png";
import disribute_relational_database_serviceIcon from "../../../resources/alibabacloud/database/disribute-relational-database-service.png";
import graph_database_serviceIcon from "../../../resources/alibabacloud/database/graph-database-service.png";
import hybriddb_for_mysqlIcon from "../../../resources/alibabacloud/database/hybriddb-for-mysql.png";
import relational_database_serviceIcon from "../../../resources/alibabacloud/database/relational-database-service.png";

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)._type = "database";
  return node;
}

export function ApsaradbCassandra(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbCassandra", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_cassandraIcon;
  return node;
}

export function ApsaradbHbase(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbHbase", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_hbaseIcon;
  return node;
}

export function ApsaradbMemcache(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbMemcache", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_memcacheIcon;
  return node;
}

export function ApsaradbMongodb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbMongodb", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_mongodbIcon;
  return node;
}

export function ApsaradbOceanbase(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbOceanbase", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_oceanbaseIcon;
  return node;
}

export function ApsaradbPolardb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbPolardb", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_polardbIcon;
  return node;
}

export function ApsaradbPostgresql(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbPostgresql", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_postgresqlIcon;
  return node;
}

export function ApsaradbPpas(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbPpas", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_ppasIcon;
  return node;
}

export function ApsaradbRedis(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbRedis", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_redisIcon;
  return node;
}

export function ApsaradbSqlserver(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ApsaradbSqlserver", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apsaradb_sqlserverIcon;
  return node;
}

export function DataManagementService(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DataManagementService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_management_serviceIcon;
  return node;
}

export function DataTransmissionService(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DataTransmissionService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = data_transmission_serviceIcon;
  return node;
}

export function DatabaseBackupService(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DatabaseBackupService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = database_backup_serviceIcon;
  return node;
}

export function DisributeRelationalDatabaseService(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Database(label ?? "DisributeRelationalDatabaseService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl =
    disribute_relational_database_serviceIcon;
  return node;
}

export function GraphDatabaseService(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "GraphDatabaseService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = graph_database_serviceIcon;
  return node;
}

export function HybriddbForMysql(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "HybriddbForMysql", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = hybriddb_for_mysqlIcon;
  return node;
}

export function RelationalDatabaseService(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "RelationalDatabaseService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = relational_database_serviceIcon;
  return node;
}

// Aliases
export const DMS = DataManagementService;
export const DTS = DataTransmissionService;
export const DBS = DatabaseBackupService;
export const DRDS = DisributeRelationalDatabaseService;
export const GDS = GraphDatabaseService;
export const RDS = RelationalDatabaseService;
