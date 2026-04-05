import { _Generic } from "./index.js";
import firewallIcon from "../../../resources/generic/network/firewall.png";
import routerIcon from "../../../resources/generic/network/router.png";
import subnetIcon from "../../../resources/generic/network/subnet.png";
import switchIcon from "../../../resources/generic/network/switch.png";
import vpnIcon from "../../../resources/generic/network/vpn.png";

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Generic(label, options);
  (node as unknown as Record<string, unknown>)._type = "network";
  return node;
}

export function Firewall(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Firewall", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = firewallIcon;
  return node;
}

export function Router(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Router", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = routerIcon;
  return node;
}

export function Subnet(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Subnet", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = subnetIcon;
  return node;
}

export function Switch(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Switch", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = switchIcon;
  return node;
}

export function VPN(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "VPN", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = vpnIcon;
  return node;
}
