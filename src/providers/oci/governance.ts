import { _Oci } from "./index.js";
import audit_whiteIcon from "../../../resources/oci/governance/audit-white.png";
import auditIcon from "../../../resources/oci/governance/audit.png";
import compartments_whiteIcon from "../../../resources/oci/governance/compartments-white.png";
import compartmentsIcon from "../../../resources/oci/governance/compartments.png";
import groups_whiteIcon from "../../../resources/oci/governance/groups-white.png";
import groupsIcon from "../../../resources/oci/governance/groups.png";
import logging_whiteIcon from "../../../resources/oci/governance/logging-white.png";
import loggingIcon from "../../../resources/oci/governance/logging.png";
import ocid_whiteIcon from "../../../resources/oci/governance/ocid-white.png";
import ocidIcon from "../../../resources/oci/governance/ocid.png";
import policies_whiteIcon from "../../../resources/oci/governance/policies-white.png";
import policiesIcon from "../../../resources/oci/governance/policies.png";
import tagging_whiteIcon from "../../../resources/oci/governance/tagging-white.png";
import taggingIcon from "../../../resources/oci/governance/tagging.png";

class _Governance extends _Oci {
  protected static override _type = "governance";
}

export class AuditWhite extends _Governance {
  protected static override _iconDataUrl = audit_whiteIcon;
}

export class Audit extends _Governance {
  protected static override _iconDataUrl = auditIcon;
}

export class CompartmentsWhite extends _Governance {
  protected static override _iconDataUrl = compartments_whiteIcon;
}

export class Compartments extends _Governance {
  protected static override _iconDataUrl = compartmentsIcon;
}

export class GroupsWhite extends _Governance {
  protected static override _iconDataUrl = groups_whiteIcon;
}

export class Groups extends _Governance {
  protected static override _iconDataUrl = groupsIcon;
}

export class LoggingWhite extends _Governance {
  protected static override _iconDataUrl = logging_whiteIcon;
}

export class Logging extends _Governance {
  protected static override _iconDataUrl = loggingIcon;
}

export class OCIDWhite extends _Governance {
  protected static override _iconDataUrl = ocid_whiteIcon;
}

export class OCID extends _Governance {
  protected static override _iconDataUrl = ocidIcon;
}

export class PoliciesWhite extends _Governance {
  protected static override _iconDataUrl = policies_whiteIcon;
}

export class Policies extends _Governance {
  protected static override _iconDataUrl = policiesIcon;
}

export class TaggingWhite extends _Governance {
  protected static override _iconDataUrl = tagging_whiteIcon;
}

export class Tagging extends _Governance {
  protected static override _iconDataUrl = taggingIcon;
}
