import { _Gis } from "./index.js";
import gdalIcon from "../../../resources/gis/cli/gdal.png";
import imposmIcon from "../../../resources/gis/cli/imposm.png";
import lastoolsIcon from "../../../resources/gis/cli/lastools.png";
import mapnikIcon from "../../../resources/gis/cli/mapnik.png";
import mdalIcon from "../../../resources/gis/cli/mdal.png";
import pdalIcon from "../../../resources/gis/cli/pdal.png";

function _Cli(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "cli";
  return node;
}

export function Gdal(label?: string, options?: Record<string, unknown>) {
  const node = _Cli(label ?? "Gdal", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Gdal";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = gdalIcon;
  return node;
}

export function Imposm(label?: string, options?: Record<string, unknown>) {
  const node = _Cli(label ?? "Imposm", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Imposm";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = imposmIcon;
  return node;
}

export function Lastools(label?: string, options?: Record<string, unknown>) {
  const node = _Cli(label ?? "Lastools", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Lastools";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lastoolsIcon;
  return node;
}

export function Mapnik(label?: string, options?: Record<string, unknown>) {
  const node = _Cli(label ?? "Mapnik", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Mapnik";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mapnikIcon;
  return node;
}

export function Mdal(label?: string, options?: Record<string, unknown>) {
  const node = _Cli(label ?? "Mdal", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Mdal";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mdalIcon;
  return node;
}

export function Pdal(label?: string, options?: Record<string, unknown>) {
  const node = _Cli(label ?? "Pdal", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Pdal";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pdalIcon;
  return node;
}
