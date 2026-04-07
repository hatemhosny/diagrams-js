import { _Gis } from "./index.js";
import addokIcon from "../../../resources/gis/geocoding/addok.png";
import gisgraphyIcon from "../../../resources/gis/geocoding/gisgraphy.png";
import nominatimIcon from "../../../resources/gis/geocoding/nominatim.png";
import peliasIcon from "../../../resources/gis/geocoding/pelias.png";

function _Geocoding(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "geocoding";
  return node;
}

export function Addok(label?: string, options?: Record<string, unknown>) {
  const node = _Geocoding(label ?? "Addok", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = addokIcon;
  return node;
}

export function Gisgraphy(label?: string, options?: Record<string, unknown>) {
  const node = _Geocoding(label ?? "Gisgraphy", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = gisgraphyIcon;
  return node;
}

export function Nominatim(label?: string, options?: Record<string, unknown>) {
  const node = _Geocoding(label ?? "Nominatim", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nominatimIcon;
  return node;
}

export function Pelias(label?: string, options?: Record<string, unknown>) {
  const node = _Geocoding(label ?? "Pelias", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = peliasIcon;
  return node;
}
