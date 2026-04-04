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

class _Devtools extends _Aws {
  protected static override _type = "devtools";
}

export class CloudDevelopmentKit extends _Devtools {
  protected static _iconDataUrl = cloud_development_kitIcon;
}

export class Cloud9Resource extends _Devtools {
  protected static _iconDataUrl = cloud9_resourceIcon;
}

export class Cloud9 extends _Devtools {
  protected static _iconDataUrl = cloud9Icon;
}

export class Cloudshell extends _Devtools {
  protected static _iconDataUrl = cloudshellIcon;
}

export class Codeartifact extends _Devtools {
  protected static _iconDataUrl = codeartifactIcon;
}

export class Codebuild extends _Devtools {
  protected static _iconDataUrl = codebuildIcon;
}

export class Codecommit extends _Devtools {
  protected static _iconDataUrl = codecommitIcon;
}

export class Codedeploy extends _Devtools {
  protected static _iconDataUrl = codedeployIcon;
}

export class Codepipeline extends _Devtools {
  protected static _iconDataUrl = codepipelineIcon;
}

export class Codestar extends _Devtools {
  protected static _iconDataUrl = codestarIcon;
}

export class CommandLineInterface extends _Devtools {
  protected static _iconDataUrl = command_line_interfaceIcon;
}

export class DeveloperTools extends _Devtools {
  protected static _iconDataUrl = developer_toolsIcon;
}

export class ToolsAndSdks extends _Devtools {
  protected static _iconDataUrl = tools_and_sdksIcon;
}

export class XRay extends _Devtools {
  protected static _iconDataUrl = x_rayIcon;
}

// Aliases
export const CLI = CommandLineInterface;
export const DevTools = DeveloperTools;
