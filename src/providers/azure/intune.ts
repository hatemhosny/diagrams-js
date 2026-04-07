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

function _Intune(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "intune";
  return node;
}

export function AzureADRolesAndAdministrators(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "AzureADRolesAndAdministrators", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] =
    azure_ad_roles_and_administratorsIcon;
  return node;
}

export function ClientApps(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "ClientApps", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = client_appsIcon;
  return node;
}

export function DeviceCompliance(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "DeviceCompliance", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_complianceIcon;
  return node;
}

export function DeviceConfiguration(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "DeviceConfiguration", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_configurationIcon;
  return node;
}

export function DeviceEnrollment(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "DeviceEnrollment", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_enrollmentIcon;
  return node;
}

export function DeviceSecurityApple(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "DeviceSecurityApple", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_security_appleIcon;
  return node;
}

export function DeviceSecurityGoogle(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "DeviceSecurityGoogle", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_security_googleIcon;
  return node;
}

export function DeviceSecurityWindows(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "DeviceSecurityWindows", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = device_security_windowsIcon;
  return node;
}

export function Devices(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "Devices", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = devicesIcon;
  return node;
}

export function Ebooks(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "Ebooks", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ebooksIcon;
  return node;
}

export function ExchangeAccess(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "ExchangeAccess", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = exchange_accessIcon;
  return node;
}

export function IntuneAppProtection(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "IntuneAppProtection", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = intune_app_protectionIcon;
  return node;
}

export function IntuneForEducation(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "IntuneForEducation", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = intune_for_educationIcon;
  return node;
}

export function Intune(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "Intune", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = intuneIcon;
  return node;
}

export function Mindaro(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "Mindaro", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = mindaroIcon;
  return node;
}

export function SecurityBaselines(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "SecurityBaselines", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = security_baselinesIcon;
  return node;
}

export function SoftwareUpdates(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "SoftwareUpdates", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = software_updatesIcon;
  return node;
}

export function TenantStatus(label?: string, options?: Record<string, unknown>) {
  const node = _Intune(label ?? "TenantStatus", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tenant_statusIcon;
  return node;
}
