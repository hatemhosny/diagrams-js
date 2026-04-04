import { _Azure } from "./index.js";
import azure_databox_gatewayIcon from "../../../resources/azure/migrate/azure-databox-gateway.png";
import azure_migrateIcon from "../../../resources/azure/migrate/azure-migrate.png";
import azure_stack_edgeIcon from "../../../resources/azure/migrate/azure-stack-edge.png";
import cost_management_and_billingIcon from "../../../resources/azure/migrate/cost-management-and-billing.png";
import data_boxIcon from "../../../resources/azure/migrate/data-box.png";
import recovery_services_vaultsIcon from "../../../resources/azure/migrate/recovery-services-vaults.png";

class _Migrate extends _Azure {
  protected static override _type = "migrate";
}

export class AzureDataboxGateway extends _Migrate {
  protected static override _iconDataUrl = azure_databox_gatewayIcon;
}

export class AzureMigrate extends _Migrate {
  protected static override _iconDataUrl = azure_migrateIcon;
}

export class AzureStackEdge extends _Migrate {
  protected static override _iconDataUrl = azure_stack_edgeIcon;
}

export class CostManagementAndBilling extends _Migrate {
  protected static override _iconDataUrl = cost_management_and_billingIcon;
}

export class DataBox extends _Migrate {
  protected static override _iconDataUrl = data_boxIcon;
}

export class RecoveryServicesVaults extends _Migrate {
  protected static override _iconDataUrl = recovery_services_vaultsIcon;
}
