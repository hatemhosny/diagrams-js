import { _Gcp } from "./index.js";
import api_gatewayIcon from "../../../resources/gcp/api/api-gateway.png";
import apigeeIcon from "../../../resources/gcp/api/apigee.png";
import endpointsIcon from "../../../resources/gcp/api/endpoints.png";

class _Api extends _Gcp {
  protected static override _type = "api";
}

export class APIGateway extends _Api {
  protected static override _iconDataUrl = api_gatewayIcon;
}

export class Apigee extends _Api {
  protected static override _iconDataUrl = apigeeIcon;
}

export class Endpoints extends _Api {
  protected static override _iconDataUrl = endpointsIcon;
}
