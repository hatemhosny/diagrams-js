import { _Azure } from "./index.js";
import azure_sustainabilityIcon from "../../../resources/azure/newicons/azure-sustainability.png";
import connected_vehicle_platformIcon from "../../../resources/azure/newicons/connected-vehicle-platform.png";
import entra_connect_healthIcon from "../../../resources/azure/newicons/entra-connect-health.png";
import entra_connect_syncIcon from "../../../resources/azure/newicons/entra-connect-sync.png";
import icm_troubleshootingIcon from "../../../resources/azure/newicons/icm-troubleshooting.png";
import osconfigIcon from "../../../resources/azure/newicons/osconfig.png";
import storage_actionsIcon from "../../../resources/azure/newicons/storage-actions.png";

class _Newicons extends _Azure {
  protected static override _type = "newicons";
}

export class AzureSustainability extends _Newicons {
  protected static _iconDataUrl = azure_sustainabilityIcon;
}

export class ConnectedVehiclePlatform extends _Newicons {
  protected static _iconDataUrl = connected_vehicle_platformIcon;
}

export class EntraConnectHealth extends _Newicons {
  protected static _iconDataUrl = entra_connect_healthIcon;
}

export class EntraConnectSync extends _Newicons {
  protected static _iconDataUrl = entra_connect_syncIcon;
}

export class IcmTroubleshooting extends _Newicons {
  protected static _iconDataUrl = icm_troubleshootingIcon;
}

export class Osconfig extends _Newicons {
  protected static _iconDataUrl = osconfigIcon;
}

export class StorageActions extends _Newicons {
  protected static _iconDataUrl = storage_actionsIcon;
}
