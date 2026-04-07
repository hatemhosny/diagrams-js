import { _Digitalocean } from "./index.js";
import certificateIcon from "../../../resources/digitalocean/network/certificate.png";
import domain_registrationIcon from "../../../resources/digitalocean/network/domain-registration.png";
import domainIcon from "../../../resources/digitalocean/network/domain.png";
import firewallIcon from "../../../resources/digitalocean/network/firewall.png";
import floating_ipIcon from "../../../resources/digitalocean/network/floating-ip.png";
import internet_gatewayIcon from "../../../resources/digitalocean/network/internet-gateway.png";
import load_balancerIcon from "../../../resources/digitalocean/network/load-balancer.png";
import managed_vpnIcon from "../../../resources/digitalocean/network/managed-vpn.png";
import vpcIcon from "../../../resources/digitalocean/network/vpc.png";

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Digitalocean(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "network";
  return node;
}

export function Certificate(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Certificate", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = certificateIcon;
  return node;
}

export function DomainRegistration(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "DomainRegistration", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = domain_registrationIcon;
  return node;
}

export function Domain(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Domain", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = domainIcon;
  return node;
}

export function Firewall(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Firewall", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = firewallIcon;
  return node;
}

export function FloatingIp(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "FloatingIp", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = floating_ipIcon;
  return node;
}

export function InternetGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "InternetGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = internet_gatewayIcon;
  return node;
}

export function LoadBalancer(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = load_balancerIcon;
  return node;
}

export function ManagedVpn(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ManagedVpn", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = managed_vpnIcon;
  return node;
}

export function Vpc(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Vpc", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vpcIcon;
  return node;
}
