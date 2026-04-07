import { _Aws } from "./index.js";
import braketIcon from "../../../resources/aws/quantum/braket.png";
import quantum_technologiesIcon from "../../../resources/aws/quantum/quantum-technologies.png";

function _Quantum(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "quantum";
  return node;
}

export function Braket(label?: string, options?: Record<string, unknown>) {
  const node = _Quantum(label ?? "Braket", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = braketIcon;
  return node;
}

export function QuantumTechnologies(label?: string, options?: Record<string, unknown>) {
  const node = _Quantum(label ?? "QuantumTechnologies", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = quantum_technologiesIcon;
  return node;
}
