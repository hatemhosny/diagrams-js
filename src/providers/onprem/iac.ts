import { _Onprem } from "./index.js";
import ansibleIcon from "../../../resources/onprem/iac/ansible.png";
import atlantisIcon from "../../../resources/onprem/iac/atlantis.png";
import awxIcon from "../../../resources/onprem/iac/awx.png";
import pulumiIcon from "../../../resources/onprem/iac/pulumi.png";
import puppetIcon from "../../../resources/onprem/iac/puppet.png";
import terraformIcon from "../../../resources/onprem/iac/terraform.png";

class _Iac extends _Onprem {
  protected static override _type = "iac";
}

export class Ansible extends _Iac {
  protected static override _iconDataUrl = ansibleIcon;
}

export class Atlantis extends _Iac {
  protected static override _iconDataUrl = atlantisIcon;
}

export class Awx extends _Iac {
  protected static override _iconDataUrl = awxIcon;
}

export class Pulumi extends _Iac {
  protected static override _iconDataUrl = pulumiIcon;
}

export class Puppet extends _Iac {
  protected static override _iconDataUrl = puppetIcon;
}

export class Terraform extends _Iac {
  protected static override _iconDataUrl = terraformIcon;
}
