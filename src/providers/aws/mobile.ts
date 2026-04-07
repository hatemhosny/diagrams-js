import { _Aws } from "./index.js";
import amplifyIcon from "../../../resources/aws/mobile/amplify.png";
import api_gateway_endpointIcon from "../../../resources/aws/mobile/api-gateway-endpoint.png";
import api_gatewayIcon from "../../../resources/aws/mobile/api-gateway.png";
import appsyncIcon from "../../../resources/aws/mobile/appsync.png";
import device_farmIcon from "../../../resources/aws/mobile/device-farm.png";
import mobileIcon from "../../../resources/aws/mobile/mobile.png";
import pinpointIcon from "../../../resources/aws/mobile/pinpoint.png";

function _Mobile(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "mobile";
  return node;
}

export function Amplify(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "Amplify", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = amplifyIcon;
  return node;
}

export function APIGatewayEndpoint(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "APIGatewayEndpoint", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_gateway_endpointIcon;
  return node;
}

export function APIGateway(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "APIGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = api_gatewayIcon;
  return node;
}

export function Appsync(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "Appsync", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = appsyncIcon;
  return node;
}

export function DeviceFarm(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "DeviceFarm", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_farmIcon;
  return node;
}

export function Mobile(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "Mobile", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mobileIcon;
  return node;
}

export function Pinpoint(label?: string, options?: Record<string, unknown>) {
  const node = _Mobile(label ?? "Pinpoint", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = pinpointIcon;
  return node;
}
