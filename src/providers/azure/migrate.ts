import { _Azure } from "./index.js";
import azure_databox_gatewayIcon from "../../../resources/azure/migrate/azure-databox-gateway.png";
import azure_migrateIcon from "../../../resources/azure/migrate/azure-migrate.png";
import azure_stack_edgeIcon from "../../../resources/azure/migrate/azure-stack-edge.png";
import cost_management_and_billingIcon from "../../../resources/azure/migrate/cost-management-and-billing.png";
import data_boxIcon from "../../../resources/azure/migrate/data-box.png";
import recovery_services_vaultsIcon from "../../../resources/azure/migrate/recovery-services-vaults.png";

function _Migrate(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "migrate";
  return node;
}

export function AzureDataboxGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Migrate(label ?? "AzureDataboxGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_databox_gatewayIcon;
  return node;
}

export function AzureMigrate(label?: string, options?: Record<string, unknown>) {
  const node = _Migrate(label ?? "AzureMigrate", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_migrateIcon;
  return node;
}

export function AzureStackEdge(label?: string, options?: Record<string, unknown>) {
  const node = _Migrate(label ?? "AzureStackEdge", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_stack_edgeIcon;
  return node;
}

export function CostManagementAndBilling(label?: string, options?: Record<string, unknown>) {
  const node = _Migrate(label ?? "CostManagementAndBilling", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cost_management_and_billingIcon;
  return node;
}

export function DataBox(label?: string, options?: Record<string, unknown>) {
  const node = _Migrate(label ?? "DataBox", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_boxIcon;
  return node;
}

export function RecoveryServicesVaults(label?: string, options?: Record<string, unknown>) {
  const node = _Migrate(label ?? "RecoveryServicesVaults", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = recovery_services_vaultsIcon;
  return node;
}
