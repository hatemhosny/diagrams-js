import { _Oci } from "./index.js";
import api_gateway_whiteIcon from "../../../resources/oci/devops/api-gateway-white.png";
import api_gatewayIcon from "../../../resources/oci/devops/api-gateway.png";
import api_service_whiteIcon from "../../../resources/oci/devops/api-service-white.png";
import api_serviceIcon from "../../../resources/oci/devops/api-service.png";
import resource_mgmt_whiteIcon from "../../../resources/oci/devops/resource-mgmt-white.png";
import resource_mgmtIcon from "../../../resources/oci/devops/resource-mgmt.png";

function _Devops(label?: string, options?: Record<string, unknown>) {
  const node = _Oci(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "devops";
  return node;
}

export function APIGatewayWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "APIGatewayWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_gateway_whiteIcon;
  return node;
}

export function APIGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "APIGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_gatewayIcon;
  return node;
}

export function APIServiceWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "APIServiceWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_service_whiteIcon;
  return node;
}

export function APIService(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "APIService", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_serviceIcon;
  return node;
}

export function ResourceMgmtWhite(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "ResourceMgmtWhite", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = resource_mgmt_whiteIcon;
  return node;
}

export function ResourceMgmt(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "ResourceMgmt", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = resource_mgmtIcon;
  return node;
}
