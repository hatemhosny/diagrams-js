import { _Saas } from "./index.js";
import dataformIcon from "../../../resources/saas/analytics/dataform.png";
import snowflakeIcon from "../../../resources/saas/analytics/snowflake.png";
import stitchIcon from "../../../resources/saas/analytics/stitch.png";

function _Analytics(label?: string, options?: Record<string, unknown>) {
  const node = _Saas(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "analytics";
  return node;
}

export function Dataform(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Dataform", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Dataform";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = dataformIcon;
  return node;
}

export function Snowflake(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Snowflake", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Snowflake";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = snowflakeIcon;
  return node;
}

export function Stitch(label?: string, options?: Record<string, unknown>) {
  const node = _Analytics(label ?? "Stitch", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Stitch";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = stitchIcon;
  return node;
}
