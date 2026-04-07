import { _Elastic } from "./index.js";
import app_searchIcon from "../../../resources/elastic/enterprisesearch/app-search.png";
import crawlerIcon from "../../../resources/elastic/enterprisesearch/crawler.png";
import enterprise_searchIcon from "../../../resources/elastic/enterprisesearch/enterprise-search.png";
import site_searchIcon from "../../../resources/elastic/enterprisesearch/site-search.png";
import workplace_searchIcon from "../../../resources/elastic/enterprisesearch/workplace-search.png";

function _Enterprisesearch(label?: string, options?: Record<string, unknown>) {
  const node = _Elastic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "enterprisesearch";
  return node;
}

export function AppSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Enterprisesearch(label ?? "AppSearch", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_searchIcon;
  return node;
}

export function Crawler(label?: string, options?: Record<string, unknown>) {
  const node = _Enterprisesearch(label ?? "Crawler", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = crawlerIcon;
  return node;
}

export function EnterpriseSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Enterprisesearch(label ?? "EnterpriseSearch", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = enterprise_searchIcon;
  return node;
}

export function SiteSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Enterprisesearch(label ?? "SiteSearch", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = site_searchIcon;
  return node;
}

export function WorkplaceSearch(label?: string, options?: Record<string, unknown>) {
  const node = _Enterprisesearch(label ?? "WorkplaceSearch", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = workplace_searchIcon;
  return node;
}
