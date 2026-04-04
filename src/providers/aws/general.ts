import { _Aws } from "./index.js";
import clientIcon from "../../../resources/aws/general/client.png";
import diskIcon from "../../../resources/aws/general/disk.png";
import forumsIcon from "../../../resources/aws/general/forums.png";
import generalIcon from "../../../resources/aws/general/general.png";
import generic_databaseIcon from "../../../resources/aws/general/generic-database.png";
import generic_firewallIcon from "../../../resources/aws/general/generic-firewall.png";
import generic_office_buildingIcon from "../../../resources/aws/general/generic-office-building.png";
import generic_saml_tokenIcon from "../../../resources/aws/general/generic-saml-token.png";
import generic_sdkIcon from "../../../resources/aws/general/generic-sdk.png";
import internet_alt1Icon from "../../../resources/aws/general/internet-alt1.png";
import internet_alt2Icon from "../../../resources/aws/general/internet-alt2.png";
import internet_gatewayIcon from "../../../resources/aws/general/internet-gateway.png";
import marketplaceIcon from "../../../resources/aws/general/marketplace.png";
import mobile_clientIcon from "../../../resources/aws/general/mobile-client.png";
import multimediaIcon from "../../../resources/aws/general/multimedia.png";
import office_buildingIcon from "../../../resources/aws/general/office-building.png";
import saml_tokenIcon from "../../../resources/aws/general/saml-token.png";
import sdkIcon from "../../../resources/aws/general/sdk.png";
import ssl_padlockIcon from "../../../resources/aws/general/ssl-padlock.png";
import tape_storageIcon from "../../../resources/aws/general/tape-storage.png";
import toolkitIcon from "../../../resources/aws/general/toolkit.png";
import traditional_serverIcon from "../../../resources/aws/general/traditional-server.png";
import userIcon from "../../../resources/aws/general/user.png";
import usersIcon from "../../../resources/aws/general/users.png";

class _General extends _Aws {
  protected static override _type = "general";
}

export class Client extends _General {
  protected static override _iconDataUrl = clientIcon;
}

export class Disk extends _General {
  protected static override _iconDataUrl = diskIcon;
}

export class Forums extends _General {
  protected static override _iconDataUrl = forumsIcon;
}

export class General extends _General {
  protected static override _iconDataUrl = generalIcon;
}

export class GenericDatabase extends _General {
  protected static override _iconDataUrl = generic_databaseIcon;
}

export class GenericFirewall extends _General {
  protected static override _iconDataUrl = generic_firewallIcon;
}

export class GenericOfficeBuilding extends _General {
  protected static override _iconDataUrl = generic_office_buildingIcon;
}

export class GenericSamlToken extends _General {
  protected static override _iconDataUrl = generic_saml_tokenIcon;
}

export class GenericSDK extends _General {
  protected static override _iconDataUrl = generic_sdkIcon;
}

export class InternetAlt1 extends _General {
  protected static override _iconDataUrl = internet_alt1Icon;
}

export class InternetAlt2 extends _General {
  protected static override _iconDataUrl = internet_alt2Icon;
}

export class InternetGateway extends _General {
  protected static override _iconDataUrl = internet_gatewayIcon;
}

export class Marketplace extends _General {
  protected static override _iconDataUrl = marketplaceIcon;
}

export class MobileClient extends _General {
  protected static override _iconDataUrl = mobile_clientIcon;
}

export class Multimedia extends _General {
  protected static override _iconDataUrl = multimediaIcon;
}

export class OfficeBuilding extends _General {
  protected static override _iconDataUrl = office_buildingIcon;
}

export class SamlToken extends _General {
  protected static override _iconDataUrl = saml_tokenIcon;
}

export class SDK extends _General {
  protected static override _iconDataUrl = sdkIcon;
}

export class SslPadlock extends _General {
  protected static override _iconDataUrl = ssl_padlockIcon;
}

export class TapeStorage extends _General {
  protected static override _iconDataUrl = tape_storageIcon;
}

export class Toolkit extends _General {
  protected static override _iconDataUrl = toolkitIcon;
}

export class TraditionalServer extends _General {
  protected static override _iconDataUrl = traditional_serverIcon;
}

export class User extends _General {
  protected static override _iconDataUrl = userIcon;
}

export class Users extends _General {
  protected static override _iconDataUrl = usersIcon;
}

// Note: GenericOfficeBuilding is available as an alternative to OfficeBuilding
