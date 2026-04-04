import { _Digitalocean } from "./index.js";
import containersIcon from "../../../resources/digitalocean/compute/containers.png";
import dockerIcon from "../../../resources/digitalocean/compute/docker.png";
import droplet_connectIcon from "../../../resources/digitalocean/compute/droplet-connect.png";
import droplet_snapshotIcon from "../../../resources/digitalocean/compute/droplet-snapshot.png";
import dropletIcon from "../../../resources/digitalocean/compute/droplet.png";
import k8s_clusterIcon from "../../../resources/digitalocean/compute/k8s-cluster.png";
import k8s_node_poolIcon from "../../../resources/digitalocean/compute/k8s-node-pool.png";
import k8s_nodeIcon from "../../../resources/digitalocean/compute/k8s-node.png";

class _Compute extends _Digitalocean {
  protected static override _type = "compute";
}

export class Containers extends _Compute {
  protected static override _iconDataUrl = containersIcon;
}

export class Docker extends _Compute {
  protected static override _iconDataUrl = dockerIcon;
}

export class DropletConnect extends _Compute {
  protected static override _iconDataUrl = droplet_connectIcon;
}

export class DropletSnapshot extends _Compute {
  protected static override _iconDataUrl = droplet_snapshotIcon;
}

export class Droplet extends _Compute {
  protected static override _iconDataUrl = dropletIcon;
}

export class K8sCluster extends _Compute {
  protected static override _iconDataUrl = k8s_clusterIcon;
}

export class K8sNodePool extends _Compute {
  protected static override _iconDataUrl = k8s_node_poolIcon;
}

export class K8sNode extends _Compute {
  protected static override _iconDataUrl = k8s_nodeIcon;
}
