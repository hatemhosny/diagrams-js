import { _Aws } from "./index.js";
import connectIcon from "../../../resources/aws/engagement/connect.png";
import customer_engagementIcon from "../../../resources/aws/engagement/customer-engagement.png";
import pinpointIcon from "../../../resources/aws/engagement/pinpoint.png";
import simple_email_service_ses_emailIcon from "../../../resources/aws/engagement/simple-email-service-ses-email.png";
import simple_email_service_sesIcon from "../../../resources/aws/engagement/simple-email-service-ses.png";

function _Engagement(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)._type = "engagement";
  return node;
}

export function Connect(label?: string, options?: Record<string, unknown>) {
  const node = _Engagement(label ?? "Connect", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = connectIcon;
  return node;
}

export function CustomerEngagement(label?: string, options?: Record<string, unknown>) {
  const node = _Engagement(label ?? "CustomerEngagement", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = customer_engagementIcon;
  return node;
}

export function Pinpoint(label?: string, options?: Record<string, unknown>) {
  const node = _Engagement(label ?? "Pinpoint", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = pinpointIcon;
  return node;
}

export function SimpleEmailServiceSesEmail(label?: string, options?: Record<string, unknown>) {
  const node = _Engagement(label ?? "SimpleEmailServiceSesEmail", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = simple_email_service_ses_emailIcon;
  return node;
}

export function SimpleEmailServiceSes(label?: string, options?: Record<string, unknown>) {
  const node = _Engagement(label ?? "SimpleEmailServiceSes", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = simple_email_service_sesIcon;
  return node;
}

// Aliases
export const SES = SimpleEmailServiceSes;
