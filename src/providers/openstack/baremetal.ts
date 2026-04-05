import { _Openstack } from "./index.js";
import cyborgIcon from "../../../resources/openstack/baremetal/cyborg.png";
import ironicIcon from "../../../resources/openstack/baremetal/ironic.png";

function _Baremetal(label?: string, options?: Record<string, unknown>) {
  const node = _Openstack(label, options);
  (node as unknown as Record<string, unknown>)._type = "baremetal";
  return node;
}

export function Cyborg(label?: string, options?: Record<string, unknown>) {
  const node = _Baremetal(label ?? "Cyborg", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cyborgIcon;
  return node;
}

export function Ironic(label?: string, options?: Record<string, unknown>) {
  const node = _Baremetal(label ?? "Ironic", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = ironicIcon;
  return node;
}
