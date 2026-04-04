import { _Alibabacloud } from "./index.js";
import analytic_dbIcon from "../../../resources/alibabacloud/analytics/analytic-db.png";
import click_houseIcon from "../../../resources/alibabacloud/analytics/click-house.png";
import data_lake_analyticsIcon from "../../../resources/alibabacloud/analytics/data-lake-analytics.png";
import elatic_map_reduceIcon from "../../../resources/alibabacloud/analytics/elatic-map-reduce.png";
import open_searchIcon from "../../../resources/alibabacloud/analytics/open-search.png";

class _Analytics extends _Alibabacloud {
  protected static override _type = "analytics";
}

export class AnalyticDb extends _Analytics {
  protected static override _iconDataUrl = analytic_dbIcon;
}

export class ClickHouse extends _Analytics {
  protected static override _iconDataUrl = click_houseIcon;
}

export class DataLakeAnalytics extends _Analytics {
  protected static override _iconDataUrl = data_lake_analyticsIcon;
}

export class ElaticMapReduce extends _Analytics {
  protected static override _iconDataUrl = elatic_map_reduceIcon;
}

export class OpenSearch extends _Analytics {
  protected static override _iconDataUrl = open_searchIcon;
}
