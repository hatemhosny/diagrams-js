import { _Aws } from "./index.js";
import cloud_development_kitIcon from "../../../resources/aws/devtools/cloud-development-kit.png";
import cloud9_resourceIcon from "../../../resources/aws/devtools/cloud9-resource.png";
import cloud9Icon from "../../../resources/aws/devtools/cloud9.png";
import cloudshellIcon from "../../../resources/aws/devtools/cloudshell.png";
import codeartifactIcon from "../../../resources/aws/devtools/codeartifact.png";
import codebuildIcon from "../../../resources/aws/devtools/codebuild.png";
import codecommitIcon from "../../../resources/aws/devtools/codecommit.png";
import codedeployIcon from "../../../resources/aws/devtools/codedeploy.png";
import codepipelineIcon from "../../../resources/aws/devtools/codepipeline.png";
import codestarIcon from "../../../resources/aws/devtools/codestar.png";
import command_line_interfaceIcon from "../../../resources/aws/devtools/command-line-interface.png";
import developer_toolsIcon from "../../../resources/aws/devtools/developer-tools.png";
import tools_and_sdksIcon from "../../../resources/aws/devtools/tools-and-sdks.png";
import x_rayIcon from "../../../resources/aws/devtools/x-ray.png";

function _Devtools(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)._type = "devtools";
  return node;
}

export function CloudDevelopmentKit(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "CloudDevelopmentKit", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cloud_development_kitIcon;
  return node;
}

export function Cloud9Resource(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Cloud9Resource", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cloud9_resourceIcon;
  return node;
}

export function Cloud9(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Cloud9", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cloud9Icon;
  return node;
}

export function Cloudshell(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Cloudshell", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = cloudshellIcon;
  return node;
}

export function Codeartifact(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Codeartifact", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = codeartifactIcon;
  return node;
}

export function Codebuild(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Codebuild", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = codebuildIcon;
  return node;
}

export function Codecommit(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Codecommit", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = codecommitIcon;
  return node;
}

export function Codedeploy(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Codedeploy", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = codedeployIcon;
  return node;
}

export function Codepipeline(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Codepipeline", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = codepipelineIcon;
  return node;
}

export function Codestar(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "Codestar", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = codestarIcon;
  return node;
}

export function CommandLineInterface(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "CommandLineInterface", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = command_line_interfaceIcon;
  return node;
}

export function DeveloperTools(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "DeveloperTools", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = developer_toolsIcon;
  return node;
}

export function ToolsAndSdks(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "ToolsAndSdks", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = tools_and_sdksIcon;
  return node;
}

export function XRay(label?: string, options?: Record<string, unknown>) {
  const node = _Devtools(label ?? "XRay", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = x_rayIcon;
  return node;
}

// Aliases
export const CLI = CommandLineInterface;
export const DevTools = DeveloperTools;
