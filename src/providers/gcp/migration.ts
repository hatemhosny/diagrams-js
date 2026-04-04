import { _Gcp } from "./index.js";
import migrate_compute_engineIcon from "../../../resources/gcp/migration/migrate-compute-engine.png";
import transfer_applianceIcon from "../../../resources/gcp/migration/transfer-appliance.png";

class _Migration extends _Gcp {
  protected static override _type = "migration";
}

export class MigrateComputeEngine extends _Migration {
  protected static override _iconDataUrl = migrate_compute_engineIcon;
}

export class TransferAppliance extends _Migration {
  protected static override _iconDataUrl = transfer_applianceIcon;
}

// Aliases
export const CE = MigrateComputeEngine;
