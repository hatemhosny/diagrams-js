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

class _Server extends _Gis {
  protected static override _type = "server";
}

export class Actinia extends _Server {
  protected static override _iconDataUrl = actiniaIcon;
}

export class Baremaps extends _Server {
  protected static override _iconDataUrl = baremapsIcon;
}

export class Deegree extends _Server {
  protected static override _iconDataUrl = deegreeIcon;
}

export class G3wSuite extends _Server {
  protected static override _iconDataUrl = g3w_suiteIcon;
}

export class Geohealthcheck extends _Server {
  protected static override _iconDataUrl = geohealthcheckIcon;
}

export class Geomapfish extends _Server {
  protected static override _iconDataUrl = geomapfishIcon;
}

export class Geomesa extends _Server {
  protected static override _iconDataUrl = geomesaIcon;
}

export class Geonetwork extends _Server {
  protected static override _iconDataUrl = geonetworkIcon;
}

export class Geonode extends _Server {
  protected static override _iconDataUrl = geonodeIcon;
}

export class Georchestra extends _Server {
  protected static override _iconDataUrl = georchestraIcon;
}

export class Geoserver extends _Server {
  protected static override _iconDataUrl = geoserverIcon;
}

export class Geowebcache extends _Server {
  protected static override _iconDataUrl = geowebcacheIcon;
}

export class Kepler extends _Server {
  protected static override _iconDataUrl = keplerIcon;
}

export class Mapproxy extends _Server {
  protected static override _iconDataUrl = mapproxyIcon;
}

export class Mapserver extends _Server {
  protected static override _iconDataUrl = mapserverIcon;
}

export class Mapstore extends _Server {
  protected static override _iconDataUrl = mapstoreIcon;
}

export class Mviewer extends _Server {
  protected static override _iconDataUrl = mviewerIcon;
}

export class Pg_tileserv extends _Server {
  protected static override _iconDataUrl = pg_tileservIcon;
}

export class Pycsw extends _Server {
  protected static override _iconDataUrl = pycswIcon;
}

export class Pygeoapi extends _Server {
  protected static override _iconDataUrl = pygeoapiIcon;
}

export class QGISServer extends _Server {
  protected static override _iconDataUrl = qgis_serverIcon;
}

export class Zooproject extends _Server {
  protected static override _iconDataUrl = zooprojectIcon;
}
