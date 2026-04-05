import { _Aws } from "./index.js";
import appstream_2_0Icon from "../../../resources/aws/enduser/appstream-2-0.png";
import desktop_and_app_streamingIcon from "../../../resources/aws/enduser/desktop-and-app-streaming.png";
import workdocsIcon from "../../../resources/aws/enduser/workdocs.png";
import worklinkIcon from "../../../resources/aws/enduser/worklink.png";
import workspacesIcon from "../../../resources/aws/enduser/workspaces.png";

function _Enduser(label?: string, options?: Record<string, unknown>) {
  const node = _Aws(label, options);
  (node as unknown as Record<string, unknown>)._type = "enduser";
  return node;
}

export function Appstream20(label?: string, options?: Record<string, unknown>) {
  const node = _Enduser(label ?? "Appstream20", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = appstream_2_0Icon;
  return node;
}

export function DesktopAndAppStreaming(label?: string, options?: Record<string, unknown>) {
  const node = _Enduser(label ?? "DesktopAndAppStreaming", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = desktop_and_app_streamingIcon;
  return node;
}

export function Workdocs(label?: string, options?: Record<string, unknown>) {
  const node = _Enduser(label ?? "Workdocs", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = workdocsIcon;
  return node;
}

export function Worklink(label?: string, options?: Record<string, unknown>) {
  const node = _Enduser(label ?? "Worklink", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = worklinkIcon;
  return node;
}

export function Workspaces(label?: string, options?: Record<string, unknown>) {
  const node = _Enduser(label ?? "Workspaces", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = workspacesIcon;
  return node;
}
