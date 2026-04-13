import { _Firebase } from "./index.js";
import ab_testingIcon from "../../../resources/firebase/grow/ab-testing.png";
import app_indexingIcon from "../../../resources/firebase/grow/app-indexing.png";
import dynamic_linksIcon from "../../../resources/firebase/grow/dynamic-links.png";
import in_app_messagingIcon from "../../../resources/firebase/grow/in-app-messaging.png";
import invitesIcon from "../../../resources/firebase/grow/invites.png";
import messagingIcon from "../../../resources/firebase/grow/messaging.png";
import predictionsIcon from "../../../resources/firebase/grow/predictions.png";
import remote_configIcon from "../../../resources/firebase/grow/remote-config.png";

function _Grow(label?: string, options?: Record<string, unknown>) {
  const node = _Firebase(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "grow";
  return node;
}

export function ABTesting(label?: string, options?: Record<string, unknown>) {
  const node = _Grow(label ?? "ABTesting", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "ABTesting";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ab_testingIcon;
  return node;
}

export function AppIndexing(label?: string, options?: Record<string, unknown>) {
  const node = _Grow(label ?? "AppIndexing", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "AppIndexing";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = app_indexingIcon;
  return node;
}

export function DynamicLinks(label?: string, options?: Record<string, unknown>) {
  const node = _Grow(label ?? "DynamicLinks", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DynamicLinks";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dynamic_linksIcon;
  return node;
}

export function InAppMessaging(label?: string, options?: Record<string, unknown>) {
  const node = _Grow(label ?? "InAppMessaging", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "InAppMessaging";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = in_app_messagingIcon;
  return node;
}

export function Invites(label?: string, options?: Record<string, unknown>) {
  const node = _Grow(label ?? "Invites", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Invites";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = invitesIcon;
  return node;
}

export function Messaging(label?: string, options?: Record<string, unknown>) {
  const node = _Grow(label ?? "Messaging", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Messaging";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = messagingIcon;
  return node;
}

export function Predictions(label?: string, options?: Record<string, unknown>) {
  const node = _Grow(label ?? "Predictions", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Predictions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = predictionsIcon;
  return node;
}

export function RemoteConfig(label?: string, options?: Record<string, unknown>) {
  const node = _Grow(label ?? "RemoteConfig", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RemoteConfig";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = remote_configIcon;
  return node;
}

// Aliases
export const FCM = Messaging;
