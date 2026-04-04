import { _Aws } from "./index.js";
import budgetsIcon from "../../../resources/aws/cost/budgets.png";
import cost_and_usage_reportIcon from "../../../resources/aws/cost/cost-and-usage-report.png";
import cost_explorerIcon from "../../../resources/aws/cost/cost-explorer.png";
import cost_managementIcon from "../../../resources/aws/cost/cost-management.png";
import reserved_instance_reportingIcon from "../../../resources/aws/cost/reserved-instance-reporting.png";
import savings_plansIcon from "../../../resources/aws/cost/savings-plans.png";

class _Cost extends _Aws {
  protected static override _type = "cost";
}

export class Budgets extends _Cost {
  protected static override _iconDataUrl = budgetsIcon;
}

export class CostAndUsageReport extends _Cost {
  protected static override _iconDataUrl = cost_and_usage_reportIcon;
}

export class CostExplorer extends _Cost {
  protected static override _iconDataUrl = cost_explorerIcon;
}

export class CostManagement extends _Cost {
  protected static override _iconDataUrl = cost_managementIcon;
}

export class ReservedInstanceReporting extends _Cost {
  protected static override _iconDataUrl = reserved_instance_reportingIcon;
}

export class SavingsPlans extends _Cost {
  protected static override _iconDataUrl = savings_plansIcon;
}
