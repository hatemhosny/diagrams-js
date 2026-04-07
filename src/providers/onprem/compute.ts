import { _Onprem } from "./index.js";
import nomadIcon from "../../../resources/onprem/compute/nomad.png";
import serverIcon from "../../../resources/onprem/compute/server.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "compute";
  return node;
}

export function Nomad(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Nomad", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = nomadIcon;
  return node;
}

export function Server(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Server", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = serverIcon;
  return node;
}
