import { _Onprem } from "./index.js";
import beamIcon from "../../../resources/onprem/analytics/beam.png";
import databricksIcon from "../../../resources/onprem/analytics/databricks.png";
import dbtIcon from "../../../resources/onprem/analytics/dbt.png";
import dremioIcon from "../../../resources/onprem/analytics/dremio.png";
import flinkIcon from "../../../resources/onprem/analytics/flink.png";
import hadoopIcon from "../../../resources/onprem/analytics/hadoop.png";
import hiveIcon from "../../../resources/onprem/analytics/hive.png";
import metabaseIcon from "../../../resources/onprem/analytics/metabase.png";
import norikraIcon from "../../../resources/onprem/analytics/norikra.png";
import powerbiIcon from "../../../resources/onprem/analytics/powerbi.png";
import prestoIcon from "../../../resources/onprem/analytics/presto.png";
import singerIcon from "../../../resources/onprem/analytics/singer.png";
import sparkIcon from "../../../resources/onprem/analytics/spark.png";
import stormIcon from "../../../resources/onprem/analytics/storm.png";
import supersetIcon from "../../../resources/onprem/analytics/superset.png";
import tableauIcon from "../../../resources/onprem/analytics/tableau.png";
import trinoIcon from "../../../resources/onprem/analytics/trino.png";

function _Analytics(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "analytics";
  return node;
}

export function Beam(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Beam", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Beam";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = beamIcon;
  return node;
}

export function Databricks(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Databricks", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Databricks";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = databricksIcon;
  return node;
}

export function Dbt(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Dbt", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Dbt";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dbtIcon;
  return node;
}

export function Dremio(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Dremio", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Dremio";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dremioIcon;
  return node;
}

export function Flink(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Flink", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Flink";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = flinkIcon;
  return node;
}

export function Hadoop(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Hadoop", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Hadoop";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hadoopIcon;
  return node;
}

export function Hive(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Hive", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Hive";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hiveIcon;
  return node;
}

export function Metabase(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Metabase", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Metabase";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = metabaseIcon;
  return node;
}

export function Norikra(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Norikra", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Norikra";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = norikraIcon;
  return node;
}

export function Powerbi(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Powerbi", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Powerbi";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = powerbiIcon;
  return node;
}

export function Presto(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Presto", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Presto";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = prestoIcon;
  return node;
}

export function Singer(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Singer", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Singer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = singerIcon;
  return node;
}

export function Spark(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Spark", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Spark";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sparkIcon;
  return node;
}

export function Storm(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Storm", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Storm";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = stormIcon;
  return node;
}

export function Superset(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Superset", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Superset";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = supersetIcon;
  return node;
}

export function Tableau(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Tableau", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Tableau";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tableauIcon;
  return node;
}

export function Trino(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Trino", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Trino";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = trinoIcon;
  return node;
}

// Aliases
export const PowerBI = Powerbi;
