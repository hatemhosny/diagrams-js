import { _Oci } from "./index.js";
import alarm_whiteIcon from "../../../resources/oci/monitoring/alarm-white.png";
import alarmIcon from "../../../resources/oci/monitoring/alarm.png";
import email_whiteIcon from "../../../resources/oci/monitoring/email-white.png";
import emailIcon from "../../../resources/oci/monitoring/email.png";
import events_whiteIcon from "../../../resources/oci/monitoring/events-white.png";
import eventsIcon from "../../../resources/oci/monitoring/events.png";
import health_check_whiteIcon from "../../../resources/oci/monitoring/health-check-white.png";
import health_checkIcon from "../../../resources/oci/monitoring/health-check.png";
import notifications_whiteIcon from "../../../resources/oci/monitoring/notifications-white.png";
import notificationsIcon from "../../../resources/oci/monitoring/notifications.png";
import queue_whiteIcon from "../../../resources/oci/monitoring/queue-white.png";
import queueIcon from "../../../resources/oci/monitoring/queue.png";
import search_whiteIcon from "../../../resources/oci/monitoring/search-white.png";
import searchIcon from "../../../resources/oci/monitoring/search.png";
import telemetry_whiteIcon from "../../../resources/oci/monitoring/telemetry-white.png";
import telemetryIcon from "../../../resources/oci/monitoring/telemetry.png";
import workflow_whiteIcon from "../../../resources/oci/monitoring/workflow-white.png";
import workflowIcon from "../../../resources/oci/monitoring/workflow.png";

class _Monitoring extends _Oci {
  protected static override _type = "monitoring";
}

export class AlarmWhite extends _Monitoring {
  protected static override _iconDataUrl = alarm_whiteIcon;
}

export class Alarm extends _Monitoring {
  protected static override _iconDataUrl = alarmIcon;
}

export class EmailWhite extends _Monitoring {
  protected static override _iconDataUrl = email_whiteIcon;
}

export class Email extends _Monitoring {
  protected static override _iconDataUrl = emailIcon;
}

export class EventsWhite extends _Monitoring {
  protected static override _iconDataUrl = events_whiteIcon;
}

export class Events extends _Monitoring {
  protected static override _iconDataUrl = eventsIcon;
}

export class HealthCheckWhite extends _Monitoring {
  protected static override _iconDataUrl = health_check_whiteIcon;
}

export class HealthCheck extends _Monitoring {
  protected static override _iconDataUrl = health_checkIcon;
}

export class NotificationsWhite extends _Monitoring {
  protected static override _iconDataUrl = notifications_whiteIcon;
}

export class Notifications extends _Monitoring {
  protected static override _iconDataUrl = notificationsIcon;
}

export class QueueWhite extends _Monitoring {
  protected static override _iconDataUrl = queue_whiteIcon;
}

export class Queue extends _Monitoring {
  protected static override _iconDataUrl = queueIcon;
}

export class SearchWhite extends _Monitoring {
  protected static override _iconDataUrl = search_whiteIcon;
}

export class Search extends _Monitoring {
  protected static override _iconDataUrl = searchIcon;
}

export class TelemetryWhite extends _Monitoring {
  protected static override _iconDataUrl = telemetry_whiteIcon;
}

export class Telemetry extends _Monitoring {
  protected static override _iconDataUrl = telemetryIcon;
}

export class WorkflowWhite extends _Monitoring {
  protected static override _iconDataUrl = workflow_whiteIcon;
}

export class Workflow extends _Monitoring {
  protected static override _iconDataUrl = workflowIcon;
}
