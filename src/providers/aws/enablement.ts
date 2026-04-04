import { _Aws } from "./index.js";
import customer_enablementIcon from "../../../resources/aws/enablement/customer-enablement.png";
import iqIcon from "../../../resources/aws/enablement/iq.png";
import managed_servicesIcon from "../../../resources/aws/enablement/managed-services.png";
import professional_servicesIcon from "../../../resources/aws/enablement/professional-services.png";
import supportIcon from "../../../resources/aws/enablement/support.png";

class _Enablement extends _Aws {
  protected static override _type = "enablement";
}

export class CustomerEnablement extends _Enablement {
  protected static override _iconDataUrl = customer_enablementIcon;
}

export class Iq extends _Enablement {
  protected static override _iconDataUrl = iqIcon;
}

export class ManagedServices extends _Enablement {
  protected static override _iconDataUrl = managed_servicesIcon;
}

export class ProfessionalServices extends _Enablement {
  protected static override _iconDataUrl = professional_servicesIcon;
}

export class Support extends _Enablement {
  protected static override _iconDataUrl = supportIcon;
}
