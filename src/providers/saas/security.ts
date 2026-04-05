import { _Saas } from "./index.js";
import crowdstrikeIcon from "../../../resources/saas/security/crowdstrike.png";
import sonarqubeIcon from "../../../resources/saas/security/sonarqube.png";

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)._type = "security";
  return node;
}

export function Crowdstrike(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Crowdstrike", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = crowdstrikeIcon;
  return node;
}

export function Sonarqube(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Sonarqube", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sonarqubeIcon;
  return node;
}
