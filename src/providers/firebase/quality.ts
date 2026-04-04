import { _Firebase } from "./index.js";
import app_distributionIcon from "../../../resources/firebase/quality/app-distribution.png";
import crash_reportingIcon from "../../../resources/firebase/quality/crash-reporting.png";
import crashlyticsIcon from "../../../resources/firebase/quality/crashlytics.png";
import performance_monitoringIcon from "../../../resources/firebase/quality/performance-monitoring.png";
import test_labIcon from "../../../resources/firebase/quality/test-lab.png";

class _Quality extends _Firebase {
  protected static override _type = "quality";
}

export class AppDistribution extends _Quality {
  protected static override _iconDataUrl = app_distributionIcon;
}

export class CrashReporting extends _Quality {
  protected static override _iconDataUrl = crash_reportingIcon;
}

export class Crashlytics extends _Quality {
  protected static override _iconDataUrl = crashlyticsIcon;
}

export class PerformanceMonitoring extends _Quality {
  protected static override _iconDataUrl = performance_monitoringIcon;
}

export class TestLab extends _Quality {
  protected static override _iconDataUrl = test_labIcon;
}
