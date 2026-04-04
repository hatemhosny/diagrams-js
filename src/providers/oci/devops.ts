import { _Oci } from "./index.js";
import api_gateway_whiteIcon from "../../../resources/oci/devops/api-gateway-white.png";
import api_gatewayIcon from "../../../resources/oci/devops/api-gateway.png";
import api_service_whiteIcon from "../../../resources/oci/devops/api-service-white.png";
import api_serviceIcon from "../../../resources/oci/devops/api-service.png";
import resource_mgmt_whiteIcon from "../../../resources/oci/devops/resource-mgmt-white.png";
import resource_mgmtIcon from "../../../resources/oci/devops/resource-mgmt.png";

class _Devops extends _Oci {
  protected static override _type = "devops";
}

export class APIGatewayWhite extends _Devops {
  protected static _iconDataUrl = api_gateway_whiteIcon;
}

export class APIGateway extends _Devops {
  protected static _iconDataUrl = api_gatewayIcon;
}

export class APIServiceWhite extends _Devops {
  protected static _iconDataUrl = api_service_whiteIcon;
}

export class APIService extends _Devops {
  protected static _iconDataUrl = api_serviceIcon;
}

export class ResourceMgmtWhite extends _Devops {
  protected static _iconDataUrl = resource_mgmt_whiteIcon;
}

export class ResourceMgmt extends _Devops {
  protected static _iconDataUrl = resource_mgmtIcon;
}
