import { _Onprem } from "./index.js";
import ambassadorIcon from "../../../resources/onprem/network/ambassador.png";
import apacheIcon from "../../../resources/onprem/network/apache.png";
import bind_9Icon from "../../../resources/onprem/network/bind-9.png";
import caddyIcon from "../../../resources/onprem/network/caddy.png";
import cisco_routerIcon from "../../../resources/onprem/network/cisco-router.png";
import cisco_switch_l2Icon from "../../../resources/onprem/network/cisco-switch-l2.png";
import cisco_switch_l3Icon from "../../../resources/onprem/network/cisco-switch-l3.png";
import consulIcon from "../../../resources/onprem/network/consul.png";
import envoyIcon from "../../../resources/onprem/network/envoy.png";
import etcdIcon from "../../../resources/onprem/network/etcd.png";
import glassfishIcon from "../../../resources/onprem/network/glassfish.png";
import gunicornIcon from "../../../resources/onprem/network/gunicorn.png";
import haproxyIcon from "../../../resources/onprem/network/haproxy.png";
import internetIcon from "../../../resources/onprem/network/internet.png";
import istioIcon from "../../../resources/onprem/network/istio.png";
import jbossasIcon from "../../../resources/onprem/network/jbossas.png";
import jettyIcon from "../../../resources/onprem/network/jetty.png";
import kongIcon from "../../../resources/onprem/network/kong.png";
import linkerdIcon from "../../../resources/onprem/network/linkerd.png";
import mikrotikIcon from "../../../resources/onprem/network/mikrotik.png";
import nginxIcon from "../../../resources/onprem/network/nginx.png";
import ocelotIcon from "../../../resources/onprem/network/ocelot.png";
import open_service_meshIcon from "../../../resources/onprem/network/open-service-mesh.png";
import opnsenseIcon from "../../../resources/onprem/network/opnsense.png";
import pfsenseIcon from "../../../resources/onprem/network/pfsense.png";
import pomeriumIcon from "../../../resources/onprem/network/pomerium.png";
import powerdnsIcon from "../../../resources/onprem/network/powerdns.png";
import tomcatIcon from "../../../resources/onprem/network/tomcat.png";
import traefikIcon from "../../../resources/onprem/network/traefik.png";
import tykIcon from "../../../resources/onprem/network/tyk.png";
import vyosIcon from "../../../resources/onprem/network/vyos.png";
import wildflyIcon from "../../../resources/onprem/network/wildfly.png";
import yarpIcon from "../../../resources/onprem/network/yarp.png";
import zookeeperIcon from "../../../resources/onprem/network/zookeeper.png";

function _Network(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "network";
  return node;
}

export function Ambassador(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Ambassador", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ambassadorIcon;
  return node;
}

export function Apache(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Apache", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = apacheIcon;
  return node;
}

export function Bind9(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Bind9", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = bind_9Icon;
  return node;
}

export function Caddy(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Caddy", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = caddyIcon;
  return node;
}

export function CiscoRouter(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CiscoRouter", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cisco_routerIcon;
  return node;
}

export function CiscoSwitchL2(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CiscoSwitchL2", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cisco_switch_l2Icon;
  return node;
}

export function CiscoSwitchL3(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "CiscoSwitchL3", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cisco_switch_l3Icon;
  return node;
}

export function Consul(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Consul", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = consulIcon;
  return node;
}

export function Envoy(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Envoy", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = envoyIcon;
  return node;
}

export function Etcd(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Etcd", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = etcdIcon;
  return node;
}

export function Glassfish(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Glassfish", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = glassfishIcon;
  return node;
}

export function Gunicorn(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Gunicorn", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = gunicornIcon;
  return node;
}

export function Haproxy(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Haproxy", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = haproxyIcon;
  return node;
}

export function Internet(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Internet", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = internetIcon;
  return node;
}

export function Istio(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Istio", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = istioIcon;
  return node;
}

export function Jbossas(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Jbossas", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = jbossasIcon;
  return node;
}

export function Jetty(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Jetty", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = jettyIcon;
  return node;
}

export function Kong(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Kong", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kongIcon;
  return node;
}

export function Linkerd(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Linkerd", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = linkerdIcon;
  return node;
}

export function Mikrotik(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Mikrotik", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mikrotikIcon;
  return node;
}

export function Nginx(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Nginx", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nginxIcon;
  return node;
}

export function Ocelot(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Ocelot", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ocelotIcon;
  return node;
}

export function OpenServiceMesh(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "OpenServiceMesh", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = open_service_meshIcon;
  return node;
}

export function Opnsense(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Opnsense", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = opnsenseIcon;
  return node;
}

export function Pfsense(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Pfsense", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pfsenseIcon;
  return node;
}

export function Pomerium(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Pomerium", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pomeriumIcon;
  return node;
}

export function Powerdns(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Powerdns", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = powerdnsIcon;
  return node;
}

export function Tomcat(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Tomcat", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tomcatIcon;
  return node;
}

export function Traefik(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Traefik", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = traefikIcon;
  return node;
}

export function Tyk(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Tyk", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tykIcon;
  return node;
}

export function Vyos(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Vyos", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = vyosIcon;
  return node;
}

export function Wildfly(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Wildfly", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = wildflyIcon;
  return node;
}

export function Yarp(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Yarp", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = yarpIcon;
  return node;
}

export function Zookeeper(label?: string, options?: Record<string, unknown>) {
  const node = _Network(label ?? "Zookeeper", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = zookeeperIcon;
  return node;
}

// Aliases
export const ETCD = Etcd;
export const HAProxy = Haproxy;
export const OSM = OpenServiceMesh;
export const OPNSense = Opnsense;
export const PFSense = Pfsense;
export const VyOS = Vyos;
