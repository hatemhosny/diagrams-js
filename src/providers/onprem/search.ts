import { _Onprem } from "./index.js";
import solrIcon from "../../../resources/onprem/search/solr.png";

function _Search(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "search";
  return node;
}

export function Solr(label?: string, options?: Record<string, unknown>) {
  const node = _Search(label ?? "Solr", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Solr";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = solrIcon;
  return node;
}
