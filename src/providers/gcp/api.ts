import { _Gcp } from "./index.js";
import api_gatewayIcon from "../../../resources/gcp/api/api-gateway.png";
import apigeeIcon from "../../../resources/gcp/api/apigee.png";
import endpointsIcon from "../../../resources/gcp/api/endpoints.png";

function _Api(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)._type = "api";
  return node;
}

export function APIGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Api(label ?? "APIGateway", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = api_gatewayIcon;
  return node;
}

export function Apigee(label?: string, options?: Record<string, unknown>) {
  const node = _Api(label ?? "Apigee", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = apigeeIcon;
  return node;
}

export function Endpoints(label?: string, options?: Record<string, unknown>) {
  const node = _Api(label ?? "Endpoints", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = endpointsIcon;
  return node;
}
