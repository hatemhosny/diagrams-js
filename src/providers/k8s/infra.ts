import { _K8s } from "./index.js";
import etcdIcon from "../../../resources/k8s/infra/etcd.png";
import masterIcon from "../../../resources/k8s/infra/master.png";
import nodeIcon from "../../../resources/k8s/infra/node.png";

class _Infra extends _K8s {
  protected static override _type = "infra";
}

export class ETCD extends _Infra {
  protected static _iconDataUrl = etcdIcon;
}

export class Master extends _Infra {
  protected static _iconDataUrl = masterIcon;
}

export class Node extends _Infra {
  protected static _iconDataUrl = nodeIcon;
}
