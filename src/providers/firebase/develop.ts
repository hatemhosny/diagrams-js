import { _Firebase } from "./index.js";
import authenticationIcon from "../../../resources/firebase/develop/authentication.png";
import firestoreIcon from "../../../resources/firebase/develop/firestore.png";
import functionsIcon from "../../../resources/firebase/develop/functions.png";
import hostingIcon from "../../../resources/firebase/develop/hosting.png";
import ml_kitIcon from "../../../resources/firebase/develop/ml-kit.png";
import realtime_databaseIcon from "../../../resources/firebase/develop/realtime-database.png";
import storageIcon from "../../../resources/firebase/develop/storage.png";

function _Develop(label?: string, options?: Record<string, unknown>) {
  const node = _Firebase(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "develop";
  return node;
}

export function Authentication(label?: string, options?: Record<string, unknown>) {
  const node = _Develop(label ?? "Authentication", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Authentication";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = authenticationIcon;
  return node;
}

export function Firestore(label?: string, options?: Record<string, unknown>) {
  const node = _Develop(label ?? "Firestore", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Firestore";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = firestoreIcon;
  return node;
}

export function Functions(label?: string, options?: Record<string, unknown>) {
  const node = _Develop(label ?? "Functions", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Functions";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = functionsIcon;
  return node;
}

export function Hosting(label?: string, options?: Record<string, unknown>) {
  const node = _Develop(label ?? "Hosting", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Hosting";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hostingIcon;
  return node;
}

export function MLKit(label?: string, options?: Record<string, unknown>) {
  const node = _Develop(label ?? "MLKit", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "MLKit";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ml_kitIcon;
  return node;
}

export function RealtimeDatabase(label?: string, options?: Record<string, unknown>) {
  const node = _Develop(label ?? "RealtimeDatabase", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "RealtimeDatabase";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = realtime_databaseIcon;
  return node;
}

export function Storage(label?: string, options?: Record<string, unknown>) {
  const node = _Develop(label ?? "Storage", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Storage";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = storageIcon;
  return node;
}
