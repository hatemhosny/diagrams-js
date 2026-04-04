import { _Elastic } from "./index.js";
import app_searchIcon from "../../../resources/elastic/enterprisesearch/app-search.png";
import crawlerIcon from "../../../resources/elastic/enterprisesearch/crawler.png";
import enterprise_searchIcon from "../../../resources/elastic/enterprisesearch/enterprise-search.png";
import site_searchIcon from "../../../resources/elastic/enterprisesearch/site-search.png";
import workplace_searchIcon from "../../../resources/elastic/enterprisesearch/workplace-search.png";

class _Enterprisesearch extends _Elastic {
  protected static override _type = "enterprisesearch";
}

export class AppSearch extends _Enterprisesearch {
  protected static _iconDataUrl = app_searchIcon;
}

export class Crawler extends _Enterprisesearch {
  protected static _iconDataUrl = crawlerIcon;
}

export class EnterpriseSearch extends _Enterprisesearch {
  protected static _iconDataUrl = enterprise_searchIcon;
}

export class SiteSearch extends _Enterprisesearch {
  protected static _iconDataUrl = site_searchIcon;
}

export class WorkplaceSearch extends _Enterprisesearch {
  protected static _iconDataUrl = workplace_searchIcon;
}
