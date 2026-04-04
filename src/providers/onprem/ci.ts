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

class _Ci extends _Onprem {
  protected static override _type = "ci";
}

export class Circleci extends _Ci {
  protected static _iconDataUrl = circleciIcon;
}

export class Concourseci extends _Ci {
  protected static _iconDataUrl = concourseciIcon;
}

export class Droneci extends _Ci {
  protected static _iconDataUrl = droneciIcon;
}

export class GithubActions extends _Ci {
  protected static _iconDataUrl = github_actionsIcon;
}

export class Gitlabci extends _Ci {
  protected static _iconDataUrl = gitlabciIcon;
}

export class Jenkins extends _Ci {
  protected static _iconDataUrl = jenkinsIcon;
}

export class Teamcity extends _Ci {
  protected static _iconDataUrl = teamcityIcon;
}

export class Travisci extends _Ci {
  protected static _iconDataUrl = travisciIcon;
}

export class Zuulci extends _Ci {
  protected static _iconDataUrl = zuulciIcon;
}

// Aliases
export const CircleCI = Circleci;
export const ConcourseCI = Concourseci;
export const DroneCI = Droneci;
export const GitlabCI = Gitlabci;
export const TravisCI = Travisci;
export const TC = Teamcity;
export const ZuulCI = Zuulci;
