import { _Onprem } from "./index.js";
import aerospikeIcon from "../../../resources/onprem/inmemory/aerospike.png";
import hazelcastIcon from "../../../resources/onprem/inmemory/hazelcast.png";
import memcachedIcon from "../../../resources/onprem/inmemory/memcached.png";
import redisIcon from "../../../resources/onprem/inmemory/redis.png";

function _Inmemory(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)._type = "inmemory";
  return node;
}

export function Aerospike(label?: string, options?: Record<string, unknown>) {
  const node = _Inmemory(label ?? "Aerospike", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = aerospikeIcon;
  return node;
}

export function Hazelcast(label?: string, options?: Record<string, unknown>) {
  const node = _Inmemory(label ?? "Hazelcast", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = hazelcastIcon;
  return node;
}

export function Memcached(label?: string, options?: Record<string, unknown>) {
  const node = _Inmemory(label ?? "Memcached", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = memcachedIcon;
  return node;
}

export function Redis(label?: string, options?: Record<string, unknown>) {
  const node = _Inmemory(label ?? "Redis", options);
  (node as unknown as Record<string, unknown>)._iconDataUrl = redisIcon;
  return node;
}
