import { _Gis } from "./index.js";
import banIcon from "../../../resources/gis/data/ban.png";
import hereIcon from "../../../resources/gis/data/here.png";
import ignIcon from "../../../resources/gis/data/ign.png";
import openstreetmapIcon from "../../../resources/gis/data/openstreetmap.png";
import overturemapsIcon from "../../../resources/gis/data/overturemaps.png";

function _Data(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "data";
  return node;
}

export function BAN(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "BAN", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BAN";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = banIcon;
  return node;
}

export function Here(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "Here", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Here";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hereIcon;
  return node;
}

export function IGN(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "IGN", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IGN";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ignIcon;
  return node;
}

export function Openstreetmap(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "Openstreetmap", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Openstreetmap";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = openstreetmapIcon;
  return node;
}

export function Overturemaps(label?: string, options?: Record<string, unknown>) {
  const node = _Data(label ?? "Overturemaps", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Overturemaps";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = overturemapsIcon;
  return node;
}
