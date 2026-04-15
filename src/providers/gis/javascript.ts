import { _Gis } from "./index.js";
import cesiumIcon from "../../../resources/gis/javascript/cesium.png";
import geostylerIcon from "../../../resources/gis/javascript/geostyler.png";
import keplerjsIcon from "../../../resources/gis/javascript/keplerjs.png";
import leafletIcon from "../../../resources/gis/javascript/leaflet.png";
import maplibreIcon from "../../../resources/gis/javascript/maplibre.png";
import ol_extIcon from "../../../resources/gis/javascript/ol-ext.png";
import openlayersIcon from "../../../resources/gis/javascript/openlayers.png";
import turfjsIcon from "../../../resources/gis/javascript/turfjs.png";

function _Javascript(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "javascript";
  return node;
}

export function Cesium(label?: string, options?: Record<string, unknown>) {
  const node = _Javascript(label ?? "Cesium", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Cesium";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cesiumIcon;
  return node;
}

export function Geostyler(label?: string, options?: Record<string, unknown>) {
  const node = _Javascript(label ?? "Geostyler", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Geostyler";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = geostylerIcon;
  return node;
}

export function Keplerjs(label?: string, options?: Record<string, unknown>) {
  const node = _Javascript(label ?? "Keplerjs", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Keplerjs";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = keplerjsIcon;
  return node;
}

export function Leaflet(label?: string, options?: Record<string, unknown>) {
  const node = _Javascript(label ?? "Leaflet", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Leaflet";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = leafletIcon;
  return node;
}

export function Maplibre(label?: string, options?: Record<string, unknown>) {
  const node = _Javascript(label ?? "Maplibre", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Maplibre";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = maplibreIcon;
  return node;
}

export function OlExt(label?: string, options?: Record<string, unknown>) {
  const node = _Javascript(label ?? "OlExt", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "OlExt";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ol_extIcon;
  return node;
}

export function Openlayers(label?: string, options?: Record<string, unknown>) {
  const node = _Javascript(label ?? "Openlayers", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Openlayers";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = openlayersIcon;
  return node;
}

export function Turfjs(label?: string, options?: Record<string, unknown>) {
  const node = _Javascript(label ?? "Turfjs", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Turfjs";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = turfjsIcon;
  return node;
}
