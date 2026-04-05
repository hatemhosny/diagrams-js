import { _Onprem } from "./index.js";
import ansibleIcon from "../../../resources/onprem/iac/ansible.png";
import atlantisIcon from "../../../resources/onprem/iac/atlantis.png";
import awxIcon from "../../../resources/onprem/iac/awx.png";
import pulumiIcon from "../../../resources/onprem/iac/pulumi.png";
import puppetIcon from "../../../resources/onprem/iac/puppet.png";
import terraformIcon from "../../../resources/onprem/iac/terraform.png";

function _Iac(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "iac";
  return node;
}

export function Ansible(label?: string, options?: Record<string, unknown>) {
  const node = _Iac(label ?? "Ansible", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ansibleIcon;
  return node;
}

export function Atlantis(label?: string, options?: Record<string, unknown>) {
  const node = _Iac(label ?? "Atlantis", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = atlantisIcon;
  return node;
}

export function Awx(label?: string, options?: Record<string, unknown>) {
  const node = _Iac(label ?? "Awx", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = awxIcon;
  return node;
}

export function Pulumi(label?: string, options?: Record<string, unknown>) {
  const node = _Iac(label ?? "Pulumi", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = pulumiIcon;
  return node;
}

export function Puppet(label?: string, options?: Record<string, unknown>) {
  const node = _Iac(label ?? "Puppet", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = puppetIcon;
  return node;
}

export function Terraform(label?: string, options?: Record<string, unknown>) {
  const node = _Iac(label ?? "Terraform", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = terraformIcon;
  return node;
}
