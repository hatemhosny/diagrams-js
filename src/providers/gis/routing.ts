import { _Gis } from "./index.js";
import graphhopperIcon from "../../../resources/gis/routing/graphhopper.png";
import osrmIcon from "../../../resources/gis/routing/osrm.png";
import pgroutingIcon from "../../../resources/gis/routing/pgrouting.png";
import valhallaIcon from "../../../resources/gis/routing/valhalla.png";

function _Routing(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)._type = "routing";
  return node;
}

export function Graphhopper(label?: string, options?: Record<string, unknown>) {
  const node = _Routing(label ?? "Graphhopper", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = graphhopperIcon;
  return node;
}

export function Osrm(label?: string, options?: Record<string, unknown>) {
  const node = _Routing(label ?? "Osrm", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = osrmIcon;
  return node;
}

export function Pgrouting(label?: string, options?: Record<string, unknown>) {
  const node = _Routing(label ?? "Pgrouting", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = pgroutingIcon;
  return node;
}

export function Valhalla(label?: string, options?: Record<string, unknown>) {
  const node = _Routing(label ?? "Valhalla", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = valhallaIcon;
  return node;
}
