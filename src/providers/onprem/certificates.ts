import { _Onprem } from "./index.js";
import cert_managerIcon from "../../../resources/onprem/certificates/cert-manager.png";
import lets_encryptIcon from "../../../resources/onprem/certificates/lets-encrypt.png";

function _Certificates(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "certificates";
  return node;
}

export function CertManager(label?: string, options?: Record<string, unknown>) {
  const node = _Certificates(label ?? "CertManager", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "CertManager";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cert_managerIcon;
  return node;
}

export function LetsEncrypt(label?: string, options?: Record<string, unknown>) {
  const node = _Certificates(label ?? "LetsEncrypt", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "LetsEncrypt";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = lets_encryptIcon;
  return node;
}
