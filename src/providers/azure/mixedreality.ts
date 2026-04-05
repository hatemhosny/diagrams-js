import { _Azure } from "./index.js";
import remote_renderingIcon from "../../../resources/azure/mixedreality/remote-rendering.png";
import spatial_anchor_accountsIcon from "../../../resources/azure/mixedreality/spatial-anchor-accounts.png";

function _Mixedreality(label?: string, options?: Record<string, unknown>) {
  const node = _Azure(label, options);
  (node as unknown as Record<string, unknown>)._type = "mixedreality";
  return node;
}

export function RemoteRendering(label?: string, options?: Record<string, unknown>) {
  const node = _Mixedreality(label ?? "RemoteRendering", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = remote_renderingIcon;
  return node;
}

export function SpatialAnchorAccounts(label?: string, options?: Record<string, unknown>) {
  const node = _Mixedreality(label ?? "SpatialAnchorAccounts", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = spatial_anchor_accountsIcon;
  return node;
}
