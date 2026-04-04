import { _Ibm } from "./index.js";
import artifact_managementIcon from "../../../resources/ibm/devops/artifact-management.png";
import build_testIcon from "../../../resources/ibm/devops/build-test.png";
import code_editorIcon from "../../../resources/ibm/devops/code-editor.png";
import collaborative_developmentIcon from "../../../resources/ibm/devops/collaborative-development.png";
import configuration_managementIcon from "../../../resources/ibm/devops/configuration-management.png";
import continuous_deployIcon from "../../../resources/ibm/devops/continuous-deploy.png";
import continuous_testingIcon from "../../../resources/ibm/devops/continuous-testing.png";
import devopsIcon from "../../../resources/ibm/devops/devops.png";
import provisionIcon from "../../../resources/ibm/devops/provision.png";
import release_managementIcon from "../../../resources/ibm/devops/release-management.png";

class _Devops extends _Ibm {
  protected static override _type = "devops";
}

export class ArtifactManagement extends _Devops {
  protected static override _iconDataUrl = artifact_managementIcon;
}

export class BuildTest extends _Devops {
  protected static override _iconDataUrl = build_testIcon;
}

export class CodeEditor extends _Devops {
  protected static override _iconDataUrl = code_editorIcon;
}

export class CollaborativeDevelopment extends _Devops {
  protected static override _iconDataUrl = collaborative_developmentIcon;
}

export class ConfigurationManagement extends _Devops {
  protected static override _iconDataUrl = configuration_managementIcon;
}

export class ContinuousDeploy extends _Devops {
  protected static override _iconDataUrl = continuous_deployIcon;
}

export class ContinuousTesting extends _Devops {
  protected static override _iconDataUrl = continuous_testingIcon;
}

export class Devops extends _Devops {
  protected static override _iconDataUrl = devopsIcon;
}

export class Provision extends _Devops {
  protected static override _iconDataUrl = provisionIcon;
}

export class ReleaseManagement extends _Devops {
  protected static override _iconDataUrl = release_managementIcon;
}
