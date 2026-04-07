import { _Ibm } from "./index.js";
import communitiesIcon from "../../../resources/ibm/social/communities.png";
import file_syncIcon from "../../../resources/ibm/social/file-sync.png";
import live_collaborationIcon from "../../../resources/ibm/social/live-collaboration.png";
import messagingIcon from "../../../resources/ibm/social/messaging.png";
import networkingIcon from "../../../resources/ibm/social/networking.png";

function _Social(label?: string, options?: Record<string, unknown>) {
  const node = _Ibm(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "social";
  return node;
}

export function Communities(label?: string, options?: Record<string, unknown>) {
  const node = _Social(label ?? "Communities", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = communitiesIcon;
  return node;
}

export function FileSync(label?: string, options?: Record<string, unknown>) {
  const node = _Social(label ?? "FileSync", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = file_syncIcon;
  return node;
}

export function LiveCollaboration(label?: string, options?: Record<string, unknown>) {
  const node = _Social(label ?? "LiveCollaboration", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = live_collaborationIcon;
  return node;
}

export function Messaging(label?: string, options?: Record<string, unknown>) {
  const node = _Social(label ?? "Messaging", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = messagingIcon;
  return node;
}

export function Networking(label?: string, options?: Record<string, unknown>) {
  const node = _Social(label ?? "Networking", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = networkingIcon;
  return node;
}
