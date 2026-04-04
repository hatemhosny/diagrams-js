import { _Openstack } from "./index.js";
import congressIcon from "../../../resources/openstack/optimization/congress.png";
import rallyIcon from "../../../resources/openstack/optimization/rally.png";
import vitrageIcon from "../../../resources/openstack/optimization/vitrage.png";
import watcherIcon from "../../../resources/openstack/optimization/watcher.png";

class _Optimization extends _Openstack {
  protected static override _type = "optimization";
}

export class Congress extends _Optimization {
  protected static override _iconDataUrl = congressIcon;
}

export class Rally extends _Optimization {
  protected static override _iconDataUrl = rallyIcon;
}

export class Vitrage extends _Optimization {
  protected static override _iconDataUrl = vitrageIcon;
}

export class Watcher extends _Optimization {
  protected static override _iconDataUrl = watcherIcon;
}
