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

class _Network extends _Onprem {
  protected static override _type = "network";
}

export class Ambassador extends _Network {
  protected static override _iconDataUrl = ambassadorIcon;
}

export class Apache extends _Network {
  protected static override _iconDataUrl = apacheIcon;
}

export class Bind9 extends _Network {
  protected static override _iconDataUrl = bind_9Icon;
}

export class Caddy extends _Network {
  protected static override _iconDataUrl = caddyIcon;
}

export class CiscoRouter extends _Network {
  protected static override _iconDataUrl = cisco_routerIcon;
}

export class CiscoSwitchL2 extends _Network {
  protected static override _iconDataUrl = cisco_switch_l2Icon;
}

export class CiscoSwitchL3 extends _Network {
  protected static override _iconDataUrl = cisco_switch_l3Icon;
}

export class Consul extends _Network {
  protected static override _iconDataUrl = consulIcon;
}

export class Envoy extends _Network {
  protected static override _iconDataUrl = envoyIcon;
}

export class Etcd extends _Network {
  protected static override _iconDataUrl = etcdIcon;
}

export class Glassfish extends _Network {
  protected static override _iconDataUrl = glassfishIcon;
}

export class Gunicorn extends _Network {
  protected static override _iconDataUrl = gunicornIcon;
}

export class Haproxy extends _Network {
  protected static override _iconDataUrl = haproxyIcon;
}

export class Internet extends _Network {
  protected static override _iconDataUrl = internetIcon;
}

export class Istio extends _Network {
  protected static override _iconDataUrl = istioIcon;
}

export class Jbossas extends _Network {
  protected static override _iconDataUrl = jbossasIcon;
}

export class Jetty extends _Network {
  protected static override _iconDataUrl = jettyIcon;
}

export class Kong extends _Network {
  protected static override _iconDataUrl = kongIcon;
}

export class Linkerd extends _Network {
  protected static override _iconDataUrl = linkerdIcon;
}

export class Mikrotik extends _Network {
  protected static override _iconDataUrl = mikrotikIcon;
}

export class Nginx extends _Network {
  protected static override _iconDataUrl = nginxIcon;
}

export class Ocelot extends _Network {
  protected static override _iconDataUrl = ocelotIcon;
}

export class OpenServiceMesh extends _Network {
  protected static override _iconDataUrl = open_service_meshIcon;
}

export class Opnsense extends _Network {
  protected static override _iconDataUrl = opnsenseIcon;
}

export class Pfsense extends _Network {
  protected static override _iconDataUrl = pfsenseIcon;
}

export class Pomerium extends _Network {
  protected static override _iconDataUrl = pomeriumIcon;
}

export class Powerdns extends _Network {
  protected static override _iconDataUrl = powerdnsIcon;
}

export class Tomcat extends _Network {
  protected static override _iconDataUrl = tomcatIcon;
}

export class Traefik extends _Network {
  protected static override _iconDataUrl = traefikIcon;
}

export class Tyk extends _Network {
  protected static override _iconDataUrl = tykIcon;
}

export class Vyos extends _Network {
  protected static override _iconDataUrl = vyosIcon;
}

export class Wildfly extends _Network {
  protected static override _iconDataUrl = wildflyIcon;
}

export class Yarp extends _Network {
  protected static override _iconDataUrl = yarpIcon;
}

export class Zookeeper extends _Network {
  protected static override _iconDataUrl = zookeeperIcon;
}

// Aliases
export const ETCD = Etcd;
export const HAProxy = Haproxy;
export const OSM = OpenServiceMesh;
export const OPNSense = Opnsense;
export const PFSense = Pfsense;
export const VyOS = Vyos;
