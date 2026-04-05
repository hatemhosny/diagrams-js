import { _Gis } from "./index.js";
import geopackageIcon from "../../../resources/gis/format/geopackage.png";
import geoparquetIcon from "../../../resources/gis/format/geoparquet.png";

function _Format(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)._type = "format";
  return node;
}

export function Geopackage(label?: string, options?: Record<string, unknown>) {
  const node = _Format(label ?? "Geopackage", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = geopackageIcon;
  return node;
}

export function Geoparquet(label?: string, options?: Record<string, unknown>) {
  const node = _Format(label ?? "Geoparquet", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = geoparquetIcon;
  return node;
}
