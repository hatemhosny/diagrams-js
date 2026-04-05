import { _Onprem } from "./index.js";
import circleciIcon from "../../../resources/onprem/ci/circleci.png";
import concourseciIcon from "../../../resources/onprem/ci/concourseci.png";
import droneciIcon from "../../../resources/onprem/ci/droneci.png";
import github_actionsIcon from "../../../resources/onprem/ci/github-actions.png";
import gitlabciIcon from "../../../resources/onprem/ci/gitlabci.png";
import jenkinsIcon from "../../../resources/onprem/ci/jenkins.png";
import teamcityIcon from "../../../resources/onprem/ci/teamcity.png";
import travisciIcon from "../../../resources/onprem/ci/travisci.png";
import zuulciIcon from "../../../resources/onprem/ci/zuulci.png";

function _Ci(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "ci";
  return node;
}

export function Circleci(label?: string, options?: Record<string, unknown>) {
  const node = _Ci(label ?? "Circleci", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = circleciIcon;
  return node;
}

export function Concourseci(label?: string, options?: Record<string, unknown>) {
  const node = _Ci(label ?? "Concourseci", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = concourseciIcon;
  return node;
}

export function Droneci(label?: string, options?: Record<string, unknown>) {
  const node = _Ci(label ?? "Droneci", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = droneciIcon;
  return node;
}

export function GithubActions(label?: string, options?: Record<string, unknown>) {
  const node = _Ci(label ?? "GithubActions", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = github_actionsIcon;
  return node;
}

export function Gitlabci(label?: string, options?: Record<string, unknown>) {
  const node = _Ci(label ?? "Gitlabci", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = gitlabciIcon;
  return node;
}

export function Jenkins(label?: string, options?: Record<string, unknown>) {
  const node = _Ci(label ?? "Jenkins", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = jenkinsIcon;
  return node;
}

export function Teamcity(label?: string, options?: Record<string, unknown>) {
  const node = _Ci(label ?? "Teamcity", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = teamcityIcon;
  return node;
}

export function Travisci(label?: string, options?: Record<string, unknown>) {
  const node = _Ci(label ?? "Travisci", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = travisciIcon;
  return node;
}

export function Zuulci(label?: string, options?: Record<string, unknown>) {
  const node = _Ci(label ?? "Zuulci", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = zuulciIcon;
  return node;
}

// Aliases
export const CircleCI = Circleci;
export const ConcourseCI = Concourseci;
export const DroneCI = Droneci;
export const GitlabCI = Gitlabci;
export const TravisCI = Travisci;
export const TC = Teamcity;
export const ZuulCI = Zuulci;
