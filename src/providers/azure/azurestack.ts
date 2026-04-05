import { _Azure } from "./index.js";
import capacityIcon from "../../../resources/azure/azurestack/capacity.png";
import infrastructure_backupIcon from "../../../resources/azure/azurestack/infrastructure-backup.png";
import multi_tenancyIcon from "../../../resources/azure/azurestack/multi-tenancy.png";
import offersIcon from "../../../resources/azure/azurestack/offers.png";
import plansIcon from "../../../resources/azure/azurestack/plans.png";
import updatesIcon from "../../../resources/azure/azurestack/updates.png";
import user_subscriptionsIcon from "../../../resources/azure/azurestack/user-subscriptions.png";

function _Azurestack(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "azurestack";
  return node;
}

export function Capacity(label?: string, options?: Record<string, unknown>) {
  const node = _Azurestack(label ?? "Capacity", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = capacityIcon;
  return node;
}

export function InfrastructureBackup(label?: string, options?: Record<string, unknown>) {
  const node = _Azurestack(label ?? "InfrastructureBackup", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = infrastructure_backupIcon;
  return node;
}

export function MultiTenancy(label?: string, options?: Record<string, unknown>) {
  const node = _Azurestack(label ?? "MultiTenancy", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = multi_tenancyIcon;
  return node;
}

export function Offers(label?: string, options?: Record<string, unknown>) {
  const node = _Azurestack(label ?? "Offers", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = offersIcon;
  return node;
}

export function Plans(label?: string, options?: Record<string, unknown>) {
  const node = _Azurestack(label ?? "Plans", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = plansIcon;
  return node;
}

export function Updates(label?: string, options?: Record<string, unknown>) {
  const node = _Azurestack(label ?? "Updates", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = updatesIcon;
  return node;
}

export function UserSubscriptions(label?: string, options?: Record<string, unknown>) {
  const node = _Azurestack(label ?? "UserSubscriptions", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = user_subscriptionsIcon;
  return node;
}
