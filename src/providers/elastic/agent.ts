import { _Elastic } from "./index.js";
import agentIcon from "../../../resources/elastic/agent/agent.png";
import endpointIcon from "../../../resources/elastic/agent/endpoint.png";
import fleetIcon from "../../../resources/elastic/agent/fleet.png";
import integrationsIcon from "../../../resources/elastic/agent/integrations.png";

class _Agent extends _Elastic {
  protected static override _type = "agent";
}

export class Agent extends _Agent {
  protected static override _iconDataUrl = agentIcon;
}

export class Endpoint extends _Agent {
  protected static override _iconDataUrl = endpointIcon;
}

export class Fleet extends _Agent {
  protected static override _iconDataUrl = fleetIcon;
}

export class Integrations extends _Agent {
  protected static override _iconDataUrl = integrationsIcon;
}
