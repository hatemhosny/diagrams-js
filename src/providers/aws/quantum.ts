import { _Aws } from "./index.js";
import braketIcon from "../../../resources/aws/quantum/braket.png";
import quantum_technologiesIcon from "../../../resources/aws/quantum/quantum-technologies.png";

class _Quantum extends _Aws {
  protected static override _type = "quantum";
}

export class Braket extends _Quantum {
  protected static override _iconDataUrl = braketIcon;
}

export class QuantumTechnologies extends _Quantum {
  protected static override _iconDataUrl = quantum_technologiesIcon;
}
