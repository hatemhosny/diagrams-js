import { _Gis } from "./index.js";
import actiniaIcon from "../../../resources/gis/server/actinia.png";
import baremapsIcon from "../../../resources/gis/server/baremaps.png";
import deegreeIcon from "../../../resources/gis/server/deegree.png";
import g3w_suiteIcon from "../../../resources/gis/server/g3w-suite.png";
import geohealthcheckIcon from "../../../resources/gis/server/geohealthcheck.png";
import geomapfishIcon from "../../../resources/gis/server/geomapfish.png";
import geomesaIcon from "../../../resources/gis/server/geomesa.png";
import geonetworkIcon from "../../../resources/gis/server/geonetwork.png";
import geonodeIcon from "../../../resources/gis/server/geonode.png";
import georchestraIcon from "../../../resources/gis/server/georchestra.png";
import geoserverIcon from "../../../resources/gis/server/geoserver.png";
import geowebcacheIcon from "../../../resources/gis/server/geowebcache.png";
import keplerIcon from "../../../resources/gis/server/kepler.png";
import mapproxyIcon from "../../../resources/gis/server/mapproxy.png";
import mapserverIcon from "../../../resources/gis/server/mapserver.png";
import mapstoreIcon from "../../../resources/gis/server/mapstore.png";
import mviewerIcon from "../../../resources/gis/server/mviewer.png";
import pg_tileservIcon from "../../../resources/gis/server/pg_tileserv.png";
import pycswIcon from "../../../resources/gis/server/pycsw.png";
import pygeoapiIcon from "../../../resources/gis/server/pygeoapi.png";
import qgis_serverIcon from "../../../resources/gis/server/qgis-server.png";
import zooprojectIcon from "../../../resources/gis/server/zooproject.png";

function _Server(label?: string, options?: Record<string, unknown>) {
  const node = _Gis(label, options);
  (node as unknown as Record<string, unknown>)._type = "server";
  return node;
}

export function Actinia(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Actinia", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = actiniaIcon;
  return node;
}

export function Baremaps(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Baremaps", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = baremapsIcon;
  return node;
}

export function Deegree(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Deegree", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = deegreeIcon;
  return node;
}

export function G3wSuite(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "G3wSuite", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = g3w_suiteIcon;
  return node;
}

export function Geohealthcheck(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Geohealthcheck", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = geohealthcheckIcon;
  return node;
}

export function Geomapfish(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Geomapfish", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = geomapfishIcon;
  return node;
}

export function Geomesa(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Geomesa", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = geomesaIcon;
  return node;
}

export function Geonetwork(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Geonetwork", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = geonetworkIcon;
  return node;
}

export function Geonode(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Geonode", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = geonodeIcon;
  return node;
}

export function Georchestra(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Georchestra", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = georchestraIcon;
  return node;
}

export function Geoserver(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Geoserver", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = geoserverIcon;
  return node;
}

export function Geowebcache(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Geowebcache", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = geowebcacheIcon;
  return node;
}

export function Kepler(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Kepler", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = keplerIcon;
  return node;
}

export function Mapproxy(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Mapproxy", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mapproxyIcon;
  return node;
}

export function Mapserver(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Mapserver", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mapserverIcon;
  return node;
}

export function Mapstore(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Mapstore", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mapstoreIcon;
  return node;
}

export function Mviewer(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Mviewer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = mviewerIcon;
  return node;
}

export function Pg_tileserv(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Pg_tileserv", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = pg_tileservIcon;
  return node;
}

export function Pycsw(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Pycsw", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = pycswIcon;
  return node;
}

export function Pygeoapi(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Pygeoapi", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = pygeoapiIcon;
  return node;
}

export function QGISServer(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "QGISServer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = qgis_serverIcon;
  return node;
}

export function Zooproject(label?: string, options?: Record<string, unknown>) {
  const node = _Server(label ?? "Zooproject", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = zooprojectIcon;
  return node;
}
