import { _Oci } from "./index.js";
import backbone_whiteIcon from "../../../resources/oci/connectivity/backbone-white.png";
import backboneIcon from "../../../resources/oci/connectivity/backbone.png";
import cdn_whiteIcon from "../../../resources/oci/connectivity/cdn-white.png";
import cdnIcon from "../../../resources/oci/connectivity/cdn.png";
import customer_datacenterIcon from "../../../resources/oci/connectivity/customer-datacenter.png";
import customer_datacntr_whiteIcon from "../../../resources/oci/connectivity/customer-datacntr-white.png";
import customer_premises_whiteIcon from "../../../resources/oci/connectivity/customer-premises-white.png";
import customer_premisesIcon from "../../../resources/oci/connectivity/customer-premises.png";
import disconnected_regions_whiteIcon from "../../../resources/oci/connectivity/disconnected-regions-white.png";
import disconnected_regionsIcon from "../../../resources/oci/connectivity/disconnected-regions.png";
import dns_whiteIcon from "../../../resources/oci/connectivity/dns-white.png";
import dnsIcon from "../../../resources/oci/connectivity/dns.png";
import fast_connect_whiteIcon from "../../../resources/oci/connectivity/fast-connect-white.png";
import fast_connectIcon from "../../../resources/oci/connectivity/fast-connect.png";
import nat_gateway_whiteIcon from "../../../resources/oci/connectivity/nat-gateway-white.png";
import nat_gatewayIcon from "../../../resources/oci/connectivity/nat-gateway.png";
import vpn_whiteIcon from "../../../resources/oci/connectivity/vpn-white.png";
import vpnIcon from "../../../resources/oci/connectivity/vpn.png";

class _Connectivity extends _Oci {
  protected static override _type = "connectivity";
}

export class BackboneWhite extends _Connectivity {
  protected static override _iconDataUrl = backbone_whiteIcon;
}

export class Backbone extends _Connectivity {
  protected static override _iconDataUrl = backboneIcon;
}

export class CDNWhite extends _Connectivity {
  protected static override _iconDataUrl = cdn_whiteIcon;
}

export class CDN extends _Connectivity {
  protected static override _iconDataUrl = cdnIcon;
}

export class CustomerDatacenter extends _Connectivity {
  protected static override _iconDataUrl = customer_datacenterIcon;
}

export class CustomerDatacntrWhite extends _Connectivity {
  protected static override _iconDataUrl = customer_datacntr_whiteIcon;
}

export class CustomerPremisesWhite extends _Connectivity {
  protected static override _iconDataUrl = customer_premises_whiteIcon;
}

export class CustomerPremises extends _Connectivity {
  protected static override _iconDataUrl = customer_premisesIcon;
}

export class DisconnectedRegionsWhite extends _Connectivity {
  protected static override _iconDataUrl = disconnected_regions_whiteIcon;
}

export class DisconnectedRegions extends _Connectivity {
  protected static override _iconDataUrl = disconnected_regionsIcon;
}

export class DNSWhite extends _Connectivity {
  protected static override _iconDataUrl = dns_whiteIcon;
}

export class DNS extends _Connectivity {
  protected static override _iconDataUrl = dnsIcon;
}

export class FastConnectWhite extends _Connectivity {
  protected static override _iconDataUrl = fast_connect_whiteIcon;
}

export class FastConnect extends _Connectivity {
  protected static override _iconDataUrl = fast_connectIcon;
}

export class NATGatewayWhite extends _Connectivity {
  protected static override _iconDataUrl = nat_gateway_whiteIcon;
}

export class NATGateway extends _Connectivity {
  protected static override _iconDataUrl = nat_gatewayIcon;
}

export class VPNWhite extends _Connectivity {
  protected static override _iconDataUrl = vpn_whiteIcon;
}

export class VPN extends _Connectivity {
  protected static override _iconDataUrl = vpnIcon;
}
