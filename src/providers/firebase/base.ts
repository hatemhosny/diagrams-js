import { _Firebase } from "./index.js";
import firebaseIcon from "../../../resources/firebase/base/firebase.png";

function _Base(label?: string, options?: Record<string, unknown>) {
  const node = _Firebase(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "base";
  return node;
}

export function Firebase(label?: string, options?: Record<string, unknown>) {
  const node = _Base(label ?? "Firebase", options);
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = firebaseIcon;
  return node;
}
