import { _Onprem } from "./index.js";
import cassandraIcon from "../../../resources/onprem/database/cassandra.png";
import clickhouseIcon from "../../../resources/onprem/database/clickhouse.png";
import cockroachdbIcon from "../../../resources/onprem/database/cockroachdb.png";
import couchbaseIcon from "../../../resources/onprem/database/couchbase.png";
import couchdbIcon from "../../../resources/onprem/database/couchdb.png";
import dgraphIcon from "../../../resources/onprem/database/dgraph.png";
import druidIcon from "../../../resources/onprem/database/druid.png";
import duckdbIcon from "../../../resources/onprem/database/duckdb.png";
import hbaseIcon from "../../../resources/onprem/database/hbase.png";
import influxdbIcon from "../../../resources/onprem/database/influxdb.png";
import janusgraphIcon from "../../../resources/onprem/database/janusgraph.png";
import mariadbIcon from "../../../resources/onprem/database/mariadb.png";
import mongodbIcon from "../../../resources/onprem/database/mongodb.png";
import mssqlIcon from "../../../resources/onprem/database/mssql.png";
import mysqlIcon from "../../../resources/onprem/database/mysql.png";
import neo4jIcon from "../../../resources/onprem/database/neo4j.png";
import oracleIcon from "../../../resources/onprem/database/oracle.png";
import postgresqlIcon from "../../../resources/onprem/database/postgresql.png";
import qdrantIcon from "../../../resources/onprem/database/qdrant.png";
import scyllaIcon from "../../../resources/onprem/database/scylla.png";

class _Database extends _Onprem {
  protected static override _type = "database";
}

export class Cassandra extends _Database {
  protected static override _iconDataUrl = cassandraIcon;
}

export class Clickhouse extends _Database {
  protected static override _iconDataUrl = clickhouseIcon;
}

export class Cockroachdb extends _Database {
  protected static override _iconDataUrl = cockroachdbIcon;
}

export class Couchbase extends _Database {
  protected static override _iconDataUrl = couchbaseIcon;
}

export class Couchdb extends _Database {
  protected static override _iconDataUrl = couchdbIcon;
}

export class Dgraph extends _Database {
  protected static override _iconDataUrl = dgraphIcon;
}

export class Druid extends _Database {
  protected static override _iconDataUrl = druidIcon;
}

export class Duckdb extends _Database {
  protected static override _iconDataUrl = duckdbIcon;
}

export class Hbase extends _Database {
  protected static override _iconDataUrl = hbaseIcon;
}

export class Influxdb extends _Database {
  protected static override _iconDataUrl = influxdbIcon;
}

export class Janusgraph extends _Database {
  protected static override _iconDataUrl = janusgraphIcon;
}

export class Mariadb extends _Database {
  protected static override _iconDataUrl = mariadbIcon;
}

export class Mongodb extends _Database {
  protected static override _iconDataUrl = mongodbIcon;
}

export class Mssql extends _Database {
  protected static override _iconDataUrl = mssqlIcon;
}

export class Mysql extends _Database {
  protected static override _iconDataUrl = mysqlIcon;
}

export class Neo4j extends _Database {
  protected static override _iconDataUrl = neo4jIcon;
}

export class Oracle extends _Database {
  protected static override _iconDataUrl = oracleIcon;
}

export class Postgresql extends _Database {
  protected static override _iconDataUrl = postgresqlIcon;
}

export class Qdrant extends _Database {
  protected static override _iconDataUrl = qdrantIcon;
}

export class Scylla extends _Database {
  protected static override _iconDataUrl = scyllaIcon;
}

// Aliases
export const ClickHouse = Clickhouse;
export const CockroachDB = Cockroachdb;
export const CouchDB = Couchdb;
export const HBase = Hbase;
export const InfluxDB = Influxdb;
export const JanusGraph = Janusgraph;
export const MariaDB = Mariadb;
export const MongoDB = Mongodb;
export const MSSQL = Mssql;
export const MySQL = Mysql;
export const PostgreSQL = Postgresql;
