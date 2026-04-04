import { _Onprem } from "./index.js";
import cert_managerIcon from "../../../resources/onprem/certificates/cert-manager.png";
import lets_encryptIcon from "../../../resources/onprem/certificates/lets-encrypt.png";

class _Certificates extends _Onprem {
  protected static override _type = "certificates";
}

export class CertManager extends _Certificates {
  protected static _iconDataUrl = cert_managerIcon;
}

export class LetsEncrypt extends _Certificates {
  protected static _iconDataUrl = lets_encryptIcon;
}
