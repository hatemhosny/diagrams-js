import { _Aws } from "./index.js";
import connectIcon from "../../../resources/aws/engagement/connect.png";
import customer_engagementIcon from "../../../resources/aws/engagement/customer-engagement.png";
import pinpointIcon from "../../../resources/aws/engagement/pinpoint.png";
import simple_email_service_ses_emailIcon from "../../../resources/aws/engagement/simple-email-service-ses-email.png";
import simple_email_service_sesIcon from "../../../resources/aws/engagement/simple-email-service-ses.png";

class _Engagement extends _Aws {
  protected static override _type = "engagement";
}

export class Connect extends _Engagement {
  protected static _iconDataUrl = connectIcon;
}

export class CustomerEngagement extends _Engagement {
  protected static _iconDataUrl = customer_engagementIcon;
}

export class Pinpoint extends _Engagement {
  protected static _iconDataUrl = pinpointIcon;
}

export class SimpleEmailServiceSesEmail extends _Engagement {
  protected static _iconDataUrl = simple_email_service_ses_emailIcon;
}

export class SimpleEmailServiceSes extends _Engagement {
  protected static _iconDataUrl = simple_email_service_sesIcon;
}

// Aliases
export const SES = SimpleEmailServiceSes;
