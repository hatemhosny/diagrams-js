import { _Onprem } from "./index.js";
import harborIcon from "../../../resources/onprem/registry/harbor.png";
import jfrogIcon from "../../../resources/onprem/registry/jfrog.png";

function _Registry(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "registry";
  return node;
}

export function Harbor(label?: string, options?: Record<string, unknown>) {
  const node = _Registry(label ?? "Harbor", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = harborIcon;
  return node;
}

export function Jfrog(label?: string, options?: Record<string, unknown>) {
  const node = _Registry(label ?? "Jfrog", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = jfrogIcon;
  return node;
}
