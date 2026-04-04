import { _Ibm } from "./index.js";
import browserIcon from "../../../resources/ibm/user/browser.png";
import deviceIcon from "../../../resources/ibm/user/device.png";
import integrated_digital_experiencesIcon from "../../../resources/ibm/user/integrated-digital-experiences.png";
import physical_entityIcon from "../../../resources/ibm/user/physical-entity.png";
import sensorIcon from "../../../resources/ibm/user/sensor.png";
import userIcon from "../../../resources/ibm/user/user.png";

class _User extends _Ibm {
  protected static override _type = "user";
}

export class Browser extends _User {
  protected static _iconDataUrl = browserIcon;
}

export class Device extends _User {
  protected static _iconDataUrl = deviceIcon;
}

export class IntegratedDigitalExperiences extends _User {
  protected static _iconDataUrl = integrated_digital_experiencesIcon;
}

export class PhysicalEntity extends _User {
  protected static _iconDataUrl = physical_entityIcon;
}

export class Sensor extends _User {
  protected static _iconDataUrl = sensorIcon;
}

export class User extends _User {
  protected static _iconDataUrl = userIcon;
}
