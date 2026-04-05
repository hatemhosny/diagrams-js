import { _Aws } from "./index.js";
import customer_enablementIcon from "../../../resources/aws/enablement/customer-enablement.png";
import iqIcon from "../../../resources/aws/enablement/iq.png";
import managed_servicesIcon from "../../../resources/aws/enablement/managed-services.png";
import professional_servicesIcon from "../../../resources/aws/enablement/professional-services.png";
import supportIcon from "../../../resources/aws/enablement/support.png";

function _Enablement(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)._type = "enablement";
  return node;
}

export function CustomerEnablement(label?: string, options?: Record<string, unknown>) {
  const node = _Enablement(label ?? "CustomerEnablement", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = customer_enablementIcon;
  return node;
}

export function Iq(label?: string, options?: Record<string, unknown>) {
  const node = _Enablement(label ?? "Iq", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = iqIcon;
  return node;
}

export function ManagedServices(label?: string, options?: Record<string, unknown>) {
  const node = _Enablement(label ?? "ManagedServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = managed_servicesIcon;
  return node;
}

export function ProfessionalServices(label?: string, options?: Record<string, unknown>) {
  const node = _Enablement(label ?? "ProfessionalServices", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = professional_servicesIcon;
  return node;
}

export function Support(label?: string, options?: Record<string, unknown>) {
  const node = _Enablement(label ?? "Support", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = supportIcon;
  return node;
}
