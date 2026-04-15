import { _Onprem } from "./index.js";
import activemqIcon from "../../../resources/onprem/queue/activemq.png";
import celeryIcon from "../../../resources/onprem/queue/celery.png";
import emqxIcon from "../../../resources/onprem/queue/emqx.png";
import kafkaIcon from "../../../resources/onprem/queue/kafka.png";
import natsIcon from "../../../resources/onprem/queue/nats.png";
import rabbitmqIcon from "../../../resources/onprem/queue/rabbitmq.png";
import zeromqIcon from "../../../resources/onprem/queue/zeromq.png";

function _Queue(label?: string, options?: Record<string, unknown>) {
  const node = _Onprem(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "queue";
  return node;
}

export function Activemq(label?: string, options?: Record<string, unknown>) {
  const node = _Queue(label ?? "Activemq", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Activemq";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = activemqIcon;
  return node;
}

export function Celery(label?: string, options?: Record<string, unknown>) {
  const node = _Queue(label ?? "Celery", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Celery";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = celeryIcon;
  return node;
}

export function Emqx(label?: string, options?: Record<string, unknown>) {
  const node = _Queue(label ?? "Emqx", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Emqx";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = emqxIcon;
  return node;
}

export function Kafka(label?: string, options?: Record<string, unknown>) {
  const node = _Queue(label ?? "Kafka", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Kafka";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = kafkaIcon;
  return node;
}

export function Nats(label?: string, options?: Record<string, unknown>) {
  const node = _Queue(label ?? "Nats", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Nats";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = natsIcon;
  return node;
}

export function Rabbitmq(label?: string, options?: Record<string, unknown>) {
  const node = _Queue(label ?? "Rabbitmq", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Rabbitmq";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = rabbitmqIcon;
  return node;
}

export function Zeromq(label?: string, options?: Record<string, unknown>) {
  const node = _Queue(label ?? "Zeromq", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "Zeromq";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = zeromqIcon;
  return node;
}

// Aliases
export const ActiveMQ = Activemq;
export const EMQX = Emqx;
export const RabbitMQ = Rabbitmq;
export const ZeroMQ = Zeromq;
