import { _Azure } from "./index.js";
import azure_sustainabilityIcon from "../../../resources/azure/newicons/azure-sustainability.png";
import connected_vehicle_platformIcon from "../../../resources/azure/newicons/connected-vehicle-platform.png";
import entra_connect_healthIcon from "../../../resources/azure/newicons/entra-connect-health.png";
import entra_connect_syncIcon from "../../../resources/azure/newicons/entra-connect-sync.png";
import icm_troubleshootingIcon from "../../../resources/azure/newicons/icm-troubleshooting.png";
import osconfigIcon from "../../../resources/azure/newicons/osconfig.png";
import storage_actionsIcon from "../../../resources/azure/newicons/storage-actions.png";

function _Newicons(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "newicons";
  return node;
}

export function AzureSustainability(label?: string, options?: Record<string, unknown>) {
  const node = _Newicons(label ?? "AzureSustainability", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = azure_sustainabilityIcon;
  return node;
}

export function ConnectedVehiclePlatform(label?: string, options?: Record<string, unknown>) {
  const node = _Newicons(label ?? "ConnectedVehiclePlatform", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = connected_vehicle_platformIcon;
  return node;
}

export function EntraConnectHealth(label?: string, options?: Record<string, unknown>) {
  const node = _Newicons(label ?? "EntraConnectHealth", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = entra_connect_healthIcon;
  return node;
}

export function EntraConnectSync(label?: string, options?: Record<string, unknown>) {
  const node = _Newicons(label ?? "EntraConnectSync", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = entra_connect_syncIcon;
  return node;
}

export function IcmTroubleshooting(label?: string, options?: Record<string, unknown>) {
  const node = _Newicons(label ?? "IcmTroubleshooting", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = icm_troubleshootingIcon;
  return node;
}

export function Osconfig(label?: string, options?: Record<string, unknown>) {
  const node = _Newicons(label ?? "Osconfig", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = osconfigIcon;
  return node;
}

export function StorageActions(label?: string, options?: Record<string, unknown>) {
  const node = _Newicons(label ?? "StorageActions", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = storage_actionsIcon;
  return node;
}
