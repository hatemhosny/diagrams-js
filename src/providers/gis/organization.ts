import { _Gis } from "./index.js";
import osgeoIcon from "../../../resources/gis/organization/osgeo.png";

function _Organization(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)._type = "organization";
  return node;
}

export function Osgeo(label?: string, options?: Record<string, unknown>) {
  const node = _Organization(label ?? "Osgeo", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = osgeoIcon;
  return node;
}
