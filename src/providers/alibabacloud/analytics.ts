import { _Alibabacloud } from "./index.js";
import analytic_dbIcon from "../../../resources/alibabacloud/analytics/analytic-db.png";
import click_houseIcon from "../../../resources/alibabacloud/analytics/click-house.png";
import data_lake_analyticsIcon from "../../../resources/alibabacloud/analytics/data-lake-analytics.png";
import elatic_map_reduceIcon from "../../../resources/alibabacloud/analytics/elatic-map-reduce.png";
import open_searchIcon from "../../../resources/alibabacloud/analytics/open-search.png";

function _Analytics(label?: string, options?: Record<string, unknown>) {
  const node = _Alibabacloud(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "analytics";
  return node;
}

export function AnalyticDb(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "AnalyticDb", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AnalyticDb";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = analytic_dbIcon;
  return node;
}

export function ClickHouse(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "ClickHouse", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ClickHouse";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = click_houseIcon;
  return node;
}

export function DataLakeAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataLakeAnalytics", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataLakeAnalytics";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_lake_analyticsIcon;
  return node;
}

export function ElaticMapReduce(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "ElaticMapReduce", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ElaticMapReduce";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elatic_map_reduceIcon;
  return node;
}

export function OpenSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "OpenSearch", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "OpenSearch";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = open_searchIcon;
  return node;
}
