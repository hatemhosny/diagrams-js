import { _Azure } from "./index.js";
import capacityIcon from "../../../resources/azure/azurestack/capacity.png";
import infrastructure_backupIcon from "../../../resources/azure/azurestack/infrastructure-backup.png";
import multi_tenancyIcon from "../../../resources/azure/azurestack/multi-tenancy.png";
import offersIcon from "../../../resources/azure/azurestack/offers.png";
import plansIcon from "../../../resources/azure/azurestack/plans.png";
import updatesIcon from "../../../resources/azure/azurestack/updates.png";
import user_subscriptionsIcon from "../../../resources/azure/azurestack/user-subscriptions.png";

class _Azurestack extends _Azure {
  protected static override _type = "azurestack";
}

export class Capacity extends _Azurestack {
  protected static _iconDataUrl = capacityIcon;
}

export class InfrastructureBackup extends _Azurestack {
  protected static _iconDataUrl = infrastructure_backupIcon;
}

export class MultiTenancy extends _Azurestack {
  protected static _iconDataUrl = multi_tenancyIcon;
}

export class Offers extends _Azurestack {
  protected static _iconDataUrl = offersIcon;
}

export class Plans extends _Azurestack {
  protected static _iconDataUrl = plansIcon;
}

export class Updates extends _Azurestack {
  protected static _iconDataUrl = updatesIcon;
}

export class UserSubscriptions extends _Azurestack {
  protected static _iconDataUrl = user_subscriptionsIcon;
}
