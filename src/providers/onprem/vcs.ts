import { _Onprem } from "./index.js";
import gitIcon from "../../../resources/onprem/vcs/git.png";
import giteaIcon from "../../../resources/onprem/vcs/gitea.png";
import githubIcon from "../../../resources/onprem/vcs/github.png";
import gitlabIcon from "../../../resources/onprem/vcs/gitlab.png";
import svnIcon from "../../../resources/onprem/vcs/svn.png";

function _Vcs(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "vcs";
  return node;
}

export function Git(label?: string, options?: Record<string, unknown>) {
  const node = _Vcs(label ?? "Git", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = gitIcon;
  return node;
}

export function Gitea(label?: string, options?: Record<string, unknown>) {
  const node = _Vcs(label ?? "Gitea", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = giteaIcon;
  return node;
}

export function Github(label?: string, options?: Record<string, unknown>) {
  const node = _Vcs(label ?? "Github", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = githubIcon;
  return node;
}

export function Gitlab(label?: string, options?: Record<string, unknown>) {
  const node = _Vcs(label ?? "Gitlab", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = gitlabIcon;
  return node;
}

export function Svn(label?: string, options?: Record<string, unknown>) {
  const node = _Vcs(label ?? "Svn", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = svnIcon;
  return node;
}
