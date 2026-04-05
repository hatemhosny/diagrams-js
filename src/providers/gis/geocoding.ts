import { _Gis } from "./index.js";
import addokIcon from "../../../resources/gis/geocoding/addok.png";
import gisgraphyIcon from "../../../resources/gis/geocoding/gisgraphy.png";
import nominatimIcon from "../../../resources/gis/geocoding/nominatim.png";
import peliasIcon from "../../../resources/gis/geocoding/pelias.png";

function _Geocoding(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)._type = "geocoding";
  return node;
}

export function Addok(label?: string, options?: Record<string, unknown>) {
  const node = _Geocoding(label ?? "Addok", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = addokIcon;
  return node;
}

export function Gisgraphy(label?: string, options?: Record<string, unknown>) {
  const node = _Geocoding(label ?? "Gisgraphy", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = gisgraphyIcon;
  return node;
}

export function Nominatim(label?: string, options?: Record<string, unknown>) {
  const node = _Geocoding(label ?? "Nominatim", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = nominatimIcon;
  return node;
}

export function Pelias(label?: string, options?: Record<string, unknown>) {
  const node = _Geocoding(label ?? "Pelias", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = peliasIcon;
  return node;
}
