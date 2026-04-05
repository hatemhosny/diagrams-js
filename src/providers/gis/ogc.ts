import { _Gis } from "./index.js";
import ogcIcon from "../../../resources/gis/ogc/ogc.png";
import wfsIcon from "../../../resources/gis/ogc/wfs.png";
import wmsIcon from "../../../resources/gis/ogc/wms.png";

function _Ogc(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)._type = "ogc";
  return node;
}

export function OGC(label?: string, options?: Record<string, unknown>) {
  const node = _Ogc(label ?? "OGC", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ogcIcon;
  return node;
}

export function WFS(label?: string, options?: Record<string, unknown>) {
  const node = _Ogc(label ?? "WFS", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = wfsIcon;
  return node;
}

export function WMS(label?: string, options?: Record<string, unknown>) {
  const node = _Ogc(label ?? "WMS", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = wmsIcon;
  return node;
}
