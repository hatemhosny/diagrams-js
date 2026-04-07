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

function _Devtools(label?: string, options?: Record<string, unknown>) {
  const node = _Gcp(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "devtools";
  return node;
}

export function Build(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Build", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = buildIcon;
  return node;
}

export function CloudShell(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "CloudShell", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = cloud_shellIcon;
  return node;
}

export function CodeForIntellij(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "CodeForIntellij", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = code_for_intellijIcon;
  return node;
}

export function Code(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Code", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = codeIcon;
  return node;
}

export function ContainerRegistry(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "ContainerRegistry", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = container_registryIcon;
  return node;
}

export function GradleAppEnginePlugin(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "GradleAppEnginePlugin", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = gradle_app_engine_pluginIcon;
  return node;
}

export function IdePlugins(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "IdePlugins", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ide_pluginsIcon;
  return node;
}

export function MavenAppEnginePlugin(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "MavenAppEnginePlugin", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = maven_app_engine_pluginIcon;
  return node;
}

export function Scheduler(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Scheduler", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = schedulerIcon;
  return node;
}

export function SDK(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "SDK", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = sdkIcon;
  return node;
}

export function ServiceCatalog(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "ServiceCatalog", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = service_catalogIcon;
  return node;
}

export function SourceRepositories(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "SourceRepositories", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = source_repositoriesIcon;
  return node;
}

export function Tasks(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Tasks", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tasksIcon;
  return node;
}

export function TestLab(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "TestLab", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = test_labIcon;
  return node;
}

export function ToolsForEclipse(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "ToolsForEclipse", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tools_for_eclipseIcon;
  return node;
}

export function ToolsForPowershell(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "ToolsForPowershell", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tools_for_powershellIcon;
  return node;
}

export function ToolsForVisualStudio(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "ToolsForVisualStudio", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = tools_for_visual_studioIcon;
  return node;
}

// Aliases
export const GCR = ContainerRegistry;
