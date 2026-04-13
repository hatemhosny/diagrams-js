import { _Digitalocean } from "./index.js";
import dbaas_primary_standby_moreIcon from "../../../resources/digitalocean/database/dbaas-primary-standby-more.png";
import dbaas_primaryIcon from "../../../resources/digitalocean/database/dbaas-primary.png";
import dbaas_read_onlyIcon from "../../../resources/digitalocean/database/dbaas-read-only.png";
import dbaas_standbyIcon from "../../../resources/digitalocean/database/dbaas-standby.png";

function _Database(label?: string, options?: Record<string, unknown>) {
  const node = _Digitalocean(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "database";
  return node;
}

export function DbaasPrimaryStandbyMore(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DbaasPrimaryStandbyMore", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DbaasPrimaryStandbyMore";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dbaas_primary_standby_moreIcon;
  return node;
}

export function DbaasPrimary(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DbaasPrimary", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DbaasPrimary";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dbaas_primaryIcon;
  return node;
}

export function DbaasReadOnly(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DbaasReadOnly", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DbaasReadOnly";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dbaas_read_onlyIcon;
  return node;
}

export function DbaasStandby(label?: string, options?: Record<string, unknown>) {
  const node = _Database(label ?? "DbaasStandby", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "DbaasStandby";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dbaas_standbyIcon;
  return node;
}
