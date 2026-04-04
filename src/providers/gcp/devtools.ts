import { _Gcp } from "./index.js";
import buildIcon from "../../../resources/gcp/devtools/build.png";
import cloud_shellIcon from "../../../resources/gcp/devtools/cloud-shell.png";
import code_for_intellijIcon from "../../../resources/gcp/devtools/code-for-intellij.png";
import codeIcon from "../../../resources/gcp/devtools/code.png";
import container_registryIcon from "../../../resources/gcp/devtools/container-registry.png";
import gradle_app_engine_pluginIcon from "../../../resources/gcp/devtools/gradle-app-engine-plugin.png";
import ide_pluginsIcon from "../../../resources/gcp/devtools/ide-plugins.png";
import maven_app_engine_pluginIcon from "../../../resources/gcp/devtools/maven-app-engine-plugin.png";
import schedulerIcon from "../../../resources/gcp/devtools/scheduler.png";
import sdkIcon from "../../../resources/gcp/devtools/sdk.png";
import service_catalogIcon from "../../../resources/gcp/devtools/service-catalog.png";
import source_repositoriesIcon from "../../../resources/gcp/devtools/source-repositories.png";
import tasksIcon from "../../../resources/gcp/devtools/tasks.png";
import test_labIcon from "../../../resources/gcp/devtools/test-lab.png";
import tools_for_eclipseIcon from "../../../resources/gcp/devtools/tools-for-eclipse.png";
import tools_for_powershellIcon from "../../../resources/gcp/devtools/tools-for-powershell.png";
import tools_for_visual_studioIcon from "../../../resources/gcp/devtools/tools-for-visual-studio.png";

class _Devtools extends _Gcp {
  protected static override _type = "devtools";
}

export class Build extends _Devtools {
  protected static override _iconDataUrl = buildIcon;
}

export class CloudShell extends _Devtools {
  protected static override _iconDataUrl = cloud_shellIcon;
}

export class CodeForIntellij extends _Devtools {
  protected static override _iconDataUrl = code_for_intellijIcon;
}

export class Code extends _Devtools {
  protected static override _iconDataUrl = codeIcon;
}

export class ContainerRegistry extends _Devtools {
  protected static override _iconDataUrl = container_registryIcon;
}

export class GradleAppEnginePlugin extends _Devtools {
  protected static override _iconDataUrl = gradle_app_engine_pluginIcon;
}

export class IdePlugins extends _Devtools {
  protected static override _iconDataUrl = ide_pluginsIcon;
}

export class MavenAppEnginePlugin extends _Devtools {
  protected static override _iconDataUrl = maven_app_engine_pluginIcon;
}

export class Scheduler extends _Devtools {
  protected static override _iconDataUrl = schedulerIcon;
}

export class SDK extends _Devtools {
  protected static override _iconDataUrl = sdkIcon;
}

export class ServiceCatalog extends _Devtools {
  protected static override _iconDataUrl = service_catalogIcon;
}

export class SourceRepositories extends _Devtools {
  protected static override _iconDataUrl = source_repositoriesIcon;
}

export class Tasks extends _Devtools {
  protected static override _iconDataUrl = tasksIcon;
}

export class TestLab extends _Devtools {
  protected static override _iconDataUrl = test_labIcon;
}

export class ToolsForEclipse extends _Devtools {
  protected static override _iconDataUrl = tools_for_eclipseIcon;
}

export class ToolsForPowershell extends _Devtools {
  protected static override _iconDataUrl = tools_for_powershellIcon;
}

export class ToolsForVisualStudio extends _Devtools {
  protected static override _iconDataUrl = tools_for_visual_studioIcon;
}

// Aliases
export const GCR = ContainerRegistry;
