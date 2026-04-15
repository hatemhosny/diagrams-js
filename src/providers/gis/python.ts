import { _Gis } from "./index.js";
import geopandasIcon from "../../../resources/gis/python/geopandas.png";
import pysalIcon from "../../../resources/gis/python/pysal.png";

function _Python(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "python";
  return node;
}

export function Geopandas(label?: string, options?: Record<string, unknown>) {
  const node = _Python(label ?? "Geopandas", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Geopandas";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = geopandasIcon;
  return node;
}

export function Pysal(label?: string, options?: Record<string, unknown>) {
  const node = _Python(label ?? "Pysal", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Pysal";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pysalIcon;
  return node;
}
