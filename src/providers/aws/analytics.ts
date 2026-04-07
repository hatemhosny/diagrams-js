import { _Aws } from "./index.js";
import amazon_opensearch_serviceIcon from "../../../resources/aws/analytics/amazon-opensearch-service.png";
import analyticsIcon from "../../../resources/aws/analytics/analytics.png";
import athenaIcon from "../../../resources/aws/analytics/athena.png";
import cloudsearch_search_documentsIcon from "../../../resources/aws/analytics/cloudsearch-search-documents.png";
import cloudsearchIcon from "../../../resources/aws/analytics/cloudsearch.png";
import data_lake_resourceIcon from "../../../resources/aws/analytics/data-lake-resource.png";
import data_pipelineIcon from "../../../resources/aws/analytics/data-pipeline.png";
import elasticsearch_serviceIcon from "../../../resources/aws/analytics/elasticsearch-service.png";
import emr_clusterIcon from "../../../resources/aws/analytics/emr-cluster.png";
import emr_engine_mapr_m3Icon from "../../../resources/aws/analytics/emr-engine-mapr-m3.png";
import emr_engine_mapr_m5Icon from "../../../resources/aws/analytics/emr-engine-mapr-m5.png";
import emr_engine_mapr_m7Icon from "../../../resources/aws/analytics/emr-engine-mapr-m7.png";
import emr_engineIcon from "../../../resources/aws/analytics/emr-engine.png";
import emr_hdfs_clusterIcon from "../../../resources/aws/analytics/emr-hdfs-cluster.png";
import emrIcon from "../../../resources/aws/analytics/emr.png";
import glue_crawlersIcon from "../../../resources/aws/analytics/glue-crawlers.png";
import glue_data_catalogIcon from "../../../resources/aws/analytics/glue-data-catalog.png";
import glueIcon from "../../../resources/aws/analytics/glue.png";
import kinesis_data_analyticsIcon from "../../../resources/aws/analytics/kinesis-data-analytics.png";
import kinesis_data_firehoseIcon from "../../../resources/aws/analytics/kinesis-data-firehose.png";
import kinesis_data_streamsIcon from "../../../resources/aws/analytics/kinesis-data-streams.png";
import kinesis_video_streamsIcon from "../../../resources/aws/analytics/kinesis-video-streams.png";
import kinesisIcon from "../../../resources/aws/analytics/kinesis.png";
import lake_formationIcon from "../../../resources/aws/analytics/lake-formation.png";
import managed_streaming_for_kafkaIcon from "../../../resources/aws/analytics/managed-streaming-for-kafka.png";
import quicksightIcon from "../../../resources/aws/analytics/quicksight.png";
import redshift_dense_compute_nodeIcon from "../../../resources/aws/analytics/redshift-dense-compute-node.png";
import redshift_dense_storage_nodeIcon from "../../../resources/aws/analytics/redshift-dense-storage-node.png";
import redshiftIcon from "../../../resources/aws/analytics/redshift.png";

function _Analytics(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "analytics";
  return node;
}

export function AmazonOpensearchService(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "AmazonOpensearchService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = amazon_opensearch_serviceIcon;
  return node;
}

export function Analytics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Analytics", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = analyticsIcon;
  return node;
}

export function Athena(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Athena", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = athenaIcon;
  return node;
}

export function CloudsearchSearchDocuments(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "CloudsearchSearchDocuments", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudsearch_search_documentsIcon;
  return node;
}

export function Cloudsearch(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Cloudsearch", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudsearchIcon;
  return node;
}

export function DataLakeResource(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataLakeResource", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_lake_resourceIcon;
  return node;
}

export function DataPipeline(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "DataPipeline", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_pipelineIcon;
  return node;
}

export function ElasticsearchService(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "ElasticsearchService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = elasticsearch_serviceIcon;
  return node;
}

export function EMRCluster(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EMRCluster", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = emr_clusterIcon;
  return node;
}

export function EMREngineMaprM3(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EMREngineMaprM3", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = emr_engine_mapr_m3Icon;
  return node;
}

export function EMREngineMaprM5(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EMREngineMaprM5", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = emr_engine_mapr_m5Icon;
  return node;
}

export function EMREngineMaprM7(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EMREngineMaprM7", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = emr_engine_mapr_m7Icon;
  return node;
}

export function EMREngine(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EMREngine", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = emr_engineIcon;
  return node;
}

export function EMRHdfsCluster(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EMRHdfsCluster", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = emr_hdfs_clusterIcon;
  return node;
}

export function EMR(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "EMR", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = emrIcon;
  return node;
}

export function GlueCrawlers(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "GlueCrawlers", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = glue_crawlersIcon;
  return node;
}

export function GlueDataCatalog(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "GlueDataCatalog", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = glue_data_catalogIcon;
  return node;
}

export function Glue(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Glue", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = glueIcon;
  return node;
}

export function KinesisDataAnalytics(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "KinesisDataAnalytics", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kinesis_data_analyticsIcon;
  return node;
}

export function KinesisDataFirehose(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "KinesisDataFirehose", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kinesis_data_firehoseIcon;
  return node;
}

export function KinesisDataStreams(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "KinesisDataStreams", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kinesis_data_streamsIcon;
  return node;
}

export function KinesisVideoStreams(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "KinesisVideoStreams", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kinesis_video_streamsIcon;
  return node;
}

export function Kinesis(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Kinesis", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kinesisIcon;
  return node;
}

export function LakeFormation(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "LakeFormation", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lake_formationIcon;
  return node;
}

export function ManagedStreamingForKafka(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "ManagedStreamingForKafka", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managed_streaming_for_kafkaIcon;
  return node;
}

export function Quicksight(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Quicksight", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = quicksightIcon;
  return node;
}

export function RedshiftDenseComputeNode(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "RedshiftDenseComputeNode", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = redshift_dense_compute_nodeIcon;
  return node;
}

export function RedshiftDenseStorageNode(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "RedshiftDenseStorageNode", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = redshift_dense_storage_nodeIcon;
  return node;
}

export function Redshift(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Redshift", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = redshiftIcon;
  return node;
}

// Aliases
export const ES = ElasticsearchService;
