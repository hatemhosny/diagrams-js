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

class _Analytics extends _Onprem {
  protected static override _type = "analytics";
}

export class Beam extends _Analytics {
  protected static override _iconDataUrl = beamIcon;
}

export class Databricks extends _Analytics {
  protected static override _iconDataUrl = databricksIcon;
}

export class Dbt extends _Analytics {
  protected static override _iconDataUrl = dbtIcon;
}

export class Dremio extends _Analytics {
  protected static override _iconDataUrl = dremioIcon;
}

export class Flink extends _Analytics {
  protected static override _iconDataUrl = flinkIcon;
}

export class Hadoop extends _Analytics {
  protected static override _iconDataUrl = hadoopIcon;
}

export class Hive extends _Analytics {
  protected static override _iconDataUrl = hiveIcon;
}

export class Metabase extends _Analytics {
  protected static override _iconDataUrl = metabaseIcon;
}

export class Norikra extends _Analytics {
  protected static override _iconDataUrl = norikraIcon;
}

export class Powerbi extends _Analytics {
  protected static override _iconDataUrl = powerbiIcon;
}

export class Presto extends _Analytics {
  protected static override _iconDataUrl = prestoIcon;
}

export class Singer extends _Analytics {
  protected static override _iconDataUrl = singerIcon;
}

export class Spark extends _Analytics {
  protected static override _iconDataUrl = sparkIcon;
}

export class Storm extends _Analytics {
  protected static override _iconDataUrl = stormIcon;
}

export class Superset extends _Analytics {
  protected static override _iconDataUrl = supersetIcon;
}

export class Tableau extends _Analytics {
  protected static override _iconDataUrl = tableauIcon;
}

export class Trino extends _Analytics {
  protected static override _iconDataUrl = trinoIcon;
}

// Aliases
export const PowerBI = Powerbi;
