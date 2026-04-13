import { _Gcp } from "./index.js";
import bigtableIcon from "../../../resources/gcp/database/bigtable.png";
import datastoreIcon from "../../../resources/gcp/database/datastore.png";
import firestoreIcon from "../../../resources/gcp/database/firestore.png";
import memorystoreIcon from "../../../resources/gcp/database/memorystore.png";
import spannerIcon from "../../../resources/gcp/database/spanner.png";
import sqlIcon from "../../../resources/gcp/database/sql.png";

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "database";
  return node;
}

export function Bigtable(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Bigtable", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Bigtable";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bigtableIcon;
  return node;
}

export function Datastore(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Datastore", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Datastore";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = datastoreIcon;
  return node;
}

export function Firestore(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Firestore", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Firestore";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = firestoreIcon;
  return node;
}

export function Memorystore(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Memorystore", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Memorystore";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = memorystoreIcon;
  return node;
}

export function Spanner(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "Spanner", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Spanner";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = spannerIcon;
  return node;
}

export function SQL(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "SQL", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SQL";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sqlIcon;
  return node;
}

// Aliases
export const BigTable = Bigtable;
