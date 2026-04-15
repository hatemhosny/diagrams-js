import { _Azure } from "./index.js";
import activity_logIcon from "../../../resources/azure/managementgovernance/activity-log.png";
import advisorIcon from "../../../resources/azure/managementgovernance/advisor.png";
import alertsIcon from "../../../resources/azure/managementgovernance/alerts.png";
import application_insightsIcon from "../../../resources/azure/managementgovernance/application-insights.png";
import arc_machinesIcon from "../../../resources/azure/managementgovernance/arc-machines.png";
import automation_accountsIcon from "../../../resources/azure/managementgovernance/automation-accounts.png";
import azure_arcIcon from "../../../resources/azure/managementgovernance/azure-arc.png";
import azure_lighthouseIcon from "../../../resources/azure/managementgovernance/azure-lighthouse.png";
import blueprintsIcon from "../../../resources/azure/managementgovernance/blueprints.png";
import complianceIcon from "../../../resources/azure/managementgovernance/compliance.png";
import cost_management_and_billingIcon from "../../../resources/azure/managementgovernance/cost-management-and-billing.png";
import customer_lockbox_for_microsoft_azureIcon from "../../../resources/azure/managementgovernance/customer-lockbox-for-microsoft-azure.png";
import diagnostics_settingsIcon from "../../../resources/azure/managementgovernance/diagnostics-settings.png";
import educationIcon from "../../../resources/azure/managementgovernance/education.png";
import intune_trendsIcon from "../../../resources/azure/managementgovernance/intune-trends.png";
import log_analytics_workspacesIcon from "../../../resources/azure/managementgovernance/log-analytics-workspaces.png";
import machinesazurearcIcon from "../../../resources/azure/managementgovernance/machinesazurearc.png";
import managed_applications_centerIcon from "../../../resources/azure/managementgovernance/managed-applications-center.png";
import managed_desktopIcon from "../../../resources/azure/managementgovernance/managed-desktop.png";
import metricsIcon from "../../../resources/azure/managementgovernance/metrics.png";
import monitorIcon from "../../../resources/azure/managementgovernance/monitor.png";
import my_customersIcon from "../../../resources/azure/managementgovernance/my-customers.png";
import operation_log_classicIcon from "../../../resources/azure/managementgovernance/operation-log-classic.png";
import policyIcon from "../../../resources/azure/managementgovernance/policy.png";
import recovery_services_vaultsIcon from "../../../resources/azure/managementgovernance/recovery-services-vaults.png";
import resource_graph_explorerIcon from "../../../resources/azure/managementgovernance/resource-graph-explorer.png";
import resources_providerIcon from "../../../resources/azure/managementgovernance/resources-provider.png";
import scheduler_job_collectionsIcon from "../../../resources/azure/managementgovernance/scheduler-job-collections.png";
import service_catalog_madIcon from "../../../resources/azure/managementgovernance/service-catalog-mad.png";
import service_providersIcon from "../../../resources/azure/managementgovernance/service-providers.png";
import solutionsIcon from "../../../resources/azure/managementgovernance/solutions.png";
import universal_printIcon from "../../../resources/azure/managementgovernance/universal-print.png";
import user_privacyIcon from "../../../resources/azure/managementgovernance/user-privacy.png";

function _Managementgovernance(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "managementgovernance";
  return node;
}

export function ActivityLog(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "ActivityLog", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ActivityLog";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = activity_logIcon;
  return node;
}

export function Advisor(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Advisor", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Advisor";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = advisorIcon;
  return node;
}

export function Alerts(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Alerts", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Alerts";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = alertsIcon;
  return node;
}

export function ApplicationInsights(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "ApplicationInsights", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ApplicationInsights";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = application_insightsIcon;
  return node;
}

export function ArcMachines(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "ArcMachines", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ArcMachines";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = arc_machinesIcon;
  return node;
}

export function AutomationAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "AutomationAccounts", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AutomationAccounts";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = automation_accountsIcon;
  return node;
}

export function AzureArc(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "AzureArc", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureArc";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_arcIcon;
  return node;
}

export function AzureLighthouse(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "AzureLighthouse", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureLighthouse";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_lighthouseIcon;
  return node;
}

export function Blueprints(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Blueprints", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Blueprints";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = blueprintsIcon;
  return node;
}

export function Compliance(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Compliance", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Compliance";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = complianceIcon;
  return node;
}

export function CostManagementAndBilling(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "CostManagementAndBilling", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CostManagementAndBilling";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cost_management_and_billingIcon;
  return node;
}

export function CustomerLockboxForMicrosoftAzure(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Managementgovernance(label ?? "CustomerLockboxForMicrosoftAzure", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CustomerLockboxForMicrosoftAzure";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    customer_lockbox_for_microsoft_azureIcon;
  return node;
}

export function DiagnosticsSettings(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "DiagnosticsSettings", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DiagnosticsSettings";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = diagnostics_settingsIcon;
  return node;
}

export function Education(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Education", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Education";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = educationIcon;
  return node;
}

export function IntuneTrends(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "IntuneTrends", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IntuneTrends";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = intune_trendsIcon;
  return node;
}

export function LogAnalyticsWorkspaces(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "LogAnalyticsWorkspaces", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LogAnalyticsWorkspaces";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = log_analytics_workspacesIcon;
  return node;
}

export function Machinesazurearc(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Machinesazurearc", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Machinesazurearc";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = machinesazurearcIcon;
  return node;
}

export function ManagedApplicationsCenter(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "ManagedApplicationsCenter", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ManagedApplicationsCenter";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managed_applications_centerIcon;
  return node;
}

export function ManagedDesktop(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "ManagedDesktop", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ManagedDesktop";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managed_desktopIcon;
  return node;
}

export function Metrics(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Metrics", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Metrics";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = metricsIcon;
  return node;
}

export function Monitor(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Monitor", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Monitor";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = monitorIcon;
  return node;
}

export function MyCustomers(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "MyCustomers", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MyCustomers";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = my_customersIcon;
  return node;
}

export function OperationLogClassic(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "OperationLogClassic", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "OperationLogClassic";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = operation_log_classicIcon;
  return node;
}

export function Policy(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Policy", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Policy";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = policyIcon;
  return node;
}

export function RecoveryServicesVaults(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "RecoveryServicesVaults", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RecoveryServicesVaults";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = recovery_services_vaultsIcon;
  return node;
}

export function ResourceGraphExplorer(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "ResourceGraphExplorer", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ResourceGraphExplorer";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = resource_graph_explorerIcon;
  return node;
}

export function ResourcesProvider(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "ResourcesProvider", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ResourcesProvider";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = resources_providerIcon;
  return node;
}

export function SchedulerJobCollections(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "SchedulerJobCollections", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SchedulerJobCollections";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = scheduler_job_collectionsIcon;
  return node;
}

export function ServiceCatalogMad(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "ServiceCatalogMad", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ServiceCatalogMad";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_catalog_madIcon;
  return node;
}

export function ServiceProviders(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "ServiceProviders", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ServiceProviders";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_providersIcon;
  return node;
}

export function Solutions(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "Solutions", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Solutions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = solutionsIcon;
  return node;
}

export function UniversalPrint(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "UniversalPrint", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "UniversalPrint";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = universal_printIcon;
  return node;
}

export function UserPrivacy(label?: string, options?: Record<string, unknown>) {
  const node = _Managementgovernance(label ?? "UserPrivacy", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "UserPrivacy";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = user_privacyIcon;
  return node;
}
