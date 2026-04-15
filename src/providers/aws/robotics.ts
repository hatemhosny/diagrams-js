import { _Aws } from "./index.js";
import robomaker_cloud_extension_rosIcon from "../../../resources/aws/robotics/robomaker-cloud-extension-ros.png";
import robomaker_development_environmentIcon from "../../../resources/aws/robotics/robomaker-development-environment.png";
import robomaker_fleet_managementIcon from "../../../resources/aws/robotics/robomaker-fleet-management.png";
import robomaker_simulatorIcon from "../../../resources/aws/robotics/robomaker-simulator.png";
import robomakerIcon from "../../../resources/aws/robotics/robomaker.png";
import roboticsIcon from "../../../resources/aws/robotics/robotics.png";

function _Robotics(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "robotics";
  return node;
}

export function RobomakerCloudExtensionRos(label?: string, options?: Record<string, unknown>) {
  const node = _Robotics(label ?? "RobomakerCloudExtensionRos", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RobomakerCloudExtensionRos";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = robomaker_cloud_extension_rosIcon;
  return node;
}

export function RobomakerDevelopmentEnvironment(label?: string, options?: Record<string, unknown>) {
  const node = _Robotics(label ?? "RobomakerDevelopmentEnvironment", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RobomakerDevelopmentEnvironment";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    robomaker_development_environmentIcon;
  return node;
}

export function RobomakerFleetManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Robotics(label ?? "RobomakerFleetManagement", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RobomakerFleetManagement";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = robomaker_fleet_managementIcon;
  return node;
}

export function RobomakerSimulator(label?: string, options?: Record<string, unknown>) {
  const node = _Robotics(label ?? "RobomakerSimulator", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RobomakerSimulator";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = robomaker_simulatorIcon;
  return node;
}

export function Robomaker(label?: string, options?: Record<string, unknown>) {
  const node = _Robotics(label ?? "Robomaker", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Robomaker";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = robomakerIcon;
  return node;
}

export function Robotics(label?: string, options?: Record<string, unknown>) {
  const node = _Robotics(label ?? "Robotics", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Robotics";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = roboticsIcon;
  return node;
}
