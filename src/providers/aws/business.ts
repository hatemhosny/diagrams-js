import { _Aws } from "./index.js";
import alexa_for_businessIcon from "../../../resources/aws/business/alexa-for-business.png";
import business_applicationsIcon from "../../../resources/aws/business/business-applications.png";
import chimeIcon from "../../../resources/aws/business/chime.png";
import workmailIcon from "../../../resources/aws/business/workmail.png";

class _Business extends _Aws {
  protected static override _type = "business";
}

export class AlexaForBusiness extends _Business {
  protected static _iconDataUrl = alexa_for_businessIcon;
}

export class BusinessApplications extends _Business {
  protected static _iconDataUrl = business_applicationsIcon;
}

export class Chime extends _Business {
  protected static _iconDataUrl = chimeIcon;
}

export class Workmail extends _Business {
  protected static _iconDataUrl = workmailIcon;
}

// Aliases
export const A4B = AlexaForBusiness;
