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

function _Devops(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)._type = "devops";
  return node;
}

export function ArtifactManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "ArtifactManagement", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = artifact_managementIcon;
  return node;
}

export function BuildTest(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "BuildTest", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = build_testIcon;
  return node;
}

export function CodeEditor(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "CodeEditor", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = code_editorIcon;
  return node;
}

export function CollaborativeDevelopment(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "CollaborativeDevelopment", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = collaborative_developmentIcon;
  return node;
}

export function ConfigurationManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "ConfigurationManagement", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = configuration_managementIcon;
  return node;
}

export function ContinuousDeploy(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "ContinuousDeploy", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = continuous_deployIcon;
  return node;
}

export function ContinuousTesting(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "ContinuousTesting", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = continuous_testingIcon;
  return node;
}

export function Devops(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "Devops", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = devopsIcon;
  return node;
}

export function Provision(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "Provision", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = provisionIcon;
  return node;
}

export function ReleaseManagement(label?: string, options?: Record<string, unknown>) {
  const node = _Devops(label ?? "ReleaseManagement", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = release_managementIcon;
  return node;
}
