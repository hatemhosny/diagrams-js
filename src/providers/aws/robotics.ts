import { _Aws } from "./index.js";
import robomaker_cloud_extension_rosIcon from "../../../resources/aws/robotics/robomaker-cloud-extension-ros.png";
import robomaker_development_environmentIcon from "../../../resources/aws/robotics/robomaker-development-environment.png";
import robomaker_fleet_managementIcon from "../../../resources/aws/robotics/robomaker-fleet-management.png";
import robomaker_simulatorIcon from "../../../resources/aws/robotics/robomaker-simulator.png";
import robomakerIcon from "../../../resources/aws/robotics/robomaker.png";
import roboticsIcon from "../../../resources/aws/robotics/robotics.png";

class _Robotics extends _Aws {
  protected static override _type = "robotics";
}

export class RobomakerCloudExtensionRos extends _Robotics {
  protected static override _iconDataUrl = robomaker_cloud_extension_rosIcon;
}

export class RobomakerDevelopmentEnvironment extends _Robotics {
  protected static override _iconDataUrl = robomaker_development_environmentIcon;
}

export class RobomakerFleetManagement extends _Robotics {
  protected static override _iconDataUrl = robomaker_fleet_managementIcon;
}

export class RobomakerSimulator extends _Robotics {
  protected static override _iconDataUrl = robomaker_simulatorIcon;
}

export class Robomaker extends _Robotics {
  protected static override _iconDataUrl = robomakerIcon;
}

export class Robotics extends _Robotics {
  protected static override _iconDataUrl = roboticsIcon;
}
