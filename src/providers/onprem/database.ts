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

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "database";
  return node;
}

export function Cassandra(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Cassandra", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cassandra";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cassandraIcon;
  return node;
}

export function Clickhouse(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Clickhouse", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Clickhouse";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = clickhouseIcon;
  return node;
}

export function Cockroachdb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Cockroachdb", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cockroachdb";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cockroachdbIcon;
  return node;
}

export function Couchbase(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Couchbase", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Couchbase";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = couchbaseIcon;
  return node;
}

export function Couchdb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Couchdb", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Couchdb";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = couchdbIcon;
  return node;
}

export function Dgraph(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Dgraph", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Dgraph";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dgraphIcon;
  return node;
}

export function Druid(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Druid", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Druid";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = druidIcon;
  return node;
}

export function Duckdb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Duckdb", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Duckdb";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = duckdbIcon;
  return node;
}

export function Hbase(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Hbase", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Hbase";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hbaseIcon;
  return node;
}

export function Influxdb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Influxdb", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Influxdb";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = influxdbIcon;
  return node;
}

export function Janusgraph(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Janusgraph", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Janusgraph";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = janusgraphIcon;
  return node;
}

export function Mariadb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Mariadb", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Mariadb";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mariadbIcon;
  return node;
}

export function Mongodb(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Mongodb", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Mongodb";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mongodbIcon;
  return node;
}

export function Mssql(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Mssql", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Mssql";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mssqlIcon;
  return node;
}

export function Mysql(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Mysql", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Mysql";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mysqlIcon;
  return node;
}

export function Neo4j(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Neo4j", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Neo4j";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = neo4jIcon;
  return node;
}

export function Oracle(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Oracle", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Oracle";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = oracleIcon;
  return node;
}

export function Postgresql(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Postgresql", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Postgresql";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = postgresqlIcon;
  return node;
}

export function Qdrant(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Qdrant", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Qdrant";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = qdrantIcon;
  return node;
}

export function Scylla(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Scylla", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Scylla";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = scyllaIcon;
  return node;
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
