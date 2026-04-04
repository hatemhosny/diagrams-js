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

class _Database extends _Alibabacloud {
  protected static override _type = "database";
}

export class ApsaradbCassandra extends _Database {
  protected static override _iconDataUrl = apsaradb_cassandraIcon;
}

export class ApsaradbHbase extends _Database {
  protected static override _iconDataUrl = apsaradb_hbaseIcon;
}

export class ApsaradbMemcache extends _Database {
  protected static override _iconDataUrl = apsaradb_memcacheIcon;
}

export class ApsaradbMongodb extends _Database {
  protected static override _iconDataUrl = apsaradb_mongodbIcon;
}

export class ApsaradbOceanbase extends _Database {
  protected static override _iconDataUrl = apsaradb_oceanbaseIcon;
}

export class ApsaradbPolardb extends _Database {
  protected static override _iconDataUrl = apsaradb_polardbIcon;
}

export class ApsaradbPostgresql extends _Database {
  protected static override _iconDataUrl = apsaradb_postgresqlIcon;
}

export class ApsaradbPpas extends _Database {
  protected static override _iconDataUrl = apsaradb_ppasIcon;
}

export class ApsaradbRedis extends _Database {
  protected static override _iconDataUrl = apsaradb_redisIcon;
}

export class ApsaradbSqlserver extends _Database {
  protected static override _iconDataUrl = apsaradb_sqlserverIcon;
}

export class DataManagementService extends _Database {
  protected static override _iconDataUrl = data_management_serviceIcon;
}

export class DataTransmissionService extends _Database {
  protected static override _iconDataUrl = data_transmission_serviceIcon;
}

export class DatabaseBackupService extends _Database {
  protected static override _iconDataUrl = database_backup_serviceIcon;
}

export class DisributeRelationalDatabaseService extends _Database {
  protected static override _iconDataUrl = disribute_relational_database_serviceIcon;
}

export class GraphDatabaseService extends _Database {
  protected static override _iconDataUrl = graph_database_serviceIcon;
}

export class HybriddbForMysql extends _Database {
  protected static override _iconDataUrl = hybriddb_for_mysqlIcon;
}

export class RelationalDatabaseService extends _Database {
  protected static override _iconDataUrl = relational_database_serviceIcon;
}

// Aliases
export const DMS = DataManagementService;
export const DTS = DataTransmissionService;
export const DBS = DatabaseBackupService;
export const DRDS = DisributeRelationalDatabaseService;
export const GDS = GraphDatabaseService;
export const RDS = RelationalDatabaseService;
