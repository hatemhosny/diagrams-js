import { _Aws } from "./index.js";
import amplifyIcon from "../../../resources/aws/mobile/amplify.png";
import api_gateway_endpointIcon from "../../../resources/aws/mobile/api-gateway-endpoint.png";
import api_gatewayIcon from "../../../resources/aws/mobile/api-gateway.png";
import appsyncIcon from "../../../resources/aws/mobile/appsync.png";
import device_farmIcon from "../../../resources/aws/mobile/device-farm.png";
import mobileIcon from "../../../resources/aws/mobile/mobile.png";
import pinpointIcon from "../../../resources/aws/mobile/pinpoint.png";

class _Mobile extends _Aws {
  protected static override _type = "mobile";
}

export class Amplify extends _Mobile {
  protected static _iconDataUrl = amplifyIcon;
}

export class APIGatewayEndpoint extends _Mobile {
  protected static _iconDataUrl = api_gateway_endpointIcon;
}

export class APIGateway extends _Mobile {
  protected static _iconDataUrl = api_gatewayIcon;
}

export class Appsync extends _Mobile {
  protected static _iconDataUrl = appsyncIcon;
}

export class DeviceFarm extends _Mobile {
  protected static _iconDataUrl = device_farmIcon;
}

export class Mobile extends _Mobile {
  protected static _iconDataUrl = mobileIcon;
}

export class Pinpoint extends _Mobile {
  protected static _iconDataUrl = pinpointIcon;
}
