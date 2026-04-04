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

class _Network extends _Digitalocean {
  protected static override _type = "network";
}

export class Certificate extends _Network {
  protected static _iconDataUrl = certificateIcon;
}

export class DomainRegistration extends _Network {
  protected static _iconDataUrl = domain_registrationIcon;
}

export class Domain extends _Network {
  protected static _iconDataUrl = domainIcon;
}

export class Firewall extends _Network {
  protected static _iconDataUrl = firewallIcon;
}

export class FloatingIp extends _Network {
  protected static _iconDataUrl = floating_ipIcon;
}

export class InternetGateway extends _Network {
  protected static _iconDataUrl = internet_gatewayIcon;
}

export class LoadBalancer extends _Network {
  protected static _iconDataUrl = load_balancerIcon;
}

export class ManagedVpn extends _Network {
  protected static _iconDataUrl = managed_vpnIcon;
}

export class Vpc extends _Network {
  protected static _iconDataUrl = vpcIcon;
}
