import { _Gis } from "./index.js";
import geotoolsIcon from "../../../resources/gis/java/geotools.png";

function _Java(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "java";
  return node;
}

export function Geotools(label?: string, options?: Record<string, unknown>) {
  const node = _Java(label ?? "Geotools", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = geotoolsIcon;
  return node;
}
