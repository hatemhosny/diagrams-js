import { _Onprem } from "./index.js";
import clientIcon from "../../../resources/onprem/client/client.png";
import userIcon from "../../../resources/onprem/client/user.png";
import usersIcon from "../../../resources/onprem/client/users.png";

class _Client extends _Onprem {
  protected static override _type = "client";
}

export class Client extends _Client {
  protected static _iconDataUrl = clientIcon;
}

export class User extends _Client {
  protected static _iconDataUrl = userIcon;
}

export class Users extends _Client {
  protected static _iconDataUrl = usersIcon;
}
