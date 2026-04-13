import { _Gcp } from "./index.js";
import bigqueryIcon from "../../../resources/gcp/analytics/bigquery.png";
import composerIcon from "../../../resources/gcp/analytics/composer.png";
import data_catalogIcon from "../../../resources/gcp/analytics/data-catalog.png";
import data_fusionIcon from "../../../resources/gcp/analytics/data-fusion.png";
import dataflowIcon from "../../../resources/gcp/analytics/dataflow.png";
import datalabIcon from "../../../resources/gcp/analytics/datalab.png";
import dataprepIcon from "../../../resources/gcp/analytics/dataprep.png";
import dataprocIcon from "../../../resources/gcp/analytics/dataproc.png";
import genomicsIcon from "../../../resources/gcp/analytics/genomics.png";
import lookerIcon from "../../../resources/gcp/analytics/looker.png";
import pubsubIcon from "../../../resources/gcp/analytics/pubsub.png";

function _Analytics(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "analytics";
  return node;
}

export function Bigquery(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Bigquery", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Bigquery";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bigqueryIcon;
  return node;
}

export function Composer(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Composer", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Composer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = composerIcon;
  return node;
}

export function DataCatalog(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataCatalog", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataCatalog";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_catalogIcon;
  return node;
}

export function DataFusion(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataFusion", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataFusion";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_fusionIcon;
  return node;
}

export function Dataflow(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Dataflow", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Dataflow";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dataflowIcon;
  return node;
}

export function Datalab(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Datalab", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Datalab";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = datalabIcon;
  return node;
}

export function Dataprep(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Dataprep", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Dataprep";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dataprepIcon;
  return node;
}

export function Dataproc(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Dataproc", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Dataproc";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dataprocIcon;
  return node;
}

export function Genomics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Genomics", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Genomics";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = genomicsIcon;
  return node;
}

export function Looker(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Looker", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Looker";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lookerIcon;
  return node;
}

export function Pubsub(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Pubsub", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Pubsub";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pubsubIcon;
  return node;
}

// Aliases
export const BigQuery = Bigquery;
export const PubSub = Pubsub;
