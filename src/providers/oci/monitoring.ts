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

function _Monitoring(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label, options);
  (node as unknown as Record<string, unknown>)._type = "monitoring";
  return node;
}

export function AlarmWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "AlarmWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = alarm_whiteIcon;
  return node;
}

export function Alarm(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Alarm", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = alarmIcon;
  return node;
}

export function EmailWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "EmailWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = email_whiteIcon;
  return node;
}

export function Email(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Email", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = emailIcon;
  return node;
}

export function EventsWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "EventsWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = events_whiteIcon;
  return node;
}

export function Events(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Events", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = eventsIcon;
  return node;
}

export function HealthCheckWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "HealthCheckWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = health_check_whiteIcon;
  return node;
}

export function HealthCheck(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "HealthCheck", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = health_checkIcon;
  return node;
}

export function NotificationsWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "NotificationsWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = notifications_whiteIcon;
  return node;
}

export function Notifications(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Notifications", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = notificationsIcon;
  return node;
}

export function QueueWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "QueueWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = queue_whiteIcon;
  return node;
}

export function Queue(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Queue", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = queueIcon;
  return node;
}

export function SearchWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "SearchWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = search_whiteIcon;
  return node;
}

export function Search(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Search", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = searchIcon;
  return node;
}

export function TelemetryWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "TelemetryWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = telemetry_whiteIcon;
  return node;
}

export function Telemetry(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Telemetry", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = telemetryIcon;
  return node;
}

export function WorkflowWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "WorkflowWhite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = workflow_whiteIcon;
  return node;
}

export function Workflow(label?: string, options?: Record<string, unknown>) {
  const node = _Monitoring(label ?? "Workflow", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = workflowIcon;
  return node;
}
