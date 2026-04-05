import { _Ibm } from "./index.js";
import bare_metal_serverIcon from "../../../resources/ibm/compute/bare-metal-server.png";
import image_serviceIcon from "../../../resources/ibm/compute/image-service.png";
import instanceIcon from "../../../resources/ibm/compute/instance.png";
import keyIcon from "../../../resources/ibm/compute/key.png";
import power_instanceIcon from "../../../resources/ibm/compute/power-instance.png";

function _Compute(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)._type = "compute";
  return node;
}

export function BareMetalServer(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "BareMetalServer", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = bare_metal_serverIcon;
  return node;
}

export function ImageService(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "ImageService", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = image_serviceIcon;
  return node;
}

export function Instance(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Instance", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = instanceIcon;
  return node;
}

export function Key(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "Key", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = keyIcon;
  return node;
}

export function PowerInstance(label?: string, options?: Record<string, unknown>) {
  const node = _Compute(label ?? "PowerInstance", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = power_instanceIcon;
  return node;
}
