import { _Onprem } from "./index.js";
import embulkIcon from "../../../resources/onprem/etl/embulk.png";

function _Etl(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "etl";
  return node;
}

export function Embulk(label?: string, options?: Record<string, unknown>) {
  const node = _Etl(label ?? "Embulk", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = embulkIcon;
  return node;
}
