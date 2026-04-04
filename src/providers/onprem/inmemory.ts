import { _Onprem } from "./index.js";
import aerospikeIcon from "../../../resources/onprem/inmemory/aerospike.png";
import hazelcastIcon from "../../../resources/onprem/inmemory/hazelcast.png";
import memcachedIcon from "../../../resources/onprem/inmemory/memcached.png";
import redisIcon from "../../../resources/onprem/inmemory/redis.png";

class _Inmemory extends _Onprem {
  protected static override _type = "inmemory";
}

export class Aerospike extends _Inmemory {
  protected static override _iconDataUrl = aerospikeIcon;
}

export class Hazelcast extends _Inmemory {
  protected static override _iconDataUrl = hazelcastIcon;
}

export class Memcached extends _Inmemory {
  protected static override _iconDataUrl = memcachedIcon;
}

export class Redis extends _Inmemory {
  protected static override _iconDataUrl = redisIcon;
}
