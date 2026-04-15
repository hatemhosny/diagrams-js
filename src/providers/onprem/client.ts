import { _Onprem } from "./index.js";
import clientIcon from "../../../resources/onprem/client/client.png";
import userIcon from "../../../resources/onprem/client/user.png";
import usersIcon from "../../../resources/onprem/client/users.png";

function _Client(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "client";
  return node;
}

export function Client(label?: string, options?: Record<string, unknown>) {
  const node = _Client(label ?? "Client", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Client";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = clientIcon;
  return node;
}

export function User(label?: string, options?: Record<string, unknown>) {
  const node = _Client(label ?? "User", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "User";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = userIcon;
  return node;
}

export function Users(label?: string, options?: Record<string, unknown>) {
  const node = _Client(label ?? "Users", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Users";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = usersIcon;
  return node;
}
