import { _Onprem } from "./index.js";
import spinnakerIcon from "../../../resources/onprem/cd/spinnaker.png";
import tekton_cliIcon from "../../../resources/onprem/cd/tekton-cli.png";
import tektonIcon from "../../../resources/onprem/cd/tekton.png";

function _Cd(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "cd";
  return node;
}

export function Spinnaker(label?: string, options?: Record<string, unknown>) {
  const node = _Cd(label ?? "Spinnaker", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = spinnakerIcon;
  return node;
}

export function TektonCli(label?: string, options?: Record<string, unknown>) {
  const node = _Cd(label ?? "TektonCli", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = tekton_cliIcon;
  return node;
}

export function Tekton(label?: string, options?: Record<string, unknown>) {
  const node = _Cd(label ?? "Tekton", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = tektonIcon;
  return node;
}
