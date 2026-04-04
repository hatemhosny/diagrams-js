import { _Onprem } from "./index.js";
import activemqIcon from "../../../resources/onprem/queue/activemq.png";
import celeryIcon from "../../../resources/onprem/queue/celery.png";
import emqxIcon from "../../../resources/onprem/queue/emqx.png";
import kafkaIcon from "../../../resources/onprem/queue/kafka.png";
import natsIcon from "../../../resources/onprem/queue/nats.png";
import rabbitmqIcon from "../../../resources/onprem/queue/rabbitmq.png";
import zeromqIcon from "../../../resources/onprem/queue/zeromq.png";

class _Queue extends _Onprem {
  protected static override _type = "queue";
}

export class Activemq extends _Queue {
  protected static _iconDataUrl = activemqIcon;
}

export class Celery extends _Queue {
  protected static _iconDataUrl = celeryIcon;
}

export class Emqx extends _Queue {
  protected static _iconDataUrl = emqxIcon;
}

export class Kafka extends _Queue {
  protected static _iconDataUrl = kafkaIcon;
}

export class Nats extends _Queue {
  protected static _iconDataUrl = natsIcon;
}

export class Rabbitmq extends _Queue {
  protected static _iconDataUrl = rabbitmqIcon;
}

export class Zeromq extends _Queue {
  protected static _iconDataUrl = zeromqIcon;
}

// Aliases
export const ActiveMQ = Activemq;
export const EMQX = Emqx;
export const RabbitMQ = Rabbitmq;
export const ZeroMQ = Zeromq;
