import { _Azure } from "./index.js";
import api_connectionsIcon from "../../../resources/azure/integration/api-connections.png";
import api_for_fhirIcon from "../../../resources/azure/integration/api-for-fhir.png";
import api_management_servicesIcon from "../../../resources/azure/integration/api-management-services.png";
import api_managementIcon from "../../../resources/azure/integration/api-management.png";
import app_configurationIcon from "../../../resources/azure/integration/app-configuration.png";
import azure_api_for_fhirIcon from "../../../resources/azure/integration/azure-api-for-fhir.png";
import azure_data_catalogIcon from "../../../resources/azure/integration/azure-data-catalog.png";
import azure_databox_gatewayIcon from "../../../resources/azure/integration/azure-databox-gateway.png";
import azure_service_busIcon from "../../../resources/azure/integration/azure-service-bus.png";
import azure_sql_server_stretch_databasesIcon from "../../../resources/azure/integration/azure-sql-server-stretch-databases.png";
import azure_stack_edgeIcon from "../../../resources/azure/integration/azure-stack-edge.png";
import data_catalogIcon from "../../../resources/azure/integration/data-catalog.png";
import data_factoriesIcon from "../../../resources/azure/integration/data-factories.png";
import event_grid_domainsIcon from "../../../resources/azure/integration/event-grid-domains.png";
import event_grid_subscriptionsIcon from "../../../resources/azure/integration/event-grid-subscriptions.png";
import event_grid_topicsIcon from "../../../resources/azure/integration/event-grid-topics.png";
import integration_accountsIcon from "../../../resources/azure/integration/integration-accounts.png";
import integration_environmentsIcon from "../../../resources/azure/integration/integration-environments.png";
import integration_service_environmentsIcon from "../../../resources/azure/integration/integration-service-environments.png";
import logic_apps_custom_connectorIcon from "../../../resources/azure/integration/logic-apps-custom-connector.png";
import logic_appsIcon from "../../../resources/azure/integration/logic-apps.png";
import partner_namespaceIcon from "../../../resources/azure/integration/partner-namespace.png";
import partner_registrationIcon from "../../../resources/azure/integration/partner-registration.png";
import partner_topicIcon from "../../../resources/azure/integration/partner-topic.png";
import power_platformIcon from "../../../resources/azure/integration/power-platform.png";
import relaysIcon from "../../../resources/azure/integration/relays.png";
import sendgrid_accountsIcon from "../../../resources/azure/integration/sendgrid-accounts.png";
import service_bus_relaysIcon from "../../../resources/azure/integration/service-bus-relays.png";
import service_busIcon from "../../../resources/azure/integration/service-bus.png";
import service_catalog_managed_application_definitionsIcon from "../../../resources/azure/integration/service-catalog-managed-application-definitions.png";
import software_as_a_serviceIcon from "../../../resources/azure/integration/software-as-a-service.png";
import sql_data_warehousesIcon from "../../../resources/azure/integration/sql-data-warehouses.png";
import storsimple_device_managersIcon from "../../../resources/azure/integration/storsimple-device-managers.png";
import system_topicIcon from "../../../resources/azure/integration/system-topic.png";

function _Integration(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "integration";
  return node;
}

export function APIConnections(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "APIConnections", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIConnections";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_connectionsIcon;
  return node;
}

export function APIForFhir(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "APIForFhir", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIForFhir";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_for_fhirIcon;
  return node;
}

export function APIManagementServices(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "APIManagementServices", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIManagementServices";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_management_servicesIcon;
  return node;
}

export function APIManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "APIManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "APIManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_managementIcon;
  return node;
}

export function AppConfiguration(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "AppConfiguration", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppConfiguration";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_configurationIcon;
  return node;
}

export function AzureAPIForFhir(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "AzureAPIForFhir", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureAPIForFhir";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_api_for_fhirIcon;
  return node;
}

export function AzureDataCatalog(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "AzureDataCatalog", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureDataCatalog";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_data_catalogIcon;
  return node;
}

export function AzureDataboxGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "AzureDataboxGateway", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureDataboxGateway";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_databox_gatewayIcon;
  return node;
}

export function AzureServiceBus(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "AzureServiceBus", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureServiceBus";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_service_busIcon;
  return node;
}

export function AzureSQLServerStretchDatabases(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "AzureSQLServerStretchDatabases", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureSQLServerStretchDatabases";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    azure_sql_server_stretch_databasesIcon;
  return node;
}

export function AzureStackEdge(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "AzureStackEdge", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AzureStackEdge";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = azure_stack_edgeIcon;
  return node;
}

export function DataCatalog(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "DataCatalog", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataCatalog";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_catalogIcon;
  return node;
}

export function DataFactories(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "DataFactories", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DataFactories";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = data_factoriesIcon;
  return node;
}

export function EventGridDomains(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "EventGridDomains", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventGridDomains";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = event_grid_domainsIcon;
  return node;
}

export function EventGridSubscriptions(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "EventGridSubscriptions", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventGridSubscriptions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = event_grid_subscriptionsIcon;
  return node;
}

export function EventGridTopics(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "EventGridTopics", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventGridTopics";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = event_grid_topicsIcon;
  return node;
}

export function IntegrationAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "IntegrationAccounts", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IntegrationAccounts";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = integration_accountsIcon;
  return node;
}

export function IntegrationEnvironments(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "IntegrationEnvironments", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IntegrationEnvironments";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = integration_environmentsIcon;
  return node;
}

export function IntegrationServiceEnvironments(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "IntegrationServiceEnvironments", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "IntegrationServiceEnvironments";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    integration_service_environmentsIcon;
  return node;
}

export function LogicAppsCustomConnector(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "LogicAppsCustomConnector", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LogicAppsCustomConnector";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = logic_apps_custom_connectorIcon;
  return node;
}

export function LogicApps(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "LogicApps", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LogicApps";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = logic_appsIcon;
  return node;
}

export function PartnerNamespace(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "PartnerNamespace", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PartnerNamespace";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = partner_namespaceIcon;
  return node;
}

export function PartnerRegistration(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "PartnerRegistration", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PartnerRegistration";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = partner_registrationIcon;
  return node;
}

export function PartnerTopic(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "PartnerTopic", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PartnerTopic";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = partner_topicIcon;
  return node;
}

export function PowerPlatform(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "PowerPlatform", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "PowerPlatform";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = power_platformIcon;
  return node;
}

export function Relays(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "Relays", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Relays";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = relaysIcon;
  return node;
}

export function SendgridAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "SendgridAccounts", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SendgridAccounts";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sendgrid_accountsIcon;
  return node;
}

export function ServiceBusRelays(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "ServiceBusRelays", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ServiceBusRelays";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_bus_relaysIcon;
  return node;
}

export function ServiceBus(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "ServiceBus", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ServiceBus";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_busIcon;
  return node;
}

export function ServiceCatalogManagedApplicationDefinitions(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Integration(label ?? "ServiceCatalogManagedApplicationDefinitions", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "ServiceCatalogManagedApplicationDefinitions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    service_catalog_managed_application_definitionsIcon;
  return node;
}

export function SoftwareAsAService(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "SoftwareAsAService", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SoftwareAsAService";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = software_as_a_serviceIcon;
  return node;
}

export function SQLDataWarehouses(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "SQLDataWarehouses", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SQLDataWarehouses";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sql_data_warehousesIcon;
  return node;
}

export function StorsimpleDeviceManagers(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "StorsimpleDeviceManagers", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "StorsimpleDeviceManagers";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storsimple_device_managersIcon;
  return node;
}

export function SystemTopic(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "SystemTopic", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SystemTopic";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = system_topicIcon;
  return node;
}
