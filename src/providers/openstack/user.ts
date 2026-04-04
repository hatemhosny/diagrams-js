import { _Openstack } from "./index.js";
import openstackclientIcon from "../../../resources/openstack/user/openstackclient.png";

class _User extends _Openstack {
  protected static override _type = "user";
}

export class Openstackclient extends _User {
  protected static override _iconDataUrl = openstackclientIcon;
}

// Aliases
export const OpenStackClient = Openstackclient;
