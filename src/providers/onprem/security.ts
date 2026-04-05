import { _Onprem } from "./index.js";
import bitwardenIcon from "../../../resources/onprem/security/bitwarden.png";
import trivyIcon from "../../../resources/onprem/security/trivy.png";
import vaultIcon from "../../../resources/onprem/security/vault.png";

function _Security(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "security";
  return node;
}

export function Bitwarden(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Bitwarden", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = bitwardenIcon;
  return node;
}

export function Trivy(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Trivy", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = trivyIcon;
  return node;
}

export function Vault(label?: string, options?: Record<string, unknown>) {
  const node = _Security(label ?? "Vault", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vaultIcon;
  return node;
}
