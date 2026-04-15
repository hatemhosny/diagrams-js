import { _Aws } from "./index.js";
import alexa_for_businessIcon from "../../../resources/aws/business/alexa-for-business.png";
import business_applicationsIcon from "../../../resources/aws/business/business-applications.png";
import chimeIcon from "../../../resources/aws/business/chime.png";
import workmailIcon from "../../../resources/aws/business/workmail.png";

function _Business(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "business";
  return node;
}

export function AlexaForBusiness(label?: string, options?: Record<string, unknown>) {
  const node = _Business(label ?? "AlexaForBusiness", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AlexaForBusiness";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = alexa_for_businessIcon;
  return node;
}

export function BusinessApplications(label?: string, options?: Record<string, unknown>) {
  const node = _Business(label ?? "BusinessApplications", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "BusinessApplications";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = business_applicationsIcon;
  return node;
}

export function Chime(label?: string, options?: Record<string, unknown>) {
  const node = _Business(label ?? "Chime", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Chime";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = chimeIcon;
  return node;
}

export function Workmail(label?: string, options?: Record<string, unknown>) {
  const node = _Business(label ?? "Workmail", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Workmail";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = workmailIcon;
  return node;
}

// Aliases
export const A4B = AlexaForBusiness;
