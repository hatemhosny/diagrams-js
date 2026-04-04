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

class _Integration extends _Aws {
  protected static override _type = "integration";
}

export class ApplicationIntegration extends _Integration {
  protected static _iconDataUrl = application_integrationIcon;
}

export class Appsync extends _Integration {
  protected static _iconDataUrl = appsyncIcon;
}

export class ConsoleMobileApplication extends _Integration {
  protected static _iconDataUrl = console_mobile_applicationIcon;
}

export class EventResource extends _Integration {
  protected static _iconDataUrl = event_resourceIcon;
}

export class EventbridgeCustomEventBusResource extends _Integration {
  protected static _iconDataUrl = eventbridge_custom_event_bus_resourceIcon;
}

export class EventbridgeDefaultEventBusResource extends _Integration {
  protected static _iconDataUrl = eventbridge_default_event_bus_resourceIcon;
}

export class EventbridgeEvent extends _Integration {
  protected static _iconDataUrl = eventbridge_eventIcon;
}

export class EventbridgePipes extends _Integration {
  protected static _iconDataUrl = eventbridge_pipesIcon;
}

export class EventbridgeRule extends _Integration {
  protected static _iconDataUrl = eventbridge_ruleIcon;
}

export class EventbridgeSaasPartnerEventBusResource extends _Integration {
  protected static _iconDataUrl = eventbridge_saas_partner_event_bus_resourceIcon;
}

export class EventbridgeScheduler extends _Integration {
  protected static _iconDataUrl = eventbridge_schedulerIcon;
}

export class EventbridgeSchema extends _Integration {
  protected static _iconDataUrl = eventbridge_schemaIcon;
}

export class Eventbridge extends _Integration {
  protected static _iconDataUrl = eventbridgeIcon;
}

export class ExpressWorkflows extends _Integration {
  protected static _iconDataUrl = express_workflowsIcon;
}

export class MQ extends _Integration {
  protected static _iconDataUrl = mqIcon;
}

export class SimpleNotificationServiceSnsEmailNotification extends _Integration {
  protected static _iconDataUrl = simple_notification_service_sns_email_notificationIcon;
}

export class SimpleNotificationServiceSnsHttpNotification extends _Integration {
  protected static _iconDataUrl = simple_notification_service_sns_http_notificationIcon;
}

export class SimpleNotificationServiceSnsTopic extends _Integration {
  protected static _iconDataUrl = simple_notification_service_sns_topicIcon;
}

export class SimpleNotificationServiceSns extends _Integration {
  protected static _iconDataUrl = simple_notification_service_snsIcon;
}

export class SimpleQueueServiceSqsMessage extends _Integration {
  protected static _iconDataUrl = simple_queue_service_sqs_messageIcon;
}

export class SimpleQueueServiceSqsQueue extends _Integration {
  protected static _iconDataUrl = simple_queue_service_sqs_queueIcon;
}

export class SimpleQueueServiceSqs extends _Integration {
  protected static _iconDataUrl = simple_queue_service_sqsIcon;
}

export class StepFunctions extends _Integration {
  protected static _iconDataUrl = step_functionsIcon;
}

// Aliases
export const SNS = SimpleNotificationServiceSns;
export const SQS = SimpleQueueServiceSqs;
export const SF = StepFunctions;
