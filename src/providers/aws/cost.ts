import { _Aws } from "./index.js";
import budgetsIcon from "../../../resources/aws/cost/budgets.png";
import cost_and_usage_reportIcon from "../../../resources/aws/cost/cost-and-usage-report.png";
import cost_explorerIcon from "../../../resources/aws/cost/cost-explorer.png";
import cost_managementIcon from "../../../resources/aws/cost/cost-management.png";
import reserved_instance_reportingIcon from "../../../resources/aws/cost/reserved-instance-reporting.png";
import savings_plansIcon from "../../../resources/aws/cost/savings-plans.png";

function _Cost(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "cost";
  return node;
}

export function Budgets(label?: string, options?: Record<string, unknown>) {
  const node = _Cost(label ?? "Budgets", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Budgets";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = budgetsIcon;
  return node;
}

export function CostAndUsageReport(label?: string, options?: Record<string, unknown>) {
  const node = _Cost(label ?? "CostAndUsageReport", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CostAndUsageReport";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cost_and_usage_reportIcon;
  return node;
}

export function CostExplorer(label?: string, options?: Record<string, unknown>) {
  const node = _Cost(label ?? "CostExplorer", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CostExplorer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cost_explorerIcon;
  return node;
}

export function CostManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Cost(label ?? "CostManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CostManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cost_managementIcon;
  return node;
}

export function ReservedInstanceReporting(label?: string, options?: Record<string, unknown>) {
  const node = _Cost(label ?? "ReservedInstanceReporting", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ReservedInstanceReporting";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = reserved_instance_reportingIcon;
  return node;
}

export function SavingsPlans(label?: string, options?: Record<string, unknown>) {
  const node = _Cost(label ?? "SavingsPlans", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SavingsPlans";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = savings_plansIcon;
  return node;
}
