import { _Firebase } from "./index.js";
import app_distributionIcon from "../../../resources/firebase/quality/app-distribution.png";
import crash_reportingIcon from "../../../resources/firebase/quality/crash-reporting.png";
import crashlyticsIcon from "../../../resources/firebase/quality/crashlytics.png";
import performance_monitoringIcon from "../../../resources/firebase/quality/performance-monitoring.png";
import test_labIcon from "../../../resources/firebase/quality/test-lab.png";

function _Quality(label?: string, options?: Record<string, unknown>) {
  const node = _Firebase(label, options);
  (node as unknown as Record<string, unknown>)._type = "quality";
  return node;
}

export function AppDistribution(label?: string, options?: Record<string, unknown>) {
  const node = _Quality(label ?? "AppDistribution", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = app_distributionIcon;
  return node;
}

export function CrashReporting(label?: string, options?: Record<string, unknown>) {
  const node = _Quality(label ?? "CrashReporting", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = crash_reportingIcon;
  return node;
}

export function Crashlytics(label?: string, options?: Record<string, unknown>) {
  const node = _Quality(label ?? "Crashlytics", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = crashlyticsIcon;
  return node;
}

export function PerformanceMonitoring(label?: string, options?: Record<string, unknown>) {
  const node = _Quality(label ?? "PerformanceMonitoring", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = performance_monitoringIcon;
  return node;
}

export function TestLab(label?: string, options?: Record<string, unknown>) {
  const node = _Quality(label ?? "TestLab", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = test_labIcon;
  return node;
}
