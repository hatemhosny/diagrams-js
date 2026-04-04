import { _Onprem } from "./index.js";
import gitIcon from "../../../resources/onprem/vcs/git.png";
import giteaIcon from "../../../resources/onprem/vcs/gitea.png";
import githubIcon from "../../../resources/onprem/vcs/github.png";
import gitlabIcon from "../../../resources/onprem/vcs/gitlab.png";
import svnIcon from "../../../resources/onprem/vcs/svn.png";

class _Vcs extends _Onprem {
  protected static override _type = "vcs";
}

export class Git extends _Vcs {
  protected static _iconDataUrl = gitIcon;
}

export class Gitea extends _Vcs {
  protected static _iconDataUrl = giteaIcon;
}

export class Github extends _Vcs {
  protected static _iconDataUrl = githubIcon;
}

export class Gitlab extends _Vcs {
  protected static _iconDataUrl = gitlabIcon;
}

export class Svn extends _Vcs {
  protected static _iconDataUrl = svnIcon;
}
