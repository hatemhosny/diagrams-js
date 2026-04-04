import { _Azure } from "./index.js";
import remote_renderingIcon from "../../../resources/azure/mixedreality/remote-rendering.png";
import spatial_anchor_accountsIcon from "../../../resources/azure/mixedreality/spatial-anchor-accounts.png";

class _Mixedreality extends _Azure {
  protected static override _type = "mixedreality";
}

export class RemoteRendering extends _Mixedreality {
  protected static override _iconDataUrl = remote_renderingIcon;
}

export class SpatialAnchorAccounts extends _Mixedreality {
  protected static override _iconDataUrl = spatial_anchor_accountsIcon;
}
