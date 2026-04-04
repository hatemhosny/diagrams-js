import { _Oci } from "./index.js";
import autonomous_whiteIcon from "../../../resources/oci/database/autonomous-white.png";
import autonomousIcon from "../../../resources/oci/database/autonomous.png";
import bigdata_service_whiteIcon from "../../../resources/oci/database/bigdata-service-white.png";
import bigdata_serviceIcon from "../../../resources/oci/database/bigdata-service.png";
import database_service_whiteIcon from "../../../resources/oci/database/database-service-white.png";
import database_serviceIcon from "../../../resources/oci/database/database-service.png";
import dataflow_apache_whiteIcon from "../../../resources/oci/database/dataflow-apache-white.png";
import dataflow_apacheIcon from "../../../resources/oci/database/dataflow-apache.png";
import dcat_whiteIcon from "../../../resources/oci/database/dcat-white.png";
import dcatIcon from "../../../resources/oci/database/dcat.png";
import dis_whiteIcon from "../../../resources/oci/database/dis-white.png";
import disIcon from "../../../resources/oci/database/dis.png";
import dms_whiteIcon from "../../../resources/oci/database/dms-white.png";
import dmsIcon from "../../../resources/oci/database/dms.png";
import science_whiteIcon from "../../../resources/oci/database/science-white.png";
import scienceIcon from "../../../resources/oci/database/science.png";
import stream_whiteIcon from "../../../resources/oci/database/stream-white.png";
import streamIcon from "../../../resources/oci/database/stream.png";

class _Database extends _Oci {
  protected static override _type = "database";
}

export class AutonomousWhite extends _Database {
  protected static _iconDataUrl = autonomous_whiteIcon;
}

export class Autonomous extends _Database {
  protected static _iconDataUrl = autonomousIcon;
}

export class BigdataServiceWhite extends _Database {
  protected static _iconDataUrl = bigdata_service_whiteIcon;
}

export class BigdataService extends _Database {
  protected static _iconDataUrl = bigdata_serviceIcon;
}

export class DatabaseServiceWhite extends _Database {
  protected static _iconDataUrl = database_service_whiteIcon;
}

export class DatabaseService extends _Database {
  protected static _iconDataUrl = database_serviceIcon;
}

export class DataflowApacheWhite extends _Database {
  protected static _iconDataUrl = dataflow_apache_whiteIcon;
}

export class DataflowApache extends _Database {
  protected static _iconDataUrl = dataflow_apacheIcon;
}

export class DcatWhite extends _Database {
  protected static _iconDataUrl = dcat_whiteIcon;
}

export class Dcat extends _Database {
  protected static _iconDataUrl = dcatIcon;
}

export class DisWhite extends _Database {
  protected static _iconDataUrl = dis_whiteIcon;
}

export class Dis extends _Database {
  protected static _iconDataUrl = disIcon;
}

export class DMSWhite extends _Database {
  protected static _iconDataUrl = dms_whiteIcon;
}

export class DMS extends _Database {
  protected static _iconDataUrl = dmsIcon;
}

export class ScienceWhite extends _Database {
  protected static _iconDataUrl = science_whiteIcon;
}

export class Science extends _Database {
  protected static _iconDataUrl = scienceIcon;
}

export class StreamWhite extends _Database {
  protected static _iconDataUrl = stream_whiteIcon;
}

export class Stream extends _Database {
  protected static _iconDataUrl = streamIcon;
}

// Aliases
export const ADB = Autonomous;
export const ADBWhite = AutonomousWhite;
export const DBService = DatabaseService;
export const DBServiceWhite = DatabaseServiceWhite;
