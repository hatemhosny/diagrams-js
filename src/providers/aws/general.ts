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

function _General(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "general";
  return node;
}

export function Client(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Client", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = clientIcon;
  return node;
}

export function Disk(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Disk", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = diskIcon;
  return node;
}

export function Forums(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Forums", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = forumsIcon;
  return node;
}

export function General(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "General", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = generalIcon;
  return node;
}

export function GenericDatabase(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "GenericDatabase", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = generic_databaseIcon;
  return node;
}

export function GenericFirewall(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "GenericFirewall", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = generic_firewallIcon;
  return node;
}

export function GenericOfficeBuilding(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "GenericOfficeBuilding", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = generic_office_buildingIcon;
  return node;
}

export function GenericSamlToken(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "GenericSamlToken", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = generic_saml_tokenIcon;
  return node;
}

export function GenericSDK(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "GenericSDK", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = generic_sdkIcon;
  return node;
}

export function InternetAlt1(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "InternetAlt1", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = internet_alt1Icon;
  return node;
}

export function InternetAlt2(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "InternetAlt2", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = internet_alt2Icon;
  return node;
}

export function InternetGateway(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "InternetGateway", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = internet_gatewayIcon;
  return node;
}

export function Marketplace(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Marketplace", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = marketplaceIcon;
  return node;
}

export function MobileClient(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "MobileClient", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mobile_clientIcon;
  return node;
}

export function Multimedia(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Multimedia", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = multimediaIcon;
  return node;
}

export function OfficeBuilding(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "OfficeBuilding", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = office_buildingIcon;
  return node;
}

export function SamlToken(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "SamlToken", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = saml_tokenIcon;
  return node;
}

export function SDK(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "SDK", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sdkIcon;
  return node;
}

export function SslPadlock(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "SslPadlock", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ssl_padlockIcon;
  return node;
}

export function TapeStorage(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "TapeStorage", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tape_storageIcon;
  return node;
}

export function Toolkit(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Toolkit", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = toolkitIcon;
  return node;
}

export function TraditionalServer(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "TraditionalServer", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = traditional_serverIcon;
  return node;
}

export function User(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "User", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = userIcon;
  return node;
}

export function Users(label?: string, options?: Record<string, unknown>) {
  const node = _General(label ?? "Users", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = usersIcon;
  return node;
}
