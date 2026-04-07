import { _Aws } from "./index.js";
import amazon_devops_guruIcon from "../../../resources/aws/management/amazon-devops-guru.png";
import amazon_managed_grafanaIcon from "../../../resources/aws/management/amazon-managed-grafana.png";
import amazon_managed_prometheusIcon from "../../../resources/aws/management/amazon-managed-prometheus.png";
import amazon_managed_workflows_apache_airflowIcon from "../../../resources/aws/management/amazon-managed-workflows-apache-airflow.png";
import auto_scalingIcon from "../../../resources/aws/management/auto-scaling.png";
import chatbotIcon from "../../../resources/aws/management/chatbot.png";
import cloudformation_change_setIcon from "../../../resources/aws/management/cloudformation-change-set.png";
import cloudformation_stackIcon from "../../../resources/aws/management/cloudformation-stack.png";
import cloudformation_templateIcon from "../../../resources/aws/management/cloudformation-template.png";
import cloudformationIcon from "../../../resources/aws/management/cloudformation.png";
import cloudtrailIcon from "../../../resources/aws/management/cloudtrail.png";
import cloudwatch_alarmIcon from "../../../resources/aws/management/cloudwatch-alarm.png";
import cloudwatch_event_event_basedIcon from "../../../resources/aws/management/cloudwatch-event-event-based.png";
import cloudwatch_event_time_basedIcon from "../../../resources/aws/management/cloudwatch-event-time-based.png";
import cloudwatch_logsIcon from "../../../resources/aws/management/cloudwatch-logs.png";
import cloudwatch_ruleIcon from "../../../resources/aws/management/cloudwatch-rule.png";
import cloudwatchIcon from "../../../resources/aws/management/cloudwatch.png";
import codeguruIcon from "../../../resources/aws/management/codeguru.png";
import command_line_interfaceIcon from "../../../resources/aws/management/command-line-interface.png";
import configIcon from "../../../resources/aws/management/config.png";
import control_towerIcon from "../../../resources/aws/management/control-tower.png";
import license_managerIcon from "../../../resources/aws/management/license-manager.png";
import managed_servicesIcon from "../../../resources/aws/management/managed-services.png";
import management_and_governanceIcon from "../../../resources/aws/management/management-and-governance.png";
import management_consoleIcon from "../../../resources/aws/management/management-console.png";
import opsworks_appsIcon from "../../../resources/aws/management/opsworks-apps.png";
import opsworks_deploymentsIcon from "../../../resources/aws/management/opsworks-deployments.png";
import opsworks_instancesIcon from "../../../resources/aws/management/opsworks-instances.png";
import opsworks_layersIcon from "../../../resources/aws/management/opsworks-layers.png";
import opsworks_monitoringIcon from "../../../resources/aws/management/opsworks-monitoring.png";
import opsworks_permissionsIcon from "../../../resources/aws/management/opsworks-permissions.png";
import opsworks_resourcesIcon from "../../../resources/aws/management/opsworks-resources.png";
import opsworks_stackIcon from "../../../resources/aws/management/opsworks-stack.png";
import opsworksIcon from "../../../resources/aws/management/opsworks.png";
import organizations_accountIcon from "../../../resources/aws/management/organizations-account.png";
import organizations_organizational_unitIcon from "../../../resources/aws/management/organizations-organizational-unit.png";
import organizationsIcon from "../../../resources/aws/management/organizations.png";
import personal_health_dashboardIcon from "../../../resources/aws/management/personal-health-dashboard.png";
import protonIcon from "../../../resources/aws/management/proton.png";
import service_catalogIcon from "../../../resources/aws/management/service-catalog.png";
import systems_manager_app_configIcon from "../../../resources/aws/management/systems-manager-app-config.png";
import systems_manager_automationIcon from "../../../resources/aws/management/systems-manager-automation.png";
import systems_manager_documentsIcon from "../../../resources/aws/management/systems-manager-documents.png";
import systems_manager_inventoryIcon from "../../../resources/aws/management/systems-manager-inventory.png";
import systems_manager_maintenance_windowsIcon from "../../../resources/aws/management/systems-manager-maintenance-windows.png";
import systems_manager_opscenterIcon from "../../../resources/aws/management/systems-manager-opscenter.png";
import systems_manager_parameter_storeIcon from "../../../resources/aws/management/systems-manager-parameter-store.png";
import systems_manager_patch_managerIcon from "../../../resources/aws/management/systems-manager-patch-manager.png";
import systems_manager_run_commandIcon from "../../../resources/aws/management/systems-manager-run-command.png";
import systems_manager_state_managerIcon from "../../../resources/aws/management/systems-manager-state-manager.png";
import systems_managerIcon from "../../../resources/aws/management/systems-manager.png";
import trusted_advisor_checklist_costIcon from "../../../resources/aws/management/trusted-advisor-checklist-cost.png";
import trusted_advisor_checklist_fault_tolerantIcon from "../../../resources/aws/management/trusted-advisor-checklist-fault-tolerant.png";
import trusted_advisor_checklist_performanceIcon from "../../../resources/aws/management/trusted-advisor-checklist-performance.png";
import trusted_advisor_checklist_securityIcon from "../../../resources/aws/management/trusted-advisor-checklist-security.png";
import trusted_advisor_checklistIcon from "../../../resources/aws/management/trusted-advisor-checklist.png";
import trusted_advisorIcon from "../../../resources/aws/management/trusted-advisor.png";
import user_notificationsIcon from "../../../resources/aws/management/user-notifications.png";
import well_architected_toolIcon from "../../../resources/aws/management/well-architected-tool.png";

function _Management(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "management";
  return node;
}

export function AmazonDevopsGuru(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "AmazonDevopsGuru", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = amazon_devops_guruIcon;
  return node;
}

export function AmazonManagedGrafana(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "AmazonManagedGrafana", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = amazon_managed_grafanaIcon;
  return node;
}

export function AmazonManagedPrometheus(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "AmazonManagedPrometheus", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = amazon_managed_prometheusIcon;
  return node;
}

export function AmazonManagedWorkflowsApacheAirflow(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Management(label ?? "AmazonManagedWorkflowsApacheAirflow", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    amazon_managed_workflows_apache_airflowIcon;
  return node;
}

export function AutoScaling(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "AutoScaling", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = auto_scalingIcon;
  return node;
}

export function Chatbot(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Chatbot", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = chatbotIcon;
  return node;
}

export function CloudformationChangeSet(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CloudformationChangeSet", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudformation_change_setIcon;
  return node;
}

export function CloudformationStack(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CloudformationStack", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudformation_stackIcon;
  return node;
}

export function CloudformationTemplate(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CloudformationTemplate", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudformation_templateIcon;
  return node;
}

export function Cloudformation(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Cloudformation", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudformationIcon;
  return node;
}

export function Cloudtrail(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Cloudtrail", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudtrailIcon;
  return node;
}

export function CloudwatchAlarm(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CloudwatchAlarm", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudwatch_alarmIcon;
  return node;
}

export function CloudwatchEventEventBased(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CloudwatchEventEventBased", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudwatch_event_event_basedIcon;
  return node;
}

export function CloudwatchEventTimeBased(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CloudwatchEventTimeBased", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudwatch_event_time_basedIcon;
  return node;
}

export function CloudwatchLogs(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CloudwatchLogs", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudwatch_logsIcon;
  return node;
}

export function CloudwatchRule(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CloudwatchRule", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudwatch_ruleIcon;
  return node;
}

export function Cloudwatch(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Cloudwatch", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloudwatchIcon;
  return node;
}

export function Codeguru(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Codeguru", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = codeguruIcon;
  return node;
}

export function CommandLineInterface(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "CommandLineInterface", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = command_line_interfaceIcon;
  return node;
}

export function Config(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Config", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = configIcon;
  return node;
}

export function ControlTower(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ControlTower", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = control_towerIcon;
  return node;
}

export function LicenseManager(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "LicenseManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = license_managerIcon;
  return node;
}

export function ManagedServices(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ManagedServices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managed_servicesIcon;
  return node;
}

export function ManagementAndGovernance(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ManagementAndGovernance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = management_and_governanceIcon;
  return node;
}

export function ManagementConsole(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ManagementConsole", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = management_consoleIcon;
  return node;
}

export function OpsworksApps(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OpsworksApps", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opsworks_appsIcon;
  return node;
}

export function OpsworksDeployments(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OpsworksDeployments", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opsworks_deploymentsIcon;
  return node;
}

export function OpsworksInstances(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OpsworksInstances", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opsworks_instancesIcon;
  return node;
}

export function OpsworksLayers(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OpsworksLayers", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opsworks_layersIcon;
  return node;
}

export function OpsworksMonitoring(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OpsworksMonitoring", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opsworks_monitoringIcon;
  return node;
}

export function OpsworksPermissions(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OpsworksPermissions", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opsworks_permissionsIcon;
  return node;
}

export function OpsworksResources(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OpsworksResources", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opsworks_resourcesIcon;
  return node;
}

export function OpsworksStack(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OpsworksStack", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opsworks_stackIcon;
  return node;
}

export function Opsworks(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Opsworks", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opsworksIcon;
  return node;
}

export function OrganizationsAccount(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OrganizationsAccount", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = organizations_accountIcon;
  return node;
}

export function OrganizationsOrganizationalUnit(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "OrganizationsOrganizationalUnit", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    organizations_organizational_unitIcon;
  return node;
}

export function Organizations(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Organizations", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = organizationsIcon;
  return node;
}

export function PersonalHealthDashboard(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "PersonalHealthDashboard", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = personal_health_dashboardIcon;
  return node;
}

export function Proton(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "Proton", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = protonIcon;
  return node;
}

export function ServiceCatalog(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "ServiceCatalog", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_catalogIcon;
  return node;
}

export function SystemsManagerAppConfig(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManagerAppConfig", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = systems_manager_app_configIcon;
  return node;
}

export function SystemsManagerAutomation(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManagerAutomation", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = systems_manager_automationIcon;
  return node;
}

export function SystemsManagerDocuments(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManagerDocuments", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = systems_manager_documentsIcon;
  return node;
}

export function SystemsManagerInventory(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManagerInventory", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = systems_manager_inventoryIcon;
  return node;
}

export function SystemsManagerMaintenanceWindows(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Management(label ?? "SystemsManagerMaintenanceWindows", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    systems_manager_maintenance_windowsIcon;
  return node;
}

export function SystemsManagerOpscenter(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManagerOpscenter", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = systems_manager_opscenterIcon;
  return node;
}

export function SystemsManagerParameterStore(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManagerParameterStore", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    systems_manager_parameter_storeIcon;
  return node;
}

export function SystemsManagerPatchManager(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManagerPatchManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = systems_manager_patch_managerIcon;
  return node;
}

export function SystemsManagerRunCommand(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManagerRunCommand", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = systems_manager_run_commandIcon;
  return node;
}

export function SystemsManagerStateManager(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManagerStateManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = systems_manager_state_managerIcon;
  return node;
}

export function SystemsManager(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "SystemsManager", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = systems_managerIcon;
  return node;
}

export function TrustedAdvisorChecklistCost(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "TrustedAdvisorChecklistCost", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = trusted_advisor_checklist_costIcon;
  return node;
}

export function TrustedAdvisorChecklistFaultTolerant(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Management(label ?? "TrustedAdvisorChecklistFaultTolerant", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    trusted_advisor_checklist_fault_tolerantIcon;
  return node;
}

export function TrustedAdvisorChecklistPerformance(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Management(label ?? "TrustedAdvisorChecklistPerformance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    trusted_advisor_checklist_performanceIcon;
  return node;
}

export function TrustedAdvisorChecklistSecurity(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "TrustedAdvisorChecklistSecurity", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    trusted_advisor_checklist_securityIcon;
  return node;
}

export function TrustedAdvisorChecklist(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "TrustedAdvisorChecklist", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = trusted_advisor_checklistIcon;
  return node;
}

export function TrustedAdvisor(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "TrustedAdvisor", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = trusted_advisorIcon;
  return node;
}

export function UserNotifications(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "UserNotifications", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = user_notificationsIcon;
  return node;
}

export function WellArchitectedTool(label?: string, options?: Record<string, unknown>) {
  const node = _Management(label ?? "WellArchitectedTool", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = well_architected_toolIcon;
  return node;
}

// Aliases
export const SSM = SystemsManager;
export const ParameterStore = SystemsManagerParameterStore;
