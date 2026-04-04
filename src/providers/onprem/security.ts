import { _Onprem } from "./index.js";
import bitwardenIcon from "../../../resources/onprem/security/bitwarden.png";
import trivyIcon from "../../../resources/onprem/security/trivy.png";
import vaultIcon from "../../../resources/onprem/security/vault.png";

class _Security extends _Onprem {
  protected static override _type = "security";
}

export class Bitwarden extends _Security {
  protected static _iconDataUrl = bitwardenIcon;
}

export class Trivy extends _Security {
  protected static _iconDataUrl = trivyIcon;
}

export class Vault extends _Security {
  protected static _iconDataUrl = vaultIcon;
}
