import { _K8s } from "./index.js";
import chaos_meshIcon from "../../../resources/k8s/chaos/chaos-mesh.png";
import litmus_chaosIcon from "../../../resources/k8s/chaos/litmus-chaos.png";

function _Chaos(label?: string, options?: Record<string, unknown>) {
  const node = _K8s(label, options);
  (node as unknown as Record<string, unknown>)._type = "chaos";
  return node;
}

export function ChaosMesh(label?: string, options?: Record<string, unknown>) {
  const node = _Chaos(label ?? "ChaosMesh", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = chaos_meshIcon;
  return node;
}

export function LitmusChaos(label?: string, options?: Record<string, unknown>) {
  const node = _Chaos(label ?? "LitmusChaos", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = litmus_chaosIcon;
  return node;
}
