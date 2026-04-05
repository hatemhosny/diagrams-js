import { _Gcp } from "./index.js";
import bigtableIcon from "../../../resources/gcp/database/bigtable.png";
import datastoreIcon from "../../../resources/gcp/database/datastore.png";
import firestoreIcon from "../../../resources/gcp/database/firestore.png";
import memorystoreIcon from "../../../resources/gcp/database/memorystore.png";
import spannerIcon from "../../../resources/gcp/database/spanner.png";
import sqlIcon from "../../../resources/gcp/database/sql.png";

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)._type = "database";
  return node;
}

export function Bigtable(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Bigtable", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = bigtableIcon;
  return node;
}

export function Datastore(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Datastore", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = datastoreIcon;
  return node;
}

export function Firestore(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Firestore", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = firestoreIcon;
  return node;
}

export function Memorystore(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Memorystore", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = memorystoreIcon;
  return node;
}

export function Spanner(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Spanner", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = spannerIcon;
  return node;
}

export function SQL(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQL", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sqlIcon;
  return node;
}

// Aliases
export const BigTable = Bigtable;
