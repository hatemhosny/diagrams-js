import { _Ibm } from "./index.js";
import browserIcon from "../../../resources/ibm/user/browser.png";
import deviceIcon from "../../../resources/ibm/user/device.png";
import integrated_digital_experiencesIcon from "../../../resources/ibm/user/integrated-digital-experiences.png";
import physical_entityIcon from "../../../resources/ibm/user/physical-entity.png";
import sensorIcon from "../../../resources/ibm/user/sensor.png";
import userIcon from "../../../resources/ibm/user/user.png";

function _User(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)._type = "user";
  return node;
}

export function Browser(label?: string, options?: Record<string, unknown>) {
  const node = _User(label ?? "Browser", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = browserIcon;
  return node;
}

export function Device(label?: string, options?: Record<string, unknown>) {
  const node = _User(label ?? "Device", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = deviceIcon;
  return node;
}

export function IntegratedDigitalExperiences(label?: string, options?: Record<string, unknown>) {
  const node = _User(label ?? "IntegratedDigitalExperiences", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = integrated_digital_experiencesIcon;
  return node;
}

export function PhysicalEntity(label?: string, options?: Record<string, unknown>) {
  const node = _User(label ?? "PhysicalEntity", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = physical_entityIcon;
  return node;
}

export function Sensor(label?: string, options?: Record<string, unknown>) {
  const node = _User(label ?? "Sensor", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = sensorIcon;
  return node;
}

export function User(label?: string, options?: Record<string, unknown>) {
  const node = _User(label ?? "User", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = userIcon;
  return node;
}
