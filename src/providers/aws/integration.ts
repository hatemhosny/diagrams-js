import { _Aws } from "./index.js";
import application_integrationIcon from "../../../resources/aws/integration/application-integration.png";
import appsyncIcon from "../../../resources/aws/integration/appsync.png";
import console_mobile_applicationIcon from "../../../resources/aws/integration/console-mobile-application.png";
import event_resourceIcon from "../../../resources/aws/integration/event-resource.png";
import eventbridge_custom_event_bus_resourceIcon from "../../../resources/aws/integration/eventbridge-custom-event-bus-resource.png";
import eventbridge_default_event_bus_resourceIcon from "../../../resources/aws/integration/eventbridge-default-event-bus-resource.png";
import eventbridge_eventIcon from "../../../resources/aws/integration/eventbridge-event.png";
import eventbridge_pipesIcon from "../../../resources/aws/integration/eventbridge-pipes.png";
import eventbridge_ruleIcon from "../../../resources/aws/integration/eventbridge-rule.png";
import eventbridge_saas_partner_event_bus_resourceIcon from "../../../resources/aws/integration/eventbridge-saas-partner-event-bus-resource.png";
import eventbridge_schedulerIcon from "../../../resources/aws/integration/eventbridge-scheduler.png";
import eventbridge_schemaIcon from "../../../resources/aws/integration/eventbridge-schema.png";
import eventbridgeIcon from "../../../resources/aws/integration/eventbridge.png";
import express_workflowsIcon from "../../../resources/aws/integration/express-workflows.png";
import mqIcon from "../../../resources/aws/integration/mq.png";
import simple_notification_service_sns_email_notificationIcon from "../../../resources/aws/integration/simple-notification-service-sns-email-notification.png";
import simple_notification_service_sns_http_notificationIcon from "../../../resources/aws/integration/simple-notification-service-sns-http-notification.png";
import simple_notification_service_sns_topicIcon from "../../../resources/aws/integration/simple-notification-service-sns-topic.png";
import simple_notification_service_snsIcon from "../../../resources/aws/integration/simple-notification-service-sns.png";
import simple_queue_service_sqs_messageIcon from "../../../resources/aws/integration/simple-queue-service-sqs-message.png";
import simple_queue_service_sqs_queueIcon from "../../../resources/aws/integration/simple-queue-service-sqs-queue.png";
import simple_queue_service_sqsIcon from "../../../resources/aws/integration/simple-queue-service-sqs.png";
import step_functionsIcon from "../../../resources/aws/integration/step-functions.png";

function _Integration(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "integration";
  return node;
}

export function ApplicationIntegration(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "ApplicationIntegration", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ApplicationIntegration";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = application_integrationIcon;
  return node;
}

export function Appsync(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "Appsync", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Appsync";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = appsyncIcon;
  return node;
}

export function ConsoleMobileApplication(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "ConsoleMobileApplication", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ConsoleMobileApplication";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = console_mobile_applicationIcon;
  return node;
}

export function EventResource(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "EventResource", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventResource";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = event_resourceIcon;
  return node;
}

export function EventbridgeCustomEventBusResource(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Integration(label ?? "EventbridgeCustomEventBusResource", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventbridgeCustomEventBusResource";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    eventbridge_custom_event_bus_resourceIcon;
  return node;
}

export function EventbridgeDefaultEventBusResource(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Integration(label ?? "EventbridgeDefaultEventBusResource", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventbridgeDefaultEventBusResource";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    eventbridge_default_event_bus_resourceIcon;
  return node;
}

export function EventbridgeEvent(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "EventbridgeEvent", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventbridgeEvent";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = eventbridge_eventIcon;
  return node;
}

export function EventbridgePipes(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "EventbridgePipes", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventbridgePipes";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = eventbridge_pipesIcon;
  return node;
}

export function EventbridgeRule(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "EventbridgeRule", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventbridgeRule";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = eventbridge_ruleIcon;
  return node;
}

export function EventbridgeSaasPartnerEventBusResource(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Integration(label ?? "EventbridgeSaasPartnerEventBusResource", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "EventbridgeSaasPartnerEventBusResource";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    eventbridge_saas_partner_event_bus_resourceIcon;
  return node;
}

export function EventbridgeScheduler(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "EventbridgeScheduler", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventbridgeScheduler";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = eventbridge_schedulerIcon;
  return node;
}

export function EventbridgeSchema(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "EventbridgeSchema", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "EventbridgeSchema";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = eventbridge_schemaIcon;
  return node;
}

export function Eventbridge(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "Eventbridge", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Eventbridge";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = eventbridgeIcon;
  return node;
}

export function ExpressWorkflows(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "ExpressWorkflows", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ExpressWorkflows";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = express_workflowsIcon;
  return node;
}

export function MQ(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "MQ", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MQ";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mqIcon;
  return node;
}

export function SimpleNotificationServiceSnsEmailNotification(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Integration(label ?? "SimpleNotificationServiceSnsEmailNotification", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "SimpleNotificationServiceSnsEmailNotification";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    simple_notification_service_sns_email_notificationIcon;
  return node;
}

export function SimpleNotificationServiceSnsHttpNotification(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Integration(label ?? "SimpleNotificationServiceSnsHttpNotification", options);
  (node as unknown as Record<string, unknown>)["~resource"] =
    "SimpleNotificationServiceSnsHttpNotification";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    simple_notification_service_sns_http_notificationIcon;
  return node;
}

export function SimpleNotificationServiceSnsTopic(
  label?: string,
  options?: Record<string, unknown>,
) {
  const node = _Integration(label ?? "SimpleNotificationServiceSnsTopic", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SimpleNotificationServiceSnsTopic";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    simple_notification_service_sns_topicIcon;
  return node;
}

export function SimpleNotificationServiceSns(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "SimpleNotificationServiceSns", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SimpleNotificationServiceSns";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    simple_notification_service_snsIcon;
  return node;
}

export function SimpleQueueServiceSqsMessage(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "SimpleQueueServiceSqsMessage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SimpleQueueServiceSqsMessage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    simple_queue_service_sqs_messageIcon;
  return node;
}

export function SimpleQueueServiceSqsQueue(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "SimpleQueueServiceSqsQueue", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SimpleQueueServiceSqsQueue";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = simple_queue_service_sqs_queueIcon;
  return node;
}

export function SimpleQueueServiceSqs(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "SimpleQueueServiceSqs", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "SimpleQueueServiceSqs";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = simple_queue_service_sqsIcon;
  return node;
}

export function StepFunctions(label?: string, options?: Record<string, unknown>) {
  const node = _Integration(label ?? "StepFunctions", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "StepFunctions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = step_functionsIcon;
  return node;
}

// Aliases
export const SNS = SimpleNotificationServiceSns;
export const SQS = SimpleQueueServiceSqs;
export const SF = StepFunctions;
