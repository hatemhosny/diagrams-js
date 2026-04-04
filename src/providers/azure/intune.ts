import { _Azure } from "./index.js";
import azure_ad_roles_and_administratorsIcon from "../../../resources/azure/intune/azure-ad-roles-and-administrators.png";
import client_appsIcon from "../../../resources/azure/intune/client-apps.png";
import device_complianceIcon from "../../../resources/azure/intune/device-compliance.png";
import device_configurationIcon from "../../../resources/azure/intune/device-configuration.png";
import device_enrollmentIcon from "../../../resources/azure/intune/device-enrollment.png";
import device_security_appleIcon from "../../../resources/azure/intune/device-security-apple.png";
import device_security_googleIcon from "../../../resources/azure/intune/device-security-google.png";
import device_security_windowsIcon from "../../../resources/azure/intune/device-security-windows.png";
import devicesIcon from "../../../resources/azure/intune/devices.png";
import ebooksIcon from "../../../resources/azure/intune/ebooks.png";
import exchange_accessIcon from "../../../resources/azure/intune/exchange-access.png";
import intune_app_protectionIcon from "../../../resources/azure/intune/intune-app-protection.png";
import intune_for_educationIcon from "../../../resources/azure/intune/intune-for-education.png";
import intuneIcon from "../../../resources/azure/intune/intune.png";
import mindaroIcon from "../../../resources/azure/intune/mindaro.png";
import security_baselinesIcon from "../../../resources/azure/intune/security-baselines.png";
import software_updatesIcon from "../../../resources/azure/intune/software-updates.png";
import tenant_statusIcon from "../../../resources/azure/intune/tenant-status.png";

class _Intune extends _Azure {
  protected static override _type = "intune";
}

export class AzureADRolesAndAdministrators extends _Intune {
  protected static _iconDataUrl = azure_ad_roles_and_administratorsIcon;
}

export class ClientApps extends _Intune {
  protected static _iconDataUrl = client_appsIcon;
}

export class DeviceCompliance extends _Intune {
  protected static _iconDataUrl = device_complianceIcon;
}

export class DeviceConfiguration extends _Intune {
  protected static _iconDataUrl = device_configurationIcon;
}

export class DeviceEnrollment extends _Intune {
  protected static _iconDataUrl = device_enrollmentIcon;
}

export class DeviceSecurityApple extends _Intune {
  protected static _iconDataUrl = device_security_appleIcon;
}

export class DeviceSecurityGoogle extends _Intune {
  protected static _iconDataUrl = device_security_googleIcon;
}

export class DeviceSecurityWindows extends _Intune {
  protected static _iconDataUrl = device_security_windowsIcon;
}

export class Devices extends _Intune {
  protected static _iconDataUrl = devicesIcon;
}

export class Ebooks extends _Intune {
  protected static _iconDataUrl = ebooksIcon;
}

export class ExchangeAccess extends _Intune {
  protected static _iconDataUrl = exchange_accessIcon;
}

export class IntuneAppProtection extends _Intune {
  protected static _iconDataUrl = intune_app_protectionIcon;
}

export class IntuneForEducation extends _Intune {
  protected static _iconDataUrl = intune_for_educationIcon;
}

export class Intune extends _Intune {
  protected static _iconDataUrl = intuneIcon;
}

export class Mindaro extends _Intune {
  protected static _iconDataUrl = mindaroIcon;
}

export class SecurityBaselines extends _Intune {
  protected static _iconDataUrl = security_baselinesIcon;
}

export class SoftwareUpdates extends _Intune {
  protected static _iconDataUrl = software_updatesIcon;
}

export class TenantStatus extends _Intune {
  protected static _iconDataUrl = tenant_statusIcon;
}
