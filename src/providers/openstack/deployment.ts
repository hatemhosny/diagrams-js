import { _Openstack } from "./index.js";
import ansibleIcon from "../../../resources/openstack/deployment/ansible.png";
import charmsIcon from "../../../resources/openstack/deployment/charms.png";
import chefIcon from "../../../resources/openstack/deployment/chef.png";
import helmIcon from "../../../resources/openstack/deployment/helm.png";
import kollaIcon from "../../../resources/openstack/deployment/kolla.png";
import tripleoIcon from "../../../resources/openstack/deployment/tripleo.png";

class _Deployment extends _Openstack {
  protected static override _type = "deployment";
}

export class Ansible extends _Deployment {
  protected static override _iconDataUrl = ansibleIcon;
}

export class Charms extends _Deployment {
  protected static override _iconDataUrl = charmsIcon;
}

export class Chef extends _Deployment {
  protected static override _iconDataUrl = chefIcon;
}

export class Helm extends _Deployment {
  protected static override _iconDataUrl = helmIcon;
}

export class Kolla extends _Deployment {
  protected static override _iconDataUrl = kollaIcon;
}

export class Tripleo extends _Deployment {
  protected static override _iconDataUrl = tripleoIcon;
}

// Aliases
export const KollaAnsible = Kolla;
export const TripleO = Tripleo;
