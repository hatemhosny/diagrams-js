import { _Generic } from "./index.js";
import sqlIcon from "../../../resources/generic/database/sql.png";

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label, options);
  (node as unknown as Record<string, unknown>)._type = "database";
  return node;
}

export function SQL(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQL", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sqlIcon;
  return node;
}
