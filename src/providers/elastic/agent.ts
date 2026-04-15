import { _Elastic } from "./index.js";
import agentIcon from "../../../resources/elastic/agent/agent.png";
import endpointIcon from "../../../resources/elastic/agent/endpoint.png";
import fleetIcon from "../../../resources/elastic/agent/fleet.png";
import integrationsIcon from "../../../resources/elastic/agent/integrations.png";

function _Agent(label?: string, options?: Record<string, unknown>) {
  const node = _Elastic(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "agent";
  return node;
}

export function Agent(label?: string, options?: Record<string, unknown>) {
  const node = _Agent(label ?? "Agent", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Agent";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = agentIcon;
  return node;
}

export function Endpoint(label?: string, options?: Record<string, unknown>) {
  const node = _Agent(label ?? "Endpoint", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Endpoint";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = endpointIcon;
  return node;
}

export function Fleet(label?: string, options?: Record<string, unknown>) {
  const node = _Agent(label ?? "Fleet", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Fleet";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = fleetIcon;
  return node;
}

export function Integrations(label?: string, options?: Record<string, unknown>) {
  const node = _Agent(label ?? "Integrations", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Integrations";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = integrationsIcon;
  return node;
}
