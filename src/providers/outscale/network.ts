import { _Outscale } from "./index.js";
import client_vpnIcon from "../../../resources/outscale/network/client-vpn.png";
import internet_serviceIcon from "../../../resources/outscale/network/internet-service.png";
import load_balancerIcon from "../../../resources/outscale/network/load-balancer.png";
import nat_serviceIcon from "../../../resources/outscale/network/nat-service.png";
import netIcon from "../../../resources/outscale/network/net.png";
import site_to_site_vpngIcon from "../../../resources/outscale/network/site-to-site-vpng.png";

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Outscale(label, options);
  (node as unknown as Record<string, unknown>)._type = "network";
  return node;
}

export function ClientVpn(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "ClientVpn", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = client_vpnIcon;
  return node;
}

export function InternetService(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "InternetService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = internet_serviceIcon;
  return node;
}

export function LoadBalancer(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "LoadBalancer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = load_balancerIcon;
  return node;
}

export function NatService(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "NatService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = nat_serviceIcon;
  return node;
}

export function Net(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Net", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = netIcon;
  return node;
}

export function SiteToSiteVpng(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "SiteToSiteVpng", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = site_to_site_vpngIcon;
  return node;
}
