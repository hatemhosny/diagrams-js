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

class _Analytics extends _Gcp {
  protected static override _type = "analytics";
}

export class Bigquery extends _Analytics {
  protected static _iconDataUrl = bigqueryIcon;
}

export class Composer extends _Analytics {
  protected static _iconDataUrl = composerIcon;
}

export class DataCatalog extends _Analytics {
  protected static _iconDataUrl = data_catalogIcon;
}

export class DataFusion extends _Analytics {
  protected static _iconDataUrl = data_fusionIcon;
}

export class Dataflow extends _Analytics {
  protected static _iconDataUrl = dataflowIcon;
}

export class Datalab extends _Analytics {
  protected static _iconDataUrl = datalabIcon;
}

export class Dataprep extends _Analytics {
  protected static _iconDataUrl = dataprepIcon;
}

export class Dataproc extends _Analytics {
  protected static _iconDataUrl = dataprocIcon;
}

export class Genomics extends _Analytics {
  protected static _iconDataUrl = genomicsIcon;
}

export class Looker extends _Analytics {
  protected static _iconDataUrl = lookerIcon;
}

export class Pubsub extends _Analytics {
  protected static _iconDataUrl = pubsubIcon;
}

// Aliases
export const BigQuery = Bigquery;
export const PubSub = Pubsub;
