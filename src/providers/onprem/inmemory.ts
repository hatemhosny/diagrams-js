import { _Onprem } from "./index.js";
import aerospikeIcon from "../../../resources/onprem/inmemory/aerospike.png";
import hazelcastIcon from "../../../resources/onprem/inmemory/hazelcast.png";
import memcachedIcon from "../../../resources/onprem/inmemory/memcached.png";
import redisIcon from "../../../resources/onprem/inmemory/redis.png";

function _Inmemory(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "inmemory";
  return node;
}

export function Aerospike(label?: string, options?: Record<string, unknown>) {
  const node = _Inmemory(label ?? "Aerospike", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Aerospike";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = aerospikeIcon;
  return node;
}

export function Hazelcast(label?: string, options?: Record<string, unknown>) {
  const node = _Inmemory(label ?? "Hazelcast", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Hazelcast";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = hazelcastIcon;
  return node;
}

export function Memcached(label?: string, options?: Record<string, unknown>) {
  const node = _Inmemory(label ?? "Memcached", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Memcached";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = memcachedIcon;
  return node;
}

export function Redis(label?: string, options?: Record<string, unknown>) {
  const node = _Inmemory(label ?? "Redis", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Redis";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = redisIcon;
  return node;
}
