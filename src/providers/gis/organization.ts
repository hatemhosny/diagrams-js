import { _Gis } from "./index.js";
import osgeoIcon from "../../../resources/gis/organization/osgeo.png";

function _Organization(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "organization";
  return node;
}

export function Osgeo(label?: string, options?: Record<string, unknown>) {
  const node = _Organization(label ?? "Osgeo", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = osgeoIcon;
  return node;
}
