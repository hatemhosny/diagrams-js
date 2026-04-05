import { _Gcp } from "./index.js";
import migrate_compute_engineIcon from "../../../resources/gcp/migration/migrate-compute-engine.png";
import transfer_applianceIcon from "../../../resources/gcp/migration/transfer-appliance.png";

function _Migration(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)._type = "migration";
  return node;
}

export function MigrateComputeEngine(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "MigrateComputeEngine", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = migrate_compute_engineIcon;
  return node;
}

export function TransferAppliance(label?: string, options?: Record<string, unknown>) {
  const node = _Migration(label ?? "TransferAppliance", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = transfer_applianceIcon;
  return node;
}

// Aliases
export const CE = MigrateComputeEngine;
