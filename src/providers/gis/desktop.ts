import { _Gis } from "./index.js";
import maptunikIcon from "../../../resources/gis/desktop/maptunik.png";
import qgisIcon from "../../../resources/gis/desktop/qgis.png";

function _Desktop(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)._type = "desktop";
  return node;
}

export function Maptunik(label?: string, options?: Record<string, unknown>) {
  const node = _Desktop(label ?? "Maptunik", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = maptunikIcon;
  return node;
}

export function QGIS(label?: string, options?: Record<string, unknown>) {
  const node = _Desktop(label ?? "QGIS", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = qgisIcon;
  return node;
}
