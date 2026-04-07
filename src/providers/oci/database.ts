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

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "database";
  return node;
}

export function AutonomousWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "AutonomousWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = autonomous_whiteIcon;
  return node;
}

export function Autonomous(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Autonomous", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = autonomousIcon;
  return node;
}

export function BigdataServiceWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "BigdataServiceWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bigdata_service_whiteIcon;
  return node;
}

export function BigdataService(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "BigdataService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bigdata_serviceIcon;
  return node;
}

export function DatabaseServiceWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DatabaseServiceWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = database_service_whiteIcon;
  return node;
}

export function DatabaseService(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DatabaseService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = database_serviceIcon;
  return node;
}

export function DataflowApacheWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DataflowApacheWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dataflow_apache_whiteIcon;
  return node;
}

export function DataflowApache(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DataflowApache", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dataflow_apacheIcon;
  return node;
}

export function DcatWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DcatWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dcat_whiteIcon;
  return node;
}

export function Dcat(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Dcat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dcatIcon;
  return node;
}

export function DisWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DisWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dis_whiteIcon;
  return node;
}

export function Dis(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Dis", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = disIcon;
  return node;
}

export function DMSWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DMSWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dms_whiteIcon;
  return node;
}

export function DMS(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DMS", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dmsIcon;
  return node;
}

export function ScienceWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "ScienceWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = science_whiteIcon;
  return node;
}

export function Science(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Science", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = scienceIcon;
  return node;
}

export function StreamWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "StreamWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = stream_whiteIcon;
  return node;
}

export function Stream(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Stream", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = streamIcon;
  return node;
}

// Aliases
export const ADB = Autonomous;
export const ADBWhite = AutonomousWhite;
export const DBService = DatabaseService;
export const DBServiceWhite = DatabaseServiceWhite;
