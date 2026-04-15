import { _Gis } from "./index.js";
import postgisIcon from "../../../resources/gis/database/postgis.png";

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "database";
  return node;
}

export function Postgis(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Postgis", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Postgis";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = postgisIcon;
  return node;
}
