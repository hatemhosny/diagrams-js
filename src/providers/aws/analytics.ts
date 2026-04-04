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

class _Analytics extends _Aws {
  protected static override _type = "analytics";
}

export class AmazonOpensearchService extends _Analytics {
  protected static override _iconDataUrl = amazon_opensearch_serviceIcon;
}

export class Analytics extends _Analytics {
  protected static override _iconDataUrl = analyticsIcon;
}

export class Athena extends _Analytics {
  protected static override _iconDataUrl = athenaIcon;
}

export class CloudsearchSearchDocuments extends _Analytics {
  protected static override _iconDataUrl = cloudsearch_search_documentsIcon;
}

export class Cloudsearch extends _Analytics {
  protected static override _iconDataUrl = cloudsearchIcon;
}

export class DataLakeResource extends _Analytics {
  protected static override _iconDataUrl = data_lake_resourceIcon;
}

export class DataPipeline extends _Analytics {
  protected static override _iconDataUrl = data_pipelineIcon;
}

export class ElasticsearchService extends _Analytics {
  protected static override _iconDataUrl = elasticsearch_serviceIcon;
}

export class EMRCluster extends _Analytics {
  protected static override _iconDataUrl = emr_clusterIcon;
}

export class EMREngineMaprM3 extends _Analytics {
  protected static override _iconDataUrl = emr_engine_mapr_m3Icon;
}

export class EMREngineMaprM5 extends _Analytics {
  protected static override _iconDataUrl = emr_engine_mapr_m5Icon;
}

export class EMREngineMaprM7 extends _Analytics {
  protected static override _iconDataUrl = emr_engine_mapr_m7Icon;
}

export class EMREngine extends _Analytics {
  protected static override _iconDataUrl = emr_engineIcon;
}

export class EMRHdfsCluster extends _Analytics {
  protected static override _iconDataUrl = emr_hdfs_clusterIcon;
}

export class EMR extends _Analytics {
  protected static override _iconDataUrl = emrIcon;
}

export class GlueCrawlers extends _Analytics {
  protected static override _iconDataUrl = glue_crawlersIcon;
}

export class GlueDataCatalog extends _Analytics {
  protected static override _iconDataUrl = glue_data_catalogIcon;
}

export class Glue extends _Analytics {
  protected static override _iconDataUrl = glueIcon;
}

export class KinesisDataAnalytics extends _Analytics {
  protected static override _iconDataUrl = kinesis_data_analyticsIcon;
}

export class KinesisDataFirehose extends _Analytics {
  protected static override _iconDataUrl = kinesis_data_firehoseIcon;
}

export class KinesisDataStreams extends _Analytics {
  protected static override _iconDataUrl = kinesis_data_streamsIcon;
}

export class KinesisVideoStreams extends _Analytics {
  protected static override _iconDataUrl = kinesis_video_streamsIcon;
}

export class Kinesis extends _Analytics {
  protected static override _iconDataUrl = kinesisIcon;
}

export class LakeFormation extends _Analytics {
  protected static override _iconDataUrl = lake_formationIcon;
}

export class ManagedStreamingForKafka extends _Analytics {
  protected static override _iconDataUrl = managed_streaming_for_kafkaIcon;
}

export class Quicksight extends _Analytics {
  protected static override _iconDataUrl = quicksightIcon;
}

export class RedshiftDenseComputeNode extends _Analytics {
  protected static override _iconDataUrl = redshift_dense_compute_nodeIcon;
}

export class RedshiftDenseStorageNode extends _Analytics {
  protected static override _iconDataUrl = redshift_dense_storage_nodeIcon;
}

export class Redshift extends _Analytics {
  protected static override _iconDataUrl = redshiftIcon;
}

// Aliases
export const ES = ElasticsearchService;
