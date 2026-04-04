import { _Onprem } from "./index.js";
import solrIcon from "../../../resources/onprem/search/solr.png";

class _Search extends _Onprem {
  protected static override _type = "search";
}

export class Solr extends _Search {
  protected static override _iconDataUrl = solrIcon;
}
